import { query, conn } from "../mysql/connection"

export default async function handler(req, res) {
  try {
    await query("INSERT INTO devproject.people (name) VALUES (?)", [
      req.body.name,
    ])
    res.status(200).json({ status: "success" })
  } catch (e) {
    res.status(404).json({ status: "failed" })
  }
}
