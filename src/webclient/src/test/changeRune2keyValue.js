let rune = require('./8_24_1/runesReforged');

rune = rune.rune;

let runeId2Name = {};

rune.map((item) => {
    runeId2Name[item.id] = item.key
});

console.log(runeId2Name);