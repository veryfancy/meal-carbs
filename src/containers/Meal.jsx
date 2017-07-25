import React from 'react';
import { connect }  from 'react-redux';
import AddFood from './AddFood.jsx';
import Food from '../components/Food.jsx';

const Meal = ({ foodEntries }) => (
    <div>
        <AddFood />
        <ul>
            {
                foodEntries.map(foodEntry => (
                    <Food
                        key={foodEntry.id}
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
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meal);
