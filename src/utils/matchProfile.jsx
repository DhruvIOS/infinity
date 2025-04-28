// utils/matchProfile.js
// utils/matchProfile.js
const matchProfiles = (userPreferences, profiles) => {
  return profiles.filter((profile) => {
    let matchCount = 0;

    if (userPreferences.age && profile.age && parseInt(userPreferences.age) === parseInt(profile.age)) {
      matchCount++;
    }

    if (userPreferences.gender && profile.gender && userPreferences.gender === profile.gender) {
      matchCount++;
    }

    if (userPreferences.race && profile.race && userPreferences.race === profile.race) {
      matchCount++;
    }

    if (userPreferences.height && profile.height && userPreferences.height === profile.height) {
      matchCount++;
    }

    if (userPreferences.eyeColor && profile.eyeColor && userPreferences.eyeColor === profile.eyeColor) {
      matchCount++;
    }

    if (userPreferences.lookingFor && profile.lookingFor && userPreferences.lookingFor === profile.lookingFor) {
      matchCount++;
    }

    if (
      Array.isArray(userPreferences.hobbies) &&
      Array.isArray(profile.hobbies) &&
      profile.hobbies.some((hobby) => userPreferences.hobbies.includes(hobby))
    ) {
      matchCount++;
    }

    console.log(`Checked ${profile.name} — ${matchCount} matching fields`);
    return matchCount >= 1;
  });
};

export default matchProfiles;



