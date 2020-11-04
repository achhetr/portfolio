import React from 'react';
import footerInfoStyle from './footerInfo.module.css';
import ArrowUp from '../ArrowUp/ArrowUp';

const FooterInfo = () => {
	return (
		<div className={footerInfoStyle.Container}>
			<h4 className={footerInfoStyle.Title}>
				Let me help you grow your business.
			</h4>
			<h4 className={footerInfoStyle.BottomTitle}>
				Let's enjoy from here onwards
			</h4>
			<ArrowUp />
		</div>
	);
};

export default FooterInfo;
