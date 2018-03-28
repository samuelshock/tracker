import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../usuario/usuario';

@Injectable()
export class UbicacionService {

  usuario: AngularFireObject<any>;
  private watch: any;
  private cont: any = 0;

  constructor(
    private geolocation: Geolocation,
    private adDB: AngularFireDatabase,
    private _us: UsuarioService
  ) {
    this.iniciar_nueva_session();
  }
  
  iniciar_nueva_session() {
    if(!this._us.clave) {
      return;
    }
    this.usuario = this.adDB.object('/usuarios/'+this._us.clave);
  }

  iniciar_localizacion() {
    this.watch = this.geolocation.watchPosition()
    .subscribe((data) => {
       // data can be a set of coordinates, or an error (if an error occurred).
       // data.coords.latitude
       // data.coords.longitude
       if(!this._us.clave) {
         return;
       }
       
       if( this.cont === 0) {
        /*this.usuario.update(
          {
            lat: parseFloat(data.coords.latitude),
            lng: parseFloat(data.coords.longitude)
         });*/
         this.usuario.update(
          {
            lat: data.coords.latitude,
            lng: data.coords.longitude
         });
       }
       this.cont = this.cont === 3? this.cont = 0: this.cont++;
       return;
    });
  }

  detener_watch() {
    this.cont = 0;
    this.usuario = null;
    this.watch.unsubscribe();
  }

}
