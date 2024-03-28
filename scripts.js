let numberCard = 42;

for (let index = 0; index < numberCard*numberCard; index++) {
    const divContainer = document.querySelector(".container");
    let divCard = document.createElement("div");
    divCard.classList.toggle("cards");
    let rowWidth = (1/numberCard)*100;
    divCard.setAttribute("style","width:"+rowWidth+"%;");
    divContainer.appendChild(divCard); 
}

const divContainer = document.querySelector(".container");

divContainer.addEventListener("mouseover", (e)=>{
    e.target.style.backgroundColor="yellow";
})
