class Game {
    constructor() {
        const initialMultiplierCost = 20;
        const initialAutocliquerCost = 25;
        const initialCacaoFarmCost = 10;
        const initialWheatFarmCost = 15;
        const initialEggFarmCost = 20;
        const initialUpgradeSpeedCost = 200;

        this.bonuses = {
            "multiplier": { cost: initialMultiplierCost, nb: 1 },
            "autocliquer": { cost: initialAutocliquerCost, nb: 0 },
            "cacaoFarm": { cost: initialCacaoFarmCost, nb: 0, production: 1 },
            "wheatFarm": { cost: initialWheatFarmCost, nb: 0, production: 2 },
            "eggFarm": { cost: initialEggFarmCost, nb: 0, production: 3 }
        };
        this.resources = {
            "cacao": 0,
            "wheat": 0,
            "egg": 0,
            "cacaoFarmPoint": 0,
            "wheatFarmPoint": 0,
            "eggFarmPoint": 0
        };
        this.autoClickerInterval = 1000;
        this.upgradeSpeedCost = initialUpgradeSpeedCost;
        this.load();
        this.initDOMElements();
        this.loadEvents();
        this.startBackgroundMusic();
        this.paint();
    }

    save() {
        localStorage.setItem('game.clicks', this.clicks);
        localStorage.setItem('game.multiplier', this.bonuses.multiplier.nb);
        localStorage.setItem('game.multiplierCost', this.bonuses.multiplier.cost);
        localStorage.setItem('game.autocliquer', this.bonuses.autocliquer.nb);
        localStorage.setItem('game.autocliquerCost', this.bonuses.autocliquer.cost);
        localStorage.setItem('game.cacaoFarmPoint', this.resources.cacaoFarmPoint);
        localStorage.setItem('game.cacaoFarm', this.bonuses.cacaoFarm.nb);
        localStorage.setItem('game.cacaoFarmCost', this.bonuses.cacaoFarm.cost);
        localStorage.setItem('game.cacaoFarmProduction', this.bonuses.cacaoFarm.production);
        localStorage.setItem('game.cacao', this.resources.cacao);
        localStorage.setItem('game.wheat', this.resources.wheat);
        localStorage.setItem('game.egg', this.resources.egg);
        localStorage.setItem('game.wheatFarm', this.bonuses.wheatFarm.nb);
        localStorage.setItem('game.wheatFarmCost', this.bonuses.wheatFarm.cost);
        localStorage.setItem('game.wheatFarmProduction', this.bonuses.wheatFarm.production);
        localStorage.setItem('game.eggFarm', this.bonuses.eggFarm.nb);
        localStorage.setItem('game.eggFarmCost', this.bonuses.eggFarm.cost);
        localStorage.setItem('game.eggFarmProduction', this.bonuses.eggFarm.production);
        localStorage.setItem('game.wheatFarmPoint', this.resources.wheatFarmPoint);
        localStorage.setItem('game.eggFarmPoint', this.resources.eggFarmPoint);
        localStorage.setItem('game.upgradeSpeedCost', this.upgradeSpeedCost);
        localStorage.setItem('game.autoClickerInterval', this.autoClickerInterval);
    }

