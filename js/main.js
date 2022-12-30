let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
btn1.addEventListener("click", myFunction);
btn2.addEventListener("click", myFunction1);

function myFunction(){
    let a=document.getElementById("number").value;
    a++;
    document.getElementById("number").value=a;
}
function myFunction1(){
    let a=document.getElementById("number").value;
    a--;
    document.getElementById("number").value=a;
}