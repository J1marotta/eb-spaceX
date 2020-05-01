const dbPool = require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const mysql = require("mysql");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const baseURL = "https://api.spacexdata.com/v3";

app.get("/", async (req, res) => {
  axios.get("/").then((r) =>
    res.send({
      r: r.data.length,
    })
  );
});

app.get("/landpads/:id", async (req, res) => {
  const ourId = req.params.id;
  var sql = mysql.format(`SELECT * from spaceData WHERE id = ?`, [ourId])
  

  const dbData = await dbPool.query(`SELECT * from spaceData WHERE id = ?`, [
    ourId,
  ], (err, results, fields) => {
    if(err) throw err
    return results
  })
  

  console.log({ dbData, sql, ourId })
  
  
    if (!dbData.length) {
    axios
      .get(`${baseURL}/landpads/${ourId}`, { validateStatus: () => true })
      .then(async (r) => {
        res.status(r.status);
        await dbPool.query(
          `INSERT into spaceData (id, spaceItem ) values (?, ?) `,
          [ourId, r.data]
        );
        return res.send(r.data);
      })
      .catch((err) => {
        console.error(err);
        return res.status(500);
      });
  } else {
    return res.send({ data: dbData[0] });
  }
});

// app.get(`/landpads/db/:id`, async (req, res) => {
//     const ourId  = req.params.id

//     await dbPool.query('INSERT into spaceData (id, spaceItem ) values (?, ?) ', [ourId, 'potatoes']  )
//     return res.sendStatus(200)
// })

// app.get(`/landpads/db/get/:id`, async (req, res) => {

//     return res.send(je)
// })

app.listen(4000);
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
