const { response } = require("express");
const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("https");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname+"/views");
Id = 1;
app.use(express.static("public"));
 
 
app.get('/', (req, res) =>{
    const helper = [];
    const url = "https://superheroapi.com/api.php/1328743514207013/"+Id;
    https.get(url, (response)=>{
        response.on("data", (data) =>{
            helper.push(data);
        });
        response.on("fin",()=> {
            const superDataAux = Buffer.concat(helper);
            console.log(superDataAux)
            const superData = JSON.parse(superDataAux);
            console.log(superData)
            var superImage = superData.image.url;
            var superID = superData.id;
            var superName = superData.name;
            var superFullname = superData.biography["full-name"];
            var superintelligence = superData.powerstats.intelligence;
            var superStrength = superData.powerstats.strength;
            var superSpeed = superData.powerstats.speed;
            var superDurability = superData.powerstats.durability;
            var superPower = superData.powerstats.power;
            var superCombat = superData.powerstats.combat;
            var superPlace = superData.biography["place-of-birth"];
            var superBiography = superData.biography["first-appearance"] + superData.biography.publisher;
            var superAliases = superData.biography.aliases;
            var superGender = superData.appearance.gender;
            var superRace = superData.appearance.race;
            var superHeight = superData.appearance.height;
            var superWeight = superData.appearance.weight;
            var superEye = superData.appearance["eye-color"];
            var superHair = superData.appearance["hair-color"];
            var superGroup = superData.connections["group-affiliation"];
           
 
            res.render("inicio.html", {
                superImage:superImage,
                superID: superID,
                superName:superName,
                superFullname:superFullname,
                superintelligence:superintelligence,
                superStrength:superStrength,
                superSpeed:superSpeed,
                superDurability:superDurability,
                superPower:superPower,
                superCombat:superCombat,
                superPlace:superPlace,
                superBiography:superBiography,
                superAliases:superAliases,
                superGender:superGender,
                superRace:superRace,
                superHeight:superHeight,
                superWeight:superWeight,
                superEye:superEye,
                superHair:superHair,
                superGroup:superGroup
            }); 
        })
    });
});
 
app.post('/', (req, res)=>{
        const helper = [];
        var superSearch = req.body.superSearch.toLowerCase();
        const url = "https://superheroapi.com/api.php/1328743514207013/"+superSearch.toLowerCase();
        https.get(url, (response)=>{
            response.on("data", (data) =>{
                helper.push(data);
            });
            response.on("fin",()=> {
            try{
                const superDataAux = Buffer.concat(helper);
                const superDataArray = JSON.parse(superDataAux);
                const superData = superDataArray.results[0];
                var superImage = superData.image.url;
                var superID = superData.id;
                var superName = superData.name;
                var superFullname = superData.biography["full-name"];
                var superintelligence = superData.powerstats.intelligence;
                var superStrength = superData.powerstats.strength;
                var superSpeed = superData.powerstats.speed;
                var superDurability = superData.powerstats.durability;
                var superPower = superData.powerstats.power;
                var superCombat = superData.powerstats.combat;
                var superPlace = superData.biography["place-of-birth"];
                var superBiography = superData.biography["first-appearance"] + superData.biography.publisher ;
                var superAliases = superData.biography.aliases;
                var superGender = superData.appearance.gender;
                var superRace = superData.appearance.race;
                var superHeight = superData.appearance.height;
                var superWeight = superData.appearance.weight;
                var superEye = superData.appearance["eye-color"];
                var superHair = superData.appearance["hair-color"];
                var superGroup = superData.connections["group-affiliation"];
               
   
                res.render("inicio.html", {
                    superImage:superImage,
                    superID: superID,
                    superName:superName,
                    superFullname:superFullname,
                    superintelligence:superintelligence,
                    superStrength:superStrength,
                    superSpeed:superSpeed,
                    superDurability:superDurability,
                    superPower:superPower,
                    superCombat:superCombat,
                    superPlace:superPlace,
                    superBiography:superBiography,
                    superAliases:superAliases,
                    superGender:superGender,
                    superRace:superRace,
                    superHeight:superHeight,
                    superWeight:superWeight,
                    superEye:superEye,
                    superHair:superHair,
                    superGroup:superGroup
                });
                } catch (error) {
                    res.render("Error.html",{
                        name:superSearch
                    })
                }
            })
        });
});
 
