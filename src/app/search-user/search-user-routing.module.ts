import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchUserComponent } from './search-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SearchUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchUserRoutingModule {}
