const dbPool = require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

// don't break the server
app.use((req, res, next) => {
  try {
    next()
  } catch (e) {
    res.sendStatus(500)
  }
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const baseURL = 'https://api.spacexdata.com/v3'

app.get('/capsules', async (req, res) => {
  axios.get(`${baseURL}/capsules?sort=original_launch`).then((r) => res.send(r.data))
})

app.get('/landpads/', async (req, res) => {
  axios.get(`${baseURL}/landpads`).then((r) => res.send(r.data))
})

app.get('/landpads/:id', async (req, res) => {
  const ourId = req.params.id
  var sql = mysql.format(`SELECT * from spaceData WHERE id = ?`, [ourId])

  const dbData = await dbPool.query(sql).then((data) =>
    data
      .map(({ id, spaceItem }) => ({
        id,
        spaceItem: JSON.parse(spaceItem),
      }))
      .map(({ id, spaceItem: { full_name, status, location } }) => ({
        id,
        full_name,
        status,
        location,
      }))
  )

  if (dbData.length) {
    return res.send({ data: dbData[0] })
  } else {
    axios
      .get(`${baseURL}/landpads/${ourId}`, { validateStatus: () => true })
      .then(async (r) => {
        // trust the status of the api
        res.status(r.status)
        if (r.status >= 200 && r.status < 300) {
          // if it's legit deposit it.
          await dbPool.query(
            `INSERT into spaceData (id, spaceItem ) values (?, ?) `,
            [ourId, JSON.stringify(r.data)]
          )
        }
        // send it to the front-end
        return res.send(r.data)
      })
      .catch((err) => {
        console.error(err)
        return res.status(500)
      })
  }
})

app.listen(4000)
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
)
