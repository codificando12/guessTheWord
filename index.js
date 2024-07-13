function getword () {
    const  entries = Object.entries(guessWord);
    const randomEntry = entries[Math.floor(Math.random() * entries.length)];
    const [randomAnimal, randomClue] = randomEntry
    clueParagraph.textContent = randomClue;
    animal = randomAnimal;
    lifes = 3;
    lifesText.textContent = `You have ${lifes} left`;
    input.value = "";
}

function checkAnswer () {
    const userInput = input.value.toLowerCase();
    if (lifes > 0 ) {
        if (userInput === animal) {
            clueParagraph.textContent = "Correct!! Get a new clue to keep playing";
            input.value = "";
        } else {
            console.log('try again');
            input.value = "";
            lifes --;
            lifesText.textContent = `You have ${lifes} left. Try again`;
            if (lifes === 0){
                lifesText.textContent = "You LOSE! Get a new clue to keep trying"; 
            }
        }
    }
}

const clueParagraph = document.querySelector("#clue");
const input = document.querySelector("#answer-input");
const checkButton = document.querySelector("#check-button");
const generateWord = document.querySelector("#generate-word");
const lifesText = document.querySelector(".lifes");
let animal = "";
let lifes = 3;

lifesText.textContent = `You have ${lifes} left`;

const guessWord = {
    "elephant": "The largest land animal with a trunk.",
    "tiger": "A big cat with orange fur and black stripes.",
    "kangaroo": "An Australian marsupial known for its powerful hind legs and jumping ability.",
    "penguin": "A flightless bird that lives in cold regions and is known for its tuxedo-like appearance.",
    "dolphin": "A highly intelligent marine mammal known for its playful behavior and echolocation abilities.",
    "giraffe": "The tallest land animal, known for its long neck and legs.",
    "owl": "A nocturnal bird of prey with large eyes and a distinctive hoot.",
    "turtle": "A reptile with a hard shell that lives both in water and on land.",
    "koala": "A tree-dwelling marsupial from Australia that feeds on eucalyptus leaves.",
    "chameleon": "A lizard known for its ability to change colors and its independently moving eyes."
};


checkButton.addEventListener('click', checkAnswer);
generateWord.addEventListener('click', getword);



