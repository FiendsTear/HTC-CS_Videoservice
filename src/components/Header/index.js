import React from 'react';
import Button from '../Button';
import Field from '../Field';
import { cn } from '@bem-react/classname';
import './Header.css';
import {deleteCookie} from '../../helpers/CookieManagement';

function Header(props) {

	const cnHeader = cn('header');
	const cnHeaderLogo = cn(cnHeader(), 'logo');
	const cnHeaderLabel = cn(cnHeader(), 'label');
	const cnHeaderSearch = cn(cnHeader(), 'search');
	const cnHeaderSign = cn(cnHeader(), 'sign');
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
					<img  className ={cnHeaderSign()} src="/assets/common_logos/sign.png" alt="sign"></img>
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

export default Header;
