function makeDisable(playerName)
{
    const selectBtn = document.getElementById(playerName);
    selectBtn.setAttribute('disabled',true);
}

function addPlayer(player)
{
    const playerName =  document.getElementById(player);
    const playerValue= playerName.innerText;
    const li = document.createElement('li');
    li.innerText = playerValue;
    const playerList = document.getElementById('player-list');
  

    const list = document.querySelectorAll('li');
    if(list.length < 5)
    {
        playerList.appendChild(li);
    }
    else
    {
        alert("You are not able to add more Player");
    }
    
}



document.getElementById('player-calculate-btn').addEventListener('click',function()
{

    const listOfPlayer =document.querySelectorAll('li');
    const length = listOfPlayer.length;
    
    const playerInputPrice = document.getElementById('input-price');
    const playerPriceString = playerInputPrice.value;
    const playerPrice = parseFloat(playerPriceString);
    const totalPlayerPrice = playerPrice * length;
   


    const displayInputPrice = document.getElementById('display-player-price');
    displayInputPrice.innerText = totalPlayerPrice;
    const playerExpenses =displayInputPrice.innerText;
    

})


document.getElementById('total-calculate-btn').addEventListener('click',function()
{

    const listOfPlayer =document.querySelectorAll('li');
    const length = listOfPlayer.length;
    
    const playerInputPrice = document.getElementById('input-price');
    const playerPriceString = playerInputPrice.value;
    const playerPrice = parseFloat(playerPriceString);
    const totalPlayerPrice = playerPrice * length;


    const displayInputPrice = document.getElementById('display-player-price');
    displayInputPrice.innerText = totalPlayerPrice;
    const playerExpensesString =displayInputPrice.innerText;
    const playerExpenses = parseFloat(playerExpensesString);

    const managerInputPrice = document.getElementById('manager-input-price');
    const managerPriceString = managerInputPrice.value;
    const managerPrice = parseFloat(managerPriceString);
    

    const coachInputPrice = document.getElementById('coach-input-price');
    const coachPriceString = coachInputPrice.value;
    const coachPrice = parseFloat(coachPriceString);
   

    const totalCostDisplay = document.getElementById('total-cost');
    const totalCost = playerExpenses + managerPrice + coachPrice;
    totalCostDisplay.innerText = totalCost;
})



document.getElementById('player1').addEventListener('click',function()
{
const result = addPlayer('player-name1');
makeDisable('player1');
})

document.getElementById('player2').addEventListener('click',function()
{
const result = addPlayer('player-name2');
makeDisable('player2');
})

document.getElementById('player3').addEventListener('click',function()
{
const result = addPlayer('player-name3');
makeDisable('player3');
})

document.getElementById('player4').addEventListener('click',function()
{
const result = addPlayer('player-name4');
makeDisable('player4');
})

document.getElementById('player5').addEventListener('click',function()
{
const result = addPlayer('player-name5');
makeDisable('player5');
})

document.getElementById('player6').addEventListener('click',function()
{
const result = addPlayer('player-name6');
makeDisable('player6');
})