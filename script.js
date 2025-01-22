// Variables for selectors
const container = document.querySelector(".container");
const submitBtn = document.querySelector(".submit");
const inputSquares = document.querySelector(".squares_input");

submitBtn.addEventListener("click", () => {

    let desiredSquares = inputSquares.value;

    // clears the container from the divs
    container.innerHTML = "";

    // calculates the width and height of each square
    const squareSize = 100 / desiredSquares;

    // total number of squares
    const totalSquares = desiredSquares * desiredSquares;

    // makes sure that desired squares cannot be less that 1 and more than 100

    if (desiredSquares < 1 || desiredSquares > 100) {
        alert("Please enter a number between 1 and 100");
    }

    // Loop that creates squares based on the input value above
    for (let i = 1; i <= totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = `${squareSize}%`;
        
        // random numbers to the r, g, b variables
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256); 
        let b = Math.floor(Math.random() * 256);

        // ads hover effect so you can paint 
        square.onmouseover = () => {
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
       
        container.appendChild(square);
    }
})