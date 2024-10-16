document.addEventListener('DOMContentLoaded', (event) => {
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('counter');
    const multiplierButton = document.getElementById('multiplier');
    const multiplierCostDisplay = document.getElementById('multiplierCost');
    const multiplierCounterDisplay = document.getElementById('multiplierCounter');
    const autoclickerButton = document.getElementById('autoclicker');
    const autoclickerCostDisplay = document.getElementById('autoclickerCost');
    const autoclickerCounterDisplay = document.getElementById('autoclickerCounter');
    const milkFarmButton = document.getElementById('milkFarm');
    const milkFarmCostDisplay = document.getElementById('milkFarmCost');
    const milkFarmCounterDisplay = document.getElementById('milkFarmCounter');
    const milkPoint = document.getElementById('milkFarmPoint');
    const cacao = document.getElementById('cacao');
    const wheat = document.getElementById('wheat');
    const egg = document.getElementById('egg');
    // const containerFarm = document.getElementById('container-farm');
    const claimFarm = document.getElementById('claim-btn');



    let clicks = localStorage.getItem('clicks') ? parseInt(localStorage.getItem('clicks')) : 0;
    let multiplier = localStorage.getItem('multiplier') ? parseInt(localStorage.getItem('multiplier')) : 1;
    let multiplierCount = localStorage.getItem('multiplierCount') ? parseInt(localStorage.getItem('multiplierCount')) : 0;
    let multiplierCost = localStorage.getItem('multiplierCost') ? parseInt(localStorage.getItem('multiplierCost')) : 20;
    let autoclicker = localStorage.getItem('autoclicker') ? parseInt(localStorage.getItem('autoclicker')) : 0;
    let autoclickerCount = localStorage.getItem('autoclickerCount') ? parseInt(localStorage.getItem('autoclickerCount')) : 0;
    let autoclickerCost = localStorage.getItem('autoclickerCost') ? parseInt(localStorage.getItem('autoclickerCost')) : 20;
    let milkFarm = localStorage.getItem('milkFarm') ? parseInt(localStorage.getItem('milkFarm')) : 0;
    let milkFarmCount = localStorage.getItem('milkFarmCount') ? parseInt(localStorage.getItem('milkFarmCount')) : 0;
    let milkFarmCost = localStorage.getItem('milkFarmCost') ? parseInt(localStorage.getItem('milkFarmCost')) : 5;
    let milkPointStorage = localStorage.getItem('milkFarmPoint') ? parseInt(localStorage.getItem('milkFarmPoint')) : 0;
    let cacaoStorage = localStorage.getItem('cacao') ? parseInt(localStorage.getItem('cacao')) : 0;
    let wheatStorage = localStorage.getItem('wheat') ? parseInt(localStorage.getItem('wheat')) : 0;
    let eggStorage = localStorage.getItem('egg') ? parseInt(localStorage.getItem('egg')) : 0;


    counter.textContent = clicks;
    multiplierCostDisplay.textContent = `Cout : ${multiplierCost}`;
    multiplierCounterDisplay.textContent = multiplierCount;
    autoclickerCostDisplay.textContent = `Cout : ${autoclickerCost}`;
    autoclickerCounterDisplay.textContent = autoclickerCount;
    cacao.textContent = cacaoStorage



    cookie.addEventListener('click', () => {
        clicks += multiplier;
        counter.textContent = clicks;
        localStorage.setItem('clicks', clicks);


    });

    multiplierButton.addEventListener('click', () => {
        if (clicks >= multiplierCost) {
            clicks -= multiplierCost;
            multiplier += 1; // Increase multiplier linearly
            multiplierCount++;
            multiplierCost = Math.floor(multiplierCost * 1.15); // Increase cost exponentially
            counter.textContent = clicks;
            multiplierCostDisplay.textContent = `Cout : ${multiplierCost}`;
            multiplierCounterDisplay.textContent = multiplierCount;
            localStorage.setItem('clicks', clicks);
            localStorage.setItem('multiplier', multiplier);
            localStorage.setItem('multiplierCount', multiplierCount);
            localStorage.setItem('multiplierCost', multiplierCost);
        } else {
            alert("vous n'avez pas assez de points pour acheter un multiplicateur!");
        }
    });

    autoclickerButton.addEventListener('click', () => {
        if (clicks >= autoclickerCost) {
            clicks -= autoclickerCost;
            autoclicker++;
            autoclickerCount++;
            autoclickerCost = Math.floor(autoclickerCost * 1.15); // Increase cost exponentially
            counter.textContent = clicks;
            autoclickerCostDisplay.textContent = `Cout : ${autoclickerCost}`;
            autoclickerCounterDisplay.textContent = autoclickerCount;
            localStorage.setItem('clicks', clicks);
            localStorage.setItem('autoclicker', autoclicker);
            localStorage.setItem('autoclickerCount', autoclickerCount);
            localStorage.setItem('autoclickerCost', autoclickerCost);
        } else {
            alert("vous n'avez pas assez de points pour acheter un autoclicker!");
        }
    });

    milkFarmButton.addEventListener('click', () => {
        if (clicks >= milkFarmCost) {
            clicks -= milkFarmCost;
            milkPointStorage += 1;
            milkFarm++;
            milkFarmCount++;
            milkFarmCost = Math.floor(milkFarmCost * 2); // Increase cost exponentially
            counter.textContent = clicks;
            milkFarmCostDisplay.textContent = `Cout : ${milkFarmCost}`;
            milkFarmCounterDisplay.textContent = `production de cacao : ${milkFarmCount}` ;
            localStorage.setItem('clicks', clicks);
            localStorage.setItem('milkFarm', milkFarm);
            localStorage.setItem('milkFarmCount', milkFarmCount);
            localStorage.setItem('milkFarmCost', milkFarmCost);
            localStorage.setItem('milkFarmPoint', milkPointStorage);
            

        } else {
            alert("vous n'avez pas assez de points pour acheter une ferme à cacao!");
        }
    });

    claimFarm.addEventListener('click', () => {
        cacaoStorage += milkPointStorage
        milkPointStorage -= milkPointStorage
        localStorage.setItem('milkFarmPoint', milkPointStorage);
        localStorage.setItem('cacao', cacaoStorage);
    });

    setInterval(() => {
        clicks += autoclicker;
        counter.textContent = clicks;
        localStorage.setItem('clicks', clicks);
        milkPointStorage += milkFarmCount;
        milkPoint.textContent = milkPointStorage;
        localStorage.setItem('milkFarmPoint', milkPointStorage);

    }, 1000);

    

    document.getElementById('reset').addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
});