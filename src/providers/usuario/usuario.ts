import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';



@Injectable()
export class UsuarioService {

  clave: string = "";

  constructor(
    private afDB: AngularFireDatabase, 
    private storage: Storage,
    private platform: Platform
  ) {}

  verifica_usuario( clave: string) {
    let promesa = new Promise( (resolve, reject) => {
      clave = clave.toLocaleLowerCase();
      console.log(clave);
      this.afDB.list('/usuarios/'+ clave)
        .valueChanges()
        .subscribe( data => {
          if (data.length === 0) {
            // clave no es correcta
            resolve(false);
          } else {
            // la clave es valida
            this.clave = clave;
            this.guardar_storage();

            resolve(true);
          }
        });
    })
    .catch( error => console.log('Error en promesa Service: '+ JSON.stringify(error)));
    return promesa;
  }

  guardar_storage() {
    let promise = new Promise((resolve, reject) => {
      if(this.platform.is('cordova')){
        // Dispositivo
        this.storage.set('clase', this.clave);
        resolve();
      } else {
        // escritorio
        if (this.clave) {
          localStorage.setItem('clave', this.clave);
          resolve();
        } else {
          localStorage.removeItem('clave');
          resolve();
        }

      }
    });

    return promise;
  }

  cargar_storage() {
    return new Promise((resolve, reject) => {
      if(this.platform.is('cordova')){
        // dispositivo
        this.storage.ready().then( ()=> {
          this.storage.get('clave').then( clave => {
            this.clave = clave;
            resolve();
          });
        })

      } else {
        // escritorio
        this.clave = localStorage.getItem('clave');
        resolve();
      }
    });
  }

  borrar_usuario() {
    this.clave = null;
    this.guardar_storage();
  }

}
