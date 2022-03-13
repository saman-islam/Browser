//this is where data is stored
export const initialState = {
    term: null,
};
//this sets the data to curent data typed in.
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",

};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return{
                ...state, //three dots attribute takes the state, get all the properties and overwrites the new passed in.
                term:action.term,
            };
        default:
            return state;
    }
};

export default reducer;
