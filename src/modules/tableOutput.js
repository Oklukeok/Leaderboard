const base = document.querySelector('.tableBody');

const retrieve = (item) => {
  for (let i = 0; i < item.result.length; i++) {
    const p = document.createElement('p');
    p.innerHTML = `${item.result[i].user} ${item.result[i].score}`;
    base.appendChild(p);
  }
};

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1000/scores/')
  .then((response) => response.json())
  .then((json) => retrieve(json))
  .catch((err) => console.log(err));

document.getElementById('refreshButton').addEventListener('click', () => {
  location.reload();
});