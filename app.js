function isTouching(a, b){
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    )
}

//get the avatar
//get the coin
const avatar = document.querySelectorAll('img')[0];
const coin = document.querySelectorAll('img')[1];

const init = () => {

    const maxWidth = window.innerWidth;
    const maxHeigth = window.innerHeight;
    const coinOffset = coin.width;

    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        } else if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        } else if(e.key ==='ArrowRight' || e.key === 'Right'){
            avatar.style.transform = 'scale(1,1)';
            moveHorizon(avatar, 50);
        } else if(e.key ==='ArrowLeft' || e.key === 'Left'){
            avatar.style.transform = 'scale(-1,1)';
            moveHorizon(avatar, -50);
        }
        if(isTouching(avatar,coin)) moveCoin(maxWidth, maxHeigth, coinOffset);
    });
}

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

const moveHorizon = (element, amount) => {
    const currLeft = extractPos(element.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = (width, height, offset) => {
    const x = Math.floor(Math.random() * (width - offset));
    // const y = ?
    const y = Math.floor(Math.random() * (height - offset));
    coin.style.top = `${y}px`;
    // coin.style. ?? = ??
    coin.style.left = `${x}px`;
}

init();
