const { Unit } = require('./db');

function wrapResponse(res) {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(res),
    }
}

/**
 * Handler to send the entire current list
 */
module.exports.unitsGet = async (event) => {
    const units = await Unit.fetchAll();

    return wrapResponse(units);
}

/**
 * Handler to add a new unit to the list
 */
module.exports.unitCreate = async (event) => {
    const { unitName } = JSON.parse(event.body);

    await Unit.forge({
        name: unitName,
    }).save();

    return wrapResponse('');
};

/**
 * Handler to remove a unit with a given ID
 */
module.exports.unitDelete = async (event) => {
    const { unitId } = JSON.parse(event.body);

    await new Unit({ id: unitId }).destroy();

    return wrapResponse('');
};
