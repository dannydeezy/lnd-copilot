const { Consumer } = require('sqs-consumer')
const AWS = require('aws-sdk')
const config = require('./config.json')

AWS.config.update({
    region: config.QUEUE_AWS_REGION || 'us-east-1',
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY
})

async function handleMessage(message) {
    console.log(`Handling message`)
    console.log(message)
}

const app = Consumer.create({
    queueUrl: config.QUEUE_URL,
    handleMessage,
    sqs: new AWS.SQS()
})

app.on('error', (err) => {
    console.error(err.message);
})

app.on('processing_error', (err) => {
    console.error(err.message);
})

app.on('timeout_error', (err) => {
    console.error(err.message);
})

app.start();