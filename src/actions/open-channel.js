const { lnd } = require('../lnd')
const { openChannel } = require('ln-service')

module.exports.handleOpenChannel = async (params) => {
    console.log(`Handling open channel action`)
    console.log(params)
     // TODO: implement.
}