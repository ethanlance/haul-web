import { sanitize } from 'ember-sanitize/utils/sanitize';
export default {
	elements: ['b', 'em', 'i', 'strong', 'u', 'img', 'p','a', 'br'],
	attributes: {
		'a'         : ['href'],
		'img'       : ['src']
	},
	protocols: {
		'a'  : {'href': ['http', 'https']},
		'img': {'href': ['http', 'https']},
	}
};