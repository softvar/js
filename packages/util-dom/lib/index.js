"use strict";
/**
 * @module util-dom
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertStyle = exports.injectScript = exports.insertLink = exports.isDynamicClass = exports.isDynamicId = void 0;
/**
 * @file All dom related utilities
 */
const util_promise_1 = require("@softvar/util-promise");
/**
 * Checks wthether the input value matches the dynamic id criteria
 * @since 0.0.2
 * @param {string} identifier - input value
 * @example
 * // returns true
 * isDynamicId('myDiv-aaa_1234');
 * @returns {boolean}
 */
function isDynamicId(identifier) {
    // xyz_2535 xyz-35353 xyz3536
    // xyz_252a xyz-3536af
    const reDynamicId1 = /[a-z]+[_-][0-9a-f_-]{2,}/gi;
    // abcd22
    const reDynamicId2 = /[0-9a-f]{5,}/gi;
    return reDynamicId1.test(identifier) || reDynamicId2.test(identifier);
}
exports.isDynamicId = isDynamicId;
/**
 * Checks wthether the input value matches the dynamic id criteria
 * @since 0.0.2
 * @param {string} identifier - input value
 * @example
 * // return true
 * isDynamicClass('myDiv-aaa_1234');
 * @returns {boolean}
 */
function isDynamicClass(identifier) {
    // wrapper-6_3547
    const reDynamicClass1 = /[a-z]+[_-][0-9_-]{4,}/gi;
    return reDynamicClass1.test(identifier);
}
exports.isDynamicClass = isDynamicClass;
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
exports.insertLink = (href, position = 'head') => {
    var _a;
    const d = new util_promise_1.deferred();
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    link.onload = () => {
        d.resolve();
    };
    link.onerror = () => {
        d.reject();
    };
    (_a = document.getElementsByTagName(position)[0]) === null || _a === void 0 ? void 0 : _a.appendChild(link);
    return d.promise;
};
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
exports.injectScript = (src, targetElem, config = { id: Math.random().toString() }) => {
    var _a;
    const d = new util_promise_1.deferred();
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
    }
    else if (config.html) {
        domElm.innerHTML = config.html;
        d.resolve(config.html);
    }
    if (document.querySelector(targetElem)) {
        (_a = document.querySelector(targetElem)) === null || _a === void 0 ? void 0 : _a.appendChild(domElm);
    }
    else {
        document.body.appendChild(domElm);
    }
    return d.promise;
};
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
exports.insertStyle = (content, position = 'head') => {
    var _a;
    const d = new util_promise_1.deferred();
    const style = document.createElement('style');
    style.innerHTML = content;
    style.onload = () => {
        d.resolve();
    };
    style.onerror = () => {
        d.reject();
    };
    (_a = document.getElementsByTagName(position)[0]) === null || _a === void 0 ? void 0 : _a.appendChild(style);
    return d.promise;
};
//# sourceMappingURL=index.js.map