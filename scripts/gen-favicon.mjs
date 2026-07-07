import sharp from "sharp"
import { mkdir } from "node:fs/promises"

// Peacock emblem only — much more readable at favicon sizes than the wide logo
const src = "public/logo__1_-removebg-preview.png"

async function makeSquareIcon(size, out, padding = 0.08) {
  const pad = Math.round(size * padding)
  const inner = size - pad * 2
  const resized = await sharp(src)
    .resize(inner, inner, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer()

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(out)
}

await mkdir("app", { recursive: true })
await mkdir("public", { recursive: true })

await makeSquareIcon(512, "app/icon.png")
await makeSquareIcon(180, "app/apple-icon.png")
await makeSquareIcon(180, "public/apple-touch-icon.png")
await makeSquareIcon(192, "public/favicon-192x192.png")
await makeSquareIcon(96, "public/favicon-96x96.png")
await makeSquareIcon(48, "public/favicon-48x48.png")

console.log("Icons generated from peacock emblem")
