import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'desvios-carnaval-6aea1',
          appId: '1:463941054411:web:d04c6ff1bed6d65465504e',
          storageBucket: 'desvios-carnaval-6aea1.appspot.com',
          apiKey: 'AIzaSyD24sDVdbCEOrWZoEVmx-mZyaKZUeP5GZ0',
          authDomain: 'desvios-carnaval-6aea1.firebaseapp.com',
          messagingSenderId: '463941054411',
          measurementId: 'G-ZVGGCHET17',    
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
