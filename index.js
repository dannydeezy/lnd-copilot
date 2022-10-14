const { Consumer } = require('sqs-consumer')
const AWS = require('aws-sdk')
const fs = require('fs')
if (!fs.existsSync('./config.json')) {
    throw new Error(`No config.json found. Copy over sample-config.json to config.json and fill in your values`)
}
const config = require('./config.json')

AWS.config.update({
    region: config.SQS_AWS_REGION || 'us-east-1',
    accessKeyId: config.SQS_AWS_ACCESS_KEY_ID,
    secretAccessKey: config.SQS_AWS_SECRET_ACCESS_KEY
})

async function handleMessage(message) {
    console.log(`Handling message`)
    console.log(message)
}

const app = Consumer.create({
    queueUrl: config.SQS_URL,
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