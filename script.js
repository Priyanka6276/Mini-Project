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

}

class AlienShip {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }


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

let reaperArray = [reaper1, reaper2, reaper3, reaper4, reaper5, reaper6]


//how the game will run
const game = {
    reaperShips: [reaper1, reaper2, reaper3, reaper4, reaper5, reaper6],
    humanShipHealth: [normandy.hull],
    setUp: () => {
        // reaperShips.push(reaperArray)
        console.log(`==== ${normandy.name} VS The ${game.reaperShips[0].name} ====`)
    },
    attack: () => {
        if (Math.random() < normandy.accuracy) { //determines if the human ship goes first
            console.log(`${normandy.name} attacks!`)
            let alienNewHP = game.reaperShips[0].hull - normandy.firepower  //the health of the alienship after the attack
            if (alienNewHP <= 0) { // if the alien ship dies
                console.log(`${game.reaperShips[0].name} has been defeated!`)
                game.reaperShips.shift() //takes out the first alien from the array
                console.log(`REMAINING REAPER SHIPS:`)
                console.log(game.reaperShips)
            } else {
                game.reaperShips[0].hull = alienNewHP //if alien ship survives the attack
                console.log(`${game.reaperShips[0].name} has ${game.reaperShips[0].hull} hull`)
                if (Math.random() < game.reaperShips[0].accuracy) { //after human ship attacks, alien attacks if passes test
                    console.log(`${game.reaperShips[0].name} attacks!`)
                    let humanNewHP = normandy.hull - game.reaperShips[0].firepower // the health of the human ship after the alien attack
                    if (humanNewHP <= 0) { //if the normandy is defeated
                        console.log(`${normandy.name} has been defeated!`)
                        console.log('The galaxy is lost.')
                    } else {
                        normandy.hull = humanNewHP //reassigns the human ship health
                        console.log(`${normandy.name} has ${normandy.hull} hull`)
                    }
                } else {
                    console.log(`${game.reaperShips[0].name} misses!`)
                }
            }
        } else { //human ship misses so the alien ship attacks
            console.log(`The ${normandy.name} missed!`) 
            console.log(`${game.reaperShips[0].name} attacks!`)
            let humanNewHP = normandy.hull - game.reaperShips[0].firepower //new health of human ship
            if (humanNewHP <= 0) {
                console.log(`${normandy.name} has been defeated!`)
                console.log('The galaxy is lost.')
            } else {
                normandy.hull = humanNewHP
                console.log(`${normandy.name} has ${humanNewHP} hull`)
            }
        }

    }


}


game.setUp()
game.attack()
game.setUp()
game.attack()
game.setUp()
game.attack()
game.setUp()
game.attack()
game.setUp()
game.attack()
game.setUp()
game.attack()
game.setUp()
game.attack()
game.setUp()
game.attack()
game.setUp()
game.attack()





