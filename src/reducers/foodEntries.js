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
        default:
            return state;
    }
};

export default foodEntries;
