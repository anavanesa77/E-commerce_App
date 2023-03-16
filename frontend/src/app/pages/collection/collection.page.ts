import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
})
export class CollectionPage implements OnInit {

  articles: any = [];

  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) { }

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

}