import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { ContactLinkList, ContactLinkListItem } from './styles';

const SocialMedias = () => {
		const socialMediaLinks = [
		'https://www.linkedin.com/in/rafael-savoy-62b872228/',
		'https://api.whatsapp.com/send/?phone=19988435101&text&type=phone_number&app_absent=0',
		'discordapp.com/users/6628',
		'https://www.instagram.com/rafael_savoy1/']
	return (
		<ContactLinkList>
			{socialMediaLinks.map((link, index) => {
				return (
					<ContactLinkListItem key={index}>
						<SocialIcon url={link} />
					</ContactLinkListItem>
				)
			})}
		</ContactLinkList>
	);
};

export default SocialMedias;