import React from 'react';
import { cn } from '@bem-react/classname';
import './Field.css';
import PropTypes from 'prop-types';

function Field(props) {
	const cnField = cn('field');

	return (
		<input 
			type="text" 
			className={props.underlined ? cnField({'underlined': true}) : cnField()} 
			placeholder={props.placeholder} 
			onChange={props.handleChange} 
			value={props.fieldValue ? props.fieldValue : undefined} 
			style={props.style ? props.style : undefined}/>
	);
}

Field.propTypes = {
	underlined: PropTypes.bool,
	placeholder: PropTypes.string,
	handleChange: PropTypes.func,
	fieldValue: PropTypes.string,
	style: PropTypes.string
};

export default Field;