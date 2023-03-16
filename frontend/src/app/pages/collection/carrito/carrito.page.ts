import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  carrito: any = [];
  porcentaje = 0.05;
  public progress = 0;
  total: number;

  constructor(
    private carritoService: CarritoService,
    private router: Router,
  ) {
    setInterval(() => {
      this.progress += 0.01;
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getCarritos();
  }

  getCarritos() {
    this.carritoService.getCarritos().subscribe(carrito => {
      console.log(carrito);
      this.carrito = carrito;
    })
  }

  deleteCarrito(id) {
    console.log('Id=' + id);
    this.carritoService.deleteCarrito(id).subscribe(() => {
      this.ionViewDidEnter();
      console.log('Articulo eliminado');
    });
  }
  
  doRefresh(event) {
    this.getCarritos();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  goToMenu() {
    this.router.navigateByUrl("/home");
  }

  goToPay() {
    this.router.navigateByUrl("/pago");
  }

}