import sharp from "sharp"
import { writeFile } from "node:fs/promises"

const src = "public/logo__1_-removebg-preview.png"
// Google recommends 48px+; include 32 and 48 for ICO compatibility
const sizes = [32, 48]

async function squarePng(size) {
  const pad = Math.round(size * 0.08)
  const inner = size - pad * 2
  const resized = await sharp(src)
    .resize(inner, inner, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer()
  return sharp({
    create: { width: size, height: size, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toBuffer()
}

const pngs = await Promise.all(sizes.map(squarePng))

const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(pngs.length, 4)

const entries = []
let offset = 6 + pngs.length * 16
for (let i = 0; i < pngs.length; i++) {
  const size = sizes[i]
  const png = pngs[i]
  const entry = Buffer.alloc(16)
  entry.writeUInt8(size >= 256 ? 0 : size, 0)
  entry.writeUInt8(size >= 256 ? 0 : size, 1)
  entry.writeUInt8(0, 2)
  entry.writeUInt8(0, 3)
  entry.writeUInt16LE(1, 4)
  entry.writeUInt16LE(32, 6)
  entry.writeUInt32LE(png.length, 8)
  entry.writeUInt32LE(offset, 12)
  entries.push(entry)
  offset += png.length
}

const ico = Buffer.concat([header, ...entries, ...pngs])
await writeFile("app/favicon.ico", ico)
await writeFile("public/favicon.ico", ico)
console.log("Wrote favicon.ico to app/ and public/ (" + ico.length + " bytes)")
