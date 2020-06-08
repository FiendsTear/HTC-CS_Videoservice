import React from 'react';
import { cn } from '@bem-react/classname';
import './Footer.css';


function Footer() {
	const cnFooter = cn('footer');
	const cnFooterLogo = cn(cnFooter(), 'logo');
	const cnFooterContent =cn(cnFooter(), 'content');

	return (
		<footer className={cnFooter()}>
			<div className={cnFooterContent()}>
				<img className={cnFooterLogo()} src="/assets/common_logos/htc-cs-logo.png" alt="htc-cs-logo"></img>
				<div>
          426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург») <br />
          +7 (3412) 93-88-61, 43-29-29 <br />
					<a href="http://htc-cs.ru">htc-cs.ru</a> <br />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
