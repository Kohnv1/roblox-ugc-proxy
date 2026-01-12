export default async function handler(req, res) {
  const target = req.query.url

  if (!target) {
    res.status(400).send("YANLIS")
    return
  }

  try {
    const r = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    })

    const text = await r.text()
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.status(200).send(text)
  } catch (e) {
    res.status(500).send(e.toString())
  }
}
