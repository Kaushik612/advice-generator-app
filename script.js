const adviceId = document.getElementById("advice__id");
const adviceContent = document.getElementById("advice__content");

const generateBtn = document.getElementById("dice");

window.onload = getAdvice();

generateBtn.addEventListener('click', function(){
    getAdvice();
});

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then(response =>  response.json())
    .then((data)=> data.slip)
    .then((data)=> {
        adviceId.textContent = data.id;
        adviceContent.textContent = data.advice;
    })
    .catch((error)=> {
        alert(`Error in response: ${error.message}`);
    });

}