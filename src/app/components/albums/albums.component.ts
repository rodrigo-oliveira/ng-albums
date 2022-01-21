import { Component, OnInit } from '@angular/core';
import { AppState, loadAlbums } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  title = 'Álbuns';
  subtitle = 'Gerenciamento de estado através do @ngrx/store';
  albums$ = this.store.select('app').pipe(
    map(app => app.albums)
  );

  constructor(
    private store: Store<{app: AppState}>
  ) { }


  ngOnInit(): void {
    this.store.dispatch(loadAlbums())
  }
}
