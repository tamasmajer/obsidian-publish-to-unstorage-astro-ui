import { createStorage } from 'unstorage'
import createDriver from 'unstorage-driver-http-headers'

const AUTH_API_URL = import.meta.env.UNSTORAGE_SERVER_AUTH_API_URL
const AUTH_API_TOKEN = import.meta.env.UNSTORAGE_SERVER_AUTH_API_TOKEN

const AUTH_HEADER = { 'Authorization': 'Bearer ' + AUTH_API_TOKEN }

const driver = createDriver({ base: AUTH_API_URL, headers: AUTH_HEADER })
const storage = createStorage({ driver })

export const getUserToken = async (user) => user ? await storage.getItem(user) : null
export const setUserToken = async (user, token) => user && await storage.setItem(user, token)
