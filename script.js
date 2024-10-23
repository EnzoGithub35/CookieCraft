class CookieClicker {
    constructor() {
        this.clicks = 0;
        this.bonuses = {
            autocliquer: { nb: 1 },
            cacaoFarm: { production: 1 },
            wheatFarm: { production: 1 },
            eggFarm: { production: 1 }
        };
        this.resources = {
            cacaoFarmPoint: 0,
            wheatFarmPoint: 0,
            eggFarmPoint: 0
        };
        this.autoClickerInterval = 1000;
        this.upgradeSpeedCost = 50;
        this.init();
    }

    init() {
        document.getElementById('upgradeSpeed').addEventListener('click', () => this.upgradeSpeed());
        this.startAutoClicker();
    }

    startAutoClicker() {
        this.autoClicker = setInterval(() => {
            this.clicks += this.bonuses.autocliquer.nb;
            this.resources.cacaoFarmPoint += this.bonuses.cacaoFarm.production;
            this.resources.wheatFarmPoint += this.bonuses.wheatFarm.production;
            this.resources.eggFarmPoint += this.bonuses.eggFarm.production;
            this.paint();
            this.save();
        }, this.autoClickerInterval);
    }

    upgradeSpeed() {
        if (this.clicks >= this.upgradeSpeedCost) {
            this.clicks -= this.upgradeSpeedCost;
            this.upgradeSpeedCost *= 2; // Increase the cost for the next upgrade
            clearInterval(this.autoClicker);
            this.autoClickerInterval = Math.max(100, this.autoClickerInterval - 100); // Decrease interval, minimum 100ms
            this.startAutoClicker();
            this.paint();
        }
    }

    paint() {
        document.getElementById('counter').innerText = this.clicks;
        document.getElementById('upgradeSpeedCost').innerText = `Cout : ${this.upgradeSpeedCost}`;

    }

    save() {
        // Save the game state
    }
}

const game = new CookieClicker();