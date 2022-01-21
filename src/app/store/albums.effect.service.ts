import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Album } from '../core/interfaces/album.interface';
import { AppState, loadAlbums, setAlbums, successLoadAlbums } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class AlbumsEffectService {

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<{app: AppState}>
  ) { }

  loadAlbums = createEffect(() => this.actions$.pipe(
    ofType(loadAlbums),
    withLatestFrom(
      this.store.select('app').pipe(
        map(app => app.albums)
      )
    ),
    switchMap(([action, albums]) => {
      if(albums.length === 0) {
        return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums/1/photos')
          .pipe(
            tap(albums => this.store.dispatch(setAlbums({ payload: albums }))),
            map(() => successLoadAlbums())
          );
      }

      return of(successLoadAlbums())
    })
  ))
}

