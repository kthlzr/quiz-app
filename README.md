# Quiz App

A simple quiz app built with HTML, CSS, JavaScript, and Bootstrap. The app dynamically loads questions, tracks scores, provides feedback, and allows users to answer multiple-choice questions.

![image](https://i.ibb.co/7k3GPYZ/Screenshot-2024-12-15-235052.png)

## Features

### 1. **Dynamic Question and Option Loading**
   - The app dynamically loads quiz questions and options from a predefined set of quiz data.
   - Each question is displayed with four answer options, and the options are rendered as clickable buttons.

### 2. **Score Display**
   - The current score is displayed on the right side of the question.
   - The score is updated each time the user answers a question correctly.

### 3. **Highlighting Correct and Wrong Answers**
   - **Correct Answer**: The selected button is highlighted with:
     - Green border.
     - Light green background.
     - Green text color.
   - **Wrong Answer**: The selected button is highlighted with:
     - Red border.
     - Light red background.
     - Red text color.
   - The correct answer is also highlighted with the green styles, even if the user selects the wrong answer.

### 4. **"Next Question" Button**
   - After answering a question, the "Next Question" button becomes enabled, allowing the user to move to the next question.
   - If the quiz is complete, an alert is shown to notify the user that the quiz has been finished.

### 5. **Question Counter**
   - The app shows the current question number out of the total number of questions (e.g., "1 of 5 questions").
   - This counter updates with each question.

### 6. **Centered Layout**
   - The quiz container is horizontally and vertically centered in the viewport using Bootstrap's Flexbox classes.
   - The layout is responsive and adjusts to different screen sizes.

### 7. **Responsive Design**
   - The app is built using Bootstrap, making it responsive and ensuring the layout adjusts appropriately for different devices and screen sizes.

### 8. **Disable Answer Buttons After Selection**
   - Once an answer is selected, all answer buttons are disabled to prevent multiple selections.
   - The user cannot change their answer after selecting one.

### 9. **Score Persistence**
   - The score updates live during the quiz and only increments if the user answers a question correctly.

### 10. **User-Friendly Feedback**
   - The app provides clear visual feedback for answers:
     - Correct answers are highlighted with green.
     - Wrong answers are highlighted with red, and the correct answer is shown as well.

### 11. **Final Quiz Result**
   - At the end of the quiz, an alert box is displayed to notify the user that the quiz is complete.

## Technologies Used
- HTML
- CSS (Bootstrap)
- JavaScript

## How to Use
1. Open the `index.html` file in your browser.
2. Answer the questions by clicking on the options.
3. Once you've answered a question, the "Next Question" button will be enabled.
4. At the end of the quiz, your score will be displayed, and an alert will notify you that the quiz is complete.

## License
This project is open-source and available under the [MIT License](LICENSE).
