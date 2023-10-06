import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        mode:Cookies.get('color_mode_'),
        language:"En"
    },
    reducers: {
      tuggleMode: state => {
        if(state.mode==="dark")
        {
            state.mode="light";
            Cookies.set('color_mode_', 'light', { expires: 70 });
        }
        else
        {
            state.mode="dark";
            Cookies.set('color_mode_', 'dark', { expires: 70 });
        }
        console.log(state.mode)
        },
        test: ()=>{
          console.log("test")
        }
    },
  })

  export const { tuggleMode , test } = counterSlice.actions

  export default configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  })
