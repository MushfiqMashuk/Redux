// Multiple reducer
import redux from "redux";
import reduxLogger from "redux-logger";

const logger = reduxLogger.createLogger();

const powerState = {
    powers: ["Super Human Strength"]
}
const costumeState = {
    costume: ["Cape", "Mask"]
}

const ADD_POWER = "ADD_POWER";
const ADD_COSTUME = "ADD_COSTUME";
const {createStore, combineReducers, applyMiddleware} = redux;

const rootReducers = combineReducers({
    power: powerReducer,
    costume: costumeReducer
})

const store = createStore(rootReducers, applyMiddleware(logger));

const {dispatch, getState, subscribe} = store;


const addPowerAction = () => {
    return {
        type: ADD_POWER,
        payload: "X-ray vision"
    }
}

const addCostumeAction = () => ({type: ADD_COSTUME, payload: "Helmet"});

function powerReducer(state = powerState, action) {
    console.log(action.payload);
    switch (action.type) {
        case ADD_POWER:
            return {
                ...state,
                powers: [...state.powers, action.payload]
            }
        default:
        return state;
    }
}


function costumeReducer(state = costumeState, action) {
    switch (action.type) {
        case ADD_COSTUME:
            return {
                ...state,
                costume: [...state.costume, action.payload]
            }
    
        default:
            return state
    }
}



dispatch(addPowerAction());
dispatch(addCostumeAction());

subscribe(() => {});
console.log(getState().costume);