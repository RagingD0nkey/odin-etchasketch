let numberCard = 16;

for (let index = 0; index < numberCard*numberCard; index++) {
    const divContainer = document.querySelector(".container");
    let divCard = document.createElement("div");
    divCard.classList.toggle("cards");
    divCard.setAttribute("style","width:"+(1/numberCard)+"%;");
    divContainer.appendChild(divCard); 
}

