import React from 'react';
import { connect } from 'react-redux';
import { addFoodEntry } from '../actions'

const AddFood = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim())
                        return;
                    dispatch(addFoodEntry(input.value));
                    input.value = '';
                }}
            >
                <input
                    ref={node => { input = node; }}
                ></input>
                <button type="submit">
                    Add Food
                </button>
            </form>
        </div>
    );
};

export default connect()(AddFood);
