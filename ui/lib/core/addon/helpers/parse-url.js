import { helper } from '@ember/component/helper';
import parseURL from 'core/utils/parse-url';

export function parseUrl([url], { key = null }) {
  return key ? parseURL(url)[key] : parseURL(url);
}

export default helper(parseUrl);
