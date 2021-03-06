import React from 'react';
import { cn } from '@bem-react/classname';
import './Field.css';
import PropTypes from 'prop-types';

function Field(props) {
	const cnField = cn('field');

	return (
		<input 
			type="text" 
			className={cnField()} 
			placeholder={props.placeholder} 
			onChange={props.handleChange} 
			value={props.fieldValue} 
			maxLength={props.maxLength}
		/>
	);
}

Field.propTypes = {
	placeholder: PropTypes.string,
	handleChange: PropTypes.func,
	fieldValue: PropTypes.string,
	maxLength: PropTypes.number
};

export default Field;