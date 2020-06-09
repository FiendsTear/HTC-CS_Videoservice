import React, {useState} from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Curtain from './components/Curtain';
import Login from './components/Login';
import {getCookie, setCookie} from './helpers/CookieManagement';
import './App.css';

function App() {
	let defaultUserName = getCookie('userName');
	let defaultAuthState;
	if (defaultUserName) {
		defaultAuthState = true;
	} 
	const [isCurtainShutted, setCurtain] = useState(false);
	const [isLoginFormActive, setLoginForm] = useState(false);
	const [authenticated, setAuthentication] = useState(defaultAuthState);
	const [userName, setUserName] = useState(defaultUserName);

	const handleCurtain = () => {
		setCurtain(!isCurtainShutted);
	};

	const handleLoginForm = () => {
		setLoginForm(!isLoginFormActive);
	};

	const changeUserName = (value) => {
		setUserName(value);
		setCookie('userName', value);
	};

	const Authenticate = (value) => {
		setAuthentication(value);
	};

	return (
		<div className="App">
			<Curtain shutted={isCurtainShutted} handleCurtain={handleCurtain} handleLoginForm={handleLoginForm} covering='app'/>
			<Header handleCurtain={handleCurtain} handleLoginForm={handleLoginForm} authenticate={Authenticate} changeUserName={changeUserName} userName={userName} authenticated={authenticated}/>
			<Login handleCurtain={handleCurtain} handleLoginForm={handleLoginForm} authenticate={Authenticate} changeUserName={changeUserName} authenticated={authenticated} active={isLoginFormActive}/>
			<Tabs />
			<Footer />
		</div>
	);
}

export default App;
