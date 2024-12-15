// Quiz Data
const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Type Markup Language",
            "Hyper Text Market Language",
            "Hyper Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style System",
            "Computer Style Syntax",
            "Colorful Style Scheme"
        ],
        correct: 0
    },
    {
        question: "What does JS stand for?",
        options: [
            "JavaStyle",
            "JavaSyntax",
            "JavaScript",
            "JustStyle"
        ],
        correct: 2
    }
];

// DOM Elements
const questionElement = document.querySelector("h2");
const optionsContainer = document.querySelector(".options-container");
const questionCountElement = document.querySelector("p");
const nextButton = document.getElementById("nextButton");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

// Function to Update Score
function updateScore() {
    score++; // Increment score
    scoreElement.textContent = score; // Update score display
}

// Function to Load a Question
function loadQuestion() {
    const currentData = quizData[currentQuestionIndex];

    // Update Question Text
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentData.question}`;

    // Update Options
    optionsContainer.innerHTML = ""; // Clear previous options
    currentData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-light w-100 mb-2";
        button.textContent = option;
        button.onclick = () => checkAnswer(index); // Check answer when clicked
        optionsContainer.appendChild(button);
    });

    // Update Question Count
    questionCountElement.textContent = `${currentQuestionIndex + 1} of ${quizData.length} questions`;

    // Disable Next Button Initially
    nextButton.disabled = true;
}

// Function to Check Answer
function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestionIndex].correct;
    const buttons = optionsContainer.querySelectorAll("button");

    // Disable all buttons after selection
    buttons.forEach(button => button.disabled = true);

    // Always highlight the correct answer (green)
    const correctButton = buttons[correctIndex];
    correctButton.style.borderColor = "green";
    correctButton.style.backgroundColor = "lightgreen";
    correctButton.style.color = "green";

    // If the selected answer is wrong, highlight it as red
    if (selectedIndex !== correctIndex) {
        const selectedButton = buttons[selectedIndex];
        selectedButton.style.borderColor = "red";
        selectedButton.style.backgroundColor = "#f8d7da";
        selectedButton.style.color = "red";
    } else {
        updateScore(); // Increment score for correct answer
    }

    // Enable Next Button after an answer is selected
    nextButton.disabled = false;
}

// Event Listener for Next Button
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.querySelector(".container").innerHTML = `
            <h2 class="text-center">Quiz Completed!</h2>
            <p class="text-center">Your Score: ${score}/${quizData.length}</p>
            <button class="btn btn-primary w-100 mt-3" onclick="retryQuiz()">Retry Quiz</button>
        `;
    }
});

// Retry Quiz Function
function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    loadQuestion();
    nextButton.disabled = false;
}

// Initialize Quiz
loadQuestion();
