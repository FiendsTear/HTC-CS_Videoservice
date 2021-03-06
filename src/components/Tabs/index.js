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
		currentTabComponent = <section><Movies /><Genres /></section>;
	} else {
		currentTabComponent = <section><Channels /></section>;
	}

	const cnTabs = cn('tabs');
	const cnTabsButton = cn(cnTabs(), 'button');
	const cnTabsHeader = cn(cnTabs(), 'header');

	return (  
		<main className={cnTabs()}>
			<header className={cnTabsHeader()}>
				<h4 className={currentTab === 'movies' ? cnTabsButton({ active: true}) : cnTabsButton()} onClick={() => setCurrentTab('movies')}>Фильмы</h4>
				<h4 className={currentTab === 'channels' ? cnTabsButton({ active: true}) : cnTabsButton()} onClick={() => setCurrentTab('channels')}>Телеканалы</h4>
			</header>
			{currentTabComponent}
		</main>
	);
}

export default Tabs;