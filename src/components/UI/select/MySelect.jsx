import React from 'react';
import classes from './MySelect.module.css'

const MySelect = ({options, defValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option value="" disabled hidden>{defValue}</option>
            {options.map(option =>
                <option value={option.value} key={option.value}>
                    {option.name}
                </option>)}
        </select>
    );
};

export default MySelect;