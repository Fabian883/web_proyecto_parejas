import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
          skin: "Taliyah Veraniega",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Taliyah_3.jpg",
          rp: 1350,
        },
        {
          id: 2,
          skin: "Akali Cazadora de Cabezas",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_7.jpg",
          rp: 1350,
        },
        {
          id: 3,
          skin: "Anivia Hielo Negro",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_5.jpg",
          rp: 1850,
        },
        {
          id: 4,
          skin: "Ashe Reina Cósmica",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_11.jpg",
          rp: 1350,
        },
        {
          id: 5,
          skin: "Yasuo Luna Sangrienta",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
          rp: 975,
        },
        {
          id: 6,
          skin: "Yasuo Luna Sangrienta",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
          rp: 975,
        },
        {
          id: 7,
          skin: "Yasuo Luna Sangrienta",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
          rp: 975,
        },
        {
          id: 8,
          skin: "Yasuo Luna Sangrienta",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
          rp: 975,
        },
        {
          id: 9,
          skin: "Yasuo Luna Sangrienta",
          image:
            "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Yasuo_3.jpg",
          rp: 975,
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