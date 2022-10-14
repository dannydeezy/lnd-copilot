const { lnd } = require('../lnd')
const { updateRoutingFees, enableChannel, disableChannel } = require('ln-service')

module.exports.handleUpdateChannelPolicy = async (params) => {
    console.log(`Handling update channel policy action`)
    console.log(params)
    // TODO: implement.
}