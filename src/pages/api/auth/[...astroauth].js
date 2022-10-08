import AstroAuth from "@astro-auth/core";
import { GoogleProvider } from "@astro-auth/providers";
import { userIdFromEmail, createToken } from '../../../utils/Security.js';
import { getUserToken, setUserToken } from '../../../utils/Users.js';

export const all = AstroAuth({
  authProviders: [
    GoogleProvider({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  hooks: {
    jwt: async (user) => {
      const email = user.user.email
      const userId = userIdFromEmail(email)
      let token = await getUserToken(userId)
      if (!token) await setUserToken(userId, token = createToken())
      return { userId, token }
    },
  }
});