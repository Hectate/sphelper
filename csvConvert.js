var fs = require('fs');
//var o = require(__dirname + "/expert_cr2.csv");

//var o = [];
var text = fs.readFileSync(__dirname + "/json/techno_count.csv");
var array = text.toString().split(",");
//console.log(array);
var o = {};
parseInput(array);
writeJSON(o,"techno_count");

function parseInput(array) {
        for(var i=0; i < array.length; i+=8) {
            console.log(array.length + "/" + i);
            var ii=0;
            o[array[i]] = {};
            o[array[i]].level = array[i+ii]; ii++;
            o[array[i]].s0 = array[i+ii]; ii++;
            o[array[i]].s1 = array[i+ii]; ii++;
            o[array[i]].s2 = array[i+ii]; ii++;
            o[array[i]].s3 = array[i+ii]; ii++;
            o[array[i]].s4 = array[i+ii]; ii++;
            o[array[i]].s5 = array[i+ii]; ii++;
            o[array[i]].s6 = array[i+ii];
        }
}

function writeJSON(object, filename) {
	fs.writeFileSync(  __dirname + "/json/" + filename + ".json", JSON.stringify(object, null, 2), console.log("Saved "+ filename + ".json"));
}