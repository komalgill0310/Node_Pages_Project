const http = require('http');
const fs = require('fs');
const path = require('path');
const pug = require('pug');

const server = http.createServer(async (request, response) => {
  const hi_log_filePath = path.join(__dirname, 'hi_log.txt')

  if (request.url === '/') {
    const templatePath = path.join(__dirname, '..', 'views', 'index.pug')
    const html = pug.renderFile(templatePath, { title: 'Welcome', message: 'Hello, World!' })
    response.writeHead(200, { 'content-type': 'text/html' })
    response.end(html)
  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    fs.appendFileSync(hi_log_filePath, 'Somebody said hi. \n', 'utf-8')
    response.end('hi back to you!')
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    let body = ''
    request.on('data', (chunk) => {
      body += chunk.toString()
    })

    request.on('end', () => {
      if (body == 'hello') {
        response.end('hello there!')
      } else if (body == "what's up") {
        response.end('sky')
      } else {
        response.end('good morning')
      }
      fs.appendFileSync(hi_log_filePath, `${body}\n`, 'utf-8')
    })
  }
  else if (request.method === 'PUT' && request.url === '/updated') {
    let body = ''
    request.on('data', (chunk) => {
      body += chunk.toString()
    })

    request.on('end', () => {
      fs.writeFileSync(hi_log_filePath, body, 'utf-8')
      response.end('updated message')
    })
  } else if (request.method === 'DELETE' && request.url === '/delete') {
    fs.unlinkSync(hi_log_filePath)
  }
  else if (request.method === 'GET' && request.url === '/pokemon') {
    const result = await getData()
    response.end(JSON.stringify(result))
  } else if (request.method === 'GET' && request.url.startsWith('/')) {
    const filePath = path.join(__dirname, '..', 'public', request.url)
    const data = fs.readFileSync(filePath)
    const ext = path.extname(filePath)
    const contentType = ext === '.js' ? 'application/javascript' :
      ext === '.css' ? 'text/css' : 'text/plain'

    response.writeHead(200, { 'Content-Type': contentType })
    response.end(data)
  }
  else {
    // Handle 404 error: page not found
    response.statusCode = 400
    response.setHeader('Content-Type', 'text/plain')
    response.end('Error: Not Found')
  }
}).listen(3000);

module.exports = server;

async function getData() {
  const fetch = (await import('node-fetch')).default
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
  const data = await res.json()
  return data.abilities
}


// =========================================
// =========================================
// =========================================

// WHEN USING index.html

// const server = http.createServer(async (request, response) => {

// if (request.method === 'GET' && request.url === '/') {
//   // read the index.html file and send it back to the client
//   const filePath = path.join(__dirname, 'index.html')
//   const data = fs.readFileSync(filePath, 'utf8')
//   response.end(data)
// }
// else if (request.method === 'POST' && request.url === '/sayHi') {
//   const filePath = path.join(__dirname, 'hi_log.txt')
//   fs.appendFileSync(filePath, 'Somebody said hi. \n', 'utf-8')
//   response.end('hi back to you!')
// }
// else if (request.method === 'POST' && request.url === '/greeting') {
//   // accumulate the request body in a series of chunks
//   let body = ''
//   request.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   request.on('end', () => {
//     if (body == 'hello') {
//       response.end('hello there!')
//     } else if (body == "what's up") {
//       response.end('sky')
//     } else {
//       response.end('good morning')
//     }
//     const filePath = path.join(__dirname, 'hi_log.txt')
//     fs.appendFileSync(filePath, `${body}\n`, 'utf-8')
//   })
// }
// else if (request.method === 'PUT' && request.url === '/updated') {
//   let body = ''
//   const filePath = path.join(__dirname, 'hi_log.txt')

//   request.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   request.on('end', () => {
//     fs.writeFileSync(filePath, body, 'utf-8')
//     response.end('updated message')
//   })
// } else if (request.method === 'DELETE' && request.url === '/delete') {
//   const filePath = path.join(__dirname, 'hi_log.txt')
//   fs.unlinkSync(filePath)
//   console.log('file deleted hi_log.txt')
// }
// else if (request.method === 'GET' && request.url === '/style.css') {
//   const filePath = path.join(__dirname, '..', 'public', 'style.css')
//   const data = fs.readFileSync(filePath, 'utf-8')
//   response.end(data)
// }
// else if (request.method === 'GET' && request.url === '/pokemon') {
//   const result = await getData()
//   response.end(JSON.stringify(result))
// }
// else {
//   // Handle 404 error: page not found
//   response.statusCode = 400
//   response.setHeader('Content-Type', 'text/plain')
//   response.end('Error: Not Found')
// }
// }).listen(3000);

// module.exports = server;


// async function getData() {
// const fetch = (await import('node-fetch')).default
// const res = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
// const data = await res.json()
// return data.abilities
// }