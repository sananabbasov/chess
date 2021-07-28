/*
    commit 
    github
    plugin none
    responsive desing (max 768px)
    optimallasdirma


*/
var chessIcon = [
    "<i class='fas fa-chess-rook'></i>",
    "<i class='fas fa-chess-knight'></i>",
    "<i class='fas fa-chess-bishop'></i>",
    "<i class='fas fa-chess-queen'></i>",
    "<i class='fas fa-chess-king'></i>",
    "<i class='fas fa-chess-bishop'></i>",
    "<i class='fas fa-chess-knight'></i>",
    "<i class='fas fa-chess-rook'></i>"
]
var chessIconBlack = [
    "<i class='fas fa-chess-rook' style='color: #16a085'></i>",
    "<i class='fas fa-chess-knight' style='color: #16a085'></i>",
    "<i class='fas fa-chess-bishop' style='color: #16a085'></i>",
    "<i class='fas fa-chess-queen' style='color: #16a085'></i>",
    "<i class='fas fa-chess-king' style='color: #16a085'></i>",
    "<i class='fas fa-chess-bishop' style='color: #16a085'></i>",
    "<i class='fas fa-chess-knight' style='color: #16a085'></i>",
    "<i class='fas fa-chess-rook' style='color: #16a085'></i>"
]
// console.log(chessIcon[0])
var number = [8,7,6,5,4,3,2,1];
var alphabet = ["A","B","C","D","E","F","G","H"];


for (let index = 1; index <= 8; index++) {
    
    for (let j = 1; j <= 8; j++) {
        var x = document.createElement("div");
        const chessDiv = document.getElementById("chess").appendChild(x);

        // if(j<9){
            
        //     x.setAttribute("id",alphabet[j-1] + number[index-1])
        // }
       
        
        if(j<2){
            x.innerHTML += "<span class='chessNumber'>" + number[index]  + "</span>"
        }

        if(index>6 && index < 8){
            x.innerHTML += "<i draggable='true' id='"+ alphabet[j - 1] + number[index - 1] +"' class='fas fa-chess-pawn'></i>"
            
        }
        
        else if(index>7 && index < 9){

            console.log(chessIcon[0])


            // x.innerHTML += "<i draggable='true' id='"+ alphabet[j - 1] + number[index - 1] +"' class='fas fa-chess-queen'></i>"


            x.innerHTML += "<span>&nbsp;</span>"
            x.innerHTML += "<span class='alphabet'>" + alphabet[j-1]  + "</span>"

        }else if(index>1 && index < 3){
            x.innerHTML += "<i id='"+ alphabet[j - 1] + number[index - 1] +"' class='fas fa-chess-pawn' style='color: #16a085'></i>"
        }
        if(index %2 == j%2){
            x.classList.add("box","white")
        }else{
            x.classList.add("box","black")
        }
        document.getElementById("chess").appendChild(x);
        
        
    }
}


var findBox = document.getElementsByClassName("box")
for (let icoPlace = 0; icoPlace < 8; icoPlace++) {
    findBox.innerHTML += chessIcon[icoPlace]
    
}


var boxs = document.getElementsByClassName("box");
boxs.innerHTML = "ad";

for (let index = 0; index < 64; index++) {

    boxs[index].setAttribute("id", index);

   
    // var boxPlace = document.getElementById(".box")
    // boxs.innerHTML += index;
    
}


/* White position */

for (let index = 0; index < 8; index++) {

    var icoPlace = document.getElementById(index+56)
    
    icoPlace.innerHTML += chessIcon[index]
    console.log(chessIcon[index])

    
}



/* Black position */

for (let index = 0; index < 8; index++) {

    var icoPlace = document.getElementById(index)
    
    icoPlace.innerHTML += chessIconBlack[index]
    console.log(chessIcon[index])

    
}




/* Chess postion */
// const fasChess = document.getElementsByClassName("fas");
// for (let index = 0; index < fasChess.length; index++) {
//     fasChess[index].style= "color:red";
    
// }


/* Drag and drop */


var chessIco = document.querySelectorAll(".fas")
var dropArea = document.querySelectorAll(".box")



for (var num of chessIco){
    num.addEventListener("dragstart",function (a) {
        this.style = "color: red"
        a.dataTransfer.setData("numer",this.id)

        console.log(a.dataTransfer.getData("numer"))
    })
    num.addEventListener("dragend",function () {
        this.style = "color: #f0f3f7"
    })
}



for (let i = 0; i < dropArea.length; i++) {
    dropArea[i].addEventListener("dragover",function (e){
    
    e.preventDefault();
})
}

for (let i = 0; i < dropArea.length; i++) {
    dropArea[i].addEventListener("drop", function (b) {

    var boxId = b.dataTransfer.getData("numer")

    var newBox = document.getElementById(boxId)

    this.appendChild(newBox)
})
}
// dropArea.addEventListener("drop", function (b) {

//     var boxId = b.dataTransfer.getData("numer")

//     var newBox = document.getElementById(boxId)

//     this.appendChild(newBox)
// })


