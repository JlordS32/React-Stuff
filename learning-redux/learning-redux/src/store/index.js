import { configureStore, } from 'redux';


const reducerFn = (state = { counter: 10 }, action) => {
   return state;
};

const store = configureStore(reducerFn);
export default store;