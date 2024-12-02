async function fetchGitHubProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}

async function fetchGitHubRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    return data;
}

function displayProfile(profile) {
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-avatar').src = profile.avatar_url;
    document.getElementById('profile-bio').textContent = profile.bio;
    document.getElementById('profile-repos').textContent = `Public Repos: ${profile.public_repos}`;
    document.getElementById('profile-followers').textContent = `Followers: ${profile.followers}`;
    document.getElementById('profile-following').textContent = `Following: ${profile.following}`;
    document.getElementById('profile-location').textContent = `Location: ${profile.location}`;
    document.getElementById('profile-blog').textContent = `Blog: ${profile.blog}`;
    document.getElementById('profile-company').textContent = `Company: ${profile.company}`;
    document.getElementById('profile-twitter').textContent = `Twitter: ${profile.twitter_username}`;
}

function displayRepos(repos) {
    const reposContainer = document.getElementById('repos-container');
    repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.className = 'repo';
        repoElement.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description}</p>
            <a href="${repo.html_url}" target="_blank">View Repo</a>
        `;
        reposContainer.appendChild(repoElement);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const username = '5Stenosi'; // Sostituisci '5Stenosi' con il tuo username GitHub
    const profile = await fetchGitHubProfile(username);
    displayProfile(profile);
    const repos = await fetchGitHubRepos(username);
    displayRepos(repos);
});
