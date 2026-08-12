import server from "../dist/server/server.js";

export default async function handler(req, res) {
  if (!server.fetch) {
    return res.status(500).json({ error: "Server not initialized" });
  }

  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const response = await server.fetch(new Request(url, {
      method: req.method,
      headers: new Headers(req.headers),
      body: req.method !== "GET" && req.method !== "HEAD" ? req.body : null,
    }));

    res.status(response.status);
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });

    return res.send(await response.text());
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
