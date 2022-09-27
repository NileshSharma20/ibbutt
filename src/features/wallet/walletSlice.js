import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import walletService from './walletService'

const initialState ={
    walletAddress: "",
    message: ''
}

export const connectWallet = createAsyncThunk(
    'wallet/connectWallet',
    async (_, thunkAPI) => {
        try {
            return walletService.connectWallet()
        } catch (error) {
            const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)


export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers:{
        resetWallet: (state) => ({
            walletAddress:"",
            message: ''}),
    },
    extraReducers: (builder) => {
        builder
            .addCase(connectWallet.fulfilled, (state,action) => {
                if(typeof(action.payload) !== 'undefined'){
                    console.log(action.payload)
                    state.walletAddress = action.payload
                }
            })
            .addCase(connectWallet.rejected, (state,action) => {
                state.message = action.payload
            })
    }
})

export const {resetWallet} = walletSlice.actions;

export default walletSlice.reducer