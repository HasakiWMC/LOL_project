const spell = require('./8_24_1/summonerSpell');

const {data} = spell.spell;

let spellId2Name = {};

for (let key in data) {
    spellId2Name[data[key]["key"]]=key;
}

console.log(spellId2Name);