//alert("reducer");
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":         
        state = state +action.payload;
        break;
        case "SUBTRACT": 
        break;       
    }
    return state;
}

export default reducer;
