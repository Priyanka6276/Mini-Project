//====================PLANNING================================
/** Mass Effect theme.
 * Set properties for SSV Normandy with classes
 * Set properties for Reapers with classes (6 reapers)
 *      *hull is the same as hitpoints. If hull reaches 0 or less, the     ship is destroyed
 *          -have the console say GAME OVER if the Normandy loses and when a Reaper ship loses have the console say 'Reaper ship 1 has lost' and so on until it says "YOU WIN!"
 *          -the Reapers have a range hp
        *firepower is the amount of damage done to the hull of the target with a successful hit
            -have the console say how much damage the opponent received. Also have the console say the remaining hull number. 
        *accuracy is the chance between 0 and 1 that the ship will hit its target
            -each opponent has their own accuracy. Each Reaper will have a random accuracy
 * The Normandy will attack the Reapers if it's accuracy if equal or above the Reaper's accuracy
 * When the Normandy attacks the Reapers, if it takes downs the Reapers than it moves on to the next Reaper. If it doesn't take down the Reaper, then the Reaper moves.
 * If the Normandy loses than the game is over.
 */




class SystemsAlliance {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    // newHull(alienShip) {
    //     let newHP = this.hull - alienShip.firepower
    // }

    // attack(alienShip) {
    //     if (this.accuracy > Math.random()) {
    //         const newHull = alienShip.hull - this.firepower
    //         if (newHull <= 0) {
    //             alienShip.hull = 0
    //             console.log(`The ${this.name} has defeated ${alienShip.name}`)
    //         } else {
    //             alienShip.hull = newHull
    //             console.log(`The ${this.name} attacked! ${alienShip.name}'s hull is ${alienShip.hull}`)
    //         }
    //     } else {
    //         console.log(`The ${this.name} misses.`)
    //         setTimeout(() => {
    //             alienShip.attack(this)
    //         }, 2000)
    //     }

    // }
}

class AlienShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    // newHull(humanShip) {
    //     let newHP = this.hull - humanShip.firepower
    //     console.log(newHP)
    // }
    //this attacks the other ship
    // attack(humanShip) {
    //     if (this.accuracy > Math.random()) {
    //         const newHull = humanShip.hull - this.firepower
    //         if (newHull <= 0) {
    //             humanShip.hull = 0
    //             console.log(`${this.name} has defeated ${humanShip.name}`)
    //         } else {
    //             humanShip.hull = newHull
    //             console.log(`The ${this.name} attacked! ${humanShip.name}'s hull is ${humanShip.hull}`)
    //         }
    //     } else {
    //         console.log(`The ${this.name} misses.`)
    //         setTimeout(() => {
    //             humanShip.attack(this)
    //         }, 2000)

    //     }

    // }
}

//**this helps get a random number between the min and max values


function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min
}

function randomAccuracy(min, max) {
    return Math.random() * (max - min) + min
}


const normandy = new SystemsAlliance('Normandy', 20, 5, 0.7)

const reaper1 = new AlienShip('Reaper 1', randomNumber(2, 6), randomNumber(1, 4), randomAccuracy(0.6, 0.8))

const reaper2 = new AlienShip('Reaper 2', randomNumber(2, 6), randomNumber(1, 4), randomAccuracy(0.6, 0.8))

const reaper3 = new AlienShip('Reaper 3', randomNumber(2, 6), randomNumber(1, 4), randomAccuracy(0.6, 0.8))

const reaper4 = new AlienShip('Reaper 4', randomNumber(2, 6), randomNumber(1, 4), randomAccuracy(0.6, 0.8))

const reaper5 = new AlienShip('Reaper 5', randomNumber(2, 6), randomNumber(1, 4), randomAccuracy(0.6, 0.8))

const reaper6 = new AlienShip('Reaper 6', randomNumber(2, 6), randomNumber(1, 4), randomAccuracy(0.6, 0.8))

// let reaperArray = [reaper1, reaper2, reaper3, reaper4, reaper5, reaper6]


//how the game will run
const game = {
    reaperShips: [reaper1, reaper2, reaper3, reaper4, reaper5, reaper6],
    humanShipHealth: [normandy.hull], 
    setUp: () => {
        // reaperShips.push(reaperArray)
        console.log(`==== ${normandy.name} VS The ${game.reaperShips[0].name} ====`)
        console.log(`${game.reaperShips[0].name}: ${game.reaperShips[0].hull}`)
        console.log(`${normandy.name}: ${normandy.hull}`)
    },
    attack: () => {
        if(Math.random() < normandy.accuracy){
            console.log(`${normandy.name} attacks!`)
            let alienNewHP = game.reaperShips[0].hull - normandy.firepower
            if(alienNewHP <= 0) {
                console.log(`${game.reaperShips[0].name} has been defeated!`)
                game.reaperShips.shift()
                console.log(`REMAINING REAPER SHIPS:`)
                console.log(game.reaperShips)
            } else {
                console.log (`${game.reaperShips[0].name} has ${alienNewHP} hull`)
            }
        } else{
            console.log(`${game.reaperShips[0].name} attacks!`)
            let humanNewHP = normandy.hull - game.reaperShips[0].firepower
            if(humanNewHP <= 0) {
                console.log(`${normandy.name} has been defeated!`)
                console.log('The galaxy is lost.')
            } else {
                console.log (`${normandy.name} has ${humanNewHP} hull`)
            }
        }

    }


}


game.setUp()
game.attack()
game.setUp()
game.attack()





