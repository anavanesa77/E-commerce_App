import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  carrito: any = [];

  constructor(private router: Router, private carritoService: CarritoService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  goToFin() {
    this.router.navigateByUrl("/final");
  }

  removeAllCarrito() {
    this.carritoService.deleteAll().subscribe(carrito => {
      console.log(carrito);
    })
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Tramitando su compra...',
      duration: 4000,
    });

    loading.present();
  }

}