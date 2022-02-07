alert("here")
const btnHide = document.querySelector("#btn-hide")
const btnShow = document.querySelector("#btn-show")
const floatBtn = document.querySelector(".float-btn")


function btnShowHandler()
{
    console.log("abcd");
    floatBtn.style.display="visible"
}

function btnHideHandler(){
    floatBtn.style.display="none"
}
btnShow.addEventListener("click",btnShowHandler)
btnHide.addEventListener("click",btnHideHandler)