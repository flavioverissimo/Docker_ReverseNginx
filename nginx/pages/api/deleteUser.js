import { query, conn } from "../mysql/connection"

export default async function handler(req, res) {
  try {
    await query(`DELETE FROM devproject.people WHERE id = ${req.body.id}`)
    res.status(202).json({ status: "success" })
  } catch (e) {
    res.status(404).json({ status: "failed" })
  }
}
