import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxFormsModule } from 'ngrx-forms';

import { UserComponent } from './user.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserRoutingModule } from './user-routing.module';
import { TextInputModule } from '../components/text-input/text-input.module';

@NgModule({
  imports: [CommonModule, UserRoutingModule, TextInputModule, NgrxFormsModule],
  declarations: [UserComponent, RepositoriesComponent],
})
export class UserModule {}
