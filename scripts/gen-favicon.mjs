import sharp from "sharp"
import { mkdir } from "node:fs/promises"

const src = "public/dohad-india-rgb.png"

async function makeSquareIcon(size, out) {
  const pad = Math.round(size * 0.06)
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

await makeSquareIcon(512, "app/icon.png")
await makeSquareIcon(180, "app/apple-icon.png")
await makeSquareIcon(48, "public/favicon-48.png")

console.log("Icons generated: app/icon.png, app/apple-icon.png, public/favicon-48.png")
