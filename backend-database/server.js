const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const { Unit } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

const APP_PORT = 3001;

/**
 * Handler to send the entire current list
 */
app.get('/units', async (req, res) => {
    const units = await Unit.fetchAll();
    res.send(units);
});

/**
 * Handler to add a new unit to the list
 */
app.post('/unit', async (req, res) => {
    const { unitName } = req.body;

    await Unit.forge({
        id: uuidv4(),
        name: unitName,
    }).save();

    res.sendStatus(200);
});

/**
 * Handler to remove a unit with a given ID
 */
app.post('/delete-unit', async (req, res) => {
    const { unitId } = req.body;

    await Unit({ id: unitId }).destroy();

    res.sendStatus(200);
});

app.listen(APP_PORT, () => {
    console.log(`App listening on ${APP_PORT}`);
});
