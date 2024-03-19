const no = document.getElementById("no");
const yes = document.getElementById('yes');
function moveTarget(){
    const maxWidth = 230;
    const maxHeight = 230;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    yes.style.left = randomX + 'px';
    yes.style.top = randomY + 'px';
}

yes.addEventListener('touchstart', function(){
    moveTarget();
});

no.addEventListener('click', function(){
const heading = document.querySelector("h1");

    heading.textContent = " 😒😒😒😒";
    heading.style.marginTop = '55%';
    

    no.style.display = 'none';
    yes.style.display = 'none';
});