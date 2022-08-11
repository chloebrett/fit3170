const { Unit } = require('./db');

/**
 * Handler to send the entire current list
 */
module.exports.unitsGet = async (event) => {
    const units = await Unit.fetchAll();

    return {
        statusCode: 200,
        body: JSON.stringify(units),
    };
}

/**
 * Handler to add a new unit to the list
 */
module.exports.unitCreate = async (event) => {
    const { unitName } = JSON.parse(event.body);

    await Unit.forge({
        name: unitName,
    }).save();

    return {
        statusCode: 200,
        body: '',
    }
};

/**
 * Handler to remove a unit with a given ID
 */
module.exports.unitDelete = async (event) => {
    const { unitId } = req.body;

    await Unit({ id: unitId }).destroy();

    return {
        statusCode: 200,
        body: '',
    }
};
