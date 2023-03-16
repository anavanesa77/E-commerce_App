import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private alertCtrl: AlertController) { }

  async showMessage(title: string, msg: string){
    const alert = await this.alertCtrl.create({
      header:  title,
      message: msg,
      buttons: ['Aceptar'],
    });  
    await alert.present();  
  }

  message(e: HttpErrorResponse){
    if (e.error.message){
      this.showMessage('Error', e.error.message);
    }else{
      this.showMessage('Error', 'Error inesperado. Por favor, póngase en contacto con el administrador.');
    }    
  }

}
