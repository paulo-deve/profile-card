const avatar = document.querySelector('.avatar img');
const username = document.querySelector('.personal-info strong');
const userLocation = document.querySelector('.personal-info span');
const followers = document.querySelector('.github-info .followers');
const following = document.querySelector('.github-info .following');
const repositories = document.querySelector('.github-info .git-info .repositories');

async function render(gitHubInfo) {
  avatar.src = gitHubInfo.avatar_url;
  username.innerHTML = gitHubInfo.name;
  userLocation.innerHTML = gitHubInfo.location;
  followers.innerHTML = gitHubInfo.followers;
  following.innerHTML = gitHubInfo.following;
  repositories.innerHTML = gitHubInfo.public_repos;
}


async function getGitHubInfo() {
  const response = await fetch('https://api.github.com/users/paulozy');
  const data = await response.json();
  render(data)
}

getGitHubInfo()