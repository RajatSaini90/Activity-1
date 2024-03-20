const no = document.getElementById("no");
const yes = document.getElementById('yes');
const gameBase = document.getElementById('game-base');

function moveTarget(){
    const maxWidth = 400;
    const maxHeight = 400;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    yes.style.left = randomX + 'px';
    yes.style.top = randomY + 'px';
}

yes.addEventListener('touchstart', function(){
    moveTarget();
});

yes.addEventListener('mouseenter', function(){
    moveTarget();
});

no.addEventListener('click', function(){
const heading = document.querySelector("h1");

    heading.textContent = " 😒😒😒😒";
    heading.style.marginTop = '50%';
    

    no.style.display = 'none';
    yes.style.display = 'none';
});

