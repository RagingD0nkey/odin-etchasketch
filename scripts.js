let gridSize = 12;

//GRID Initialization when page is first loaded
drawGrid(gridSize);



//GRID Creation
function drawGrid(gridSize) {
    for (let index = 0; index < gridSize*gridSize; index++) {
            const divContainer = document.querySelector(".container");
            let divCard = document.createElement("div");
            divCard.classList.toggle("cards");
            let rowWidth = (1/gridSize)*100;
            divCard.setAttribute("style","width:"+rowWidth+"%;");
            divContainer.appendChild(divCard); 
    }
}

//GRID Deletion
function clearGrid() {
    const divCardsAll = document.querySelectorAll(".cards");
    for(let index=0;index<divCardsAll.length;index++){
        divCardsAll[index].remove();
    }
}


//Color a "card", depending on two checkbox - Rainbow and - Opacity
const divContainer = document.querySelector(".container");
divContainer.addEventListener("mouseover", (e)=>{

    const rainbowCheck = document.querySelector("#rainbow");
    const opacityCheck = document.querySelector("#opacity");

    if(e.target.className==="cards") {

        if (rainbowCheck.checked ===true) {
            e.target.style.backgroundColor="rgb("+rndNumber(256)+" "+rndNumber(256)+" "+rndNumber(256)+")"; //return a RGV value, psuedo-random from 0 to 255
        }
        else {
            e.target.style.backgroundColor="black";
        }

        if (opacityCheck.checked===true){
            e.target.style.opacity -= -0.1; // since opacity is a string = "0.1" it avoids concatenations via +
        }
        else {
            e.target.style.opacity =1;
        }
    }
})


const btnResize = document.querySelector(".resize button");

btnResize.addEventListener("click", () =>{
    let gridSize = Number(prompt("Enter the size of the new grid - between 2 and 100"));
    
    if ((Number.isInteger(gridSize)===true) && (gridSize >= 2) && (gridSize <= 100)) {
        clearGrid();
        drawGrid(gridSize);
    }
    else {
        alert("Input incorrect ! It should be a number between 2 and 100")
    }
    

})


// Random number between 0 and Upper Limit
function rndNumber(ULimit){
    return Math.floor(Math.random() * ULimit);
}