import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GithubUserService } from './user/user.service';
import { GithubSearchService } from './search/search.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [GithubUserService, GithubSearchService],
})
export class GithubApiModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: GithubApiModule,
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import your base AppModule only.');
    }
  }
}
