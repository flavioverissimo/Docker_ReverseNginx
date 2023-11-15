// get the client
import mysql from "mysql2"

// create the connection to database
export const conn = mysql.createConnection({
  host: "database",
  user: "root",
  password: "mysql",
  port: 3306,
})

export const query = async (query, data = null) => {
  return new Promise((res, rej) => {
    conn.query(query, data, function (err, results, fields) {
      if (err) {
        rej("It couldn't read or sent values from database")
      } else {
        res(results)
      }
    })
  })
}
