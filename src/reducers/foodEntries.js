const foodEntries = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FOOD_ENTRY':
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text
                }
            ];
        case 'REMOVE_FOOD_ENTRY':
            return state.filter(x => x.id !== action.payload);
        default:
            return state;
    }
};

export default foodEntries;
