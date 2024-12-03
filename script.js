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
    
    
    let currentIndex = 0;
    let score = 0;
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
    
    
    function questionPage()  {}

    
        