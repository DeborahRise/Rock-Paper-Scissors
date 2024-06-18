let onAutoPlay = true;
let intervalId = '';
let resultObject = {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

let NewresultObject = localStorage.getItem('resultObject');
if (NewresultObject) {
    resultObject = JSON.parse(NewresultObject);
}
document.querySelector('.js-result').innerHTML = `Wins: ${resultObject.Wins}, Losses: ${resultObject.Losses}, Ties: ${resultObject.Ties}`

const playGame = (playerMove) => {
    let score = ''
    cpuMove = computerMove();
    if (cpuMove === playerMove) {
        score = "It's a tie"
        
    }
    if (cpuMove === 'Rock') {
        if (playerMove === 'Paper') {
            score = 'You win'
        }
        if (playerMove === 'Scissors') {
            score = 'You lose'
        }
    }
    if (cpuMove === 'Scissors') {
        if (playerMove === 'Paper') {
            score = 'You lose'
        }
        if (playerMove === 'Rock') {
            score = 'You win'
        }
    }
    if (cpuMove === 'Paper') {
        if (playerMove === 'Rock') {
            score = 'You lose' 
        }
        if (playerMove === 'Scissors') {
            score = 'You win'
        }
    }
    if (score === 'You win') {
        resultObject.Wins += 1;
    } else if (score === 'You lose') {
        resultObject.Losses += 1;
    } else if (score === "It's a tie") {
        resultObject.Ties += 1;
    }
    document.querySelector('.js-score').innerHTML = `${score}.` 
    document.querySelector('.js-scoreboard').
    innerHTML = `Your play <img src="images/${playerMove}-emoji.png" class="icons">
    Vs Computer Play <img src="images/${cpuMove}-emoji.png" class="icons">`
    store_result = JSON.stringify(resultObject);
    console.log(store_result);
    localStorage.setItem('resultObject', store_result);
    updateScore();
    retrievedData = localStorage.getItem('resultObject');
    let NewresultObject = JSON.parse(retrievedData);
    console.log('newrez', NewresultObject); 
    
};
const updateScore = () => {
    document.querySelector('.js-result').innerHTML = `Wins: ${resultObject.Wins}, Losses: ${resultObject.Losses}, Ties: ${resultObject.Ties}`
}

const resetScore = () => {
    resultObject.Wins = 0;
    resultObject.Losses = 0;
    resultObject.Ties = 0;
    localStorage.removeItem('resultObject')
    updateScore();
}

const computerMove = () => {
    randomMove = Math.random()
    cpuMove = ''
    if (randomMove >= 0 && randomMove <= 0.3) {
        cpuMove = 'Rock'
    } else if (randomMove > 0.3 && randomMove <= 0.7) {
        cpuMove = 'Paper'
    } else if (randomMove > 0.7 && randomMove <= 1) {
        cpuMove = 'Scissors'
    }
    return cpuMove;

};

const autoPlay = () => {
    if (onAutoPlay) {
        intervalId = setInterval(() => {
            const playerMove = computerMove();
            playGame(playerMove);
        }, 3000)
        onAutoPlay = false;
        document.querySelector('.js-auto-play-button').innerHTML = 'Stop Play'
        } else {
            clearInterval(intervalId)
            onAutoPlay = true;
            document.querySelector('.js-auto-play-button').innerHTML = 'Start Auto Play'
        }
    }
