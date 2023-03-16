import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home/home.module';

//Guards
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/collection/article/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/collection/article/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/collection/carrito/carrito.module').then(m => m.CarritoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/collection/article/update/update.module').then(m => m.UpdatePageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/collection/article/product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./pages/collection/article/article.module').then(m => m.ArticlePageModule)
  },
  {
    path: 'administrator',
    loadChildren: () => import('./pages/collection/administrator/administrator.module').then(m => m.AdministratorPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'shoes',
    loadChildren: () => import('./pages/collection/shoes/shoes.module').then(m => m.ShoesPageModule)
  },
  {
    path: 'accessories',
    loadChildren: () => import('./pages/collection/accessories/accessories.module').then(m => m.AccessoriesPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./pages/collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'clothing',
    loadChildren: () => import('./pages/collection/clothing/clothing.module').then( m => m.ClothingPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pages/collection/pago/pago.module').then(m => m.PagoPageModule),
  },
  {
    path: 'final',
    loadChildren: () => import('./pages/collection/final/final.module').then(m => m.FinalPageModule),
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/collection/clientes/clientes.module').then(m => m.ClientesPageModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }