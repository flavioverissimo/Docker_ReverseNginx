import { query } from "../mysql/connection"

export default async function handler(req, res) {
  try {
    const checkingTables = await query(
      "SELECT table_name, table_schema FROM information_schema.tables WHERE table_name='people' and table_schema='devproject'"
    )

    if (checkingTables.length === 0) {
      await query(
        "CREATE TABLE devproject.people (id int not null auto_increment, name varchar(255), primary key(id))"
      )
      await query(
        "INSERT INTO devproject.people (name) VALUES ('Flavio Verissimo')"
      )
    }

    const people = await query("SELECT * FROM devproject.people")
    const databases = await query("SHOW databases")
    res.status(200).json({ people, db: databases })
  } catch (e) {
    res.status(401).json({ status: "Error" })
  }
}
