import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState, loadAlbums } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-related-albums',
  templateUrl: './related-albums.component.html',
  styleUrls: ['./related-albums.component.scss']
})
export class RelatedAlbumsComponent implements OnInit {
  constructor(
    private store: Store<{app: AppState}>,
    private http: HttpClient
  ) { }

  photos$ = this.store.select('app').pipe(
    map(app => app.albums)
  );

  ngOnInit(): void {
    this.store.dispatch(loadAlbums())
  }

}
