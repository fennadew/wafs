// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({36:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = el => `
<header>
	<nav>
		<ul>
			<li><a href="#section_splash" ${el.splash ? 'aria-current="page"' : ''}">Home</a></li>
			<li><a href="#section_api" ${el.api ? 'aria-current="page"' : ''}>API</a></li>
			<li><a href="#section_test" ${el.test ? 'aria-current="page"' : ''}>test</a></li>
		</ul>
	</nav>
</header>
`;
},{}],37:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function getApiData() {
	let apiData;
	fetch('https://pokeapi.co/api/v2/pokemon/?limit=151').then(function (response) {
		if (response.status !== 200) {
			console.log('Looks like there was a problem. Status Code: ' + response.status);
			return;
		}

		// Examine the text in the response
		response.json().then(function (data) {
			console.log(data);
			manipulateData(data);
		});
	}).catch(function (err) {
		console.log('Fetch Error :-S', err);
	});

	function manipulateData(data) {
		const mappedResult = data.results.map(item => {
			return item = item.name;
		});

		injectData(mappedResult);
	}

	function injectData(result) {
		const loader = document.querySelectorAll('#loader');
		if (loader[0]) {
			loader[0].remove();
		}
		const contentSection = document.querySelector('#section_api');
		contentSection.insertAdjacentHTML('beforeend', '<ol></ol>');
		result.forEach((name, i) => {
			contentSection.querySelector('ol').insertAdjacentHTML('beforeend', `<li data-pokemon="${name.toLowerCase()}">${name}</li>`);
			if (i + 1 === result.length) {
				console.log('end');
				addEvents();
			}
		});
	}

	function addEvents() {
		const pokemon = document.querySelectorAll('[data-pokemon]');
		console.log(pokemon);
		pokemon.forEach((poke, i) => {
			i += 1;
			poke.addEventListener('click', function _func(event) {
				getPokemon(event, i);
				this.removeEventListener('click', _func);
			});
		});
	}

	function getPokemon(event, i) {
		console.log(i);

		//Prevents extra API calls
		if (!event.target.querySelectorAll('.pokemon-information')[0]) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(function (response) {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' + response.status);
					return;
				}

				// Examine the text in the response
				response.json().then(function (data) {
					console.log(data);
					addDetails(data, event.target);
				});
			}).catch(function (err) {
				console.log('Fetch Error :-S', err);
			});
		}
	}

	function addDetails(data, elem) {
		console.log(data.id);
		const id = data.id;
		const name = data.name;
		const weight = data.weight;
		const height = data.height;
		const sprite = data.sprites.front_default;

		elem.insertAdjacentHTML('beforeend', createElement(id, name, weight, height, sprite));

		function createElement(id, name, weight, height, sprite) {
			return `
			<article class="pokemon-information">
				<section>
					<p>ID: ${id}</p>
					<p>Weight: ${weight}</p>
					<p>Height: ${height}</p>
				</section>
				<figure>
					<img src="${sprite}" alt="An image of ${name}">
				</figure>
			</article>
			`;
		}
	}

	return '';
}

exports.default = getApiData;
},{}],35:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = el => `
  <svg version="1.1" id="loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
  <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
  <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 20 20"
      to="360 20 20"
      dur="0.5s"
      repeatCount="indefinite"/>
    </path>
  </svg>
  ${(0, _api2.default)()}
