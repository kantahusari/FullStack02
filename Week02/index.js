// Lab Ex 01, Kanta Husari 101217294
var fs = require("fs")
const csv = require('csv-parser')
//3 - A
fs.unlink('canada.txt',
    (err) => {
        if (err) {
            console.log(`file doesn't exist`)
        } else {
            console.log(`File deleted Successfully `)
        }
    }
)
fs.unlink('usa.txt',
    (err) => {
        if (err) {
            console.log(`file doesn't exist`)
        } else {
            console.log(`File deleted Successfully `)
        }
    }
)


//3 - B
const results = [];
var canada = [];
var usa = [];
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        //console.log(results[0].country);
        for (var value of results) {
            if (value.country == "Canada") {
                canada.push(value)
            }
            if (value.country == "United States") {
                usa.push(value)
            }
        }
           const writeStreamCanada = fs.createWriteStream('canada.txt');
           canada.forEach(value => writeStreamCanada.write(`${value.country}, ${value.year}, ${value.population}\n`));
           writeStreamCanada.end();
           const writeStreamUSA = fs.createWriteStream('usa.txt');
           usa.forEach(value => writeStreamUSA.write(`${value.country}, ${value.year}, ${value.population}\n`));
           writeStreamUSA.end();
    });
