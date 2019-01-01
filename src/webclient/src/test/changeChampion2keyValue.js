const champion = require('./8_24_1/champion');

const {data} = champion.champion;

let championId2Name = {};

for (let key in data) {
    championId2Name[data[key]["key"]]={
        "id":data[key]["id"],
        "name":data[key]["name"]
    };
}

console.log(championId2Name);