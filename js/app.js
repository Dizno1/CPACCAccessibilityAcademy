const data = window.CPACC_COURSE_DATA;

const STORAGE_KEY = "cpacc_preparation_course_v1";
const defaultState = { view:"home", domainIndex:0, lessonIndex:0, partIndex:0, completedParts:{}, completedLessons:[], notes:"", markers:{}, reinforceIndex:0, practiceIndex:0, challengeIndex:0, libraryReturn:{domainIndex:0, lessonIndex:0, partIndex:0} };
let state = loadState();
let noteTimer = null;

function loadState(){ try{return Object.assign({}, defaultState, JSON.parse(localStorage.getItem(STORAGE_KEY))||{});}catch(e){return Object.assign({}, defaultState);} }
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function setStatus(t){ document.getElementById("status").textContent=t; }
function currentDomain(){ return data.domains[state.domainIndex]; }
function currentLesson(){ return currentDomain().lessons[state.lessonIndex]; }
function currentPart(){ return currentLesson().parts[state.partIndex]; }
function lessonKey(d=state.domainIndex,l=state.lessonIndex){ return "d"+d+"l"+l; }
function partList(d=state.domainIndex,l=state.lessonIndex){ return state.completedParts[lessonKey(d,l)] || []; }
function lessonDone(d=state.domainIndex,l=state.lessonIndex){ return state.completedLessons.includes(lessonKey(d,l)); }
function activitiesUnlocked(){ return lessonDone(); }
function allPartsDone(){ return partList().length === currentLesson().parts.length; }
function viewId(v){ return "view"+v.charAt(0).toUpperCase()+v.slice(1); }
function headingId(v){ return {home:"homeHeading",library:"libraryHeading",article:"articleHeading",lesson:"lessonHeading",reinforce:"reinforceHeading",practice:"practiceHeading",challenge:"challengeHeading",progress:"progressHeading"}[v]; }
function rememberLibraryReturn(){ state.libraryReturn = { domainIndex:state.domainIndex, lessonIndex:state.lessonIndex, partIndex:state.partIndex }; }
function restoreLibraryReturn(){ if(state.libraryReturn){ state.domainIndex=state.libraryReturn.domainIndex; state.lessonIndex=state.libraryReturn.lessonIndex; state.partIndex=state.libraryReturn.partIndex; } saveState(); showView("lesson"); }
function percent(done,total){ return total ? Math.round((done/total)*100) : 0; }
function totalLessons(){ return data.domains.reduce((sum,d)=>sum+d.lessons.length,0); }
function completedLessonsInDomain(di){ return data.domains[di].lessons.filter((l,li)=>lessonDone(di,li)).length; }
function pageTitleForView(v){
    const brand="Open Door Design";
    const course="CPACC Preparation Course";

    if(v==="home")
        return course+" - "+brand;

    if(v==="library")
        return "Course Resource Library - "+course+" - "+brand;

    if(v==="article"){
        const heading=document.getElementById("articleHeading");
        const topic=heading && heading.textContent.trim() ? heading.textContent.trim() : "Resource Article";
        return topic+" - "+course+" - "+brand;
    }

    if(v==="lesson")
        return currentDomain().title+" - "+currentLesson().title+" - "+course+" - "+brand;

    if(v==="reinforce")
        return "Reinforce - "+currentLesson().title+" - "+course+" - "+brand;

    if(v==="practice")
        return "Practice - "+currentLesson().title+" - "+course+" - "+brand;

    if(v==="challenge")
        return "Challenge - "+currentLesson().title+" - "+course+" - "+brand;

    if(v==="progress")
        return "Progress And Notes - "+course+" - "+brand;

    return course+" - "+brand;
}
function updateDocumentTitle(v){
    document.title=pageTitleForView(v || state.view || "home");
    const h=document.getElementById("pageHeading");
    if(h)h.textContent="CPACC Preparation Course";
}
function showView(v){
    if(v==="library") rememberLibraryReturn();
    if(["reinforce","practice","challenge"].includes(v) && !activitiesUnlocked()){ setStatus(v+" is unavailable until the current lesson is complete."); v="lesson"; }
    state.view=v; saveState();

    document.querySelectorAll("main > section").forEach(s=>{
        s.classList.add("hidden");
        s.setAttribute("aria-hidden","true");
    });

    const activeSection=document.getElementById(viewId(v));
    if(activeSection){
        activeSection.classList.remove("hidden");
        activeSection.removeAttribute("aria-hidden");
    }

    updateAll();
    updateDocumentTitle(v);
    if(v==="lesson") setTimeout(focusPartHeading,0); else { const h=document.getElementById(headingId(v)); if(h) setTimeout(()=>h.focus(),0); }
}
function focusPartHeading(){ const h=document.getElementById("currentPartHeading"); if(h) h.focus(); }
function escapeHtml(t){ return String(t).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch])); }
function textToHtml(t){ return t.split("\\n\\n").map(p=>"<p>"+escapeHtml(p)+"</p>").join(""); }
function updateAll(){ updateCourseList(); updateLibrary(data.articles); updateLesson(); updateProgress(); updateLibraryContext(); clampQuestionIndexes(); renderQuestion("reinforceQuestion","reinforceAnswer",activeQuestions("reinforce"),state.reinforceIndex); renderQuestion("practiceQuestion","practiceAnswer",activeQuestions("practice"),state.practiceIndex); renderQuestion("challengeQuestion","challengeAnswer",activeQuestions("challenge"),state.challengeIndex); }
function updateCourseList(){
    const wrap=document.getElementById("courseList"); 
    wrap.innerHTML="";

    data.domains.forEach((domain,di)=>{
        const domainSection=document.createElement("section");
        const headingId="course-domain-heading-"+String(di+1);
        domainSection.setAttribute("aria-labelledby", headingId);
        domainSection.className="card";

        const h=document.createElement("h4"); 
        h.id=headingId;
        h.textContent=domain.title; 
        domainSection.appendChild(h);

        const p=document.createElement("p"); 
        p.textContent=domain.description; 
        domainSection.appendChild(p);

        const ol=document.createElement("ol");

        domain.lessons.forEach((lesson,li)=>{
            const item=document.createElement("li"); 
            const btn=document.createElement("button"); 
            const lessonId="course-domain-"+String(di+1)+"-lesson-"+String(li+1);
            const lessonTitle=document.createElement("span");

            btn.type="button";
            lessonTitle.id=lessonId;
            lessonTitle.textContent=lesson.title;
            btn.appendChild(lessonTitle);

            if(li===0){
                btn.setAttribute("aria-labelledby", headingId+" "+lessonId);
            }

            btn.addEventListener("click",()=>{
                state.domainIndex=di; 
                state.lessonIndex=li; 
                state.partIndex=0; 
                saveState(); 
                showView("lesson");
            });

            item.appendChild(btn); 
            if(lessonDone(di,li)){ 
                const done=document.createElement("span"); 
                done.textContent=" Completed"; 
                item.appendChild(done); 
            }
            ol.appendChild(item);
        });

        domainSection.appendChild(ol);
        wrap.appendChild(domainSection);
    });
}

