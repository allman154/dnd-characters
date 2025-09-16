import React from "react";

export default function CharacterCard({
    imgSrc,
    charName,
    charClass,
    maxHp,
    currentHp,
    charWeapons = [],
    charArmor = [],
    charPotions = [],
    charLevel,
    deathSaves,
    isAlive,
    onHpChange,
    onMinMaxHealth,
    onDeathSaveCrit,
    onDeathSaveRoll, }) {
    return (
        <>
            <article className="card">
                <div className="card-image">
                    <img src={imgSrc} alt={charName} />
                    <div className="card-image-overlay">
                        <span className="card-image-overlay-title">{charName}</span>
                        {isAlive && isAlive}
                    </div>
                </div>
                <div class="EmptyBox10" />
                <div className="card-body">
                    <h2><span className="charTitle">Level {charLevel} - {charClass}</span></h2>
                    <div className="EmptyBox2" />
                    <div className="Separator" />
                    <div className="EmptyBox10" />
                    <div className="info-row">
                        <div className="hp-col">
                            <label><b><span className="Red">&#10084;</span> Max HP </b></label>
                            <span className="health-number maxHp Blue"><b>{maxHp}</b></span>
                        </div>
                        <div className="hp-col">
                            <label><b><span className="Red">&#10084;</span> Current HP</b></label>
                            <span className={`health-number  
                                        ${currentHp > maxHp ? "Green" :
                                    currentHp === maxHp ? "Blue" :
                                        currentHp <= maxHp / 4 ? "Red" : "Orange"}`}><b>{currentHp}</b></span>
                            <div className="hp-buttons">
                                <button className="small-round-button grayBack" onClick={() => onMinMaxHealth("MIN")}>MIN</button>
                                <button className="small-round-button grayBack plusMinus" onClick={() => onHpChange("DEC")}>−</button>
                                <button className="small-round-button grayBack plusMinus" onClick={() => onHpChange("INC")}>+</button>
                                <button className="small-round-button grayBack" onClick={() => onMinMaxHealth("MAX")}>MAX</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="EmptyBox10" />
                        <div className="Separator" />
                        <div className="EmptyBox10" />
                        <div className="content-column">
                            {charArmor.length > 0 && (<><div className="rounded-panel"><b><span>&#x1F6E1;&#xFE0F;</span> Armor:</b><br /><ul>{charArmor.map(a => <li key={a.armorId}>{a.armorName}</li>)}</ul></div></>)}
                            {charWeapons.length > 0 && (<><div className="rounded-panel"><b><span>&#x2694;&#xFE0F;</span> Weapons:</b><br /><ul>{charWeapons.map(w => <li key={w.weaponId}>{w.weaponName}</li>)}</ul></div></>)}
                            {charPotions.length > 0 && (<><div className="rounded-panel"><b><span>&#x1F9F4;</span> Potions:</b><br /><ul>{charPotions.map(p => <li key={p.potionId}>{p.potionName}</li>)}</ul></div></>)}
                        </div>
                    </div>
                </div>
                {currentHp === 0 && isAlive ? <div className="card-footer">
                    <section className="rounded-panel">
                        <div className="flex-content">
                            <button className="round-button greenBack" onClick={() => onDeathSaveCrit("20")}>NAT 20</button>
                            <h3 className="DarkRed">Death Saves</h3>
                            <button className="round-button redBack" onClick={() => onDeathSaveCrit("1")}>NAT 1</button>
                        </div>
                        <div className="EmptyBox20" />
                        <div className="info-row">
                            <div>
                                <b>Successes</b>
                                {deathSaves.success}
                                <div className="EmptyBox5" />
                                <button className="small-round-button grayBack plusMinus"
                                    onClick={() => onDeathSaveRoll("SAVE")}>+</button>
                            </div>
                            <div>
                                <b>Failures</b>
                                {deathSaves.failure}
                                <div className="EmptyBox5" />
                                <button className="small-round-button grayBack plusMinus"
                                    onClick={() => onDeathSaveRoll("FAIL")}>+</button>
                            </div>
                        </div>
                    </section>
                </div> : null}
            </article>
        </>
    )
}