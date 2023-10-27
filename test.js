// Global errors object to track mistakes
let errors = {
    redGreen: 0,
    blueYellow: 0,
    total: 0
};

function submitTest() {
    if (errors.redGreen > errors.blueYellow && errors.redGreen > 4) {
        alert('Diagnosed with red-green color blindness');
    } else if (errors.blueYellow > errors.redGreen && errors.blueYellow > 4) {
        alert('Diagnosed with blue-yellow color blindness');
    } else if (errors.total > 8) {
        alert('Diagnosed with monochromia');
    } else {
        alert('No color blindness detected');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let currentQuestion = 1;

    const questions = document.querySelectorAll('.question'); // Get all question elements
    const totalQuestions = questions.length;

    const correctAnswers = {
        "q1": "7",
        "q2": "1",
        // add more 
    };

    // Hide all questions initially
    questions.forEach(question => {
        question.style.display = 'none';
    });

    // Show the first question
    document.getElementById('question1').style.display = 'flex'; // This line ensures Q1 is visible initially

    function goToNextQuestion() {
        // Hide the current question
        document.getElementById('question' + currentQuestion).style.display = 'none';
        currentQuestion++;

        if (currentQuestion <= totalQuestions) {
            // Show the next question
            document.getElementById('question' + currentQuestion).style.display = 'flex';
        } else {
            // If all questions have been answered, evaluate the test
            submitTest();
        }
    }

    document.querySelector('.test-container').addEventListener('change', function(e) {
        if (e.target && e.target.type === 'radio') {
            const selectedAnswer = e.target.value;
            const questionName = e.target.name;

            if (selectedAnswer !== correctAnswers[questionName]) {
                // Increment appropriate error counters based on the question
                switch (questionName) {
                    case "q1":
                        errors.redGreen++;
                        break;
                    case "q2":
                        errors.blueYellow++;
                        break;
                    // ... you can add more cases for q3, q4, ... up to q20
                }
                errors.total++;
            }

            // After selecting an answer, go to the next question
            goToNextQuestion();
        }
    });
});