// ACTIONS
const addAction = {
    type: 'ADD',
    ammount: 1
 };
 
 const removeAction = {
    type: 'REMOVE',
    ammount: 1
 };
 
 // REDUCER
 const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            console.log(state, action)
            return state + action.ammount;
        case 'REMOVE':
            return state - action.ammount;
        case 'RESET':
            return 0
        default:
            return state;
    }
 }
 
 // STORE
 const { createStore } = Redux;
 const store = createStore(counterReducer);
 
 // MAIN
 const renderStore = document.getElementById('render-store');
 const render = () => {
    renderStore.innerHTML = store.getState();
 }
 
 store.subscribe(render);
 render();
 
 // Button Add 1
 const add1 = document.getElementById('add1');
 add1.addEventListener('click', () => {
    store.dispatch({
        type: "ADD",
        ammount: 1
    })
 });
 
 // Button Add 10 
 const add10 = document.getElementById('add10');
 add10.addEventListener('click', () => {
    store.dispatch({
        type: "ADD",
        ammount: 10
    })
 });

 // Button Subtract 1
 const remove1 = document.getElementById('remove1');
 remove1.addEventListener('click', () => {
    store.dispatch({
        type: "REMOVE",
        ammount: 1
    })
 });

  // Button Subtract 10 
  const remove10 = document.getElementById('remove10');
  remove10.addEventListener('click', () => {
     store.dispatch({
         type: "REMOVE",
         ammount: 10
     })
  });

   // Button Reset Back to 0
 const reset = document.getElementById('reset');
 reset.addEventListener('click', () => {
    store.dispatch({
        type: "RESET",
        ammount: 0
    })
 });