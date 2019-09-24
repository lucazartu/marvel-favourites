// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  basePath: 'https://gateway.marvel.com',
  version: 'v1',
  publicKey: '9aea64cd74efe6fbcc6d63a9d475f6b8',
  privateKey: '202e9bf9f67d5c34d43455e34b9ea71336c2044c',
  firebaseConfig: {
    apiKey: 'AIzaSyAW9mG8bnW0xDmbFBPAfAmWHnLdgcwPDBE',
    authDomain: 'marvel-catalog-pwa.firebaseapp.com',
    databaseURL: 'https://marvel-catalog-pwa.firebaseio.com',
    projectId: 'marvel-catalog-pwa',
    storageBucket: '',
    messagingSenderId: '124770991876',
    appId: '1:124770991876:web:62e06ec5bd8c86f8cf9a51'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
