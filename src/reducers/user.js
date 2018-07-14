 // reducer is a function that takes states and actions and returns new state
import { USER_LOGGED_IN  } from "../types";

 export default function user (state={}, action = {}){
    switch (action.type){
        case USER_LOGGED_IN :
            return action.user; // return new state

        default : return state;
    }
 }