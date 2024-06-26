// JavaScript goes here.
function scrollToNext(nextSectionId) {
    console.log(nextSectionId);
    document.getElementById(nextSectionId).scrollIntoView({ behavior: 'smooth' });
}


let q1 = document.querySelector("#question1-div");
let q2 = document.querySelector("#question2-div");
let q3 = document.querySelector("#question3-div");
let resultsDiv = document.querySelector(".result");

let Button = document.querySelector("#Button");

let flag1 = 0;

//let button1 = document.querySelector("")

Button.addEventListener("click", function(){
    resultsDiv = document.querySelector(".result");
   
    let question1 = q1.value;
    let question2 = q2.value;
    let question3 = q3.value;
    let text = "";
    
    console.log(q1);

    console.log(question1);
    console.log(question2);
    console.log(question3);

    if (question1 === 1 && question2 === 1 && question3 === 1) {
        text = "linux";
        text += "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png'/>";
    } else if (question1 === 1 && question2 === 2 && question3 === 1) {
        text = "linux";
        text += "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png'/>";
    } else if (question1 === 1 && question2 === 2 && question3 === 2) {
       text ="linux";
       text += "<img src='https://yt3.googleusercontent.com/DP2DnSf8hIhdjThIsFyCqktfSgvrLeXfWA0xbPOo8I3n-P2_7c4otmLi6SwbUp1tXcWodn10=s900-c-k-c0x00ffffff-no-rj'/>";
    } else if (question1 === 2 && question2 === 2 && question3 === 2) {
       text = "Microsoft";
       text += "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png'/>";
    } else if (question1 === 2 && question2 === 1 && question3 === 1) {
       text = "Mac OS";
       text += "<img src='https://cdn.pixabay.com/photo/2021/10/20/01/20/mac-os-logo-6724894_1280.png'/>";
    } else  {
       text = "Mac OS";
       text += "<img src='https://cdn.pixabay.com/photo/2021/10/20/01/20/mac-os-logo-6724894_1280.png'/>";
    }

    resultsDiv.innerHTML = text;
    resultsDiv.style.display = "block";
}); 

