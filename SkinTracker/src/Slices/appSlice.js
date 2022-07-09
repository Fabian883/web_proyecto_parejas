import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import themes from "../utils/theme";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        theme: themes.dark,
        language: 'es',
        loading: false,
        promo: "",
    },
    reducers: {
        toLight: (state) => {
            state.theme = themes.light;
        },
        toDark: (state) => {
            state.theme = themes.dark;
        },
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        }
    }
});

export const fetchPromo = createAsyncThunk('promo/fetchPromo', async () => {
    const promoFetch = await fetch("https://api.ticolitas.com/alertas");
    const promoBody = await promoFetch.json();
    return promoBody[0].alerta;
});

export const { toLight, toDark, startLoading, stopLoading } = appSlice.actions;

export default appSlice.reducer;
