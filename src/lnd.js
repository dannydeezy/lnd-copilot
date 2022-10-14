const lnService = require('ln-service')
const config = require('../config.json')

const { lnd } = lnService.authenticatedLndGrpc({
    cert: fs.readFileSync(`${config.LND_DATA_DIR_PATH}/tls.cert`),
    macaroon: fs.readFileSync(`${config.LND_DATA_DIR_PATH}/data/chain/bitcoin/mainnet/admin.macaroon`),
    socket: config.LND_SOCKET || `localhost:10009`,
});

module.exports = { lnd }