function updateLesson(){
    const lesson=currentLesson(), part=currentPart();
    document.getElementById("lessonHeading").textContent="Domain "+(state.domainIndex+1)+": "+currentDomain().title+". Lesson "+(state.lessonIndex+1)+": "+lesson.title;
    document.getElementById("lessonPosition").textContent="Domain "+(state.domainIndex+1)+" of "+data.domains.length+". Lesson "+(state.lessonIndex+1)+" of "+currentDomain().lessons.length+". Part "+(state.partIndex+1)+" of "+lesson.parts.length+". "+part.title+".";
    const coursePct=percent(state.completedLessons.length,totalLessons());
    const domainPct=percent(completedLessonsInDomain(state.domainIndex),currentDomain().lessons.length);
    const positionPct=percent(state.partIndex+1,lesson.parts.length);
    const completionPct=lessonDone()?100:percent(partList().length,lesson.parts.length);
    document.getElementById("progressMeters").innerHTML="<p>Course Progress: "+coursePct+" percent complete.</p><p>Domain Progress: "+domainPct+" percent complete.</p><p>Lesson Position: "+positionPct+" percent through this lesson.</p><p>Lesson Completion: "+completionPct+" percent complete.</p>";
    document.getElementById("partContent").innerHTML="<h3 id='currentPartHeading' tabindex='-1'>"+escapeHtml(part.title)+"</h3>"+textToHtml(part.body)+libraryLinks(part.body);
    const plist=partList(); const donePart=plist.includes(state.partIndex);
    const finalPart=state.partIndex===lesson.parts.length-1;
    const finalLesson=state.domainIndex===data.domains.length-1 && state.lessonIndex===currentDomain().lessons.length-1;
    document.getElementById("previousPart").disabled=state.partIndex===0;
    document.getElementById("nextPart").disabled=finalPart;
    document.getElementById("markPartComplete").disabled=donePart;
    document.getElementById("markLessonComplete").disabled=lessonDone() || !finalPart;
    ["inlineReinforce","inlinePractice","inlineChallenge","topReinforce","topPractice","topChallenge"].forEach(id=>{const b=document.getElementById(id); if(b)b.disabled=!activitiesUnlocked();});
    document.getElementById("continueNextLesson").disabled=finalLesson || (!lessonDone() && !finalPart);
    document.getElementById("continueNextLesson").textContent=lessonDone()?"Continue To Next Lesson":"Complete Lesson And Continue";
    document.getElementById("notes").value=state.notes||"";
}
function libraryLinks(text){
    const topics=currentLesson().libraryTopics || [];
    const matches=topics.map(t=>data.articles.find(a=>a.title===t)).filter(Boolean).slice(0,6);
    if(!matches.length)return "";
    return "<h4>Related Reference Topics</h4><p class='help-text'>Optional reference material for this lesson part.</p><ul>"+matches.map(a=>"<li><a href='#' data-article='"+a.slug+"'>"+escapeHtml(a.title)+"</a></li>").join("")+"</ul>";
}
function updateLibrary(items){ const r=document.getElementById("libraryResults"); r.innerHTML=""; items.forEach(a=>{const li=document.createElement("li"); const b=document.createElement("button"); b.type="button"; b.textContent=a.title; b.setAttribute("data-article",a.slug); li.appendChild(b); r.appendChild(li);}); }
function updateLibraryContext(){
    const p=document.getElementById("libraryContext"); if(!p)return;
    const lr=state.libraryReturn || {domainIndex:state.domainIndex,lessonIndex:state.lessonIndex,partIndex:state.partIndex};
    const d=data.domains[lr.domainIndex], l=d.lessons[lr.lessonIndex], part=l.parts[lr.partIndex];
    p.textContent="Return location: "+d.title+", "+l.title+", "+part.title+".";
}
function openArticle(slug){
    rememberLibraryReturn();
    const a=data.articles.find(x=>x.slug===slug); if(!a)return;
    state.view="article"; saveState();
    document.querySelectorAll("main > section").forEach(s=>s.classList.add("hidden"));
    document.getElementById("viewArticle").classList.remove("hidden");
    document.getElementById("articleHeading").textContent=a.title;
    let html="";
    if(a.category){ html+="<p><strong>Category:</strong> "+escapeHtml(a.category)+".</p>"; }
    html+="<h3>Article Explanation</h3>"+textToHtml(a.body);
    if(a.relatedTopics && a.relatedTopics.length){ html+="<h3>Related Topics</h3><ul class='resourceList'>"+a.relatedTopics.map(function(x){ const match=data.articles.find(function(item){return item.title===x;}); return match?"<li><a href='#' data-article='"+escapeHtml(match.slug)+"'>"+escapeHtml(x)+"</a></li>":"<li>"+escapeHtml(x)+"</li>"; }).join("")+"</ul>"; }
    if(a.relatedLessons && a.relatedLessons.length){ html+="<h3>Related Lessons</h3><ul class='resourceList'>"+a.relatedLessons.map(x=>"<li>"+escapeHtml(x)+"</li>").join("")+"</ul>"; }
    if(a.sourceDocs && a.sourceDocs.length){ html+="<h3>Project Source Documents</h3><ul class='resourceList'>"+a.sourceDocs.map(x=>"<li>"+escapeHtml(x)+"</li>").join("")+"</ul>"; }
    if(a.externalResources && a.externalResources.length){ html+="<h3>External Resources</h3><ul class='resourceList'>"+a.externalResources.map(x=>"<li><a href='"+escapeHtml(x.url)+"' target='_blank' rel='noopener noreferrer'>"+escapeHtml(x.label)+" opens in a new tab</a></li>").join("")+"</ul>"; }
    document.getElementById("articleContent").innerHTML=html;
    updateDocumentTitle("article");
    setTimeout(()=>document.getElementById("articleHeading").focus(),0); setStatus(a.title+" article loaded.");
}
function updateProgress(){ const coursePct=percent(state.completedLessons.length,totalLessons()); const domainPct=percent(completedLessonsInDomain(state.domainIndex),currentDomain().lessons.length); const lessonPct=percent(partList().length,currentLesson().parts.length); document.getElementById("progressContent").innerHTML="<p>Current domain: "+escapeHtml(currentDomain().title)+".</p><p>Current lesson: "+escapeHtml(currentLesson().title)+".</p><p>Current lesson parts complete: "+partList().length+" of "+currentLesson().parts.length+".</p><p>Lessons complete: "+state.completedLessons.length+" of "+totalLessons()+".</p><p>Course Progress: "+coursePct+" percent.</p><p>Domain Progress: "+domainPct+" percent.</p><p>Lesson Progress: "+lessonPct+" percent.</p><p>Notes status: "+(state.notes.trim()?"Notes saved.":"No notes saved.")+"</p>"; }
function hashTextForQuestionShuffle(text){
    let hash=2166136261;
    const value=String(text);
    for(let i=0;i<value.length;i++){
        hash^=value.charCodeAt(i);
        hash+=(hash<<1)+(hash<<4)+(hash<<7)+(hash<<8)+(hash<<24);
    }
    return hash>>>0;
}
function seededRandom(seed){
    let t=seed+0x6D2B79F5;
    t=Math.imul(t^(t>>>15),t|1);
    t^=t+Math.imul(t^(t>>>7),t|61);
    return ((t^(t>>>14))>>>0)/4294967296;
}
function shuffledChoicesForQuestion(q,name,index){
    const choices=q[1].map((text,originalIndex)=>({text,originalIndex}));
    let seed=hashTextForQuestionShuffle(name+"|"+String(index)+"|"+q[0]);
    for(let i=choices.length-1;i>0;i--){
        seed=hashTextForQuestionShuffle(String(seed)+"|"+String(i));
        const j=Math.floor(seededRandom(seed)*(i+1));
        const temp=choices[i];
        choices[i]=choices[j];
        choices[j]=temp;
    }
    return choices;
}
function buildQuestionBank(){
    if(data.lessonQuestionBank)return data.lessonQuestionBank;
    const bank=[];
    data.domains.forEach((domain,di)=>{
        domain.lessons.forEach((lesson,li)=>{
            const allTitles=data.domains.flatMap(d=>d.lessons.map(l=>l.title)).filter(t=>t!==lesson.title);
            const firstPart=lesson.parts && lesson.parts[0] ? lesson.parts[0].title : "Lesson Overview";
            const topics=(lesson.libraryTopics||[]).slice(0,3);
            const distractors=allTitles.slice((di+li)%Math.max(1,allTitles.length)).concat(allTitles).slice(0,3);
            bank.push({domainIndex:di,lessonIndex:li,q:["Which lesson is most directly focused on this topic: "+lesson.title+"?", [lesson.title].concat(distractors).slice(0,4), 0]});
            if(topics.length){
                const wrong=data.articles.map(a=>a.title).filter(t=>!topics.includes(t)).slice((di*7+li*3)%40).slice(0,3);
                bank.push({domainIndex:di,lessonIndex:li,q:["Which resource topic best connects to "+lesson.title+"?", [topics[0]].concat(wrong).slice(0,4), 0]});
            }
            bank.push({domainIndex:di,lessonIndex:li,q:["In "+lesson.title+", which section should you review first for the main concept?", [firstPart,"Unrelated vendor documentation","A future domain only","The reset progress screen"], 0]});
        });
    });
    data.lessonQuestionBank=bank;
    return bank;
}
function activeQuestions(mode){
    const bank=buildQuestionBank();
    let items=bank.filter(item=>{
        if(mode==="reinforce")return item.domainIndex===state.domainIndex && item.lessonIndex===state.lessonIndex;
        if(mode==="practice")return item.domainIndex===state.domainIndex && item.lessonIndex<=state.lessonIndex;
        if(mode==="challenge")return item.domainIndex<state.domainIndex || (item.domainIndex===state.domainIndex && item.lessonIndex<=state.lessonIndex);
        return false;
    }).map(item=>item.q);
    return items.length?items:[["No questions are available for this lesson yet.",["Return to the lesson","Reset progress","Open notes","Skip the course"],0]];
}
function clampQuestionIndexes(){
    state.reinforceIndex=state.reinforceIndex%activeQuestions("reinforce").length;
    state.practiceIndex=state.practiceIndex%activeQuestions("practice").length;
    state.challengeIndex=state.challengeIndex%activeQuestions("challenge").length;
}

