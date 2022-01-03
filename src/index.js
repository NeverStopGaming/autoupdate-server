const app = require('express')();
const bodyParser = require('body-parser');
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/update', (req, res) => {

    let pluginName = req.query.plugin;

    //read the json file plugins.json
    let plugins = fs.readFileSync('src/plugins.json', 'utf-8');
    res.json(JSON.parse(plugins)[pluginName]);

});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));