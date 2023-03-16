import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.page.html',
  styleUrls: ['./shoes.page.scss'],
})
export class ShoesPage implements OnInit {
  articles: any = [];
  porcentaje = 0.05;
  public progress = 0;

  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) {
    setInterval(() => {
      this.progress += 0.01;
    });
  }

  ngOnInit() { }


  ionViewDidEnter() {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getArticles().subscribe(articles => {
      console.log(articles);
      this.articles = articles;
    })
  }

  doRefresh(event) {
    this.getAllArticles();
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}