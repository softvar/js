/**
 * @module util-dom
 */

/**
 * @file All dom related utilities
 */

import { deferred } from '@softvar/util-promise';

/**
 * Checks wthether the input value matches the dynamic id criteria
 * @since 0.0.2
 * @param {string} identifier - input value
 * @example
 * // returns true
 * isDynamicId('myDiv-aaa_1234');
 * @returns {boolean}
 */
export function isDynamicId(identifier: string): boolean {
  // xyz_2535 xyz-35353 xyz3536
  // xyz_252a xyz-3536af
  const reDynamicId1 = /[a-z]+[_-][0-9a-f_-]{2,}/gi;
  // abcd22
  const reDynamicId2 = /[0-9a-f]{5,}/gi;

  return reDynamicId1.test(identifier) || reDynamicId2.test(identifier);
}
/**
 * Checks wthether the input value matches the dynamic id criteria
 * @since 0.0.2
 * @param {string} identifier - input value
 * @example
 * // return true
 * isDynamicClass('myDiv-aaa_1234');
 * @returns {boolean}
 */
export function isDynamicClass(identifier: string): boolean {
  // wrapper-6_3547
  const reDynamicClass1 = /[a-z]+[_-][0-9_-]{4,}/gi;

  return reDynamicClass1.test(identifier);
}

/**
 * Insert link tag to the document at the specified position
 * @since 0.0.5
 * @param {string} href
 * @param {string} [position=head] where link tag needs to be appended
 * @example
 * // return Promise
 * insertLink('https://example.example').then(() => console.log(`Appended`))
 *
 * // returns Promise
 * insertLink('https://example.example', 'body').then(() => console.log(`Appended`))
 * @returns {Promise}
 */
export const insertLink = (href: string, position: string = 'head') => {
  const d = new deferred();
  const link = document.createElement('link');

  link.href = href;
  link.rel = 'stylesheet';

  link.onload = () => {
    d.resolve();
  };

  link.onerror = () => {
    d.reject();
  };

  document.getElementsByTagName(position)[0]?.appendChild(link);

  return d.promise;
}

/**
 * inject Script tag to the document at the specified position
 * @since 0.0.5
 * @param {string} src
 * @param {string} [position=head] where Script tag needs to be appended
 * @param {object} [config={}] configuration options
 * @param {object} [config.html] innerHTML of the script tag if src is not provided
 * @param {object} [config.id=StringiedRandomNumber] id of the script tag
 * @example
 * // return Promise
 * injectScript('https://example.example'. 'body').then(src => console.log(`Appended ${src}`))
 *
 * // returns Promise
 * injectScript('https://example.example', '#my-elm-id').then(src => console.log(`Appended ${src}`))
 * // returns Promise
 * injectScript(null, '#my-elm-id', {html: `<a href="">Example</a>`}).then(src => console.log(`Appended ${src}`))
 * @returns {Promise}
 */
export const injectScript = (src: string, targetElem: string, config: { html?: string, id: string } = { id: Math.random().toString() } ) => {
  const d = new deferred();
  const domElm = document.createElement('script');

  domElm.type = 'text/javascript';
  domElm.id = config.id;

  if (src) {
    domElm.src = src;

    domElm.onload = () => {
      d.resolve(src);
    };

    domElm.onerror = () => {
      d.reject(src);
    };
  } else if (config.html) {
    domElm.innerHTML = config.html;
    d.resolve(config.html);
  }

  if (document.querySelector(targetElem)) {
    document.querySelector(targetElem)?.appendChild(domElm);
  } else {
    document.body.appendChild(domElm);
  }

  return d.promise;
}

/**
 * Insert style tag to the document at the specified position
 * @since 0.0.5
 * @param {string} content
 * @param {string} [position=head] where style tag needs to be appended
 * @example
 * // return Promise
 * insertStyle(`a{color:red;}`).then(() => console.log(`Appended`))
 *
 * // returns Promise
 * insertStyle(`a{color:red;}`, 'body').then(() => console.log(`Appended`))
 * @returns {Promise}
 */
export const insertStyle = (content: string, position: string = 'head') => {
  const d = new deferred();
  const style = document.createElement('style');

  style.innerHTML = content;
  style.onload = () => {
    d.resolve();
  };
  style.onerror = () => {
    d.reject();
  };

  document.getElementsByTagName(position)[0]?.appendChild(style);

  return d.promise;
}

/**
 * Checks if the element having the specified path exists
 * @since 0.0.5
 * @param {string} path selector of an element
 * @example
 * // returns true
 * isSelectorElementPresent('body');
 * // returns false
 * isSelectorElementPresent('unknown-selector');
 * @returns {boolean}
 */
export function isSelectorElementPresent(path: string): boolean {
  try {
    return document.querySelectorAll(path).length === 1;
  } catch (e) {
    return false;
  }
}

/**
 * Gives the nearest(shorter) selector path for the specified Node element
 * @param {*} node - HTML Node
 * @example
 * // returns my-id
 * getNearestSelectorPath(document.querySelector('#my-id'));
 * // returns '.flex-column.mb-2.mb-md-0.mr-0.pr-md-4 > h5:nth-of-type(1)'
 * getNearestSelectorPath($0); // some arbitary DOM element
 * @returns {string} nearest/short selector path
 */
export function getNearestSelectorPath(node: any): string {
  if (!node) {
    return '';
  }

  const nodeName = node.nodeName.toLowerCase();

  if (nodeName === 'body' || nodeName === 'head' || nodeName === 'html') {
    return nodeName;
  }

  // do not use ids for elements that do not get rendered
  const id = node.getAttribute('id');

  if (
    id &&
    !/base|link|meta|style|iframe|script|noscript/gi.test(node.nodeName) &&
    !isDynamicId(id) &&
    isSelectorElementPresent('#' + id)
  ) {
    return `#${id}`;
  }

  if (node.hasAttribute('class')) {
    const classNames = node.getAttribute('class').split(/\s+/);

    for (const className of classNames) {
      if (isSelectorElementPresent('.' + className) && !isDynamicClass(className)) {
        return `.${className}`;
      }
    }

    for (const className of classNames) {
      if (isSelectorElementPresent('.' + className) && !isDynamicClass(className)) {
        return `${nodeName}.${className}`;
      }
    }

    if (classNames.length && isSelectorElementPresent('.' + classNames.join('.')) && !isDynamicClass(classNames.join('.'))) {
      return `.${classNames.join('.')}`;
    }
  }

  const parentPath = getNearestSelectorPath(node.parentNode);

  let index = 0;
  for (let iterator = node; iterator; iterator = iterator.previousSibling) {
    if (node.nodeName === iterator.nodeName) {
      index++;
    }
  }

  return `${parentPath} > ${nodeName}:nth-of-type(${index})`;
}
