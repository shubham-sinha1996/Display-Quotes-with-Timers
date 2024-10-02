import { quotes } from './quotes';
import { typeWriter,loopThrough } from './timer';

const main = document.querySelector('#quotemaster > h1');
const playBtn = document.querySelector('#playBtn');
let isPlaying = true;

const playButton = loopThrough(quotes,main,typeWriter,4000,20);
playButton.play();

playBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    isPlaying ? playButton.stop() : playButton.play();
    isPlaying = !isPlaying;
});