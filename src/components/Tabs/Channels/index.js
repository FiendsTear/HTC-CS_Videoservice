import React from 'react';
import Channel from '../../Channel';
import channels_list_data from '../../../data/channels.json';
import './Channels.css';
import { cn } from '@bem-react/classname';

function Channels() {
	const cnChannels = cn('channels');
	const cnChannelsItem = cn(cnChannels(), 'item');
	const cnChannelsList = cn(cnChannels(), 'list');

	return (    
		<div className={cnChannels()}>
			<ul className={cnChannelsList()}>
				{channels_list_data.channels_list.map((channel) => 
					<li key={channel.id} className={cnChannelsItem()}><Channel name={channel.name} logoName={channel.logoName} programs={channel.programs}></Channel></li> 
				)}
			</ul>
		</div>
	);
}

export default Channels;