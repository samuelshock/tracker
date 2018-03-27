import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario';

@Injectable()
export class UbicacionService {

  usuario: AngularFireObject<any>;
  private watch: any;

  constructor(
    private geolocation: Geolocation,
    private adDB: AngularFireDatabase,
    private _us: UsuarioService
  ) {
    if(!this._us.clave) {
      return;
    }
    this.usuario = adDB.object('/usuarios/'+this._us.clave);
  }

  iniciar_localizacion() {
    this.watch = this.geolocation.watchPosition()
    .subscribe((data) => {
       // data can be a set of coordinates, or an error (if an error occurred).
       // data.coords.latitude
       // data.coords.longitude
       if(!this._us.clave && data && data['coords']) {
         return;
       }
       this.usuario.update({lat: data.coords.latitude, lng: data.coords.longitude});
    
     console.log(data);
    });
  }

  detener_watch() {
    this.watch.unsubscribe();
  }

}
