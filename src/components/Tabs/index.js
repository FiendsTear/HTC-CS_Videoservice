import React, {useState} from 'react';
import Movies from './Movies';
import Channels from './Channels';
import Genres from './Genres';
import './Tabs.css';
import { cn } from '@bem-react/classname';

function Tabs() {

	const [currentTab, setCurrentTab] = useState('movies');
	let currentTabComponent;
	if (currentTab === 'movies') {
		currentTabComponent = <section style={{'height': '95%'}}><Movies /><Genres /></section>;
	} else {
		currentTabComponent = <section style={{'height': '95%'}}><Channels /></section>;
	}

	const cnTabs = cn('tabs');
	const cnTabsButton = cn(cnTabs(), 'button');
	const cnTabsHeader = cn(cnTabs(), 'header');

	return (  
		<main className={cnTabs()}>
			<header className={cnTabsHeader()}>
				<div className={currentTab === 'movies' ? cnTabsButton({ active: true}) : cnTabsButton()} onClick={() => setCurrentTab('movies')}>Фильмы</div>
				<div className={currentTab === 'channels' ? cnTabsButton({ active: true}) : cnTabsButton()} onClick={() => setCurrentTab('channels')}>Телеканалы</div>
			</header>
			{currentTabComponent}
		</main>
	);
}

export default Tabs;