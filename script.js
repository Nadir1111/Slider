let images = document.querySelectorAll('.image');
let roundBtns = document.querySelectorAll('.holder_link');
let leftBtn = document.querySelector('.back_link');
let rightBtn = document.querySelector('.forward_link');
let currenIndex = 0;
let showIndex = 0;


for (let i = 0; i < roundBtns.length; i++) {
    roundBtns[i].addEventListener('click', function() {
        for (let j = 0; j < images.length; j++) {
            images[j].classList.add('hidden');
            roundBtns[j].classList.remove('active');
        }
        images[i].classList.remove('hidden');
        roundBtns[i].classList.add('active');
        currenIndex = i;  
    });
}

rightBtn.addEventListener('click', function () {
    if (showIndex < images.length - 1) {
        images[showIndex].classList.add('hidden');
        showIndex++;
        images[showIndex].classList.remove('hidden');
        for (let i = 0; i < roundBtns.length; i++) {
            roundBtns[i].classList.remove('active');
        }
        roundBtns[showIndex].classList.add('active');
    }
});

leftBtn.addEventListener('click', function () {
    if (showIndex > 0) {
        images[showIndex].classList.add('hidden');
        showIndex--;
        images[showIndex].classList.remove('hidden');
        for (let i = 0; i < roundBtns.length; i++) {
            roundBtns[i].classList.remove('active');
        }
        roundBtns[showIndex].classList.add('active');
    }
});

