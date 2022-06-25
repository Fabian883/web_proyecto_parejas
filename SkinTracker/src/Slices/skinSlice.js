import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import thumbnail_generic from "../images/champs/skin_thumbnail_generic.jpg";

const skinSlice = createSlice({
    name: 'skin',
    initialState: {
        skin: null,
        products: []
    },
    reducers: {
        
    },
    extraReducers(builder) {
        builder
            .addCase(getSkins.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSkins.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getSkins.rejected, (state) => {
                state.loading = false;
                alert("ERROR AL PEDIR LAS ALERTAS");
            })
    }
});

export const getSkins = createAsyncThunk('skin/getSkins', async (payload) => {
    /*const skinFetch = await fetch("https://api.ticolitas.com/alertas");//
    const promoBody = await promoFetch.json();
    return promoBody[0].alerta;*/
    const products = [
        {
          id: 1,
          skin: "Jax Baston Divino",
          image: thumbnail_generic,
          rp: 1350,
        },
        {
          id: 2,
          skin: "Jax Baston Divino",
          image: thumbnail_generic,
          rp: 1350,
        },
        {
          id: 3,
          skin: "Jax Baston Divino",
          image: thumbnail_generic,
          rp: 1350,
        },
        {
          id: 4,
          skin: "Jax Baston Divino",
          image: thumbnail_generic,
          rp: 1350,
        },
        {
          id: 5,
          skin: "Jax Baston Divino",
          image: thumbnail_generic,
          rp: 1350,
        },
        {
          id: 6,
          skin: "Jax Baston Divino",
          image: thumbnail_generic,
          rp: 1350,
        },
        {
          id: 7,
          skin: "Jax Baston Divino",
          image: thumbnail_generic,
          rp: 1350,
        },
        {
          id: 8,
          skin: "Jax Baston Divino",
          image: thumbnail_generic,
          rp: 1350,
        },
      ];
    return products;
});

export const getSkinsById = createAsyncThunk('skin/getSkinsById', async (payload) => {
    /*const skinFetch = await fetch("https://api.ticolitas.com/alertas");//
    const promoBody = await promoFetch.json();
    return promoBody[0].alerta;*/
    const products = [
        {
          id: 1,
          skin: "Taliyah Veraniega",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg",
          rp: 1350,
        }
      ];
    return products;
});

//export const { } = skinSlice.actions;

export default skinSlice.reducer;

/*

https://api.my_site.com/skins?page=0&pageSize=10&minPrice=${payload.filter.minPrice}
    
*/