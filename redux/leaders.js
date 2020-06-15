import * as ActionTypes from './ActionTypes';

//reducer function recives the current state and the action to generate the next state..
//this is a pure function that doesnt mutate (change) the state and dont modify it

export const leaders = (state  = { isLoading: true,
                                    errMess: null,
                                    leaders:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
        return {...state, isLoading: false, errMess: null, leaders: action.payload};
         // ...state means that returns the state itself and the properties comming after is 
         // the modification of the return only so it doesnt modify the orignal state.
        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []}

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
    }
};