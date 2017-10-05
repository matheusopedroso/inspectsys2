import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EquipamentosPage } from '../pages/equipamentos/equipamentos';
import { TabelasPage } from '../pages/tabelas/tabelas';
import { NewPage } from '../pages/addnew/addnew';
import { ItemDetailPage } from '../pages/item-detail/item-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// AF2 Settings
const firebaseConfig = {
    apiKey: "AIzaSyChpSaVNW0BDIiypXm7-7RLEpwGvbKrXtc",
    authDomain: "inspectsys.firebaseapp.com",
    databaseURL: "https://inspectsys.firebaseio.com",
    projectId: "inspectsys",
    storageBucket: "inspectsys.appspot.com",
    messagingSenderId: "955405615446"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	EquipamentosPage,
	TabelasPage,
	NewPage,
	ItemDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot(),
	AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	EquipamentosPage,
	TabelasPage,
	NewPage,
	ItemDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
    
  ]
})
export class AppModule {}
