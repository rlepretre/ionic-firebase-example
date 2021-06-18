import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SETTINGS } from '@angular/fire/firestore';

import { StatusBar } from '@ionic-native/status-bar';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


export const firebaseConfig = {
  apiKey: 'AIzaSyCqlMiM1T9FnN0oTME44RqKezdO3mMx8ZI',
  authDomain: 'ionic-firebase-example-fd583.firebaseapp.com',
  projectId: 'ionic-firebase-example-fd583',
  storageBucket: 'ionic-firebase-example-fd583.appspot.com',
  messagingSenderId: '331490382605',
  appId: '1:331490382605:web:417d11e7f1d18a47e21644',
  measurementId: 'G-5Y85DBZQ95'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: SETTINGS, useValue: {} }, StatusBar],
  bootstrap: [AppComponent],
})
export class AppModule { }
