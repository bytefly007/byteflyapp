import { defineAuth, secret } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['profile', 'email', 'openid']
      },
      callbackUrls: [
        'http://localhost:5173/profile',  // 开发环境
        'https://main.d22ka6ks9mssy2.amplifyapp.com/profile' // 生产环境
      ],
      logoutUrls: [
        'http://localhost:5173/',
        'https://main.d22ka6ks9mssy2.amplifyapp.com/'
      ]
    }
  },
  groups: ["bytefly-subscribers", "bytefly-purchasers"]
});
