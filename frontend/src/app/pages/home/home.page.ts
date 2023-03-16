import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  slides = [
    {
      img: "assets/logo/logo (1).jpg",
      titulo: 'Bienvenida a<br>B Woman Canarias'
    },
    {
      img: "assets/major/shopping-gift-wrap.jpg",
      titulo: 'Nos adaptarnos<br>a ti'
    },
    {
      img: "assets/major/small-business-making-notes.jpg",
      titulo: 'Asesoramiento <br> personalizado'
    }
  ];

  constructor(private router: Router, private menuCtrl: MenuController, private actionSheetCtrl: ActionSheetController
    ) { }
  
    ngOnInit() {
    }

    onClick() {
      this.menuCtrl.toggle();
    }

    result: string;


    async presentActionSheet() {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Contacto',
        buttons: [
          {
            text: '+34689999577',
            role: '',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'cliente@bwoman.com',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ],
      });
  
      await actionSheet.present();
  
      const result = await actionSheet.onDidDismiss();
      this.result = JSON.stringify(result, null, 2);
    }
    goToCarrito() {
      this.router.navigateByUrl("/carrito");
    }
  }