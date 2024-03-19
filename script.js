const target = document.getElementById("target");
const yes = document.getElementById('yes');
function moveTarget(){
    const maxWidth = 400;
    const maxHeight = 400;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

target.addEventListener('mouseenter', function(){
    moveTarget();
});

yes.addEventListener('click', function(){

    const heading = document.querySelector("h1");
    
    heading.textContent = "Thank You My Love💕💕💕";
    heading.style.marginTop = '40%';
 

    yes.style.display = 'none';
    target.style.display = 'none';
});