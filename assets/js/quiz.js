const questions = [
    {
        prompt: 'How long did it take to film the Jimminy Jillickers scene in the Radioactive Man movie?',
        options: [
            'Nine hours',
            'Seven hours',
            'Eight hours',
            'Two days'
        ],
        answer: 1
    },
    {
        prompt: 'Who voiced Jessica Lovejoy?',
        options: [
            'Sara Gilbert',
            'Winona Ryder',
            'Meryl Streep',
            'Kim Kardashian'
        ],
        answer: 2
    }
]
const mainElement = document.querySelector('main')

const clear = () => {
    mainElement.innerHTML = "";
}

let points =0 
const  addPoint=() => {
    points++
    console.log(points)
}

const addQuestion = (question) => {
    const h2 = document.createElement("h2")
    const newContent = document.createTextNode(question.prompt)
    h2.appendChild(newContent)
    mainElement.appendChild(h2)
    const ol = document.createElement('ol')

    for (let index = 0; index < question.options.length; index++) {
        const li = document.createElement('li')
        const text = document.createTextNode(question.options[index])
        li.appendChild(text)
        li.addEventListener('click', () =>{

            if (index === question.answer) {
                addPoint()
            }
            nextQuestion()
        })
        ol.appendChild(li)
        console.log(question.options[index],  index === question.answer)
    
    }

    mainElement.appendChild(ol)
}

let activeQuestion = 0

const displayActiveQuestion = () => {
    clear()
    // addQuestion(questions[activeQuestion])
    if (activeQuestion > (questions.length - 1)) {
        alert('GAME OVER ' + points)
    } else {
        addQuestion(questions[activeQuestion])
    }
}

const nextQuestion = (event) => {
    activeQuestion++
    displayActiveQuestion()
}

const startButton = document.querySelector('#start-game')

startButton.addEventListener('click', displayActiveQuestion)