    load() {
        const initialMultiplierCost = 20;
        const initialAutocliquerCost = 25;
        const initialCacaoFarmCost = 10;
        const initialWheatFarmCost = 15;
        const initialEggFarmCost = 20;
        this.clicks = localStorage.getItem('game.clicks') ? parseInt(localStorage.getItem('game.clicks')) : 9999999;
        this.bonuses.multiplier.nb = localStorage.getItem('game.multiplier') ? parseInt(localStorage.getItem('game.multiplier')) : 1;
        this.bonuses.multiplier.cost = localStorage.getItem('game.multiplierCost') ? parseInt(localStorage.getItem('game.multiplierCost')) : initialMultiplierCost * Math.pow(1.15, this.bonuses.multiplier.nb - 1);
        this.bonuses.autocliquer.nb = localStorage.getItem('game.autocliquer') ? parseInt(localStorage.getItem('game.autocliquer')) : 0;
        this.bonuses.autocliquer.cost = localStorage.getItem('game.autocliquerCost') ? parseInt(localStorage.getItem('game.autocliquerCost')) : initialAutocliquerCost * Math.pow(1.15, this.bonuses.autocliquer.nb);
        this.bonuses.cacaoFarm.nb = localStorage.getItem('game.cacaoFarm') ? parseInt(localStorage.getItem('game.cacaoFarm')) : 0;
        this.bonuses.cacaoFarm.cost = localStorage.getItem('game.cacaoFarmCost') ? parseInt(localStorage.getItem('game.cacaoFarmCost')) : initialCacaoFarmCost * Math.pow(1.15, this.bonuses.cacaoFarm.nb);
        this.bonuses.cacaoFarm.production = localStorage.getItem('game.cacaoFarmProduction') ? parseInt(localStorage.getItem('game.cacaoFarmProduction')) : 0;
        this.bonuses.wheatFarm.nb = localStorage.getItem('game.wheatFarm') ? parseInt(localStorage.getItem('game.wheatFarm')) : 0;
        this.bonuses.wheatFarm.cost = localStorage.getItem('game.wheatFarmCost') ? parseInt(localStorage.getItem('game.wheatFarmCost')) : initialWheatFarmCost * Math.pow(1.15, this.bonuses.wheatFarm.nb);
        this.bonuses.wheatFarm.production = localStorage.getItem('game.wheatFarmProduction') ? parseInt(localStorage.getItem('game.wheatFarmProduction')) : 0;
        this.bonuses.eggFarm.nb = localStorage.getItem('game.eggFarm') ? parseInt(localStorage.getItem('game.eggFarm')) : 0;
        this.bonuses.eggFarm.cost = localStorage.getItem('game.eggFarmCost') ? parseInt(localStorage.getItem('game.eggFarmCost')) : initialEggFarmCost * Math.pow(1.15, this.bonuses.eggFarm.nb);
        this.bonuses.eggFarm.production = localStorage.getItem('game.eggFarmProduction') ? parseInt(localStorage.getItem('game.eggFarmProduction')) : 0;

        this.resources.cacao = localStorage.getItem('game.cacao') ? parseInt(localStorage.getItem('game.cacao')) : 0;
        this.resources.wheat = localStorage.getItem('game.wheat') ? parseInt(localStorage.getItem('game.wheat')) : 0;
        this.resources.egg = localStorage.getItem('game.egg') ? parseInt(localStorage.getItem('game.egg')) : 0;
        this.resources.cacaoFarmPoint = localStorage.getItem('game.cacaoFarmPoint') ? parseInt(localStorage.getItem('game.cacaoFarmPoint')) : 0;
        this.resources.wheatFarmPoint = localStorage.getItem('game.wheatFarmPoint') ? parseInt(localStorage.getItem('game.wheatFarmPoint')) : 0;
        this.resources.eggFarmPoint = localStorage.getItem('game.eggFarmPoint') ? parseInt(localStorage.getItem('game.eggFarmPoint')) : 0;
        this.upgradeSpeedCost = localStorage.getItem('game.upgradeSpeedCost') ? parseInt(localStorage.getItem('game.upgradeSpeedCost')) : 4000;
        this.autoClickerInterval = localStorage.getItem('game.autoClickerInterval') ? parseInt(localStorage.getItem('game.autoClickerInterval')) : 1000;
    
    }