app.post('/next', (req, res)=>{
    const helper = [];
    if (Id == 731){
        Id=1;
    } else {
        Id++;
    }
    const url = "https://superheroapi.com/api.php/1328743514207013/"+Id;
    https.get(url, (response)=>{
        response.on("data", (data) =>{
            helper.push(data);
        });
        response.on("fin",()=> {
            const superDataAux = Buffer.concat(helper);
            const superData = JSON.parse(superDataAux);
            var superImage = superData.image.url;
            var superID = superData.id;
            var superName = superData.name;
            var superFullname = superData.biography["full-name"];
            var superintelligence = superData.powerstats.intelligence;
            var superStrength = superData.powerstats.strength;
            var superSpeed = superData.powerstats.speed;
            var superDurability = superData.powerstats.durability;
            var superPower = superData.powerstats.power;
            var superCombat = superData.powerstats.combat;
            var superPlace = superData.biography["place-of-birth"];
            var superBiography = superData.biography["first-appearance"] + superData.biography.publisher ;
            var superAliases = superData.biography.aliases;
            var superGender = superData.appearance.gender;
            var superRace = superData.appearance.race;
            var superHeight = superData.appearance.height;
            var superWeight = superData.appearance.weight;
            var superEye = superData.appearance["eye-color"];
            var superHair = superData.appearance["hair-color"];
            var superGroup = superData.connections["group-affiliation"];
           
 
            res.render("inicio.html", {
                superImage:superImage,
                superID: superID,
                superName:superName,
                superFullname:superFullname,
                superintelligence:superintelligence,
                superStrength:superStrength,
                superSpeed:superSpeed,
                superDurability:superDurability,
                superPower:superPower,
                superCombat:superCombat,
                superPlace:superPlace,
                superBiography:superBiography,
                superAliases:superAliases,
                superGender:superGender,
                superRace:superRace,
                superHeight:superHeight,
                superWeight:superWeight,
                superEye:superEye,
                superHair:superHair,
                superGroup:superGroup
            });
        })
    });
});
 
app.post('/prev', (req, res)=>{
    const helper = [];
    if (Id == 1){
        Id=731;
    } else {
        Id--;
    }
    const url = "https://superheroapi.com/api.php/1328743514207013/"+Id;
    https.get(url, (response)=>{
        response.on("data", (data) =>{
            helper.push(data);
        });
        response.on("fin",()=> {
            const superDataAux = Buffer.concat(helper);
            const superData = JSON.parse(superDataAux);
            var superImage = superData.image.url;
            var superID = superData.id;
            var superName = superData.name;
            var superFullname = superData.biography["full-name"];
            var superintelligence = superData.powerstats.intelligence;
            var superStrength = superData.powerstats.strength;
            var superSpeed = superData.powerstats.speed;
            var superDurability = superData.powerstats.durability;
            var superPower = superData.powerstats.power;
            var superCombat = superData.powerstats.combat;
            var superPlace = superData.biography["place-of-birth"];
            var superBiography = superData.biography["first-appearance"] + superData.biography.publisher ;
            var superAliases = superData.biography.aliases;
            var superGender = superData.appearance.gender;
            var superRace = superData.appearance.race;
            var superHeight = superData.appearance.height;
            var superWeight = superData.appearance.weight;
            var superEye = superData.appearance["eye-color"];
            var superHair = superData.appearance["hair-color"];
            var superGroup = superData.connections["group-affiliation"];
           
 
            res.render("inicio.html", {
                superImage:superImage,
                superID: superID,
                superName:superName,
                superFullname:superFullname,
                superintelligence:superintelligence,
                superStrength:superStrength,
                superSpeed:superSpeed,
                superDurability:superDurability,
                superPower:superPower,
                superCombat:superCombat,
                superPlace:superPlace,
                superBiography:superBiography,
                superAliases:superAliases,
                superGender:superGender,
                superRace:superRace,
                superHeight:superHeight,
                superWeight:superWeight,
                superEye:superEye,
                superHair:superHair,
                superGroup:superGroup
            });
        })
    });
});
 
app.listen(4000,()=>{
    console.log("Listening to port 4000");
})
