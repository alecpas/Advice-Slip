const button = document.getElementById("button");
const advice = document.getElementById("advicejs");
const adviceId = document.getElementById("adviceId");

function renderAdvice(id,text) {
    advice.textContent = text;
    adviceId.textContent = id;

}

async function getAdvice () {
    const url = "https://api.adviceslip.com/advice";
    let adviceOption = ""; 
    let adviceId = "";


    try {
        const response = await fetch(url);
        const data = await response.json();

        adviceOption = `"${data.slip.advice}"`;
        adviceId = `ADVICE #${data.slip.id}`;

    } catch (e){
        console.log(e); 
    }

    renderAdvice(adviceId,adviceOption);
}

button.addEventListener("click", getAdvice);