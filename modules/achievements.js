// achievements module

// check achievements of one skill

function getSkillAchievements(skill) {

    let badges = [];

    // first xp earned

    if (skill.xp >= 10) {
        badges.push("🎯 Beginner");
    }

    // level 2

    if (skill.xp >= 100) {
        badges.push("🥈 Level 2");
    }

    // level 5

    if (skill.xp >= 400) {
        badges.push("🥇 Expert");
    }

    // level 10

    if (skill.xp >= 900) {
        badges.push("👑 Master");
    }

    return badges;

}

// total badges

function getBadgeCount(skills) {

    let count = 0;

    for (let skill of skills) {
        count += getSkillAchievements(skill).length;
    }

    return count;

}

// highest achievement

function getTopBadge(skill) {

    const badges = getSkillAchievements(skill);

    if (badges.length === 0) {
        return "No Badge";
    }

    return badges[badges.length - 1];

}