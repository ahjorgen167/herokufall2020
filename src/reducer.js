import { combineReducers } from 'redux';

// action = js object
function increment(state = 0, action) {
    console.log(action);
    if (action.type === "INCREMENT") {
        return state + action.value;
    }
    if (action.type === "DECREMENT") {
        return state - action.value;
    }
    return state;

}

function incrementValueManager(state = [7, 4, -1], action) {

    return state;

}


export default combineReducers({

    count: increment,
    incrValues: incrementValueManager,

})