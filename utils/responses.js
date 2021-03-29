'use strict'

const headersOutput = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
  'Access-Control-Allow-Credentials': true
}

const generateResponse = (statusCode, body) => {
  return {
    isBase64Encoded: false,
    statusCode,
    headers: headersOutput,
    body: JSON.stringify(body)
  }
}

const fixBody = (event) => {
  // eslint-disable-next-line no-prototype-builtins
  if (event.hasOwnProperty('body') && typeof event.body === 'string') {
    console.warn('Fixing body since it came as string')
    event.body = JSON.parse(event.body)
  }
  event.fixed = true
  return event
}

module.exports = {
  generateResponse,
  fixBody
}
