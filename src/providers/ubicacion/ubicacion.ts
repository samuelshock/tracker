import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario';

@Injectable()
export class UbicacionService {

  usuario: AngularFireObject<any>;

  constructor(
    private geolocation: Geolocation,
    private adDB: AngularFireDatabase,
    private _us: UsuarioService
  ) {
    this.usuario = adDB.object('/usuarios/'+this._us.clave);
  }

  iniciar_localizacion() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
     this.usuario.update({lat: data.coords.latitude, lng: data.coords.longitude});
    
     console.log(data);
    });
  }

}
