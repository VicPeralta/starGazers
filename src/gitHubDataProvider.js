/*
  Return JSON information about the startGazers
  or an empty array
*/
async function getStargazers(user, repo) {
  try {
    const urlRepo = `https://api.github.com/repos/${user}/${repo}/stargazers`;
    const data = await fetch(urlRepo).then((data) => data.json());
    return data;
  } catch {
    return [];
  }
}
/*
  Returns an object containing relevant information about a single user
  Name, Followers, Repos, Profile and Photo
*/
async function getUserInfo(userUrl) {
  try {
    const completeInfoUser = await fetch(userUrl).then((data) => data.json());
    return {
      score: completeInfoUser.followers,
      user: completeInfoUser.name,
      repos: completeInfoUser.public_repos,
      profile: completeInfoUser.html_url,
      photo: completeInfoUser.avatar_url,
    };
  } catch {
    return {};
  }
}
/*
  Returns an array containing StarGazers data:
  Name, Followers, Repos, Profile and Photo
*/
async function getStarGazersForUserRepo(user, repo) {
  let starGazers = await getStargazers(user, repo);
  const promisesArray = [];
  for (let i = 0; i < starGazers.length; i += 1) {
    promisesArray.push(getUserInfo(starGazers[i].url));
  }
  starGazers = await Promise.all(promisesArray);
  starGazers.sort((first, second) => {
    if (first.score > second.score) return -1;
    if (first.score < second.score) return 1;
    return 0;
  });
  return starGazers;
}

async function getReposForUser(user) {
  try {
    const urlRepo = `https://api.github.com/users/${user}/repos`;
    const data = await fetch(urlRepo).then((data) => data.json());
    return data.filter((element) => element.stargazers_count > 0)
      .sort((first, second) => {
        if (first.stargazers_count > second.stargazers_count) return -1;
        if (first.stargazers_count < second.stargazers_count) return 1;
        return 0;
      });
  } catch {
    return [];
  }
}

export { getStarGazersForUserRepo, getReposForUser };