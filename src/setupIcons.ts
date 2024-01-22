import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export const setupIcons = () => {
	library.add(faGithub, faLinkedin, faEnvelope, faPaperPlane);
	dom.watch();
};
