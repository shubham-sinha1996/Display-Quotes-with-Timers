
let timeOutId;
let loopThroughTimeOutId;

export const typeWriter = (str, sel, typeDelay = 10) => {
    clearTimeout(timeOutId);
    sel.innerHTML = '';
    let breakChar = str.split('').map(e => e.replace(/\n/g,'<br>'));
    let count = 0;
    return function timer(){
        sel.innerHTML += breakChar[count];
        count++;
        count < breakChar.length && (timeOutId = setTimeout(timer, typeDelay));
    }; 
};

export const loopThrough = (arr, sel, fn, hold = 5000, typeDelay) => {
    let count = 0;
    return {
        play : function timer(){
            fn(arr[count], sel, typeDelay)();
            count++;
            count >= arr.length && (count = 0);
            loopThroughTimeOutId = setTimeout(timer, hold);
        },
        stop : function(){
            clearTimeout(loopThroughTimeOutId);
        },
    };
};

