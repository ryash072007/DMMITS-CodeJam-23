const SIZE = 20

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
        const tempsize = getpos(8,17)
        const img = new Image(tempsize,tempsize)
        img.src = "images/star.png"
        
        star.classList.add('star')
        img.style.rotate = `${getpos(360,0)}deg`
        star.appendChild(img)
        star.style.top = `${getpos(document.body.scrollHeight - 10, 0)}px`
        star.style.left = `${getpos(document.body.clientWidth - 10, 0)}px`
        container.appendChild(star)

    }
    
    
}

createStars(500)