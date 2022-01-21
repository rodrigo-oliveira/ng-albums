import { Component, OnInit } from '@angular/core';
import { AppState, loadAlbums } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  constructor(
    private store: Store<{app: AppState}>
  ) { }

  photos$ = this.store.select('app').pipe(
    map(app => app.albums)
  );

  ngOnInit(): void {
    this.store.dispatch(loadAlbums())
  }

}
