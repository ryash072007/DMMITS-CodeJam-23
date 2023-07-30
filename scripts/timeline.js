const containers = document.getElementsByClassName("container")

const containerARR = Array.from(containers)

containerARR.forEach((element,index) =>{
    if ((index) % 2 === 0) {
        element.classList.add('left');
    }else{
        element.classList.add('right')
    }

})