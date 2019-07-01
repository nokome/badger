const badgen = require('badgen')
const express = require('express')
const got = require('got')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.get('*', async (req, res) => {
  const parts = req.originalUrl.split('/').slice(2)
  const [user, repo, ...path] = parts
  const subject = path[path.length - 1]
  
  const url = `https://codecov.io/api/gh/${user}/${repo}/tree/master/${path.join('/')}`
  
  let coverage
  try {
    const result = await got(url, {json: true}) 
    coverage = parseFloat(result.body.commit.folder_totals.coverage).toFixed(0)
  } catch (error) {
    coverage = '?'
  }

  let colour
  if (coverage == '?') colour = 'grey'
  else if (coverage < 70) colour = 'red'
  else if (coverage < 85) colour = 'orange'
  else if (coverage < 95) colour = 'yellow'
  else colour = 'green'
  
  const svg = badgen({
     subject,
     "status": coverage,
     "color": colour
  })

  res.set('Content-Type', 'image/svg+xml');
  res.status(200).send(svg)
});

module.exports = app
