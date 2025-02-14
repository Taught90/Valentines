const cover = document.querySelector('.cover');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const letter = document.querySelector('.letter');
const emoji1 = document.querySelector('.emoji-1');
const emoji2 = document.querySelector('.emoji-2');
const emoji3 = document.querySelector('.emoji-3');
const emoji4 = document.querySelector('.emoji-4');
const audio = document.querySelector('.audio');

open.addEventListener('click', () => {
    cover.classList.toggle('opened')
    letter.classList.toggle('see')
    emoji1.classList.toggle('pop')
    emoji2.classList.toggle('pop')
    emoji3.classList.toggle('pop')
    emoji4.classList.toggle('pop')

    if(open.innerHTML === 'Close the envelope'){
        open.innerHTML = 'Open the envelope'
    }
    else{
        open.innerHTML = 'Close the envelope'
    }

    if(audio.paused){
        audio.play()
    }
    else{
        audio.pause()
        audio.currentTime = 0;
    }
})
