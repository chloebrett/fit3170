const fs = require('fs/promises');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const FILENAME = 'persisted-data.json';
const APP_PORT = 3001;

const getPersisted = async () => {
    const fileData = (await fs.readFile(FILENAME)).toString();
    return JSON.parse(fileData);
}

const setPersisted = async (data) => {
    const newFileData = JSON.stringify(data);
    await fs.writeFile(FILENAME, newFileData);
}

/**
 * Handler to send the entire current list
 */
app.get('/units', async (req, res) => {
    const data = await getPersisted();
    res.send(data.units);
});

/**
 * Handler to add a new unit to the list
 */
app.post('/unit', async (req, res) => {
    const { unitName } = req.body;

    const data = await getPersisted();

    const unit = {
        name: unitName,
        id: uuidv4(),
    };
    data.units.push(unit);

    setPersisted(data);

    res.sendStatus(200);
});

/**
 * Handler to remove a unit with a given ID
 */
app.post('/delete-unit', async (req, res) => {
    const { unitId: deleteId } = req.body;

    const data = await getPersisted();
    const newData = {
        ...data,
        units: data.units.filter(({ id }) => id !== deleteId)
    };

    setPersisted(newData);
    res.sendStatus(200);
});

app.listen(APP_PORT, () => {
    console.log(`App listening on ${APP_PORT}`);
});
