const addSkillButton = document.getElementById("addSkillButton");

// finds the Add Skill button and stores it inside addSkillButton

const skillInput = document.getElementById("skillInput");

// finds the input field and stores it inside skillInput

const skillList = document.getElementById("skillList");

// finds the ul where skills will be displayed

let skills = [];

// array that stores all skill objects

let savedSkills = localStorage.getItem("skills");

// get previously saved skills from localStorage

if (savedSkills) {

    // convert saved string back into array

    skills = JSON.parse(savedSkills);

}

// function used to display all skills present in skills array

function displaySkills() {

    // clears ul before displaying again
    // otherwise duplicate li elements will appear

    skillList.innerHTML = "";

    // loop through every skill object

    for (let skill of skills) {

        const li = document.createElement("li");

        // calculate level from xp

        const level = Math.floor(skill.xp / 100) + 1;

        // calculate progress towards next level

        const progress = skill.xp % 100;

        // display skill name, xp and level

        li.innerHTML =
            `${skill.name}<br>
            XP: ${skill.xp}<br>
            Level: ${level}<br>
            Progress: ${progress}%<br>`;

        // create progress bar container

        const progressContainer =
            document.createElement("div");

        progressContainer.className =
            "progress-container";

        // create progress bar

        const progressBar =
            document.createElement("div");

        progressBar.className =
            "progress-bar";

        progressBar.style.width =
            progress + "%";

        // put bar inside container

        progressContainer.appendChild(progressBar);

        // put container inside li

        li.appendChild(progressContainer);

        // create xp button

        const xpButton =
            document.createElement("button");

        xpButton.textContent =
            "+10 XP";

        // whenever xp button is clicked

        xpButton.addEventListener("click", function () {

            // increase xp by 10

            skill.xp += 10;

            // save updated array in localStorage

            localStorage.setItem(
                "skills",
                JSON.stringify(skills)
            );

            // refresh UI

            displaySkills();

        });

        // put button inside li

        li.appendChild(xpButton);

        // create delete button

        const deleteButton =
            document.createElement("button");

        deleteButton.textContent =
            "Delete";

        // delete skill when button is clicked

        deleteButton.addEventListener(
            "click",
            function () {

                // keep all skills except the clicked one

                skills = skills.filter(function (s) {

                    return s !== skill;

                });

                // save updated array

                localStorage.setItem(
                    "skills",
                    JSON.stringify(skills)
                );

                // refresh UI

                displaySkills();

            }
        );

        // put delete button inside li

        li.appendChild(deleteButton);

        // put li inside ul

        skillList.appendChild(li);

    }
}

// display saved skills when page loads

displaySkills();

addSkillButton.addEventListener("click", function () {

    // remove extra spaces from beginning and end

    const inputSkill =
        skillInput.value.trim();

    // if input is empty do nothing

    if (inputSkill === "") {

        return;

    }

    // check whether a skill with same name already exists
    // comparison is case-insensitive

    const skillExists = skills.some(function (skill) {

        return skill.name.toLowerCase() ===
            inputSkill.toLowerCase();

    });

    if (skillExists) {

        alert("Skill already exists!");

        return;

    }

    // add new skill object into array

    skills.push({

        name: inputSkill,

        xp: 0

    });

    // save updated array

    localStorage.setItem(

        "skills",

        JSON.stringify(skills)

    );

    // refresh displayed list

    displaySkills();

    // clear input field

    skillInput.value = "";

});