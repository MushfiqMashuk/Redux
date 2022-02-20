import axios from "axios";
import redux from "redux";
import thunk from "redux-thunk";

const {createStore, applyMiddleware} = redux;

const userState = {
    loading: false,
    user: [],
    error: ''
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchRequestAction = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchSuccessAction = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchFailureAction = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
console.log(thunk.default);
function reducer(state = userState, action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                user: [],
                error: action.payload
            }
        default:
        return state
    }
}

function fetchUser() {
    return function (dispatch) {
        
        dispatch(fetchRequestAction());
        axios.get("https://jsonplaceholer.typicode.com/users")
            .then(response => {
                const users = response.data.map(u => u.id);
                dispatch(fetchSuccessAction(users));
            })
            .catch(err => {
                dispatch(dispatch(fetchFailureAction(err.message)));
            })

    }
}

const store = createStore(reducer, applyMiddleware(thunk.default));
const {getState, dispatch, subscribe} = store;


subscribe(() => console.log(getState()));

dispatch(fetchUser());