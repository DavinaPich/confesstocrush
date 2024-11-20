const btnNo = document.getElementById("btnNo");
btnNo.onclick = ()=>{
    const x = window.innerWidth;
    const y = window.innerHeight;
    const randomX = Math.floor(Math.random() * (x-100));
    const randomY = Math.floor(Math.random() * (y-50));

    btnNo.style.left = randomX+"px";
    btnNo.style.top = randomY+"px"; 
}

const btnYes = document.getElementById("btnYes");

btnYes.addEventListener("click", ()=>{
    window.location.href = 'https://youtu.be/u7XjPmN-tHw?si=uWj5U6teJ1QYcd4F';
})