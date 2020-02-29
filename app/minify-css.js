var cleanCSS = require('clean-css');
var fs = require('fs');
var input = fs.readFileSync('./static/dist/css/materialize.css', 'utf-8');
var options = { returnPromise: true };
var output = new cleanCSS(options)
                .minify(input)
                .then(minifile => {
                    fs.writeFileSync('./static/dist/css/materialize.min.css', minifile.styles);
                })
                .catch(error => {
                    console.log(`Shit got fucked like this => ` + error);
                });