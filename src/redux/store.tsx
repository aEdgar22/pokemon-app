import { configureStore } from "@reduxjs/toolkit";
import { IUserInfo } from "../models/user.model";
import userSlice from "./slices/userSlice";
import pokemonSlice from "./slices/pokemonSlice";
import { IPokemons } from '../models/pokemons.model';

export interface AppStore {
    user: IUserInfo,
    pokemons: IPokemons
}

export const store = configureStore<AppStore> ({
    reducer: {
        user: userSlice,
        pokemons: pokemonSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch