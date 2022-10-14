
const { handleOpenChannel } = require('./actions/open-channel')
const { handleCloseChannel } = require('./actions/close-channel')
const { handleRebalance } = require('./actions/rebalance')
const { handleUpdateChannelPolicy } = require('./actions/update-channel-policy')

module.exports.handleMessage = async (message) => {
    const { action, params } = JSON.parse(message.Body)
    switch(action) {
        case 'open-channel':
            await handleOpenChannel(params)
            return
        case 'close-channel':
            await handleCloseChannel(params)
            return
        case 'rebalance':
            await handleRebalance(params)
            return
        case 'update-channel-policy':
            await handleUpdateChannelPolicy(params)
            return
        default:
            console.error(`Unknown action: ${action}`)
            return
    }
}