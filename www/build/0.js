webpackJsonp([0],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, _us, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this._us = _us;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.clave = "sam-1";
    }
    LoginPage.prototype.continuar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Espere por favor....'
        });
        loading.present();
        // Verificar si la clave es valida
        this._us.verifica_usuario(this.clave)
            .then(function (valido) {
            loading.dismiss();
            if (valido) {
                _this.slides.lockSwipes(false);
                _this.slides.slideNext();
                _this.slides.lockSwipes(true);
            }
            else {
                _this.alertCtrl.create({
                    title: 'Clave no es correcta',
                    subTitle: 'Por favor verifique su clave, o hable con el administrador',
                    buttons: ['Ok!']
                }).present();
            }
        })
            .catch(function (err) {
            loading.dismiss();
            console.log('Error en verifica_usuario' + JSON.stringify(err));
        });
    };
    LoginPage.prototype.ingresar = function () {
        //Tenemos la clave, ir a home
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.ngAfterViewInit = function () {
        this.slides.lockSwipes(true);
        this.slides.freeMode = false;
        this.slides.paginationType = "progress";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], LoginPage.prototype, "slides", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\projects\tracker\src\pages\login\login.html"*/'<ion-content padding>\n\n\n\n    <ion-slides pager>\n\n\n\n        <ion-slide>\n\n\n\n            <ion-toolbar>\n\n            </ion-toolbar>\n\n\n\n            <img src="assets/imgs/usuario.jpg" class="slide-image" />\n\n            <h2 class="slide-title">Ingrese su clave</h2>\n\n            <p>Para continuar, debe de ingresar su código</p>\n\n\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label>Clave</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="clave" (keyup.enter)="continuar()"></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n\n\n            <button ion-button [disabled]="clave.length < 3" (click)="continuar()">\n\n            Verificar\n\n          </button>\n\n\n\n        </ion-slide>\n\n\n\n\n\n        <!-- Ultimo Slide -->\n\n        <ion-slide>\n\n            <ion-toolbar>\n\n            </ion-toolbar>\n\n\n\n            <img src="assets/imgs/check.jpg" class="slide-image" />\n\n            <h2 class="slide-title">¿Listo para empezar?</h2>\n\n\n\n            <button ion-button large clear icon-right color="primary" (click)="ingresar()">\n\n            Continuar\n\n            <ion-icon name="arrow-forward"></ion-icon>\n\n          </button>\n\n\n\n        </ion-slide>\n\n        <!-- Fin del último slide -->\n\n\n\n    </ion-slides>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\projects\tracker\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map