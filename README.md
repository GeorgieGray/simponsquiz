# Simpsons Quiz

![devices](https://i.imgur.com/I4IloEZ.png)

[Simpsons Quiz](https://georgiegray.github.io/simpsons-quiz/) is a fun general knowledge quiz about The Simpsons.

The website consists of four main areas:
- The home page (or introduction)
- Username input view
- Quiz view
- Score view

The website is hosted using GitHub Pages, see it here:  
https://georgiegray.github.io/simpsons-quiz/

## Table of Contents
- [Target Demographic](#target-demographic)
- [User Stories](#user-stories)
- [Features](#features)
- [Technology](#technology)
- [Project Structure](#project-structure)
- [Design](#design)
  - [Colour Palette](#colour-palette)
  - [Typography](#typography)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Testing](#testing)
  - [Third-Party](#third-party)
    - [JavaScript Linting](#javascript-linting)
    - [W3C HTML Validator](#w3c-html-validator)
    - [W3C CSS Validator](#w3c-css-validator)
    - [Lighthouse](#lighthouse)
- [Content](#content)
  - [Editorial](#editorial)
  - [Questions & Answers](#questions--answers)
  - [Media](#media)
- [Citations & Credits](#citations--credits)

## Target Demographic
- Anyone who is a fan of The Simpsons and wants to test their knowledge
- Anyone who enjoys learning new information via multiple-choice questions
- Geographical location is unimportant, but the website is only provided in English so the demographic will be limited to English speakers.

## User Stories

- As a user, I want to test my knowledge of The Simpsons
- As a user, I want to learn new information about The Simpsons
- As a user, I want to be entertained
- As a user, I want to be made feel nostalgic via familiar media and branding

## Features
### Home page
The first thing a user sees is the The Simpsons Quiz hero image. I used the Simpson-font typeface and a background picture I found online to create a hero image which resembles The Simpsons opening credits from the show. Below the text are buildings from Springfield, the town where the show takes place.

This hero image makes it clear to a user immediately what the purpose of the website is, and what they can expect if they choose to continue. Anyone who has ever watched the show will immediately recognise this imagery.
  
![Hero image](https://i.gyazo.com/e4c24bdbd2b15a9d461c2d3fd4f5e6c1.png)

Below the hero image is the introduction. It briefly describes the quiz, inserts some references to the show and provides a button to start the game.

The button is being held by Comic Book Guy dressed in a costume for a fictional character called The Collector, from a series of Simpsons halloween episodes called Treehouse of Horror. This is just a fun flavour addition to add to the playfulness of the quiz.
  
![start game](https://i.gyazo.com/6e1605392c4a6885b47bc1d27a7b2a0b.png)

### Username entry
The username entry view shows a prompt image and a form for entering a username.

The form has basic validation.
- A username must be provided
- The username must be greater than 3 characters but less than 20

When the user presses the "Lets go" button, the quiz will begin.
  
![Enter username](https://i.gyazo.com/27f7333cd67737343b48c1a2c968f0c4.png)

### Current question indicator
At the top of the question view is an indicator, this communicates progress to the user and lets them know how many questions are remaining before they get their score.
  
![Question indicator](https://i.gyazo.com/225f35203bcf4db5c869223d9dee6ac8.png)

### Question view
The question view shows an image intended to remind the user of the question subject matter, the question prompt and four options. Clicking an option will register a right or wrong answer and progress the user to the next question.
  
![Question view](https://i.gyazo.com/0e63da395cf68c2af9397c1ab0a4c3b6.png)

### Result view
The result view is the game over view.

It displays:
- The users username
- An image reflecting your performance.
- A quip reflecting your performance.
- The users score

There are three result outcomes you can receive depending on your score.
  
![Result view 1](https://i.gyazo.com/a1cf4c9343fd597a9399c3453d9d5119.png)  
![Result view 2](https://i.gyazo.com/369f70cbbc7667d7f5a6a4b90fb3ee61.png)  
![Result view 3](https://i.gyazo.com/f1437d718641bc9c33946fd6462e037f.png)

### Answers summary
The answer summary displays all of the quiz questions and the users chosen answers. The answers are coloured red or green depending on if the user chose the correct answer or not. This is intended to give the user feedback about their performance without spoiling the quiz, which should motivate them to restart and try again to improve their score.
  
![Answer Summary](https://i.gyazo.com/222325f8e4a58b40d96982193ab854c8.png)

### Restart
The restart button displays above the answer summary, it returns the player to the introduction where they can start the quiz again.
  
![Restart button](https://i.gyazo.com/4357e2c5f5d91ab79e82f5eae267941e.png)

### Remember username
If the player has complete the quiz before in the same session, and chooses to start again - when they return to the username entry view their username will be pre-filled in the username input.
  
![Username](https://i.gyazo.com/82032b937c5c23deab969c1e0a3edab0.png)

### Social media preview
When the quiz is shared via social media, a special preview will show to explain quickly what the link is for and set the tone for the quiz.

![Social media](https://i.gyazo.com/e7b97cbda9b90898b185b1804f366fe3.png)

## Technology

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

This project has no libraries or other code dependencies. All code is my own.

## Project Structure

### Assets

There is a folder in the root `/assets` which is the home for all non-html files.

This folder contains two child folders:
- `/assets/css`: CSS
- `/assets/images`: Images
- `/assets/font`: Custom fonts
- `/assets/js`: Scripts, including the quiz game logic

## Design

### Colour Palette

#### Primary 
This is the iconic Simpsons yellow colour.
  
![primary](https://i.imgur.com/7MRCEEd.png)
#### Dark 
This colour palette was inspired by [Frinkiac](https://frinkiac.com/). The three greys work really well together and The Simpsons yellow colour pops against this background.
  
![backgrounds](https://i.imgur.com/73pZLE3.png)
#### Light 
These are additional colours that were necessary to comunicate the quiz content.
- The white is the same as the text colour used by [Frinkiac](https://frinkiac.com/), I've used this colour for the text in the quiz as it works well with the greys.
- The green and red are necessary to communicate right and wrong on the answer summary. These hues were chosen to be WCAG AAA compliant with the grey background colours. 
  
![text](https://i.imgur.com/qLlkAHK.png)

### Typography

#### Home logo & buttons

I chose [Simpson-font](https://www.fonts4free.net/simpson-font.html) by Jon Bernhardt Remastered by [Dennis Ludlow](https://www.linkedin.com/in/dennis-ludlow-1bb04a41). Two fonts are provided, Ackbar & Simpson-font.

When choosing a font I looked for the following criteria:
- True to form
- Instant recognition
- Playful 

This font was originally named Ackbar and was created in 1996 by a man named Jon Bernhardt. It clones the famous handwriting of [Matt Groening](https://en.wikipedia.org/wiki/Matt_Groening), creator of The Simpsons. Ackbar more closely resembles the orignal handwriting while Simpson-font is a cleaned up version which is better for general typography.  
![sample image](https://i.gyazo.com/cb2556b4d6632cd1d5e6af3112d99f0b.png)

#### General
I chose [Open Sans](https://fonts.google.com/specimen/Open+Sans) by [Steve Matteson](https://en.wikipedia.org/wiki/Steve_Matteson). 

When choosing a font I looked for the following criteria:
- Easy to read
- Clear and concise 

Open Sans belongs to the sans-serif family. [This article](https://www.adobe.com/creativecloud/design/discover/serif-vs-sans-serif.html) by Adobe makes an argument for why you might choose a sans-serif font over a serif one. [This article](https://www.impactplus.com/blog/sans-serif-vs-serif-font-which-should-you-use-when#:~:text=Sans%20Serif%20Fonts%20Say%20Modern%2C%20Approachable%2C%20and%20Clean&text=The%20clean%2C%20crisp%20lines%20of,which%20increases%20legibility%20for%20users.) by impactplus.com says much of the same, but makes a stronger argument for sans-serif being the family of choice for on-screen text, and for ease of reading.

![sample image](https://i.gyazo.com/d0b6d29dda6215cc92c73b382f6e2119.png)

## Local Development

I used the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Visual Studio Code extension for local development. The application is very simple - one html file, one css file and one js file - so I didn't find that anything more sophisticated was necessary.

## Deployment
Deployment is automated using GitHub pages.

Each time a commit is pushed to the `master` branch of the repository at `https://github.com/GeorgieGray/simpsons-quiz`, the change is automatically detected and immediately deployed using [GitHub Actions](https://github.com/features/actions).

You can see the deployment history here:  
https://github.com/GeorgieGray/simpsons-quiz/actions

## Testing

### Methodology

1. Do each of the following actions using multiple browsers, namely: Chrome, Firefox, Safari, Edge
    1. Load the home page
    2. Scroll down and click the "Start Game" button to begin the quiz
    3. Submit the form without entering a username, observe required validation error
    4. Enter a character, but less than 3. Submit the form, observe not long enough validation error.
    5. Enter 20 characters, attempt to enter another. Observe 20 character limit is enforced.
    6. Enter a desireable username and submit the form.
    7. Complete each of the questions, noting correct and incorrect choices.
    8. Note the question counter at the top of each question, observe that it increments up to the max number of questions.
    9. At the end review the chosen answers and confirm they match choices.
    10. Review red vs green in the answers summary, confirm correct answers are green and others are red.
    11. Check the score and question count, these should match the noted choices and the results shown in the answer summary.
    12. Press restart and observe that the home page appears again
    13. Navigate to the username entry and observe that the text input is pre-filled with the previously chosen username
    14. Complete the quiz again. On the result page observe that answers and score from the previous attempt are not present. All results should be relevant to the most recent attempt only.
2. Complete the quiz multiple times, choosing different answers each time and noting at the end that the correct and incorrect answers have colouring as expected.
3. Complete the quiz intentionally getting three specific scores. Each specific score should show a different image and quip.
    1. 2/10: Ned Flander's parents - We've tried nothing and we're all out of ideas.
    2. 5/10: Smithers & Lisa - You probably should ignore that.
    3. 9/10: Moe with knives - I got to tell you, this is pretty terrific.
4. Using the chrome-dev-tools, emulate devices of various sizes and check for usability and styling abnormalities. 
    - Large desktop
    - Small desktop
    - Tablet
    - Large phone
    - Small phone
5. Review the questions and answers for typos and exactness.
6. Confirm the social media preview works by sharing a link to the quiz on social media platforms.
7. Use the WebAIM Contrast Checker to validate that any new colours satisfy the accessibility contrast guidelines for WCAG AAA, across all text types.
8. Run code through the W3C HTML & CSS validators and JSHint to confirm everything is compliant and implemented correctly.
9. Run the Lighthouse performance, accessibility, best practice and SEO tests using the chrome-dev-tools.
10. Each time a change is introduced or a bug is fixed, repeat this testing strategy.

### Third-party

I've used a set of third-party testing utilities to check my conformance with the CSS and HTML specifications, JS best practice, and to test website performance.

#### JavaScript linting 
The `quiz.js` file was linted and formatted using [semistandard](https://github.com/standard/semistandard). The code was then checked using JSHint for complexity, errors and improvements. 

#### W3C HTML Validator
The `index.html` file has been validated using the W3C Nu HTML Checker. There are no errors, please find the results below.

- Link: https://validator.w3.org/nu/?doc=https%3A%2F%2Fgeorgiegray.github.io%2Fsimpsons-quiz%2F

#### W3C CSS Validator
The `index.html` has been validated using the W3C CSS Validation Service. There are no errors, please find the results below.

- Link: https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgeorgiegray.github.io%2Fsimpsons-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en

#### Lighthouse

I used the Lighthouse performance, accessibility, best practices and SEO tests to test and tune my website.

##### Desktop
![desktop lighthouse result](https://i.gyazo.com/8a6d053a9a70a3f5ae40461e34205dc2.png)  

##### Mobile
![mobile lighthouse result](https://i.gyazo.com/4bff10c142a732d85b64f56110d24a5d.png)  
Mobile has more strict thresholds since generally the devices are less powerful and have a worse internet connection than desktop devices.

## Content

### Editorial

All editorial content exists for entertainment purposes only. The content is intended to resonate with and entertain the target audience, it references The Simpsons jokes and scenes from the show.

All editorial content is my own.

### Questions & Answers

All of the questions were written by me. The intention when writing the questions was to have a collection of difficult but not obscure questions, and for answers to be misleading by either being very close to the correct answer or referencing other things which happened in the same scene or episode - this should make guessing harder.

The questions are very common pieces of trivia among fans of The Simpsons. While there will be many similar occurences of these questions online, prior art did not influence my writing. All questions are derived from my personal experiences and biases towards the show, including the likes of my favourite scenes and obscure pieces of information.

### Media
- When choosing media for the website it was very important for me to stay faithful to the source material so to invoke nostalgia and excitement.
- It was important to use iconic imagery which excites and entertains the user. For every funny or exciting scene of The Simpsons, there are many uninteresting or forgettable ones.
- The images needed to be relevant to the subject matter of the question without providing any clues. The intention here is that the imagery should provoke memories of the show and help the user to remember the correct answer. The user should be delighted and entertained when presented with each questions, and not end up feeling that they were cheated or tricked.

This content is not my own. All credit is given in the [Citations & Credits](#citations--credits) section.

## Citations & Credits

Design inspired by https://frinkiac.com/

### Images

#### Misc
- Meta
  - https://frinkiac.com/img/S06E24/1128359.jpg
- Homepage image
  - https://tstoaddicts.com/2019/02/23/simpsons-trivia-season-1-and-general-simpsons-knowledge/

#### Simpsons images
- Back to Winnepeg
  - https://frinkiac.com/img/S07E20/690289.jpg
- Hank Scorpio
  - https://frinkiac.com/img/S08E02/1249247.jpg
- Homer Jay Simpson
  - https://frinkiac.com/caption/S10E06/495110
- Homer Muumuu
  - https://frinkiac.com/caption/S07E07/590822
- Jessica Lovejoy
  - https://frinkiac.com/caption/S06E07/1062578
- Marge hair
  - https://frinkiac.com/img/S09E11/663078.jpg
- Milpool
  - https://frinkiac.com/caption/S06E01/439338
- Isometric exercise
  - https://frinkiac.com/caption/S07E21/538253
- Sneakers for sneaking
  - https://frinkiac.com/caption/S05E11/984949
- The Collector
  - https://simpsonstappedout.fandom.com/wiki/The_Collector?file=The_Collector_Unlock.png
- The Corey hotline
  - https://frinkiac.com/img/S04E14/567633.jpg
- Man with two knives
  - https://frinkiac.com/img/S13E07/1057265.jpg
- All out of ideas
  - https://frinkiac.com/img/S08E08/1015413.jpg
- You should probably ignore that
  - https://frinkiac.com/img/S07E10/777309.jpg
- Thrillhouse
  - https://frinkiac.com/caption/S07E11/250900

### Meta 
- README.md 
  - I used the README from a previous project of mine as the basis for this one. Some passages and the structure of the document have been reused. 
  - Link: https://github.com/GeorgieGray/all-about-dinos/blob/master/README.md