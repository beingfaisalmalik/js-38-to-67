function Function1()
{
    alert("THANKS FOR PURCHASING THIS PHONE")
}


function SomeDeleteRowFunction() {
  
    var td = event.target.parentNode; 
    var tr = td.parentNode; 
    tr.parentNode.removeChild(tr);
}
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

const addButton = document.getElementById("box-1");

const countWrapper = document.getElementById("count");
addButton.addEventListener('click', () => {
  let count = parseInt(countWrapper.innerText, 10);
  countWrapper.innerText = count + 1;
})

const decreaseButton = document.getElementById("box-3");

decreaseButton.addEventListener('click', () => {
  let count = parseInt(countWrapper.innerText, 10);
  countWrapper.innerText = count - 1;
})

const refreshButton = document.getElementById("box-2");

refreshButton.addEventListener('click', ()=> {
  countWrapper.innerText = 0;
})
 
