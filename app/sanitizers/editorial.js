import { sanitize } from 'ember-sanitize/utils/sanitize';
export default {
	elements: ['h1', 'h2', 'h3', 'h4', 'b', 'em', 'i', 'strong', 'u', 'img', 'p', 'a', 'ul', 'ol', 'li', 'blockquote'],
	attributes: {
		'a'         : ['href'],
		'img'       : ['src']
	},
	protocols: {
		'a'  : {'href': ['http', 'https']},
		'img': {'href': ['http', 'https']},
	}
};