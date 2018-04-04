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
  places: any[] = [{
    lat:-17.365291087081303,
    lng:-66.1746756507110,
    rad: 0.001
  }];

  constructor(public navCtrl: NavController, private _ubicacion: UbicacionService, private _us: UsuarioService
  ) {
      this._ubicacion.iniciar_localizacion();
      this._ubicacion.usuario.valueChanges().subscribe( data => {
        console.log("cambiar data ", data);
        if (this.nearPlace(parseFloat(data.lat), parseFloat(data.lng))) {
          console.log("Cerca del lugar");
        }
        this.usuario = {
          lat: parseFloat(data.lat),
          lng: parseFloat(data.lng),
          nombre: data.nombre
        };
      });
  }

  nearPlace(lat: Number, lng: Number) {
    var distance = this.distancePoint(this.places[0].lat,this.places[0].lng, lat, lng);
    console.log(distance);
    if(distance < this.places[0].rad) {
      console.log('Inside');
      return true;
    }
    if(distance === this.places[0].rad) {
      console.log('On');
      return true;
    }
    if(distance > this.places[0].rad) {
      console.log('Outside');
      return false;
    }
  }

  distancePoint(xc: any, yc: any, xp: any, yp: any) {
    return Math.sqrt(Math.pow(xp - xc, 2) + Math.pow(yp - yc, 2));
  }

  salir() {
    this._ubicacion.detener_watch();
    this._us.borrar_usuario();
    this.usuario = {};
    this.navCtrl.setRoot('Login'); 

  }
}
