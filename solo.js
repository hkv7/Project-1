let home =document.getElementById("home-el")
let guest = document.getElementById("guest-el")
let count =0
let count1=0
function first(){
    count+=1;
    home.innerText =count
}
function second(){
    count+=2;
    home.innerText =count
}
function third()
{
    count+=3;
    home.innerText = count
}
function first1(){
    count1+=1;
    guest.innerText =count1
}
function second2(){
    count1+=2;
    guest.innerText =count1
}
function third3()
{
    count1+=3;
    guest.innerText = count1
}