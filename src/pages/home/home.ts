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
        console.log(data);
        this.usuario = data;
      });
  }

  salir() {
    this._us.borrar_usuario();
    this._ubicacion.detener_watch();
    this.navCtrl.setRoot('Login'); 

  }
}
