const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column');
const computerScore = document.querySelector('[data-computer-score]')
const peopleScore = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]


selectionButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const selectionName = button.dataset.selection;
        // 在html屬性用data設置的值
        // js用dataset+data名來獲取
        // selectonName可能是 rock paper scissors
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        // 這裡的selection = 去陣列裡面找跟你選的一樣的name 然後回傳第一個滿足條件的元素值
        makeSelection(selection);
        // SELECTIONS[0],[1],[2]其中一個array 
        // 人選的
        // 記得注意selection是array啊啊啊啊
    });
});

function makeSelection(selec1){
    const computerSelection = randomSelection();
    // SELECTIONS[0],[1],[2]其中一個 
    // 電腦選的
    const peopleWinner = isWinner(selec1, computerSelection);
    // 人選的beats === 電腦選的name
    const computerWinner = isWinner(computerSelection, selec1);
    // 電腦選的beats === 人選的name
    
    selectionResult(computerSelection, computerWinner);
    selectionResult(selec1, peopleWinner);

    if(peopleWinner) calcuScore(peopleScore);
    if(computerWinner) calcuScore(computerScore);
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random()*SELECTIONS.length)
    // .floor() 函式會回傳小於等於所給數字的最大整數。
    // SELECTIONS的長度為3
    return SELECTIONS[randomIndex];
    // return SELECTIONS[0]OR[1]OR[2]
}

function isWinner(yourSelection , opponentSelection){
    return yourSelection.beats === opponentSelection.name;
    // return ture false
}



function selectionResult(selec2, winner){
    const div = document.createElement('div');
    div.innerText = selec2.emoji ;
    div.classList.add('result-selection');
    // opacity .5
    if(winner){
        // 如果beats===name
        div.classList.add('winner');
        // opacity: 1;
        // font-size: 2rem;
    }
    finalColumn.after(div)

}

function calcuScore(score) {
    score.innerText = parseInt(score.innerText) +1;
}
