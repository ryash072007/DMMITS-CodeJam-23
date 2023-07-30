let starsColleted = 0;
let quizQuestion = 0;
let correct_answer = 0;
const total_qs = 4;

const quizcontainer = document.getElementById("quiz-container");
const answerElements = Array.from(document.querySelectorAll(".answer"));
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitButton = document.getElementById("submit");

const Qdata = [
    {
        qs: "1.Who is known as the father of Indian Space Program ?",
        a: "Kalpana Chawala",
        b: "Vikram Sarabhai",
        c: "Aryabhatta",
        correct: "b",
    },
    {
        qs: "2.Short form of Indian Space Research Organisation ?",
        a: "ISRO",
        b: "IMF",
        c: "IDRO",
        correct: "a",
    },
    {
        qs: "3.When was ISRO formed ?",
        a: "14 August 1969",
        b: "16 August 1969",
        c: "15 August 1969",
        correct: "c",
    },
    {
        qs: "4.Which satellite was the 1st satellite of India ?",
        a: "Aryabhatta",
        b: "Rohini",
        c: "Chandrayaan 1",
        correct: "a",
    },
    {
        qs: "5.When Mangalyaan (Mars Orbiter Mission) (MOM) was launched ?",
        a: "5th December, 2013",
        b: "5th November, 2013",
        c: "5th January, 2014",
        correct: "b",
    }



];

function scrollToBottom() {
    window.scroll(0, document.body.scrollHeight);
}

function addstar() {
    starsColleted += 1;
}

function deselectAnswers() {

    answerElements.forEach((answer) => {
        answer.checked = false
    })
    return null;
};

function setquestion() {
    deselectAnswers()
    const currentdata = Qdata[quizQuestion]
    questionElement.innerHTML = currentdata.qs;
    a_text.innerHTML = currentdata.a
    b_text.innerHTML = currentdata.b
    c_text.innerHTML = currentdata.c

}

function check_if_selected() {
    let answer = null;
    answerElements.forEach((option) => {

        if (option.checked) {
            answer = option.id;




        }
    })
    return answer;
}

function displayresult() {

    submitButton.style.visibility = "hidden"

    const opts = document.getElementById("bslist")
    opts.style.visibility = "hidden"
    questionElement.innerHTML = "Your score is " + correct_answer


}

function submit() {



    const answer = check_if_selected()


    if (answer) {
        if (answer == Qdata[quizQuestion].correct) {
            correct_answer++
        }
        if (quizQuestion == total_qs) {
            console.log("over")
            displayresult()
            return
        }
        quizQuestion++
        setquestion()
    } else {
        return
    }


}






setquestion()

