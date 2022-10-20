const base = document.querySelector('.tableBody');

const retrieve = (item) => {
  for (let i = 0; i < item.result.length; i++) {
    const p = document.createElement('p');
    p.innerHTML = `${item.result[i].user} ${item.result[i].score}`;
    p.setAttribute('class','scoresData')
    base.appendChild(p);
  }
};

const myFunction = async () => {
   await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1001/scores/')
  .then((response) => response.json())
  .then((json) => retrieve(json))
  .catch((err) => console.log(err));
  
  }
  myFunction();

document.getElementById('refreshButton').addEventListener('click', () => {
  
  while (base.hasChildNodes()) {
    base.removeChild(base.firstChild);
  }

  myFunction();


});