function renderQuestion(id,name,qs,index){ 
    const c=document.getElementById(id); 
    const q=qs[index]; 
    const safeName=name.replace(/[^a-zA-Z0-9_-]/g,"");
    const questionId=safeName+"QuestionText";
    const choices=shuffledChoicesForQuestion(q,name,index);
    let html="";
    html+="<h3 id='"+questionId+"'>Question "+(index+1)+" of "+qs.length+"</h3>";
    html+="<p>"+escapeHtml(q[0])+"</p>";
    html+="<form><fieldset aria-labelledby='"+questionId+"'>";
    html+="<legend class='hidden'>Question "+(index+1)+" of "+qs.length+". "+escapeHtml(q[0])+"</legend>";
    choices.forEach((choice,i)=>{
        const choiceId=safeName+"Choice"+String(i);
        const labelId=choiceId+"Label";
        html+="<label id='"+labelId+"' for='"+choiceId+"' class='choice'>";
        html+="<input id='"+choiceId+"' type='radio' name='"+name+"' value='"+choice.originalIndex+"'";
        if(i===0){ html+=" aria-describedby='"+questionId+"'"; }
        html+="> "+String.fromCharCode(65+i)+". "+escapeHtml(choice.text)+"</label>";
    }); 
    html+="</fieldset></form>"; 
    c.innerHTML=html; 
}
function focusQuestionHeading(name){
    const safeName=name.replace(/[^a-zA-Z0-9_-]/g,"");
    const h=document.getElementById(safeName+"QuestionText");
    if(h){
        h.setAttribute("tabindex","-1");
        setTimeout(()=>h.focus(),0);
    }
}
function checkQuestion(name,qs,index,feedbackId){ const checked=document.querySelector("input[name='"+name+"']:checked"); const f=document.getElementById(feedbackId); if(!checked){f.textContent="Select an answer before checking."; setStatus("Select an answer before checking."); return;} if(Number(checked.value)===qs[index][2]){f.textContent="Correct."; setStatus("Correct answer selected.");}else{f.textContent="Not quite. Review the lesson and try again."; setStatus("Answer checked. Review feedback.");}}
function markCurrentLessonComplete(){
    const key=lessonKey();
    state.completedParts[key]=currentLesson().parts.map((p,i)=>i);
    if(!state.completedLessons.includes(key))state.completedLessons.push(key);
}
function goToNextLesson(){
    if(state.lessonIndex<currentDomain().lessons.length-1){
        state.lessonIndex++;
        state.partIndex=0;
    } else if(state.domainIndex<data.domains.length-1){
        state.domainIndex++;
        state.lessonIndex=0;
        state.partIndex=0;
    }
}
function insertMarker(manual=false){
    const key=lessonKey()+"p"+state.partIndex;
    const marker="["+currentDomain().title+" - "+currentLesson().title+" - "+currentPart().title+"]";
    const n=document.getElementById("notes");
    const currentValue=n.value || "";
    if(!manual && state.markers[key])return;
    if(!manual && currentValue.includes(marker)){
        state.markers[key]=true;
        return;
    }
    const prefix=currentValue.trim()?"\n\n":"";
    n.value=currentValue.replace(/\s+$/g,"")+prefix+marker+"\n";
    state.markers[key]=true;
    state.notes=n.value;
    saveState();
    setStatus("Note marker inserted for "+currentPart().title+".");
}

