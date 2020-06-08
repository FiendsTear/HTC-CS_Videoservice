import React from 'react';
import { cn } from '@bem-react/classname';
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {

	const cnButton = cn('button');

	const clickHandle = () => {
		props.clickHandle();
	};

	return (
		<div className={props.type==='login' ? cnButton({'type': 'login'}) : cnButton()} onClick={clickHandle}>{props.title}</div>
	);
}

Button.propTypes = {
	clickHandle: PropTypes.func,
	type: PropTypes.string,
	title: PropTypes.string
};

export default Button;
