import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search-user',
    pathMatch: 'full',
    loadChildren: './search-user/search-user.module#SearchUserModule',
  },
  {
    path: 'user/:username',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: '**',
    redirectTo: 'search-user',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
