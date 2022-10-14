# lnd-copilot
proprietary lnd node manager with limited permissions

runs alongside lnd and subscribes to commands from a third-party SQS queue

### setup
- find a node management specialist like (@dannydeezy)[https://t.me/dannydeezy]
- create a readonly macaroon and give it to them, they will use this to monitor your node
- the manager gives you an SQS queue to subscribe to, and some AWS account credentials
- configure your `config.json` with all the revelant values
- profit

### security
the copilot only can conduct specific operations:
- open channel
- close channel
- rebalance at a max fee rate (configure `MAX_REBALANCE_PPM` in `config.json`)
- update channel policy