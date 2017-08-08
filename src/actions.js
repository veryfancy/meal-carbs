
let nextFoodEntryId = 0;

export const addFoodEntry = text => {
    return {
        type: 'ADD_FOOD_ENTRY',
        payload: {
            id: nextFoodEntryId++,
            text: text
        }
    };
};

export const removeFoodEntry = id => {
    return {
        type: 'REMOVE_FOOD_ENTRY',
        payload: id
    };
};
