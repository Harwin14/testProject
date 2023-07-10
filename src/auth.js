import { init } from 'next-auth/client'

export default async function () {
  const googleClientId = '949346102281-ov9j8m0mpb4ekflfc1p1f0dkbpfr1ft4.apps.googleusercontent.com'
  const googleClientSecret = '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'
  const jwtSecret = 'GadhwsTWd1%34127%$wsVfwr2DLIO7236$912BD5d45%$'

  return init({
    providers: [
      {
        id: 'google',
        name: 'Google',
        type: 'oauth',
        version: '2.0',
        scope: 'profile email',
        params: { grant_type: 'authorization_code' },
        accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
        authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
        profileUrl: 'https://www.googleapis.com/oauth2/v1/userinfo',
        clientId: googleClientId,
        clientSecret: googleClientSecret,
        callbackUrl: 'http://localhost:3000/auth/callback/google',
        signinUrl: 'http://localhost:3000/auth/signin/google',
        callback: async (token, user) => {
          // Actions to be taken after successful authentication
          return Promise.resolve(token)
        }
      }
    ],
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/error',
      verifyRequest: '/auth/verify-request',
      newUser: null
    },
    session: {
      jwt: true
    },
    jwt: {
      secret: jwtSecret
    }
  })
}
