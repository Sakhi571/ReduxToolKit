import { configureStore } from "@reduxjs/toolkit";
import cardReducer from '../slice/Slice'
const Store = configureStore({
    reducer:{
        cart : cardReducer,
    },
});
export default Store;