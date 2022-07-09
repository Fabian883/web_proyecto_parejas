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
            .addCase(getSkinsById.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSkinsById.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getSkinsById.rejected, (state) => {
                state.loading = false;
                alert("ERROR AL PEDIR LA SKIN");
            })
    }
});

export const getSkins = createAsyncThunk('skin/getSkins', async (payload) => {
  /*  const skinFetch = await fetch("https://localhost:7500/Skins");
    
    const skinsData = await skinFetch.json();
    if (skinFetch.status === 200) {
      return skinsData;
    } else {
      return {
          error: true,
          message: skinsData.error.message,
      }
    }
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
    return products;*/
});

export const getSkinsById = createAsyncThunk('skin/getSkinsById', async (payload) => {
    
    const skinFetch = await fetch("https://localhost:7500/Skin", { //en esta dirección pongo la dirección del api
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            id: payload.id,
            skin: payload.skin,
            image: payload.image,
            rp: payload.rp,
        }),
    });
    const skinData = await skinFetch.json();
    if (skinFetch.status === 200) {
      return skinData;
    } else {
      return {
          error: true,
          message: skinData.error.message,
      }
    }
});

export const getFilteredSkins = createAsyncThunk('skin/getFilteredSkins', async (payload) => {
    
  const skinFetch = await fetch("https://localhost:7500/Skins", { //en esta dirección pongo la dirección del api
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          filter: payload.filter,
      }),
  });
  const skinData = await skinFetch.json();
  if (skinFetch.status === 200) {
    return skinData;
  } else {
    return {
        error: true,
        message: skinData.error.message,
    }
  }
});
//export const { } = skinSlice.actions;

export default skinSlice.reducer;

/*

https://api.my_site.com/skins?page=0&pageSize=10&minPrice=${payload.filter.minPrice}
    
*/