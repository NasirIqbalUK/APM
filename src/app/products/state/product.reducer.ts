export function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_PRODUCT_CODE':
            console.log('existing state: ' + JSON.stringify(state));
            console.log('payload: ' + action.payload);
            return {
                ...state,
                ShowProductCode: action.payload
            };
        default:
            return state;
    }
}
