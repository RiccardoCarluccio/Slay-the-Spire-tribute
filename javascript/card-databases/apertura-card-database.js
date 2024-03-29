"use strict"

const aperturaCardDatabase = [
  {
    cardName: "Jab",
    energyCost: 2,
    cardFunction: jabCard,
    cardType: "attack",
    attackType: "left attack",
    stance: "left",
    stanceDamageBonus: 1,
    stanceCombo: "right",
    baseDamage: 1,
    ADscaling: 0.5,
    APscaling: 0.2,
    stanceDescription: ["Left"],
  },
  {
    cardName: "High Guard",
    energyCost: 2,
    cardFunction: highGuardCard,
    cardType: "block",
    blockType: "guard",
    stance: "balanced",
    baseBlock: 3,
    DEFscaling: 1,
    DEXscaling: 0,
    stanceDescription: ["Balanced"],
  },
  {
    cardName: "Cross Punch",
    energyCost: 2,
    cardFunction: crossPunchCard,
    cardType: "attack",
    attackType: "right attack",
    stance: "right",
    stanceDamageBonus: 2,
    stanceCombo: "left",
    baseDamage: 1,
    ADscaling: 0.7,
    APscaling: 0.2,
    stanceDescription: ["Right"],
    rightSyncroTrue: true,
    rightSyncroDamage: 4,
  },
  {
    cardName: "Right Shoulder Duck",
    energyCost: 2,
    cardFunction: rightShoulderDuck,
    cardType: "block",
    blockType: "dodge",
    stance: "right",
    stanceCombo: "left",
    baseBlock: 0.5,
    DEFscaling: 0,
    DEXscaling: 0.5,
    stanceDescription: ["Right"],
  }
]