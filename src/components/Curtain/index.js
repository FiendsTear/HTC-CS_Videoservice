import React from 'react';
import { cn } from '@bem-react/classname';
import './Curtain.css';
import PropTypes from 'prop-types';

function Curtain(props) {
	const cnCurtain = cn('curtain');

	const handleClick = () => {
		if (props.handleCurtain) {
			props.handleCurtain();
		}
		if (props.handleLoginForm) {
			props.handleLoginForm();
		}
	};

	return (
		<div 
			className={props.shutted ? cnCurtain({'shutted': true, covering: props.covering}) : cnCurtain({'shutted': false, covering: props.covering})}
			onClick={handleClick}></div>
	);
}

Curtain.propTypes = {
	handleCurtain: PropTypes.func,
	handleLoginForm: PropTypes.func,
	shutted: PropTypes.bool,
	covering: PropTypes.string
};

export default Curtain;
