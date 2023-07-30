let starsColleted = 0;
let quizQuestion = 0;
let correct_answer = 0;
const total_qs = 3;

const quizcontainer = document.getElementById("quiz-container");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitButton = document.getElementById("submit");

const Qdata = [
    {
        qs:"What is one",
        a:"2",
        b:"3",
        c:"1",
        correct:"c",
    },
    {
        qs:"what is two",
        a:"1",
        b:"2",
        c:"3",
        correct:"b",
    },
    {
        qs:"what is three",
        a:"3",
        b:"2",
        c:"1",
        correct:"a",
    }
];

function scrollToBottom() {
    window.scroll(0, document.body.scrollHeight);
}

function addstar() {
    starsColleted += 1;
}



function scrollleft() {
    const container = document.getElementById("slide")

    container.scrollLeft += 500;

}
function scrollUp(val) {
    const div = document.getElementById('transition-gal-bts');
    div.scrollIntoView({behavior:'smooth'})
    
    
      
    
}

function transtion() {
    const container = document.getElementById("slide")
    const title = document.getElementById("title-end")
    const subtitle = document.getElementById("subtitle")


    if (container.scrollLeft > 1500) {

        if (title.innerHTML == "ISRO") {
            return
        }

        title.style.opacity = 0
        title.innerHTML = "ISRO"
        subtitle.innerHTML = "Indian Space Research Organisation"

        setTimeout(function () {
            title.style.opacity = 1;
        }, 500)

    } else {
        if (title.innerHTML == "INCOSPAR") {
            return
        }


        title.style.opacity = 0
        title.innerHTML = "INCOSPAR"
        subtitle.innerHTML = "Indian National Committee for Space Research"

        setTimeout(function () {
            title.style.opacity = 1;
        }, 500)
    }

}
document.addEventListener("DOMContentLoaded", function () {
    const scrollableDiv = document.getElementById("slide");
    scrollableDiv.addEventListener("mouseenter", function () {
        scrollableDiv.addEventListener("scroll", transtion);
    });


});

function deselectAnswers(){
    
    answerElements.forEach((answer) => {
        answer.checked = false
    })
    return null;
};

function setquestion(){
    deselectAnswers()
    const currentdata = Qdata[quizQuestion]
    questionElement.innerHTML = currentdata.qs;
    a_text.innerHTML = currentdata.a
    b_text.innerHTML = currentdata.b
    c_text.innerHTML = currentdata.c

}

function check_if_selected(){
    let answer;
    answerElements.forEach((option) => {
        
        if (option.checked){
             answer = option.id;
             return answer;
             
             

        }
    })
    return answer;
}

function displayresult(){
    answerElements.forEach((option) => {
        option.style.display = "none"
    
    })
}

function submit(){

    if (quizQuestion == total_qs){
        console.log("over")
        displayresult()
        return
    }else{
        const answer = check_if_selected()

        if (answer){
            if (answer == Qdata[quizQuestion].correct){
                correct_answer++
            }
            quizQuestion++
            setquestion()
        }else{
            return
        }


    } 
    
    
      
    
}

setquestion()

