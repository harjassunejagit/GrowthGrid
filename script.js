
const addSkillButton=document.getElementById("addSkillButton")
//finds that input box and stores it inside const addSkillButton
const skillInput=document.getElementById("skillInput");
//finds the input field and stores it inside const skillInput
const skillList=document.getElementById("skillList");
let skills = [];

let savedSkills = localStorage.getItem("skills");

if (savedSkills) {
    skills = JSON.parse(savedSkills);
}


for (let skill of skills) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillList.appendChild(li);
}

addSkillButton.addEventListener("click",function(){
    if (skillInput.value===""){
        return;//if the input field is empty then we return and do nothing.
    }
    if(skills.includes(skillInput.value)){
    alert("Skill already exists!");
    return;
    }
    
    skills.push(skillInput.value);
    localStorage.setItem(
    "skills",
    JSON.stringify(skills)
);


    const li=document.createElement("li");//creates a new list item <li> and stores it in memory.
    li.textContent=skillInput.value;//puts text inside it . if input is java it becomes<li>java</li>
    skillList.appendChild(li);//here we have used child because ul was parent element see in index file.
    skillInput.value="";//after adding the skill to the list we want to clear the input field so we set it to empty string.
});
// addeventlistner means listen for an event,whenever button is clicked the skill inputed is stored in the console log.