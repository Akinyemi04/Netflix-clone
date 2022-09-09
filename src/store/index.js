import {configureStore, createSlice} from '@reduxjs/toolkit'

const homeSlice = createSlice({
    name:'home',
    initialState:{
        data:null,
        random:null
    },
    reducers:{
        fill(state,action){
            return{
                ...state,
                data:action.payload
            }
        },
        randoms(state,action){
            return{
                ...state,
                random:action.payload
            }
        }
    }
})
export const homers = homeSlice.actions
const store = configureStore({
    reducer:{
       home: homeSlice.reducer,
    }
})
export default store;