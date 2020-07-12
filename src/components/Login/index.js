import React from 'react';
import Button from '../Button';
import Field from '../Field';
import Checkbox from '../Checkbox';
import { cn } from '@bem-react/classname';
import './Login.css';
import PropTypes from 'prop-types';

function Login(props) {
	const cnLogin = cn('login');
	const cnLoginTitle = cn(cnLogin(), 'title');
	const cnLoginFields = cn(cnLogin(), 'fields');
	const cnLoginCheckbox = cn(cnLogin(), 'checkbox');

	const handleLoginButtonClick = () => {
		props.handleCurtain();
		props.handleLoginForm();
		props.authenticate(true);
	};

	const setUserName = (event) => {
		if (event.target.value) {
			props.changeUserName(event.target.value);
		}
	};

	return (
		<section className={props.active ? cnLogin({'active': true}) : cnLogin({'active': false})}>
			<span className={cnLoginTitle()}>Вход</span>
			<div className={cnLoginFields()}>
				<Field placeholder="Логин" handleChange={setUserName}/>
				<Field placeholder="Пароль"/>
				<div className={cnLoginCheckbox()}><Checkbox id="rememberMe"/><label htmlFor="rememberMe">Запомнить</label></div>
			</div>
			<Button type="login" clickHandle={handleLoginButtonClick} title="Войти"></Button>
		</section>
	);
}

Login.propTypes = {
	handleCurtain: PropTypes.func,
	authenticate: PropTypes.func,
	changeUserName: PropTypes.func,
	handleLoginForm: PropTypes.func, 
	active: PropTypes.bool
};

export default Login;
