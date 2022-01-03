const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/update', (req, res) => {

    let pluginName = req.query.plugin;

    //read the json file plugins.json
    let plugins = require('./plugins.json');

    res.json(plugins[pluginName]);

});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));