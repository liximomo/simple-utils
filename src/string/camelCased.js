import type from '../type';

export default function camelCased(str) {
 return str.replace(/_([a-z])/g, g => g[1].toUpperCase());
}
