import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { AlbumsComponent } from './components/albums/albums.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'albums',
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'details',
    component: AlbumDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
