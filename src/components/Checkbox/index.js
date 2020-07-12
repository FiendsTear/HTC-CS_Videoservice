import React from 'react';
import { cn } from '@bem-react/classname';
import './Checkbox.css';
import PropTypes from 'prop-types';

function Checkbox(props) {
	const cnChecbox= cn('checkbox');

	return (
		<input 
			type="checkbox" 
			className={cnChecbox()}
			id={props.id}
		/>
	);
}

Checkbox.propTypes = {
	id: PropTypes.string
};

export default Checkbox;