import { createStorage } from 'unstorage'
import createDriver from 'unstorage-driver-http-headers'

const DATA_API_URL = import.meta.env.UNSTORAGE_SERVER_DATA_API_URL

const getStorage = (token) => {
    const AUTH_HEADER = { 'Authorization': 'Bearer ' + token }
    const driver = createDriver({ base: DATA_API_URL, headers: AUTH_HEADER })
    const storage = createStorage({ driver })
    return storage
}

export default getStorage
