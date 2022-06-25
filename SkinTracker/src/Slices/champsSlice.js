import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import champ_thumbnail_generic from "../images/champs/champ_thumbnail_generic.jpg";

const champsSlice = createSlice({
    name: 'champs',
    initialState: {
        skin: null,
        champs_thumbnails: []
    },
    reducers: {
        
    },
    extraReducers(builder) {
        builder
            .addCase(getChamps.pending, (state) => {
                state.loading = true;
            })
            .addCase(getChamps.fulfilled, (state, action) => {
                state.champs_thumbnails = action.payload;
            })
            .addCase(getChamps.rejected, (state) => {
                state.loading = false;
                alert("ERROR AL PEDIR LAS ALERTAS");
            })
    }
});

export const getChamps = createAsyncThunk('champs/getChamps', async (payload) => {
    /*const skinFetch = await fetch("https://api.ticolitas.com/alertas");//
    const promoBody = await promoFetch.json();
    return promoBody[0].alerta;*/
    const champs_thumbnails = [
        {
          id: 1,
          champ_name: "Yone",
          champ_thumbnail: champ_thumbnail_generic,
        },
        {
          id: 2,
          champ_name: "Yone",
          champ_thumbnail: champ_thumbnail_generic,
        },
        {
          id: 3,
          champ_name: "Yone",
          champ_thumbnail: champ_thumbnail_generic,
        },
        {
          id: 4,
          champ_name: "Yone",
          champ_thumbnail: champ_thumbnail_generic,
        },
        {
          id: 5,
          champ_name: "Yone",
          champ_thumbnail: champ_thumbnail_generic,
        },
        {
          id: 6,
          champ_name: "Yone",
          champ_thumbnail: champ_thumbnail_generic,
        },
        {
          id: 7,
          champ_name: "Yone",
          champ_thumbnail: champ_thumbnail_generic,
        },
        {
          id: 8,
          champ_name: "Yone",
          champ_thumbnail: champ_thumbnail_generic,
        },
      ];
    return champs_thumbnails;
});

export const getChampsById = createAsyncThunk('champs/getChampsById', async (payload) => {
    /*const skinFetch = await fetch("https://api.ticolitas.com/alertas");//
    const promoBody = await promoFetch.json();
    return promoBody[0].alerta;*/
    const champs_thumbnails = [
        {
          id: 1,
          champ: "",
          thumbnail: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg",
        }
      ];
    return champs_thumbnails;
});

//export const { } = champsSlice.actions;

export default champsSlice.reducer;

/*

https://api.my_site.com/skins?page=0&pageSize=10&minPrice=${payload.filter.minPrice}
    
*/