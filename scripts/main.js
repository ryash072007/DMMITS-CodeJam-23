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
        star.appendChild(img)
        star.style.top = `${getpos(0,document.body.scrollHeight - 10)}px`
        star.style.left = `${getpos(0,document.body.clientWidth - 10)}px`
        container.appendChild(star)

    }
    
    
}



createStars(500)