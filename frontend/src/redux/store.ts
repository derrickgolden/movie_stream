import { configureStore } from '@reduxjs/toolkit'
import movieListDetailsReducer from './movieList';
import seriesListDetailsReducer from './seriesList';
// import userDetailsReducer from "./userAdmin"
import callApiReducer from './callApi'
import rerenderReducer from './rerender'

export const store = configureStore({
  reducer: {
    // userDetails: userDetailsReducer, 
    movieListDetails: movieListDetailsReducer,
    seriesListDetails: seriesListDetailsReducer, 
    callApi: callApiReducer,
    rerender: rerenderReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
