import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { RelatedAlbumsComponent } from './components/related-albums/related-albums.component';
import { AlbumComponent } from './components/album/album.component';
import { EffectsModule } from '@ngrx/effects';
import { AlbumsEffectService } from './store/albums.effect.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    RelatedAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      app: appReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AlbumsEffectService])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
