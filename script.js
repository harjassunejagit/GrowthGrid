const addSkillButton = document.getElementById("addSkillButton");

// finds the Add Skill button and stores it inside addSkillButton

const skillInput = document.getElementById("skillInput");

// finds the input field and stores it inside skillInput

const skillList = document.getElementById("skillList");

// finds the ul where skills will be displayed

const topSkill = document.getElementById("topSkill");

let skills = [];

// array that stores all skill objects

let savedSkills = localStorage.getItem("skills");

// get previously saved skills from localStorage

if (savedSkills) {

    // convert saved string back into array

    skills = JSON.parse(savedSkills);

}

// reusable function to save skills

function saveSkills() {

    localStorage.setItem(

        // localstorage is browser memory that stores data even after browser is closed

        "skills",

        // localstorage cannot store array so convert to string

        JSON.stringify(skills)

    );

}

// updates top skill section

function updateTopSkill() {

    if (skills.length === 0) {

        topSkill.textContent = "";

        return;

    }

    let bestSkill = skills[0];

    for (let skill of skills) {

        if (skill.xp > bestSkill.xp) {

            bestSkill = skill;

        }

    }

    topSkill.innerHTML =

        `🏆 Top Skill<br>

        ${bestSkill.name}

        (${bestSkill.xp} XP)`;

}

// function used to display all skills present in skills array

function displaySkills() {

    // clears ul before displaying again
    // otherwise duplicate li elements will appear

    skillList.innerHTML = "";

    // sort skills according to xp

    skills.sort(function (a, b) {

        return b.xp - a.xp;

    });

    // update top skill

    updateTopSkill();

    // loop through every skill object

    for (let i = 0; i < skills.length; i++) {

        const skill = skills[i];

        const li = document.createElement("li");

        // creates li but not visible yet

        // calculate level from xp

        const level = Math.floor(skill.xp / 100) + 1;

        // calculate progress towards next level

        const progress = skill.xp % 100;

        // display text

        li.innerHTML = `

        <h2>${skill.name}</h2>

        <p>XP: ${skill.xp}</p>

        <p>Level: ${level}</p>

        <p>Progress: ${progress}%</p>

        `;

        // create progress bar container

        const progressContainer = document.createElement("div");

        progressContainer.className = "progress-container";

        // create progress bar

        const progressBar = document.createElement("div");

        progressBar.className = "progress-bar";

        // adds css class

        // set width dynamically

        progressBar.style.width = progress + "%";

        // put bar inside container

        progressContainer.appendChild(progressBar);

        // put container inside li

        li.appendChild(progressContainer);

        // create button container

        const buttonContainer = document.createElement("div");

        buttonContainer.className = "skill-buttons";

        // create xp button

        const xpButton = document.createElement("button");

        xpButton.textContent = "+10 XP";

        // whenever xp button is clicked

        xpButton.addEventListener(

            "click",

            function () {

                // increase xp of clicked skill

                skills[i].xp += 10;

                // save data

                saveSkills();

                // refresh UI

                displaySkills();

            }

        );

        // create edit button

        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        // edit skill

        editButton.addEventListener(

            "click",

            function () {

                const newName = prompt(

                    "Enter new skill"

                );

                // if user presses cancel

                if (!newName) {

                    return;

                }

                const cleanName = newName.trim();

                // if input empty

                if (cleanName === "") {

                    return;

                }

                // duplicate check

                const alreadyExists =

                    skills.some(function (s) {

                        return (

                            s.name.toLowerCase()

                            ===

                            cleanName.toLowerCase()

                            &&

                            s !== skill

                        );

                    });

                if (alreadyExists) {

                    alert(

                        "Skill already exists"

                    );

                    return;

                }

                // format name

                skill.name =

                    cleanName.charAt(0).toUpperCase()

                    +

                    cleanName.slice(1).toLowerCase();

                saveSkills();

                displaySkills();

            }

        );

        // create delete button

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        // delete skill

        deleteButton.addEventListener(

            "click",

            function () {

                // remove only clicked skill

                skills.splice(i, 1);

                saveSkills();

                displaySkills();

            }

        );

        // put buttons inside container

        buttonContainer.appendChild(xpButton);

        // before div was made but empty

        buttonContainer.appendChild(editButton);

        buttonContainer.appendChild(deleteButton);

        // put container inside li

        li.appendChild(buttonContainer);

        // put li inside ul

        skillList.appendChild(li);

    }

}

// display saved skills when page loads

displaySkills();

addSkillButton.addEventListener(

    "click",

    function () {

        // remove extra spaces

        const inputSkill = skillInput.value.trim();

        // if empty stop

        if (inputSkill === "") {

            return;

        }

        // check duplicates
        // case insensitive

        const skillExists = skills.some(

            function (skill) {

                return (

                    skill.name.toLowerCase()

                    ===

                    inputSkill.toLowerCase()

                );

            }

        );

        if (skillExists) {

            alert(

                "Skill already exists!"

            );

            return;

        }

        // format name

        const formattedName =

            inputSkill.charAt(0).toUpperCase()

            +

            inputSkill.slice(1).toLowerCase();

        //.slice(1) means start from index 1 and take everything after

        // add object

        skills.push({

            name: formattedName,

            xp: 0

        });

        // save data

        saveSkills();

        // refresh UI

        displaySkills();

        // clear input

        skillInput.value = "";

    }

);