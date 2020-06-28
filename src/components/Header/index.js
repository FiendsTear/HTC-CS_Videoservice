import React from 'react';
import Button from '../Button';
import Field from '../Field';
import { cn } from '@bem-react/classname';
import './Header.css';
import {deleteCookie} from '../../helpers/CookieManagement';
import PropTypes from 'prop-types';

function Header(props) {

	const cnHeader = cn('header');
	const cnHeaderLogo = cn(cnHeader(), 'logo');
	const cnHeaderLabel = cn(cnHeader(), 'label');
	const cnHeaderSearch = cn(cnHeader(), 'search');
	const cnHeaderContent = cn(cnHeader(), 'content');
	const cnHeaderSearchButton = cn(cnHeader(), 'searchButton');
	const cnHeaderLogin = cn(cnHeader(), 'login');

	const showLoginForm = () => {
		props.handleCurtain();
		props.handleLoginForm();
	};

	const Logout = () => {
		props.authenticate(false);
		deleteCookie('userName');
	};

	const setUserName = (event) => {
		if (event.target.value) {
			props.changeUserName(event.target.value);
		}
	};

	let loginButton;
	if (props.authenticated) {
		loginButton = 
			<div className={cnHeaderLogin()}>
				<Field fieldValue={props.userName} handleChange={setUserName} style={{'width': '114px', 'text-align': 'right'}}></Field>
				<Button clickHandle={Logout} title="Выйти"></Button>
			</div>;
	} else {
		loginButton = 
			<div className={cnHeaderLogin()}>
				<Button type="login" clickHandle={showLoginForm} title="Войти"></Button>
			</div>;
	} 

	return (
		<header className={cnHeader()}>
			<div className={cnHeaderContent()}>
				<div className={cnHeaderLogo()}>
					<svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
						<ellipse cx="18.075" cy="16.2" rx="18.075" ry="16.2" fill="#E5261E"/>
						<polygon points="8, 0 39, 16.2 8, 34" fill="#FFF"/>
					</svg>
					<span className={cnHeaderLabel()}>Видеосервис</span>
				</div>
				<div className={cnHeaderSearch()}>
					<Field placeholder="Поиск..." underlined={true}/>
					<div className={cnHeaderSearchButton()}>Найти</div>
				</div>
				{loginButton}
			</div>
		</header>
	);
}

Header.propTypes = {
	handleCurtain: PropTypes.func,
	handleLoginForm: PropTypes.func,
	authenticate: PropTypes.func,
	authenticated: PropTypes.bool,
	changeUserName: PropTypes.func,
	userName: PropTypes.string
};
export default Header;
