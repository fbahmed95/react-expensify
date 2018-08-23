import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
  });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
  });

const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({count}) => ({
  type: 'SET',
  count
})


// Reducers
// 1. Are pure functions

const countReducer = (state = {count:0}, action) => {
  switch (action.type){
    case 'INCREMENT':
      return{
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return{
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return{
        count: 0
      };
    case 'SET':
      return{
        count: action.count
      };
    default:
      return state;
  }

};

const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - then an object that gets sent to the createStore

// I'd like to increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

//unsubscribe();

// I'd like to reset the count to zero
store.dispatch(resetCount());



// I'd like to decrement the count
store.dispatch(decrementCount({decrementBy: 5}));

store.dispatch(decrementCount());


store.dispatch(setCount({count: 1232}))
