import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxFormsModule } from 'ngrx-forms';

import { AppComponent } from './app.component';
import { rootReducer } from './core/store/root-reducer';
import { rootEffects } from './core/store/root-effect';
import { metaReducers } from './core/store/meta-reducers';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { GithubApiModule } from './core/services/github-api/github-api.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgrxFormsModule,
    StoreModule.forRoot(rootReducer, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot(rootEffects),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    GithubApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
