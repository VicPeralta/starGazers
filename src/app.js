import First from './assets/first.png';
import Second from './assets/second.png';
import Third from './assets/third.png';
import NoPlace from './assets/noplace.png';
import { getStarGazersForUserRepo, getReposForUser } from './gitHubDataProvider.js';

class App {
  scoreList = [];

  reposList = [];
  // const URL_REPO = 'https://api.github.com/repos/VicPeralta/leaderboard/stargazers';
  // const URL_REPO = 'https://api.github.com/repos/awaisanwar544/git-leaderboard/stargazers';
  //                https://github.com/awaisanwar544/git-leaderboard

  async getDataFromProvider(user, repo) {
    this.scoreList = await getStarGazersForUserRepo(user, repo);
  }

  static showMessage(message) {
    const element = document.getElementById('message');
    element.textContent = message;
    element.classList.remove('hidden');
  }

  static hideMessage() {
    document.getElementById('message').classList.add('hidden');
  }

  async updateData() {
    App.showMessage('Updating data...');
    if (this.reposList.length === 0) {
      await this.updateRepoList();
    }
    const repoName = document.getElementById('repos').value;
    const gitHubUser = document.getElementById('user');
    this.getDataFromProvider(gitHubUser.value, repoName).then(() => {
      App.hideMessage();
      this.updateList();
    });
  }

  async FillRepoList() {
    const list = document.getElementById('repos');
    list.innerHTML = '';
    let innerHTML = '';
    this.reposList.forEach((repo) => {
      innerHTML += `<option value="${repo.name}">${repo.name}</option>`;
    });
    list.innerHTML = innerHTML;
  }

  async updateRepoList() {
    const gitHubUser = document.getElementById('user');
    this.reposList = await getReposForUser(gitHubUser.value);
    this.taskReposFilled = this.FillRepoList();
  }

  static getUserCard(user, imageToUse) {
    const divCard = document.createElement('div');
    divCard.classList.add('padding-10', 'flex', 'round-border-light', 'align-center', 'space-around', 'clickable', 'score-row');
    divCard.setAttribute('data-profile', user.profile);
    divCard.innerHTML = `
      <div class='flex-1 justify-center'>
        <img class='imageMedal'src=${imageToUse} alt="" width="50" height="50" />
      </div>
      <div class='flex-2'>
        <p>${user.user}</p>
        <p>Points: ${user.score}</p>
      </div>
      <div class='flex-1'>
        <img src='${user.photo}' class='circular-border-dark' alt="" width="50" height="50"/>
      </div>
    `;
    divCard.addEventListener('click', (e) => {
      window.open(e.currentTarget.dataset.profile, '_blank');
    });
    return divCard;
  }

  updateList() {
    const scoresContainer = document.getElementById('score-container');
    // Removes all user cards elements
    while (scoresContainer.firstChild) {
      scoresContainer.removeChild(scoresContainer.firstChild);
    }
    let position = 1;
    let lastScore = 0;
    let index = 0;
    this.scoreList.forEach((task) => {
      let imageToUse = '';
      if (index === 0) position = 1;
      else if (lastScore > task.score) position += 1;
      if (position === 1) imageToUse = First;
      else if (position === 2) imageToUse = Second;
      else if (position === 3) imageToUse = Third;
      else imageToUse = NoPlace;
      scoresContainer.appendChild(App.getUserCard(task, imageToUse));
      lastScore = task.score;
      index += 1;
    });
  }

  addListeners() {
    document.getElementById('repos').addEventListener('change', () => {
      this.updateData();
    });
    document.getElementById('update-btn').addEventListener('click', async () => {
      const user = document.getElementById('user');
      if (!user.checkValidity()) {
        user.reportValidity();
        return;
      }
      await this.updateRepoList();
      this.updateData();
    });
  }
}

export default App;
