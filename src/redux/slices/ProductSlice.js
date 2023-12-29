import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getproducts = createAsyncThunk("Products", async (data,{rejectWithValue}) => {
 try{
 const res = await axios.get("/user/getproducts");
  return res.data;
 }
 catch(error){
  rejectWithValue(error.response.data.msg)
 }
});



const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    error: null,
    products:[]  },
  reducers:{
  
  },
  extraReducers:{
    [getproducts.pending]:(state)=>{state.isLoading=true},
    [getproducts.fulfilled]:(state,action)=>{
        state.error=null
       state.products=action.payload.Products
       state.isLoading=false

    },
    [getproducts.rejected]:(state,action)=>{
        state.error=action.payload.error
    },
    
  }
});

export default ProductSlice.reducer;

