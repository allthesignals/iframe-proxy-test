const request = require('superagent');

exports.handler = async (event) => {
  const site = event.queryStringParameters && event.queryStringParameters.site

  const response = await request
    .get(site)

  return {
    'statusCode': 200,
    'headers': {
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/html',
    },
    'body': response.text,
  }
}
