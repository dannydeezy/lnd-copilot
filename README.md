# lnd-copilot
delegate management of your lnd node to a third party with limited permissions

copilot runs alongside your lnd node and subscribes to commands from a third-party

you configure what operations are permitted

### setup
- find a node management specialist like [deezy.io](https://deezy.io)
- create a readonly macaroon and give it to them, they will use this to monitor your node
- the manager gives you an SQS queue to subscribe to, and some AWS account credentials
- configure a `config.json` with all the revelant values (see `sample-config.json`)
- profit, while keeping peace of mind that you still control your keys

### security and policy
the copilot only can conduct specific operations:
- open channel
- close channel
- rebalance at a max fee rate (configure `MAX_REBALANCE_PPM` in `config.json`)
- update channel policy

there is also opportunity to extend policy to even finer grained controls like remaining OFAC-compliant with channel partners, or only connecting to clearnet nodes from non-sanctioned jurisdictions, etc), whatever you want!
