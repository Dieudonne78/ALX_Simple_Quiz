function checkAnswer(){
  let correctAnswer = '4'
  const divElement = document.querySelector('div');
  let userAnswer = divElement.querySelector('input[type="radio"]:checked')
  let feedback = document.getElementById('feedback')
  if (userAnswer.value === correctAnswer){
    feedback.textContent = 'correct! well done'
  } 
  else{
   feedback.textContent = "That's incorrect. Try again!"
  }
}

let submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click',checkAnswer)