`;
},{"../api":37}],32:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = el => `
		${(0, _header2.default)(el)}
		<main>
			${el.splash ? `<section id="section_splash" data-section>
					<h1>Splash</h1>
				</section>` : ''}
			${el.api ? `<section id="section_api" data-section>
					<h1>api</h1>
					${(0, _api2.default)(el)}
				</section>` : ''}
			${el.test ? `<section id="section_test" data-section>
					<h1>test</h1>
				</section>` : ''}
		</main>
	`;
},{"./header":36,"./api":35}],33:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = el => `
		${(0, _header2.default)(el)}
		<main>
			<section id="section_404" data-section >
				<h1>Shit broke. Use the header to navigate :)</h1>
			</section>
		</main>
	`;
},{"./header":36}],39:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [[{
	transform: 'scale(0) translateY(-10%)', opacity: 0
}, {
	transform: 'scale(1) translateY(0)', opacity: 1
}], {
	duration: 300,
	iterations: 1,
	easing: 'ease-out',
	fill: 'forwards',
	delay: 300
}];
},{}],38:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [[{
	transform: 'scale(1) translateY(0)', opacity: 1
}, {
	transform: 'scale(0) translateY(-10%)', opacity: 0
}], {
	duration: 300,
	iterations: 1,
	easing: 'ease-in',
	fill: 'forwards'
}];
},{}],34:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hide = exports.show = undefined;

var _show = require('./show');

var _show2 = _interopRequireDefault(_show);

var _hide = require('./hide');

var _hide2 = _interopRequireDefault(_hide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.show = _show2.default;
exports.hide = _hide2.default;
},{"./show":39,"./hide":38}],31:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('./magic/index');

var animations = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Magic(node, animationName) {

	const options = animations[animationName];

	const keyFrameEffect = new KeyframeEffect(node, ...options);
	return new Animation(keyFrameEffect, document.timeline);
}

exports.default = Magic;
},{"./magic/index":34}],27:[function(require,module,exports) {
'use strict';

var _index = require('./views/index');

var _index2 = _interopRequireDefault(_index);

var _ = require('./views/404');

var _2 = _interopRequireDefault(_);

var _magic = require('./magic.js');

var _magic2 = _interopRequireDefault(_magic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = function () {
	'strict mode';

	let startURL;
	window.location.hash.length >= 1 ? startURL = window.location.hash : startURL = '#section_splash';

	const init = () => {
		routes.init();
	};

	const routes = {
		init() {
			sections.toggle(startURL);
			window.addEventListener('hashchange', event => {
				let routeHash = getUrlParams(event.newURL);
				let oldRouteHash = getUrlParams(event.oldURL);

				if (!oldRouteHash.includes('#')) {
					oldRouteHash = startURL;
				}

				sections.toggle(routeHash, oldRouteHash);
			});
		}
	};
	const getUrlParams = search => {
		let hashes = search.slice(search.lastIndexOf('#'));
		return hashes;
	};

	const sections = {
		toggle(route, oldRoute) {
			if (typeof oldRoute !== 'undefined' && oldRoute !== '/') {
				let oldActiveSection = document.querySelector(oldRoute);

				if (oldActiveSection === null) {
					oldActiveSection = document.querySelector('#section_404');
				}

				const hide = new _magic2.default(oldActiveSection, 'hide');
				hide.play();
				hide.onfinish = () => {
					//clears body
					if (document.querySelectorAll('header')[0]) {
						document.querySelector('header').remove();
						document.querySelector('main').remove();
					}
				};
			}

			if (route in paths) {
				paths[window.location.hash]();
			} else {
				paths['404']();
				route = '#section_404';
			}

			const newActiveSection = document.querySelector(route);
			const show = new _magic2.default(newActiveSection, 'show');
			show.play();
		}
	};

	const paths = {
		''() {
			document.body.insertAdjacentHTML('beforeend', render(_index2.default, {
				splash: true
			}));
		},
		'#section_splash'() {
			document.body.insertAdjacentHTML('beforeend', render(_index2.default, {
				splash: true
			}));
		},
		'#section_api'() {
			document.body.insertAdjacentHTML('beforeend', render(_index2.default, {
				api: true
			}));
		},
		'#section_test'() {
			document.body.insertAdjacentHTML('beforeend', render(_index2.default, {
				test: true
			}));
		},
		'404'() {
			document.body.insertAdjacentHTML('beforeend', render(_2.default, {
				el: true
			}));
		}
	};

	const render = (html, obj) => {
		return html(obj);
	};

	return {
		init: init
	};
}();

App.init();
},{"./views/index":32,"./views/404":33,"./magic.js":31}],28:[function(require,module,exports) {
console.log('router - test');
},{}],12:[function(require,module,exports) {
'use strict';

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

var _router = require('./router.js');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // Import a module using CommonJS syntax
// const dep = require('./path/to/dep');

// // Import a module using ES6 import syntax
// import dep from './path/to/dep';

// // Import a CSS file
// import './test.css';

// // Import a CSS file with CSS modules
// import classNames from './test.css';

// // Import the URL to an image file
// import imageURL from './test.png';
console.log('bundle.js - test');
},{"./app.js":27,"./router.js":28}],40:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var ws = new WebSocket('ws://' + hostname + ':' + '63325' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[40,12])
//# sourceMappingURL=/dist/7754e73efbf42336df2fecaae3b07285.map