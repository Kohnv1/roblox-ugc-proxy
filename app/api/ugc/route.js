export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const target = searchParams.get("url")

  if (!target) {
    return new Response("YANLIS", { status: 400 })
  }

  try {
    const r = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    })

    const text = await r.text()

    return new Response(text, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
  } catch (e) {
    return new Response(e.toString(), { status: 500 })
  }
}
