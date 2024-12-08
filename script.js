    const questions = [
        {
            question: "Vilket land kommer pizzan ursprungligen ifrån?",
            options: [
                { text: "Spanien", correct: false },
                { text: "Italien", correct: true },
                { text: "Grekland", correct: false },
                { text: "Frankrike", correct: false }
            ]
        },
        {
            question: "Vad är huvudingredienserna i en klassisk gazpacho?",
            options: [
                { text: "Potatis och purjolök", correct: false },
                { text: "Gurka och tomat", correct: true },
                { text: "Morot och selleri", correct: false },
                { text: "Spenat och zucchini", correct: false }
            ]
        },
        {
            question: "Vilket bär används för att tillverka vin?",
            options: [
                { text: "Jordgubbar", correct: false },
                { text: "Hallon", correct: false },
                { text: "Tranbär", correct: false },
                { text: "Vindruvor", correct: true }
            ]
        },
        {
            question: "Vilket spanskt risbaserat maträtt innehåller ofta skaldjur, kyckling och saffran?",
            options: [
                { text: "Paella", correct: true },
                { text: "Risotto", correct: false },
                { text: "Tortilla", correct: false },
                { text: "Tapas", correct: false }
            ]
        },
        {
            question: "Vilken grönsak är huvudingrediensen i moussaka?",
            options: [
                { text: "Zucchini", correct: false },
                { text: "Potatis", correct: false },
                { text: "Aubergine", correct: true },
                { text: "Paprika", correct: false }
            ]
        },
        {
            question: "Vilket land är känt för att ha uppfunnit sushi?",
            options: [
                { text: "Kina", correct: false },
                { text: "Japan", correct: true },
                { text: "Thailand", correct: false },
                { text: "Sydkorea", correct: false }
            ]
        },
        {
            question: "Vad heter det franska bakverket som är gjort av smördeg och fyllt med choklad?",
            options: [
                { text: "Croissant", correct: false },
                { text: "Pain au chocolat", correct: true },
                { text: "Brioche", correct: false },
                { text: "Éclair", correct: false }
            ]
        },
        {
            question: "Vilken krydda ger curry sin gula färg?",
            options: [
                { text: "Saffran", correct: false },
                { text: "Kanel", correct: false },
                { text: "Gurkmeja", correct: true },
                { text: "Paprika", correct: false }
            ]
        },
        {
            question: "Vilken är Sveriges mest populära glassmak enligt statistik?",
            options: [
                { text: "Jordgubb", correct: false },
                { text: "Choklad", correct: false },
                { text: "Päron", correct: false },
                { text: "Vanilj", correct: true }
            ]
        },
        {
            question: "Vilken italiensk ost är huvudingrediens i tiramisù?",
            options: [
                { text: "Ricotta", correct: false },
                { text: "Mozzarella", correct: false },
                { text: "Mascarpone", correct: true },
                { text: "Parmesan", correct: false }
            ]
        }
     ];

    const homePage = document.querySelector('.homepage-container');
    const quizSection = document.querySelector('.quiz-content.hidden');
    const startButton = document.querySelector('.start-btn');
    const nameInput = document.querySelector('.player-name');
    
    let playerName = '';
    
    startButton.addEventListener('click',() => {
    playerName = nameInput.value;

    if (playerName === '') {
        alert('Vänligen skriv in ditt namn');
        return;
    }
    homePage.classList.add('hidden');
    quizSection.classList.remove('hidden'); 

    questionPage();
});

    const options = document.querySelector('.options-container');
    const questionElement = document.querySelector('.current-question');
    const questionNumber = document.querySelector('.question-number');
    const questionBtn = document.querySelectorAll('.option-btn');

    let currentIndex = 0;
    
    questionBtn.forEach((button, index) => {
        button.addEventListener('click', () => answer(index));
    });

    function questionPage(){
    questionNumber.innerText = `Fråga ${currentIndex + 1} av ${questions.length}`;
    const currentQuestion = questions[currentIndex];
    questionElement.innerText = currentQuestion.question;

     currentQuestion.options.forEach((option, index) => {
        
        questionBtn[index].innerText = option.text;
         
    });
}

    let score = 0;

    const correctResult = [];
    const wrongResult = [];

function answer(index){
    const currentQuestion = questions[currentIndex];

    questionBtn.forEach(button => {
        button.disabled = true;
    });

    if (currentQuestion.options[index].correct) {
        questionBtn[index].classList.add('correct');
        score = score + 1;
        correctResult.push(`Fråga ${currentIndex + 1}: ${questions[currentIndex].options[index].text}`);
    } else {
        questionBtn[index].classList.add('incorrect');
        wrongResult.push(`Fråga ${currentIndex + 1}: ${questions[currentIndex].options[index].text}`);
    }
}


function reset(){
    questionBtn.forEach(button => {
        button.classList.remove('correct');
        button.classList.remove('incorrect');
        button.disabled = false;
    });
}

    const nextBtn = document.querySelector('.next-btn');
    
    nextBtn.addEventListener('click', () => {
    reset();
    currentIndex = currentIndex + 1;
    
    if (currentIndex < questions.length) {
        questionPage();
    } else {
        result();
    }
    });

    const resultPage = document.querySelector('.result-section.hidden');
    const resultHeader = document.querySelector('.result-header');
    const results = document.querySelector('.results');
    const resultName = document.querySelector('.result-name');
    const scoreResult = document.querySelector('.score-result');

    function result (){
    quizSection.classList.add('hidden');
    resultPage.classList.remove('hidden');
    resultHeader.innerText = 'Quiz Avslutat!';
    scoreResult.innerText = `Du fick ${score} av ${questions.length} rätt!`;
    if (score < 5) {
        scoreResult.style.color = '#CF6679';
        resultName.innerText = `Du behöver öva mer, ${playerName}!`;
    } else if (score <= 7.5) {
        scoreResult.style.color = '#F28C38';
        resultName.innerText = `Du är på god väg, ${playerName}!`;
    } else {
        scoreResult.style.color = '#03DAC5';
        resultName.innerText = `Bra jobbat ${playerName}, Du har koll!`;
    }
    
    const ul = document.querySelector('ul');

    correctResult.forEach((result, index) => {
        const li = document.createElement('li');
        li.innerText = ` ${result}`;
        li.style.color = '#03DAC5';
        ul.appendChild(li);
    });
    wrongResult.forEach((result, index) => {
        const li = document.createElement('li');
        li.innerText = `${result}`;
        li.style.color = '#CF6679';
        ul.appendChild(li);
    });

    const restartBtn = document.querySelector('.restart-button');
    restartBtn.addEventListener('click', () => {
        location.reload();
    });
    
    
};