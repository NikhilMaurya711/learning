
const fs = require('fs')
const parse = require('csv-parse');
const path = require('path');

const habitablePlanet = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}


function loadPlanetData() {
    new Promise(async (resolve, reject) => {

        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true,
            }))
            .on('data', (data) => {

                if (isHabitablePlanet(data)) {
                    habitablePlanet.push(data)
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err)
            })
            .on('end', () => {
                // console.log(habitablePlanet);
                // console.log();
                // console.log(`${habitablePlanet.length} habitable planets found!`);
                var c = habitablePlanet.map((planet) => {
                    return planet['kepler_name'];
                })
                resolve(c)
            })


    });

}
async function test(){
    return await loadPlanetData();
}

var k = test();


// fs.createReadStream(path.join(__dirname,'..','..','data','kepler_data.csv'))
// .pipe(parse({
//     comment:'#',
//     columns: true,
// }))
// .on('data',(data)=>{

//   if (isHabitablePlanet(data)){
//     habitablePlanet.push(data)
//   }
// })
// .on('error',(err)=>{
//     console.log(err);
// })
// .on('end',()=>{
//     // console.log(habitablePlanet);
//     // console.log();
//     // console.log(`${habitablePlanet.length} habitable planets found!`);
//     var c = habitablePlanet.map((planet) => {
//         return planet['kepler_name'];
//       })
//       console.log(c);
// })

/*

const promise = new Promise((resolve,reject)=>{
    resolve(42)
});

promise.then((result)=>{  //result =42

})

//or 

const result = await promise

*/

// function httpGetAllplanets(){
    
// }
function getAllplanets(){
    return habitablePlanet
}
module.exports = {
    loadPlanetData,
    getAllplanets,
}