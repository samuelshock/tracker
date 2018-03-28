import { UbicacionService } from '../../providers/ubicacion/ubicacion';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: any = {};

  constructor(public navCtrl: NavController, private _ubicacion: UbicacionService, private _us: UsuarioService
  ) {
      this._ubicacion.iniciar_localizacion();
      this._ubicacion.usuario.valueChanges().subscribe( data => {
        console.log("cambiar data ", data);
        this.usuario = {
          lat: parseFloat(data.lat),
          lng: parseFloat(data.lng),
          nombre: data.nombre
        }
        ;
      });
  }

  salir() {
    this._ubicacion.detener_watch();
    this._us.borrar_usuario();
    this.usuario = {};
    this.navCtrl.setRoot('Login'); 

  }
}
