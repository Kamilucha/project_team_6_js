!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequire7d2c;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){t[e]=o},o.parcelRequire7d2c=r),r.register("8slrw",(function(e,o){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),r.register("7AJDX",(function(e,o){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),r.register("ifqQW",(function(e,o){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),r.register("auk6i",(function(e,o){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o){if(!e)return;if("string"==typeof e)return t.default(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t.default(e,o)};var n,t=(n=r("8NIkP"))&&n.__esModule?n:{default:n}})),r.register("8NIkP",(function(e,o){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o){(null==o||o>e.length)&&(o=e.length);for(var n=0,t=new Array(o);n<o;n++)t[n]=e[n];return t}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,o){return i.default(e)||s.default(e,o)||c.default(e,o)||l.default()};var i=p(r("8slrw")),s=p(r("7AJDX")),l=p(r("ifqQW")),c=p(r("auk6i"));function p(e){return e&&e.__esModule?e:{default:e}}var u=localStorage.getItem("books");u=u?JSON.parse(u):[];Math.ceil(u.length/3),u.slice(0,3);function d(o){return o.map((function(o){var n=o._id,t=o.title,r=o.author,i=o.description,s=o.list_name,l=o.book_image,c=o.amazon_product_url,p=e(a)(o.buy_links,2),u=p[0],d=p[1];return'<article class="shopping__card">\n          <div class="about-img">\n            <img class="shopping-card-img" src="'.concat(l,'" alt="').concat(t,'" />\n          </div>\n          <div class="about-title">\n            <h3 class="shopping-card-title">').concat(t,'</h3>\n            <p class="shopping-card-category">').concat(s,'</p>\n          </div>\n         <div class="about-description">\n            <p class="shopping-card-description">').concat(i,'</p>\n          </div >\n          <div class="about-author">\n            <p class="shopping-card-author">').concat(r,'</p>\n          </div>\n\n          <div class="shoplist-url">\n            <ul class="shopping-card-shoplist">\n              <li class="url-shop">\n                <a "modal-shop-img" href="').concat(c,'" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">\n                  <img class="modal-shop-img shopping-shopimg amazon" src="').concat(amazonIconPath,'" alt="Amazon link" alt="Amazon live page"/>\n                </a>\n              </li>\n              <li class="url-shop">\n                <a "modal-shop-img" href="').concat(u.url,'" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">\n                  <img class="modal-shop-img shopping-shopimg apple" src="').concat(appleBooksIconPath,'" alt="Apple Books link" />\n                </a>\n              </li>\n              <li class="url-shop">\n                <a "modal-shop-img" href="').concat(d.url,'" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">\n                  <img class="modal-shop-img shopping-shopimg book-shop" src="').concat(bookShopIconPath,'" alt="BookShop link" />\n                </a>\n              </li>\n            </ul>\n          </div>\n\n          <button class="shopping-card-btn" type="button" data-book-id="').concat(n,' aria-label="Remove book from shopping list">\n            <svg class="icon-trash" data-book-id="').concat(n,'" width="17" height="17">\n              <use href="').concat(svgRemove,'#icon-trash"></use>\n            </svg>\n          </button>\n        </article>\n        ')})).join("")}u.length>0?(window.onload=function(){d(u.slice(0,3))},window.onresize=function(){d(u.slice(0,3))}):listIsEmpty.innerHTML='\n      <div class="shop-card-emtpy">\n      <p class="shop-card-empty-text">\n        This page is empty, add some books and proceed to order.\n      </p>\n      <img class="shop-card-empty-picture" src="'.concat(emptyListStubImage,'" alt="Shop is Empty">\n      </div>\n    ')}();
//# sourceMappingURL=shopping-list.0a3572b9.js.map
