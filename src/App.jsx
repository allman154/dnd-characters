import React from "react";
import './App.css'
import CharacterCard from './CharacterCard'
import characterList from './characterList'
import weaponList from './weaponList'
import armorList from './armorList'
import potionList from './potionList'

function App() {

  const [characters, setCharacters] = React.useState(characterList)

  function handleIncrement(inId) {
    setCharacters(prevCharacters => prevCharacters.map(
      char => char.id === inId ? { ...char, currentHp: char.currentHp + 1 } : char))
  }
  function handleDecrement(inId) {
    setCharacters(prevCharacters => prevCharacters.map(
      char => char.id === inId ? { ...char, currentHp: char.currentHp - 1 } : char))
  }

  function handleHpChange(inId, inHpChange) {
    setCharacters(prevCharacters => prevCharacters.map(
      char => char.id === inId ? {
        ...char, currentHp: inHpChange === "INC" ?
          char.currentHp + 1 : char.currentHp - 1
      } : char
    ))
  }

  function handleMinMaxHp(inId, inMode) {
    setCharacters(prevCharacters => prevCharacters.map(
      char => char.id === inId ? { ...char, currentHp: inMode === "MAX" ? char.maxHp : 0 } : char))
  }

  function handleDeathSaveIncrease(inId, inDSave) {
    setCharacters(prevCharacters => prevCharacters.map(
      char => {
        if (char.id !== inId) return char;
        if (char.id === inId) {
          if (inDSave === "FAIL") {
            if (char.deathSaves.failure === 2) {
              return ({ ...char, deathSaves: { success: 0, failure: 0 }, isAlive: false })
            }
            else {
              return ({ ...char, deathSaves: { ...char.deathSaves, failure: char.deathSaves.failure + 1 } })
            }
          }
          if (inDSave === "SAVE") {
            if (char.deathSaves.success === 2) {
              return ({ ...char, deathSaves: { success: 0, failure: 0 }, isAlive: true, currentHp: 1 })
            }
            else {
              return ({ ...char, deathSaves: { ...char.deathSaves, success: char.deathSaves.success + 1 } })
            }
          }
          return char
        }
      }
    ))
  }

  function handleCritDeathSaveRoll(inId, inRoll) {
    setCharacters(prevCharacters => prevCharacters.map(
      char => {
        if (char.id === inId) {
          if (inRoll === "1") {
            if (char.deathSaves.failure === 0) {
              return (
                { ...char, deathSaves: { ...char.deathSaves, failure: 2 } }
              )
            }
            else {
              return (
                {
                  ...char, deathSaves: { success: 0, failure: 0 },
                  isAlive: false
                });
            }
          }
          else if (inRoll === "20") {
            if (char.deathSaves.success === 0) {
              return (
                { ...char, deathSaves: { ...char.deathSaves, success: 2 }, }
              )
            }
            else {
              return (
                {
                  ...char, deathSaves: { success: 0, failure: 0 },
                  isAlive: true
                });
            }
          }
        }
        return char;
      }
    ))
  }
  const characterCards = characters.map((character) => {
    const charWeapons = weaponList.filter(w => character.charWeapons.includes(w.weaponId));
    const charArmor = armorList.filter(a => character.charArmor.includes(a.armorId));
    const charPotions = potionList.filter(p => character.potions.includes(p.potionId));


    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        charName={character.charName}
        charClass={character.charClass}
        maxHp={character.maxHp}
        currentHp={character.currentHp}
        imgSrc={character.imgSrc}
        charArmor={charArmor}
        charWeapons={charWeapons}
        charPotions={charPotions}
        charLevel={character.charLevel}
        deathSaves={character.deathSaves}
        isAlive={character.isAlive}
        onHpChange={(inHpChange) => handleHpChange(character.id, inHpChange)}
        onMinMaxHealth={(minMax) => handleMinMaxHp(character.id, minMax)}
        onDeathSaveCrit={(inRoll) => handleCritDeathSaveRoll(character.id, inRoll)}
        onDeathSaveRoll={(inDSave) => handleDeathSaveIncrease(character.id, inDSave)} />
    )
  }) 
  return (
    <>
      <header>
        <h3>Dungeons & Dragons Characters</h3>
      </header>
      <main>
        {characterCards}
      </main>
    </>
  )
}
export default App
