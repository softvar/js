/**
 * @module util-dom
 */
/**
 * Checks wthether the input value matches the dynamic id criteria
 * @since 0.0.2
 * @param {string} identifier - input value
 * @example
 * // returns true
 * isDynamicId('myDiv-aaa_1234');
 * @returns {boolean}
 */
export declare function isDynamicId(identifier: string): boolean;
/**
 * Checks wthether the input value matches the dynamic id criteria
 * @since 0.0.2
 * @param {string} identifier - input value
 * @example
 * // return true
 * isDynamicClass('myDiv-aaa_1234');
 * @returns {boolean}
 */
export declare function isDynamicClass(identifier: string): boolean;
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
export declare const insertLink: (href: string, position?: string) => any;
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
export declare const injectScript: (src: string, targetElem: string, config?: {
    html?: string;
    id: string;
}) => any;
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
export declare const insertStyle: (content: string, position?: string) => any;
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
export declare function isSelectorElementPresent(path: string): boolean;
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
export declare function getNearestSelectorPath(node: any): string;
