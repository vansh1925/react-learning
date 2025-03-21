///there are some steps to use reduc like a presetup for it 
//1 import confugureStore from redux
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
/*Store:
Ye central data repository hota hai jaha aapka pura state hota hai.
**yeh store vali file  
Actions:
Ye plain JavaScript objects hote hain jo state me changes karne ke liye instruction dete hain.
Example: ADD_USER, DELETE_USER etc.
Reducers:
Ye ek pure function hota hai jo state aur action ko accept karke new state return karta hai.
**TodoSLice.js action + reducer ki file
*/
/* fir store ko react se jorna hoga 
fir compo mein redux use kro
data lene ke liye useSelector and data main mody vagehra ke liye ie data bhejne le liye useDispatch use kro*/