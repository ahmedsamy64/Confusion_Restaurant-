import * as ActionTypes from './ActionTypes';

export const favorites = (state = [] , action ) => {
    switch(action.type) {
        case ActionTypes.ADD_FAVORITE: 
        //The some() method checks if any of the elements in an array pass a test (provided as a function) and returns true it passed or not.
        // The some() method executes the function once for each element present in the array:

           //If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
           //Otherwise it returns false

         if (state.some(el => el === action.payload )) // el is the element in the state and .some iterates on the state to find a value equal to it
           return state ; 
        
         else 
           return state.concat(action.payload);

         
          case ActionTypes.DELETE_FAVORITE:
             return state.filter((fav) => fav !== action.payload )

             
         default:
           return state ;
        
          


    }
}