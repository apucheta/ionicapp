import { Component } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public servicio: ServicioService) {}

  sendPostRequest() {
    this.servicio.login();
  }

  getSaldoFliar() {
    this.servicio.saldoFliar('131685');
  }

  getDetalleCC() {
    this.servicio.detalleCC('131685');
  }
}
