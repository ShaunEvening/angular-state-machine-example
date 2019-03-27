import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxFormsModule } from 'ngrx-forms';
import { SearchUserComponent } from './search-user.component';
import { SearchUserRoutingModule } from './search-user-routing.module';
import { TextInputModule } from '../components/text-input/text-input.module';
import { ButtonModule } from '../components/button/button.module';

@NgModule({
  imports: [CommonModule, SearchUserRoutingModule, TextInputModule, ButtonModule, NgrxFormsModule],
  declarations: [SearchUserComponent],
})
export class SearchUserModule {}
