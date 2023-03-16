import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { ArticleService } from 'src/app/services/article.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {


  articles: any = [];
  id: any;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";
  alertController: any;

  constructor(
    private articleService: ArticleService,
    private activedRoute: ActivatedRoute,
    private carritoService: CarritoService,

  ) {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
  }

  ionViewDidEnter() {
    this.getArticle(this.id);
    this.isSubmitted = false;
    this.capturedPhoto = "";

  }

  ngOnInit() { }

  getArticle(id) {
    this.articleService.getArticle(id).subscribe(articles => {
      console.log(articles);
      this.articles = articles;
    })
  }

  async getCarrito() {
    console.log(this.articles);
        let blob = null;
        if (this.capturedPhoto != "") {
          const response = await fetch(this.capturedPhoto);
          blob = await response.blob();
        }
        this.carritoService.createCarrito(this.articles, blob).subscribe(data => {
          console.log("Incluido en carrito")
        })
      }
    }