function scrollToBottom() {
    document.body.scrollIntoView(false);
}
function getpos(max,min){
    return Math.random() * (max-min) + min;
}
function createStars(count){
    const container = document.getElementById("stars")
    
    for (let i = 0;i < count; i++){

        const star = document.createElement('div')
        
        star.classList.add('star')
        star.style.top = `${getpos(0,200)}px`
        star.style.right = `${getpos(0,1000)}px`
        container.appendChild(star)

    }
    
    
}



createStars(20)