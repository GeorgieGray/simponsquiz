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
        image: 'assets/images/homer-j-simpson.jpg',
        alt: 'Homer Simpson in front of mural with his mniddle name hidden behind a bush'
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
        image: 'assets/images/jessica-lovejoy.jpg',
        alt: "Jessica Lovejoy holding a baton"
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
        image: 'assets/images/hank-scorpio.jpg',
        alt: "Hank Scorpio firing a flamethrower and laughing"
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
        image: 'assets/images/milhouse-signing-cast.jpg',
        alt: "Milhouse signing the cast of Bart Simpson's broken leg"
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
        image: 'assets/images/marge-hair.jpg',
        alt: "Apu Nahasapeemapetilan pointing at Marge Simpson's hair with a walking stick"
    },
    {
        prompt: 'THATS IT! BACK TO...?',
        options: [
            'Winnepeg!',
            'Springfield!',
            'Wisconsin!',
            'Shelbyville!'
        ],
        answer: 0,
        image: 'assets/images/back-to.jpg',
        alt: "Angry man driving a car"
    },
    {
        prompt: 'What did Skinner tell Superintendent Chalmers he was doing on his windowsill?',
        options: [
            'Watering his plants',
            'Isometric exercise',
            'Watching the Aurora Borealis',
            'Steaming clams'
        ],
        answer: 1,
        image: 'assets/images/skinner-window.jpg',
        alt: 'Armin Tamzarian stretching his leg on a windown in his "mother\'s" kitchen'
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
        image: 'assets/images/homer-muumuu.jpg',
        alt: "Homer Simpson wearing a dress"
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
        image: 'assets/images/sneakers-for-sneaking.jpg',
        alt: "Abe Simpson lying on the floor staring at a pair of sneakers"
    },
    {
        prompt: 'How much does it cost to call the Corey hotline?',
        options: [
            '$4.95 per minute',
            '$3 per hour',
            'It\'s free',
            'They pay you to call'
        ],
        answer: 0,
        image: 'assets/images/corey-hotline.jpg',
        alt: "Lisa Simpson on the phone while smiling"
    }
]
const quiz = document.querySelector('#quiz')
const home = document.querySelector('#home')

const clear = () => {
    quiz.innerHTML = "";
}

let points = 0
const addPoint = () => {
    points++
}

let activeQuestion = 0




const displayHeading = (text) => {
    const heading = document.createElement('h1')
    const headingText = document.createTextNode(text)
    heading.appendChild(headingText)
    heading.classList.add('question-heading')
    quiz.appendChild(heading)

}

const displayImage = (src, alt) => {
    const container = document.createElement('div')
    container.classList.add('image')

    const aspectRatio = document.createElement('div')
    aspectRatio.classList.add('image-aspect-ratio')

    const image = document.createElement("img")
    image.src = src
    image.alt = alt

    aspectRatio.appendChild(image)
    
    container.appendChild(aspectRatio)
    quiz.appendChild(container)
}


const displayPrompt=(text) => {
    const textContainer = document.createElement('div')
    textContainer.classList.add('quiz-body')


    const h2 = document.createElement("h2")
    const prompt = document.createTextNode(text)

    h2.appendChild(prompt)
    textContainer.appendChild(h2)
    quiz.appendChild(textContainer)
}

const displayQuestion = (question) => {

    displayHeading('Question ' + (activeQuestion + 1) + ' / ' + questions.length)
    displayImage(question.image, question.alt)
    displayPrompt(question.prompt)

    
    const textContainer = document.createElement('div')
    textContainer.classList.add('quiz-body')

    const ol = document.createElement('ol')

    for (let index = 0; index < question.options.length; index++) {
        const li = document.createElement('li')
        const text = document.createTextNode(question.options[index])

        li.appendChild(text)
        li.classList.add('button')
        li.addEventListener('click', () => {
            document.activeElement.blur()
            if (index === question.answer) {
                addPoint()
            }

            nextQuestion()
        })

        ol.appendChild(li)
    }

    textContainer.appendChild(ol)
    quiz.appendChild(textContainer)
}

const displayActiveQuestion = () => {
    clear()
    displayQuestion(questions[activeQuestion])
}

const getResultQuote = (points) => {
    if (points < 4) {
        return 'You\'ve tried nothing and you\'re all out of ideas!'
    } else if (points < 7) {
        return 'Umm... You probably should ignore that.'
    } else {
        return 'I gotta tell ya, this is pretty terrific!'
    }
}

const getResultImage = (points) => {
    if (points < 4) {
        return 'assets/images/all-out-of-ideas.jpg'
    } else if (points < 7) {
        return 'assets/images/you-should-ignore-that.jpg'
    } else {
        return 'assets/images/man-with-two-knives.jpg'
    }
}
const getResultAlt = (points) => {
    if (points < 4) {
        return 'Maude and Ned Flanders talking in an office'
    } else if (points < 7) {
        return 'Waylon Smithers and Lisa Simpson looking at a computer'
    } else {
        return 'Moe Szyslak holding two knives and smiling'
    }
}

const displayResult = () => {
    clear()
    displayHeading('Game Over')

    const src = getResultImage(points)
    const alt = getResultAlt(points)

    displayImage(src, alt)


    const quote = getResultQuote(points)

   displayPrompt(quote)
   displayPrompt(points + '/' + questions.length)


    const button = document.createElement('button')
    const buttonText = document.createTextNode('Restart')
    button.classList.add('button')
    button.classList.add('restart-button')
    button.appendChild(buttonText)
    button.addEventListener('click', () => {
        activeQuestion = 0
        points = 0
        clear()
        home.classList.remove('hide')
    })

    quiz.appendChild(button)

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

startButton.addEventListener('click', () => {
    home.classList.add('hide')
    displayActiveQuestion()
})





