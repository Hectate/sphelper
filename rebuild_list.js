/*
This was simply a utility file run to re-build the spell list from the original
JSON format into a different structure and then re-save to a new JSON.
I have since hand-edited the output for some additional updates, so don't expect
to be able to run this and get the same thing as in the new_list.json file.
I'm keeping this here for future reference.
- Nathaniel 'Hectate' Mitchell
released under MIT license
*/
var fs = require('fs');
var o = require(__dirname + "/json/spells.json");
/* var n = {
    "0":[],
    "1":[],
    "2":[],
    "3":[],
    "4":[],
    "5":[],
    "6":[],
    "m":[],
    "s":[]
}; */
n = [];

for(var i in o) {
    if(o[i].Classes.startsWith('Mystic',0)) {
        console.log(i + ' is a ' + o[i].Classes[7] + ' Mystic spell.');
        //n[o[i].Classes[7]].push(
        n.push(
            {
                'name':i,
                'mystic':o[i].Classes[7],
                'castingTime':o[i].CastingTime,
                'shortText':o[i].SpellListDescription,
                'duration':o[i].Duration,
                'level':o[i].Level,
                'longText':o[i].Description,
                'range':o[i].Range,
                'save':o[i].SavingThrow,
                'school':o[i].School,
                'source':o[i].Source,
                'page':o[i].PageNumber,
                'resistance':o[i].SpellResistance,
                'target':o[i].TargetsEffectArea
            }
        );
        if(o[i].Classes.startsWith('Technomancer',8)) {
            console.log(i + ' is also a ' + o[i].Classes[21] + ' Technomancer spell.');
            n[n.length-1].technomancer = o[i].Level;
        }
    }
    else if(o[i].Classes.startsWith('Technomancer',0)) {
        console.log(i + ' is a Technomancer spell.');
        n.push(
            {
                'name':i,
                'castingTime':o[i].CastingTime,
                'shortText':o[i].SpellListDescription,
                'duration':o[i].Duration,
                'level':o[i].Level,
                'longText':o[i].Description,
                'range':o[i].Range,
                'save':o[i].SavingThrow,
                'school':o[i].School,
                'source':o[i].Source,
                'page':o[i].PageNumber,
                'resistance':o[i].SpellResistance,
                'target':o[i].TargetsEffectArea,
                'technomancer':o[i].Level
            }
        );
    }
}

//writeJSON(n,"new_list");

function writeJSON(object,filename) {
	fs.writeFileSync(  __dirname + "/" + filename + ".json", JSON.stringify(object, null, 2), console.log("Saved "+ filename + ".json"));
	return;
}