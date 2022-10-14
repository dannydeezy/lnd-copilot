const { lnd } = require('../lnd')
const { createInvoice, pay } = require('ln-service')

module.exports.handleRebalance = async (params) => {
    console.log(`Handling rebalance action`)
    console.log(params)
     // TODO: implement.
}