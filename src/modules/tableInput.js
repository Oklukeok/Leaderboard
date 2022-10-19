document.getElementById('submitButton').addEventListener('click', () => {
  const input1 = document.querySelector('#input1');
  const input2 = document.querySelector('#input2');

  const data = {
    user: input1.value,
    score: input2.value,
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1000/scores/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
});

// KISS !

// location.reload();