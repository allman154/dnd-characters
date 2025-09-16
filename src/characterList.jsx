import crashImg from '../public/images/CrashSM.png'
import thornImg from '../public/images/ThornSM.png'
import dornImg from '../public/images/DornSM.png'
import lornImg from '../public/images/LornSM.png'
import loreleiImg from '../public/images/LoreleiSM.png'
import ariaImg from '../public/images/AriaSM.png'
import chesterImg from '../public/images/ChesterSM.png'
import grizzImg from '../public/images/GrizzSM.png'
import nanbaImg from '../public/images/NanbaSM.png'
import maeveImg from '../public/images/MaeveSM.png'
import grilickImg from '../public/images/GrilickSM.png'

const characterList = [

    {
        id: 1,
        charName: "Crash",
        charClass: "Rogue/Druid",
        maxHp: 65,
        currentHp: 65,
        imgSrc: crashImg,
        charWeapons: [11, 26, 28],        // Light Crossbow, Rapier, Shortsword
        charArmor: [2],                    // Leather (druids avoid metal; leather is common)
        potions: [1, 7],                   // Healing, Fire Breath
        charLevel: 7, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 3,
        charName: "Thorn",
        charClass: "Ranger/Wizard",
        maxHp: 70,
        currentHp: 70,
        imgSrc: thornImg,
        charWeapons: [15, 30],             // Battleaxe, War Pick
        charArmor: [3, 13],                // Studded Leather, Shield
        potions: [1, 9],                   // Healing, Water Breathing
        charLevel: 7, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 4,
        charName: "Lorelei",
        charClass: "Wizard",
        maxHp: 40,
        currentHp: 40,
        imgSrc: loreleiImg,
        charWeapons: [2, 8, 11],           // Dagger, Quarterstaff, Light Crossbow
        charArmor: [],                     // Wizards typically no armor
        potions: [1, 5, 11],               // Healing, Invisibility, Mind Reading
        charLevel: 7, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 5,
        charName: "Lorn",
        charClass: "Ranger",
        maxHp: 75,
        currentHp: 75,
        imgSrc: lornImg,
        charWeapons: [36, 28],             // Longbow, Shortsword
        charArmor: [3],                    // Studded Leather
        potions: [1, 7],                   // Healing, Fire Breath
        charLevel: 7, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 6,
        charName: "Dorn",
        charClass: "Fighter",
        maxHp: 70,
        currentHp: 70,
        imgSrc: dornImg,
        charWeapons: [22, 35],             // Longsword, Heavy Crossbow
        charArmor: [10, 13],               // Chain Mail, Shield
        potions: [1, 10],                  // Healing, Heroism
        charLevel: 7, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 7,
        charName: "Aria",
        charClass: "Bard",
        maxHp: 48,
        currentHp: 48,
        imgSrc: ariaImg,
        charWeapons: [26, 13, 2],          // Rapier, Shortbow, Dagger
        charArmor: [3],                    // Studded Leather
        potions: [1, 10],                  // Healing, Heroism
        charLevel: 5, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 8,
        charName: "Chester",
        charClass: "Samurai",
        maxHp: 48,
        currentHp: 48,
        imgSrc: chesterImg,
        charWeapons: [22, 36],             // Longsword (katana analog), Longbow
        charArmor: [8],                    // Half Plate
        potions: [1, 6],                   // Healing, Speed
        charLevel: 3, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 9,
        charName: "Grizz",
        charClass: "Barbarian",
        maxHp: 55,
        currentHp: 55,
        imgSrc: grizzImg,
        charWeapons: [18, 4],              // Greataxe, Handaxe
        charArmor: [],                     // Often unarmored; you could use Hide (4) if you prefer
        potions: [1, 7],                   // Healing, Fire Breath
        charLevel: 5, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 10,
        charName: "Nanba",
        charClass: "Druid",
        maxHp: 48,
        currentHp: 48,
        imgSrc: nanbaImg,
        charWeapons: [27, 8, 14],          // Scimitar, Quarterstaff, Sling
        charArmor: [4, 13],                // Hide, Shield (non-metal)
        potions: [1, 9, 12],               // Healing, Water Breathing, Gaseous Form
        charLevel: 5, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 11,
        charName: "Maeve",
        charClass: "Sorcerer",
        maxHp: 48,
        currentHp: 48,
        imgSrc: maeveImg,
        charWeapons: [2, 12, 11],          // Dagger, Dart, Light Crossbow
        charArmor: [],                     // Sorcerers typically no armor
        potions: [1, 6, 11],               // Healing, Speed, Mind Reading
        charLevel: 5, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
    {
        id: 12,
        charName: "Gril'Ick",
        charClass: "Fighter",
        maxHp: 60,
        currentHp: 60,
        imgSrc: grilickImg,
        charWeapons: [19, 11],             // Greatsword, Light Crossbow
        charArmor: [11, 13],               // Splint, Shield
        potions: [1, 3],                   // Healing, Superior Healing
        charLevel: 5, 
        deathSaves: {success: 0, failure: 0},
        isAlive: true,
    },
]

export default characterList;