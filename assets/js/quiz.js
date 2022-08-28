const questions = [
    {
        prompt: ' What does the J stand for in Homer J Simpson?',
        options: [
            'Jojo',
            'Joseph',
            'Jay',
            'Jesus'
        ],
        answer: 2
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
    },
    {
        prompt: 'What is the name of Hank Scorpio\'s company?',
        options: [
            'Hammocks\'R\'Us',
            'Globex',
            'The Hammock Hut',
            'Put your butt there'
        ],
        answer: 1
    },
    {
        prompt: 'What did Milhouse write on Bart\'s leg cast?',
        options: [
            'See you in the car! Best Wishes Milhouse',
            'Milpool',
            'Everythings coming up Milhouse!',
            'Thirllhouse'
        ],
        answer: 1
    },
    {
        prompt: 'What is Marge\'s natural hair colour?',
        options: [
            'Blue',
            'Blonde',
            'Black',
            'Grey'
        ],
        answer: 3
    },
    {
        prompt: 'THATS IT! BACK TO...?',
        options: [
            'Winnepeg',
            'Springfield',
            'Wisconsin',
            'Shelbyville'
        ],
        answer: 0
    },
    {
        prompt: 'What did Skinner tell Superintendent Chalmers he was doing on his windowsill',
        options: [
            'Watering his plants',
            'Isometric exercise',
            'Watering the aurora borealis',
            'Steaming clams'
        ],
        answer: 1
    },
    {
        prompt: 'What did Skinner tell Superintendent Chalmers he was doing on his windowsill',
        options: [
            'Watering his plants',
            'Isometric exercise',
            'Watering the aurora borealis',
            'Steaming clams'
        ],
        answer: 1
    },
    {
        prompt: 'What weight did Homer have to reach in order to achieve disability for hyper-obesity?',
        options: [
            '250 pounds',
            '300 pounds',
            '500 pounds',
            '450 pounds'
        ],
        answer: 1
    },
    {
        prompt: 'Which inhabitant of the Springfield Retirement Home turns out to be a successful cat - burglar?',
        options: [
            'Abe Simpson',
            'Hans Moleman',
            'Eleanor Abernathy',
            'Mr.Molloy'
        ],
        answer: 3
    },

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





