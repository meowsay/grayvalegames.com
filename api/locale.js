module.exports = (req, res) => {
  const country = String(req.headers["x-vercel-ip-country"] || "").toUpperCase();
  const locale = country === "CN" ? "zh" : "en";

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    locale,
    source: country ? "geo" : "fallback",
    country: country || null,
  });
};
