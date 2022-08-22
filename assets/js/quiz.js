const questions = [
    {
        question: 'How long did it take to film the Jimminy Jillickers scene in the Radioactive Man movie?',
        options: [
            'Nine hours',
            'Seven hours', 
            'Eight hours', 
            'Two days'
        ],
        answer: 1
    },
    {
        question: 'Who voiced Jessica Lovejoy?',
        options: [
            'Sara Gilbert',
            'Winona Ryder', 
            'Meryl Streep', 
            'Kim Kardashian'
        ],
        answer: 2
    }
]
const mainData = document.querySelector('main')

const clear = () => {
    mainData.innerHTML = "";
}
const question = (question, answers) => {
    const h2 = document.createElement("h2")
    const newContent = document.createTextNode(question)
    h2.appendChild(newContent)
    mainData.appendChild(h2)
    const ol = document.createElement('ol')

    for (const answer of answers) {
        const li = document.createElement('li')
        const text = document.createTextNode(answer)
        li.appendChild(text)
        li.addEventListener('click', nextQuestion)
        ol.appendChild(li)
    }

    mainData.appendChild(ol)
}

let activeQuestion=0
const nextQuestion=(event) => {
    activeQuestion++
    clear()
    question(questions[activeQuestion].question,questions[activeQuestion].options)
}
const startButton = document.querySelector('#start-game')
console.log(startButton)
startButton.addEventListener('click', (event) => {
    clear()
    question(questions[activeQuestion].question,questions[activeQuestion].options)
})



