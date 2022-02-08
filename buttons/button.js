

const btnShowHide = document.querySelector("#btn-show-hide")
const floatBtn = document.querySelector(".float-btn")

console.log(btnShowHide);
console.log(floatBtn)

function btnDisplayHandler(){
    if(floatBtn.style.display === "none"){
        floatBtn.style.display= "block"
    }else{
        floatBtn.style.display="none"
    }
}

btnShowHide.addEventListener("click",btnDisplayHandler)
