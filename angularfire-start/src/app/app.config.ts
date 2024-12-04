import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"remota-web","appId":"1:781934594194:web:936e2c587b22f221687e4b","storageBucket":"remota-web.firebasestorage.app","apiKey":"AIzaSyBcY8z4xBrJZdNOmDpC785lsk-b77gsSlY","authDomain":"remota-web.firebaseapp.com","messagingSenderId":"781934594194"})), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"remota-web","appId":"1:781934594194:web:936e2c587b22f221687e4b","storageBucket":"remota-web.firebasestorage.app","apiKey":"AIzaSyBcY8z4xBrJZdNOmDpC785lsk-b77gsSlY","authDomain":"remota-web.firebaseapp.com","messagingSenderId":"781934594194"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
