export const environment = {
  production: true,
  auth0: {
    clientID: 'luXjAIt0u1uetW8hI2VtqZFAlXfLy1do',
    domain: 'der-willi.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://www.der-willi.de',
    redirectUri: `${window.location.origin}/redirect`,
    scope: 'openid profile email'
  } as auth0.AuthOptions,
  firebase: {
    apiKey: 'AIzaSyBedwqxitzrFc2QTvARKaeYghPwXhEbbKQ',
    authDomain: 'der-willi.firebaseapp.com',
    databaseURL: 'https://der-willi.firebaseio.com',
    projectId: 'der-willi',
    storageBucket: 'der-willi.appspot.com',
    messagingSenderId: '112818989948'
  }
};