    buy(item) {
        if (this.clicks >= this.bonuses[item].cost) {
            this.clicks -= this.bonuses[item].cost;
            this.bonuses[item].nb += 1;
            this.bonuses[item].cost = Math.floor(this.bonuses[item].cost * 1.15);
            if (item === 'cacaoFarm') {
                this.bonuses.cacaoFarm.production += 1;
                this.resources.cacaoFarmPoint += this.bonuses.cacaoFarm.production;
            }
            if (item === 'wheatFarm') {
                this.bonuses.wheatFarm.production += 2;
                this.resources.wheatFarmPoint += this.bonuses.wheatFarm.production;
            }
            if (item === 'eggFarm') {
                this.bonuses.eggFarm.production += 3;
                this.resources.eggFarmPoint += this.bonuses.eggFarm.production;
            }
            if (item === 'autocliquer') {
                clearInterval(this.autoClicker);
                this.startAutoClicker();
            }
            this.save();
        } else {
            alert(`vous n'avez pas assez de points pour acheter un ${item}!`);
        }
    }
    

    click() {
        this.clicks += this.bonuses.multiplier.nb;
        this.save();
        this.paint();
    }

    paint() {
        this.label_counter.textContent = this.clicks;
    
        this.label_multiplier_cost.textContent = `Cout : ${this.bonuses.multiplier.cost}`;
        this.label_multiplier_nb.textContent = `multiplier : ${this.bonuses.multiplier.nb}`;
    
        this.label_autoclicker_cost.textContent = `Cout : ${this.bonuses.autocliquer.cost}`;
        this.label_autoclicker_nb.textContent = `autocliquer : ${this.bonuses.autocliquer.nb}`;
    
        this.label_cacaoFarm_cost.textContent = `Cout : ${this.bonuses.cacaoFarm.cost}`;
        this.label_cacaoFarm_nb.textContent = `cacao farm : ${this.bonuses.cacaoFarm.nb}`;
        this.label_cacaoPoint.innerHTML = `<img src="img/cacao.png" alt="cacao" style="width:20px;height:20px;"> ${this.resources.cacaoFarmPoint}`;
    
        this.label_cacao.innerHTML = `<img src="img/cacao.png" alt="cacao" style="width:20px;height:20px;"> ${this.resources.cacao}`;
        this.label_wheat.innerHTML = `<img src="img/wheat.png" alt="wheat" style="width:20px;height:20px;"> ${this.resources.wheat}`;
        this.label_egg.innerHTML = `<img src="img/egg.png" alt="oeuf" style="width:20px;height:20px;"> ${this.resources.egg}`;
    
        this.label_wheatFarm_cost.textContent = `Cout : ${this.bonuses.wheatFarm.cost}`;
        this.label_wheatFarm_nb.textContent = `wheat farm : ${this.bonuses.wheatFarm.nb}`;
        this.label_wheatPoint.innerHTML = ` <img src="img/wheat.png" alt="wheat" style="width:20px;height:20px;"> ${this.resources.wheatFarmPoint}`;
    
        this.label_eggFarm_cost.textContent = `Cout : ${this.bonuses.eggFarm.cost}`;
        this.label_eggFarm_nb.textContent = `egg farm : ${this.bonuses.eggFarm.nb}`;
        this.label_eggPoint.innerHTML = `<img src="img/egg.png" alt="oeuf" style="width:20px;height:20px;"> ${this.resources.eggFarmPoint}`;
        this.btn_upgradeSpeed.textContent = `upgrade speed : ${Math.floor(this.autoClickerInterval)} ms`
    
        if (this.clicks >= 100 || this.bonuses.autocliquer.nb >= 1) {
            this.btn_autoclicker.style.display = 'inline-block';
            this.label_autoclicker_cost.textContent = `Cout : ${this.bonuses.autocliquer.cost}`;
        } else {
            this.btn_autoclicker.style.display = 'none';
            this.label_autoclicker_cost.textContent = '';
        }
    
        if (this.clicks >= 1000 || this.bonuses.cacaoFarm.nb >= 1 || this.bonuses.wheatFarm.nb >= 1 || this.bonuses.eggFarm.nb >= 1) {
            document.getElementById('container-farm').style.display = 'inline-block';
            document.getElementById('container-ressource').style.display = 'inline-block';
        } else {
            document.getElementById('container-farm').style.display = 'none';
            document.getElementById('container-ressource').style.display = 'none';
        }
    
        if (this.clicks >= 10000 || this.autoClickerInterval <= 999) {
            document.getElementById('upgradeSpeed').style.display = 'inline-block';
            document.getElementById('upgradeSpeedCost').textContent = `Cout : ${this.upgradeSpeedCost}`;
        } else {
            document.getElementById('upgradeSpeed').style.display = 'none';
            document.getElementById('upgradeSpeedCost').textContent = '';
        }

        if (this.autoClickerInterval <= 50) {
            document.getElementById('upgradeSpeed').style.display = 'none';
            this.label_upgradeSpeed_cost.innerHTML = `vitesse de l'autocliqueur : ${this.autoClickerInterval} <br> la vitesse maximale a été atteinte.`;
        }
        this.rulesButton.addEventListener('click', () => {
            this.rulesPopup.style.display = 'block';
        });

        this.closePopup.addEventListener('click', () => {
            this.rulesPopup.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == this.rulesPopup) {
                this.rulesPopup.style.display = 'none';
            }
        });
    }

    initDOMElements() {
        this.img_cookie = document.getElementById('cookie');
        this.label_counter = document.getElementById('counter');

        this.container = document.getElementById('container');
        this.container_farm = document.getElementById('container-farm');

        this.btn_multiplier = document.getElementById('multiplier');
        this.label_multiplier_cost = document.getElementById('multiplierCost');
        this.label_multiplier_nb = document.getElementById('multiplierCounter');

        this.btn_autoclicker = document.getElementById('autoclicker');
        this.label_autoclicker_cost = document.getElementById('autoclickerCost');
        this.label_autoclicker_nb = document.getElementById('autoclickerCounter');

        this.btn_cacaoFarm = document.getElementById('cacaoFarm');
        this.label_cacaoFarm_cost = document.getElementById('cacaoFarmCost');
        this.label_cacaoFarm_nb = document.getElementById('cacaoFarmCounter');
        this.label_cacaoPoint = document.getElementById('cacaoFarmPoint');

        this.label_cacao = document.getElementById('cacao');
        this.label_wheat = document.getElementById('wheat');
        this.label_egg = document.getElementById('egg');

        this.btn_claimFarm = document.getElementById('claim-btn');

        this.btn_wheatFarm = document.getElementById('wheatFarm');
        this.label_wheatFarm_cost = document.getElementById('wheatFarmCost');
        this.label_wheatFarm_nb = document.getElementById('wheatFarmCounter');
        this.label_wheatPoint = document.getElementById('wheatFarmPoint');

        this.btn_eggFarm = document.getElementById('eggFarm');
        this.label_eggFarm_cost = document.getElementById('eggFarmCost');
        this.label_eggFarm_nb = document.getElementById('eggFarmCounter');
        this.label_eggPoint = document.getElementById('eggFarmPoint');

        this.btn_craft = document.getElementById('craft');
        this.btn_upgradeSpeed = document.getElementById('upgradeSpeed');
        this.label_upgradeSpeed_cost = document.getElementById('upgradeSpeedCost');
        this.cookie = document.getElementById('cookie');
        this.fallingCookiesContainer = document.getElementById('falling-cookies-container');
        this.anvilSound = new Audio('music/anvil.mp3');
        this.chestSound = new Audio('music/chest.mp3');
        this.pickSound = new Audio('music/pick.mp3');
        this.rulesButton = document.getElementById('rules');
        this.rulesPopup = document.getElementById('rules-popup');
        this.closePopup = document.querySelector('.close');

        this.backgroundMusic = document.getElementById('background-music');
  
    }

    loadEvents() {
        document.getElementById('reset').addEventListener('click', () => {
            localStorage.clear();
            location.reload();
        });

        this.img_cookie.addEventListener('click', () => { 
            this.click(); 
            this.createFallingCookie();
            this.playPickSound();
        });

        this.btn_multiplier.addEventListener('click', () => { 
            this.buy('multiplier'); 
            this.paint(); 
        });

        this.btn_autoclicker.addEventListener('click', () => { 
            this.buy('autocliquer'); 
            this.paint(); 
        });

        this.btn_cacaoFarm.addEventListener('click', () => { 
            this.buy('cacaoFarm'); 
            this.paint(); 
        });

        this.btn_wheatFarm.addEventListener('click', () => { 
            this.buy('wheatFarm'); 
            this.paint(); 
        });

        this.btn_eggFarm.addEventListener('click', () => { 
            this.buy('eggFarm'); 
            this.paint(); 
        });

        this.btn_claimFarm.addEventListener('click', () => { 
            this.claimFarm(); 
            this.paint(); 
            this.playChestSound();
        });

        this.btn_craft.addEventListener('click', () => { 
            this.craft(); 
            this.playAnvilSound();
        });

        this.btn_upgradeSpeed.addEventListener('click', () => { 
            this.reduceAutoClickerInterval(); 
            this.paint(); 
        });
    }
    playAnvilSound() {
        this.anvilSound.play();
    }

    playChestSound() {
        this.chestSound.play();
    }

    playPickSound() {
        this.pickSound.play();
    }

    startBackgroundMusic() {
        this.backgroundMusic.play();
    }

    createFallingCookie(isMini = false) {
        const cookie = document.createElement('div');
        cookie.classList.add('cookie-fall');
        if (isMini) {
            cookie.style.width = '15px';
            cookie.style.height = '15px';
        }
        cookie.style.left = `${Math.random() * 90}vw`;
        this.fallingCookiesContainer.appendChild(cookie);

        setTimeout(() => {
            cookie.remove();
        }, 2000);
    }

    claimFarm() {
        this.resources.wheat += this.resources.wheatFarmPoint;
        this.resources.cacao += this.resources.cacaoFarmPoint;
        this.resources.egg += this.resources.eggFarmPoint;
        this.resources.cacaoFarmPoint = 0;
        this.resources.wheatFarmPoint = 0;
        this.resources.eggFarmPoint = 0;

        this.save();
        this.paint();
    }

    craft() {
        const minResource = Math.min(this.resources.cacao, this.resources.wheat, this.resources.egg);
        if (minResource > 0) {
            this.clicks += minResource * 10;
            this.resources.cacao -= minResource;
            this.resources.wheat -= minResource;
            this.resources.egg -= minResource;
            this.save();
            this.paint();
        } else {
            alert("Vous n'avez pas assez de ressources pour crafter !");
        }
    }

    


    startAutoClicker() {
        if (this.bonuses.autocliquer.nb >= 1) {
            this.autoClicker = setInterval(() => {
                this.clicks += this.bonuses.autocliquer.nb;
                this.resources.cacaoFarmPoint += this.bonuses.cacaoFarm.production;
                this.resources.wheatFarmPoint += this.bonuses.wheatFarm.production;
                this.resources.eggFarmPoint += this.bonuses.eggFarm.production;
                this.paint();
                this.save();
                this.createFallingCookie(true); // Crée des mini cookies
            }, this.autoClickerInterval);
        }
    }
    reduceAutoClickerInterval() {
        if (this.clicks >= this.upgradeSpeedCost) {
            this.clicks -= this.upgradeSpeedCost;
            this.upgradeSpeedCost = Math.floor(this.upgradeSpeedCost * 1.6);
            clearInterval(this.autoClicker);
            if (this.autoClickerInterval >= 50) {
                this.autoClickerInterval = Math.max(50, this.autoClickerInterval / 1.4)
                this.startAutoClicker();
                this.paint();
            } 


        } else {
            alert("Vous n'avez pas assez de points pour acheter cette amélioration !");
        }
    }

    
}

document.addEventListener('DOMContentLoaded', (event) => {
    const game = new Game();
    game.startAutoClicker();

});