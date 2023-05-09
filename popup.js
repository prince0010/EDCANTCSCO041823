document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const questionInput = document.getElementById('question');
    const outputElement = document.getElementById('output');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const question = questionInput.value;
      const url = 'https://raw.githubusercontent.com/TheNewKing00/SVRFWEFNQU5TV0VSU0NJU0NPQ1lCRVJPUFM/main/internal_database.json';
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.hasOwnProperty(question)) {
            const answer = data[question];
            outputElement.textContent = answer;
          } else {
            let questionSliced = question.slice(0, 10);
            outputElement.textContent = 'NO ANSWER FOUND FOR: ' + questionSliced + '...' + "make sure you have copied the question CORRECTLY and EXACTLY!";
          }
        })
        .catch(error => console.error(error));
    });
  });
  