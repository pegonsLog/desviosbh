import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"desviosbh","appId":"1:11459063109:web:999a231a89c64c5113e22c","storageBucket":"desviosbh.appspot.com","apiKey":"AIzaSyCNAIbh15WqGIwYmnFgHuUec5bhy5Gbwe4","authDomain":"desviosbh-d95a7.firebaseapp.com","messagingSenderId":"11459063109"}))),
    importProvidersFrom(provideFirestore(() => getFirestore())),

  ],
};
