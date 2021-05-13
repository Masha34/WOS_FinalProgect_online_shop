const initialState = {
    List: []
}
const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS_LOADED":  
            return {
                List: action.payload
            }
        default:
            return state;
    }}
export default shopReducer;
