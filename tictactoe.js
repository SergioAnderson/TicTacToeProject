let restartButton = document.querySelector("#Button");
let squares = document.querySelectorAll("td");

function changeMarker(){
    if (this.textContent === "") {
        this.textContent = "X"
    } else if (this.textContent === "X") {
        this.textContent = "O"
    } else {
        this.textContent = ""
    }
}

function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
}

restartButton.addEventListener("click", clearBoard)

for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", changeMarker)
}