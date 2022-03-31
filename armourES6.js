class armor {
    constructor(armorName, armorPlace, armorClass, armorTier) 
    this.armorName = AmorName;
    this.armorPlace = armorPlace;
    this.armorClass = [];
    this.armortier = armorTier;
    this.isMasterworked = false
    this.attributes = {
        mobility: Math.floor(Math.random() * 21),
        strength: Math.floor(Math.random() * 21),
        resilience: Math.floor(Math.random() * 21),
        discipline: Math.floor(Math.random() * 21),
    };
}

class MasterworkedArmor extends Armor {
    constructor(armorName, armorPlace, armorClass)
        
        this.attributes = {
            mobility: Math.floor(Math.random() * 100 + 20),
            stregth: Math.floor(Math.random() * 100 + 20,
            resilience: Math.floor(Math.random() * 100 + 20,
            discipline: Math.floor(Math.random() * 100 + 20,
        }
        this.mods = {
            slot1: [],
            slot2: [],
            slot3: [],
            slot4: [],
        }
        this.isMasterworked = true
        let mods=  //Use import export????
        };
}

let armor0 = new Armor('Tangled Web Armor', 'Leg', 'Warlock', 'Legendary',)

default function newArmor('armorName', 'armorPlace', 'armorClass', 'armorTier', 'isMasterworked', ' ',' ' ) 