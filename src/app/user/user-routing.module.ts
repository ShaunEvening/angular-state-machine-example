import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'repos',
      },
      {
        path: 'repos',
        pathMatch: 'full',
        component: RepositoriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
