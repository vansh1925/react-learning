import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    status:false,
    userData:null
}
const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload;
        },
        //action.payload only when we need to modify the state using external data so as logout main no change in data so no action
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})
export default authSlice.reducer;
export const {}= authSlice.actions; 