document.addEventListener("click",e=>{
    const art=e.target.closest("[data-article]"); if(art){e.preventDefault(); openArticle(art.getAttribute("data-article")); return;}
    const view=e.target.closest("[data-view]"); if(view){showView(view.getAttribute("data-view")); return;}
    if(e.target.id==="previousPart" && state.partIndex>0){state.partIndex--; saveState(); updateAll(); setTimeout(focusPartHeading,0);}
    if(e.target.id==="nextPart" && state.partIndex<currentLesson().parts.length-1){state.partIndex++; saveState(); updateAll(); setTimeout(focusPartHeading,0);}
    if(e.target.id==="markPartComplete"){const key=lessonKey(); if(!state.completedParts[key])state.completedParts[key]=[]; if(!state.completedParts[key].includes(state.partIndex)){state.completedParts[key].push(state.partIndex); state.completedParts[key].sort((a,b)=>a-b); saveState(); updateAll(); const n=document.getElementById("nextPart"), c=document.getElementById("markLessonComplete"); setTimeout(()=>!n.disabled?n.focus():c.focus(),0); setStatus(n.disabled?"Final part marked complete. Use Mark Lesson Complete, or Complete Lesson And Continue.":"Part marked complete. Use Next Part to continue.");}}
    if(e.target.id==="markLessonComplete"){markCurrentLessonComplete(); saveState(); updateAll(); setTimeout(()=>document.getElementById("inlineReinforce").focus(),0); setStatus("Lesson complete. Reinforce, Practice, Challenge, and Continue To Next Lesson are now available.");}
    if(e.target.id==="continueNextLesson" || e.target.id==="continueFromReinforce" || e.target.id==="continueFromPractice" || e.target.id==="continueFromChallenge"){ if(!lessonDone())markCurrentLessonComplete(); goToNextLesson(); saveState(); showView("lesson"); setStatus("Next lesson loaded.");}
    if(e.target.id==="insertNoteMarkerNearNotes"){insertMarker(true); setTimeout(()=>{const n=document.getElementById('notes'); if(n){n.focus(); const l=n.value.length; if(n.setSelectionRange)n.setSelectionRange(l,l);}},0); const notes=document.getElementById("notes"); notes.focus(); const len=notes.value.length; notes.setSelectionRange(len,len);}
    if(e.target.id==="returnToLessonFromLibrary" || e.target.id==="returnToLessonFromArticle"){restoreLibraryReturn();}
    if(e.target.id==="libraryHomeButton"){updateLibrary(data.articles); document.getElementById("librarySearch").value=""; setStatus("Library home loaded.");}
    if(e.target.id==="searchLibrary"){const q=document.getElementById("librarySearch").value.toLowerCase().trim(); updateLibrary(data.articles.filter(a=>JSON.stringify(a).toLowerCase().includes(q))); setStatus("Search results loaded.");}
    if(e.target.id==="showAllArticles"){updateLibrary(data.articles); setStatus("All articles loaded.");}
    if(e.target.id==="checkReinforce")checkQuestion("reinforceAnswer",activeQuestions("reinforce"),state.reinforceIndex,"reinforceFeedback");
    if(e.target.id==="nextReinforce"){state.reinforceIndex=(state.reinforceIndex+1)%activeQuestions("reinforce").length; saveState(); updateAll(); document.getElementById("reinforceFeedback").textContent=""; focusQuestionHeading("reinforceAnswer");}
    if(e.target.id==="checkPractice")checkQuestion("practiceAnswer",activeQuestions("practice"),state.practiceIndex,"practiceFeedback");
    if(e.target.id==="nextPractice"){state.practiceIndex=(state.practiceIndex+1)%activeQuestions("practice").length; saveState(); updateAll(); document.getElementById("practiceFeedback").textContent=""; focusQuestionHeading("practiceAnswer");}
    if(e.target.id==="checkChallenge")checkQuestion("challengeAnswer",activeQuestions("challenge"),state.challengeIndex,"challengeFeedback");
    if(e.target.id==="nextChallenge"){state.challengeIndex=(state.challengeIndex+1)%activeQuestions("challenge").length; saveState(); updateAll(); document.getElementById("challengeFeedback").textContent=""; focusQuestionHeading("challengeAnswer");}
    if(e.target.id==="exportNotes"){const blob=new Blob([state.notes||"No notes saved."],{type:"text/plain;charset=utf-8"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download="CPACCPreparationCourseNotes.txt"; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); setStatus("Notes exported.");}
    if(e.target.id==="resetProgress"){state=JSON.parse(JSON.stringify(defaultState)); saveState(); showView("home"); setStatus("Progress reset.");}
});
document.addEventListener("change",e=>{if(e.target.matches("input[type='radio']")){const l=e.target.closest("label"); setStatus("Selected "+(l?l.textContent.trim():"answer option")+".");}});
document.getElementById("notes").addEventListener("input",()=>{insertMarker(false); clearTimeout(noteTimer); noteTimer=setTimeout(()=>{state.notes=document.getElementById("notes").value; saveState();},300);});
updateAll(); showView(state.view||"home");
