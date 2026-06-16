// analytics module

// calculate total xp
function getTotalXP(skills) {

    let total = 0;

    for (let skill of skills) {
        total += skill.xp;
    }

    return total;

}

// calculate average xp
function getAverageXP(skills) {

    if (skills.length === 0) {
        return 0;
    }

    return Math.floor(
        getTotalXP(skills) / skills.length
    );

}

// highest xp skill
function getHighestSkill(skills) {

    if (skills.length === 0) {
        return null;
    }

    let highest = skills[0];

    for (let skill of skills) {

        if (skill.xp > highest.xp) {
            highest = skill;
        }

    }

    return highest;

}

// total skills
function getSkillCount(skills) {

    return skills.length;

}

// generate analytics object
function getAnalytics(skills) {

    return {

        totalSkills:
        getSkillCount(skills),

        totalXP:
        getTotalXP(skills),

        averageXP:
        getAverageXP(skills),

        highestSkill:
        getHighestSkill(skills)

    };

}