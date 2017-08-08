import React from 'react';
import { connect }  from 'react-redux';
import AddFood from './AddFood.jsx';
import Food from '../components/Food.jsx';
import { removeFoodEntry } from '../actions'

const Meal = ({ foodEntries, onFoodRemoveClick }) => (
    <div>
        <AddFood />
        <ul>
            {
                foodEntries.map(foodEntry => (
                    <Food
                        key={foodEntry.id}
                        onRemoveClick={() => onFoodRemoveClick(foodEntry.id)}
                        {...foodEntry}
                    />
                ))
            }
        </ul>
    </div>
);

const mapStateToProps = state => {
    return {
        foodEntries: state.foodEntries
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFoodRemoveClick: id => {
            dispatch(removeFoodEntry(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meal);
