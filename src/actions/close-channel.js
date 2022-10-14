const { lnd } = require('../lnd')
const { closeChannel } = require('ln-service')

module.exports.handleCloseChannel = async (params) => {
    console.log(`Handling close channel action`)
    console.log(params)
     // TODO: implement.
}