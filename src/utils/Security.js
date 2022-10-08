import crypto from 'crypto'
import base62 from 'base-62.js'

const createKey32c = (s) => Buffer.from(s.padEnd(32, ' ').slice(0, 32), 'utf8')
const GOD = createKey32c(import.meta.env.ENCRYPTION_SECRET)

const cipher = (key32c) => crypto.createCipheriv('aes-256-cbc', key32c, key32c.slice(0, 16))
const decipher = (key32c) => crypto.createDecipheriv('aes-256-cbc', key32c, key32c.slice(0, 16))

const encryptToHex = (s, key32c = GOD, c = cipher(key32c)) => (c.update(s, 'utf8', 'hex') + c.final('hex'))
const decryptFromHex = (token, key32c = GOD, d = decipher(key32c)) => d.update(token, 'hex', 'utf8') + d.final('utf8')

export const userIdFromEmail = (email) => base62.encodeHex(encryptToHex(email))
export const userEmailFromId = (userId) => decryptFromHex(base62.decodeHex(userId))
export const createToken = () => base62.encodeHex(crypto.randomUUID().split('-').join(''));

