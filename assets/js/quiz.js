const questions = [
    {
        prompt: ' What does the J stand for in Homer J Simpson?',
        options: [
            'Jojo',
            'Joseph',
            'Jay',
            'Jesus'
        ],
        answer: 2,
        image:'assets/images/homer-j-simpson.png'
    },
    {
        prompt: 'Who voiced Jessica Lovejoy?',
        options: [
            'Sara Gilbert',
            'Winona Ryder',
            'Meryl Streep',
            'Kim Kardashian'
        ],
        answer: 2,
        image:'assets/images/jessica-lovejoy.png'
    },
    {
        prompt: 'What is the name of Hank Scorpio\'s company?',
        options: [
            'Hammocks\'R\'Us',
            'Globex',
            'The Hammock Hut',
            'Put your butt there'
        ],
        answer: 1,
        image:'assets/images/hank-scorpio.jpg'
    },
    {
        prompt: 'What did Milhouse write on Bart\'s leg cast?',
        options: [
            'See you in the car! Best Wishes Milhouse',
            'Milpool',
            'Everythings coming up Milhouse!',
            'Thirllhouse'
        ],
        answer: 1,
        image:'assets/images/milhouse-signing-cast.png'
    },
    {
        prompt: 'What is Marge\'s natural hair colour?',
        options: [
            'Blue',
            'Blonde',
            'Black',
            'Grey'
        ],
        answer: 3,
        image:'assets/images/marge-hair.jpg'
    },
    {
        prompt: 'THATS IT! BACK TO...?',
        options: [
            'Winnepeg',
            'Springfield',
            'Wisconsin',
            'Shelbyville'
        ],
        answer: 0,
        image:'assets/images/back-to.jpg'
    },
    {
        prompt: 'What did Skinner tell Superintendent Chalmers he was doing on his windowsill',
        options: [
            'Watering his plants',
            'Isometric exercise',
            'Watering the aurora borealis',
            'Steaming clams'
        ],
        answer: 1,
        image:'assets/images/skinner-window.jpg'
    },
    {
        prompt: 'What weight did Homer have to reach in order to achieve disability for hyper-obesity?',
        options: [
            '250 pounds',
            '300 pounds',
            '500 pounds',
            '450 pounds'
        ],
        answer: 1,
        image:'assets/images/homer-muumuu.jpg'
    },
    {
        prompt: 'Which inhabitant of the Springfield Retirement Home turns out to be a successful cat - burglar?',
        options: [
            'Abe Simpson',
            'Hans Moleman',
            'Eleanor Abernathy',
            'Mr.Molloy'
        ],
        answer: 3,
        image:'assets/images/sneakers-for-sneaking.jpg'
    },

]
const mainElement = document.querySelector('main')

const clear = () => {
    mainElement.innerHTML = "";
}

let points =0 
const  addPoint=() => {
    points++
}

let activeQuestion = 0

const displayQuestion = (question) => {
    const counter = document.createElement('p')
    const counterText = document.createTextNode('Question ' + (activeQuestion + 1) + ' / ' + questions.length)
    counter.appendChild(counterText)
    mainElement.appendChild(counter) 

    const container = document.createElement('div')
    container.classList.add('image')

    const image = document.createElement("img")
    image.src=question.image

    container.appendChild(image)
    mainElement.appendChild(container)

    const h2 = document.createElement("h2")
    const prompt = document.createTextNode(question.prompt)

    h2.appendChild(prompt)
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
    }

    mainElement.appendChild(ol)
}

const displayActiveQuestion = () => {
    clear()
    displayQuestion(questions[activeQuestion])
}

const getResultQuote = (points) => {
    if (points < 4) {
        return 'less than 4'
    } else if (points < 7) {
        return 'less than 7 but greater than 4'
    } else {
        return 'greater than 7'
    }
}


const displayResult = () => {
    clear()
    const container = document.createElement('div')
    container.classList.add('results')
    
    const heading = document.createElement('h1')
    const headingText = document.createTextNode('GAME OVER')
    heading.appendChild(headingText)

    // const image = document.createElement('img')

    const quote = document.createElement('p')
    quote.classList.add('quote')
    const quoteText = document.createTextNode(getResultQuote(points))
    quote.appendChild(quoteText)

    const score = document.createElement('p')
    score.classList.add('score')
    const scoreText = document.createTextNode(points + '/' + questions.length)
    score.appendChild(scoreText)

    const button = document.createElement('button')
    const buttonText = document.createTextNode('Restart')
    button.appendChild(buttonText)
    button.addEventListener('click', () => {
        activeQuestion = 0
        points= 0
        displayActiveQuestion()
        
    
    })

    container.appendChild(heading)
    container.appendChild(quote)
    container.appendChild(score)
    container.appendChild(button)

    mainElement.appendChild(container)
    
     

}

const nextQuestion = () => {
    activeQuestion++
    
    if (activeQuestion > (questions.length - 1)) {
        displayResult()
    } else {
        displayActiveQuestion()
    }
}

const startButton = document.querySelector('#start-game')

startButton.addEventListener('click', displayActiveQuestion)





