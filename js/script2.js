const quizData = [
    {
        question: "who is your favourite footballer",
        a: "Ronaldo",
        b: "Messi",
        c: "Neymar",
        d: "Mbappe",
        correct: "a",
    }, 
    {
        question: "who is your favourite cricketer",
        a: "Virat Kholi",
        b: "Sangakara",
        c: "Ms Dhoni",
        d: "Taylor",
        correct: "b",
    }, 
    {
        question: "what is the most used programming language?",
        a: "Javascript",
        b: "Python",
        c: "C++",
        d: "Java",
        correct: "a",
    }, 
    {
        question: "who is the president of us?",
        a: "Putin",
        b: "Biden",
        c: "Modhi",
        d: "Hasina",
        correct: "b",
    }, 
    {
        question: "what does HTML stand for?",
        a: "Hyper text markup language",
        b: "Cascading style sheet",
        c: "Jason object nariation",
        d: "Aplication programe interface",
        correct: "a",
    }, 
    {
        question: "what year was javascript lanched?",
        a: "2011",
        b: "2000",
        c: "2005",
        d: "none of the above",
        correct: "d",
    }
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const myBtn = document.getElementById("myBtn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deSelected()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


   
}

function getSelected() {
    

    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
       
    });
    return answer;
}

function deSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
       
    });
}

myBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correct ${score}/${quizData.length}</h2>`
        }
    }
      
});


// let p = new Promise((resolve, reject) => {
//     let a = 1+2
//     if(a == 2) {
//         resolve('passed');
//     } else {
//         reject('failed');
//     }
// })

// p.then((message) => {
//     console.log('this is in the then ' + message)
// }).catch((message) => {
//     console.log('this is in the catch ' + message)
// })


// const userLeft = false;
// const userWatchingCatMeme = true;





// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject ({
//                 name: 'user Left',
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             reject ({
//                 name: 'user watching cat meme',
//                 message: 'you are fired'
//             })
//         } else {
//             resolve('thumbs up and subscribe')
//         }
//     })
    
    
// }

// watchTutorialPromise().then((message) => {
//     console.log('succes:' + message)
// }).catch((error) => {
//     console.log(error.name + ' and ' + error.message)
// })

// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('video 1 recorded')
// })
// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('video 2 recorded')
// })
// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('video 3 recorded')
// })

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((message) => {
//     console.log(message)
// })


// import User, { printName as printUserName, printAge } from './user.js'

// const user = new User('Bob', 11)
// console.log(user)

// printUserName(user)
// printAge(user)

// const items = [

//     { name: 'Bike',        price: 100 },
//     { name: 'Tv',          price: 200 },
//     { name: 'Album',       price: 10 },
//     { name: 'Book',        price: 5 },
//     { name: 'Phone',       price: 500 },
//     { name: 'Computer',    price: 1000 },
//     { name: 'Keyboard',    price: 25 },
// ]

// const total = items.reduce((currentTotal, item) => {
//     return item.price + currentTotal
// }, 0)

// console.log(total)

// const items = [1, 2, 3, 4, 5]

// const includesTwo = items.includes(8)

// console.log(includesTwo)


// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making request to ${location}`)
//         if (location === 'Google') {
//             resolve('Google says hi')
//         } else {
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('processing response')
//         resolve(`Extra information + ${response}`)
//     })
// }

// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

// async function doWork() {
    
//     try {
//         const response = await makeRequest('Google')
//     console.log('Response Received')
//     const processedResponse = await processRequest(response)
//     console.log(processedResponse)
//     } catch (err) {
//         console.log(err)
//     }
// }

// doWork()