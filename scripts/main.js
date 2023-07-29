let starsColleted = 0;

function scrollToBottom() {
    window.scroll(0, document.body.scrollHeight);
}

function addstar(){
    starsColleted += 1;
}



function scrollleft() {
    const container = document.getElementById("slide")

    container.scrollLeft += 500;
       
}
function scrollUp(val) {
    window.scrollBy(0, -val);
  }

function transtion(){
    const container = document.getElementById("slide")
    console.log(container.scrollLeft)
    const title = document.getElementById("title-end")
    const subtitle = document.getElementById("subtitle")


    if (container.scrollLeft > 1500){
        
        if(title.innerHTML == "ISRO"){
            return
        }
        
        title.style.opacity = 0
        title.innerHTML = "ISRO"
        subtitle.innerHTML = "Indian Space Research Organisation"

        setTimeout(function(){
            title.style.opacity = 1;
        },500)

    }else{
        if(title.innerHTML == "INCOSPAR"){
            return
        }
        
        
        title.style.opacity = 0
        title.innerHTML = "INCOSPAR"
        subtitle.innerHTML = "Indian National Committee for Space Research"

        setTimeout(function(){
            title.style.opacity = 1;
        },500)
    }

}
document.addEventListener("DOMContentLoaded", function() {
    const scrollableDiv = document.getElementById("slide");
    scrollableDiv.addEventListener("mouseenter", function() {
        scrollableDiv.addEventListener("scroll", transtion);
      });

     
    });
