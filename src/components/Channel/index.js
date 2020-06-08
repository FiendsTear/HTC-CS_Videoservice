import React from 'react';
import { cn } from '@bem-react/classname';
import './Channel.css';
import PropTypes from 'prop-types';

function Channel(props) {
	const cnChannel = cn('channel');
	const cnChannelLogo = cn(cnChannel(), 'logo');
	const cnchannelInfo = cn(cnChannel(), 'info');

	return (
		<article className={cnChannel()}>
			<div className={cnChannelLogo()}>
				<img src={'/assets/channels_logos/' + props.logoName} alt={props.logoName}></img>
			</div>
			<div className={cnchannelInfo()}>
				<span>{props.name}</span>
				<ul>
					{props.programs.map((program) => 
						<li key={program.id}>{program.time + ' ' + program.name}</li> 
					)}
				</ul>
			</div>
		</article>
	);
}

Channel.propTypes = {
	logoName: PropTypes.string,
	name: PropTypes.string,
	programs: PropTypes.array
};

export default Channel;
