import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../config/firebase.config';

// Servicios / providers
import { UsuarioService } from '../providers/usuario/usuario';
import { UbicacionService } from '../providers/ubicacion/ubicacion';

// Storage
import { IonicStorageModule } from '@ionic/storage';

// plugins
import { Geolocation } from '@ionic-native/geolocation';

// Maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUdmXtOEtd450Zrbpz21Wqi79GeoOs1GY'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioService,
    Geolocation,
    UbicacionService
  ]
})
export class AppModule {}
