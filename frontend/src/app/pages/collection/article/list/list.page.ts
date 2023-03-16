import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  articles: any = [];
  porcentaje = 0.05;
  public progress = 0;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    public alertController: AlertController,
  ) {
    setInterval(() => {
      this.progress += 0.01;
    });
  }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Atención!',
      message: 'Artículo eliminado',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ionViewDidEnter() {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getArticles().subscribe(articles => {
      console.log(articles);
      this.articles = articles;
    })
  }

  goToCreate() {
    this.router.navigateByUrl("/create");
  }

  deleteArticle(id) {
    console.log('Id=' + id);
    this.articleService.deleteArticle(id).subscribe(() => {
      this.ionViewDidEnter();
      console.log('Articulo eliminado');
    });
  }

  goToUpdate(id) {

    this.router.navigateByUrl("/update/", id);
  }

  doRefresh(event) {
    this.getAllArticles();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}