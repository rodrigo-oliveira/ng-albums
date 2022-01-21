import { createAction, createReducer, on, props } from '@ngrx/store'
import { Album } from '../core/interfaces/album.interface';

export interface AppState {
    albums: Album[]
};

export const appInitialState: AppState = {
    albums: []
};

export const loadAlbums = createAction('[App] Load albums');
export const successLoadAlbums = createAction('[App] [Success] Load albums');
export const setAlbums = createAction('[App] Set albums', props<{ payload: Album[] }>())

export const appReducer = createReducer(
    appInitialState,

    on(setAlbums, (state, { payload }) => {
      return state = {
          ...state,
          albums: payload
      }
  })
)
