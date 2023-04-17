document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const questionInput = document.getElementById('question');
    const outputElement = document.getElementById('output');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const question = questionInput.value;
      const url = 'https://raw.githubusercontent.com/TheNewKing00/itexmallansjsondb/main/internal_database.json';
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty(question)) {
            const answer = data[question];
            outputElement.textContent = answer;
          } else {
            outputElement.textContent = 'NO ANSWER FOUND FOR: ' + question;
          }
        })
        .catch(error => console.error(error));
    });
  });
  