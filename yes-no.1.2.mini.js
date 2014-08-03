function isIt(){Object.defineProperty(this,"array",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&toString.call(this.It[key])==="[object Array]";return this.negative?!e:e}});Object.defineProperty(this,"string",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&(typeof this.It[key]==="string"||this.It[key]instanceof String);return this.negative?!e:e}});Object.defineProperty(this,"number",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&(typeof this.It[key]==="number"||this.It[key]instanceof Number);return this.negative?!e:e}});Object.defineProperty(this,"boolean",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&(this.It[key]===!!this.It[key]||this.It[key]instanceof Boolean);return this.negative?!e:e}});Object.defineProperty(this,"object",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&this.It[key]===Object(this.It[key]);return this.negative?!e:e}});Object.defineProperty(this,"regex",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&!!(this.It[key]&&this.It[key].test&&this.It[key].exec&&(this.It[key].ignoreCase||this.It[key].ignoreCase===false));return this.negative?!e:e}});Object.defineProperty(this,"element",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&typeof HTMLElement!=="undefined"?this.It[key]instanceof HTMLElement:this.It[key]&&this.It[key].nodeType===1;return this.negative?!e:e}});Object.defineProperty(this,"numeric",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&!isNaN(parseFloat(this.It[key]))&&isFinite(this.It[key]);return this.negative?!e:e}});Object.defineProperty(this,"set",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&this.It[key]!==null&&this.It[key]!==void 0;return this.negative?!e:e}});Object.defineProperty(this,"nan",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&isNaN(this.It[key]);return this.negative?!e:e}});Object.defineProperty(this,"finite",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&isFinite(this.It[key]);return this.negative?!e:e}});Object.defineProperty(this,"undefined",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&this.It[key]===undefined;return this.negative?!e:e}});Object.defineProperty(this,"null",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&this.It[key]===null;return this.negative?!e:e}});Object.defineProperty(this,"true",{get:function(){console.log("No, seriously!");var e=this.It.length!=0;for(key in this.It)e=e&&this.It[key]===true;return this.negative?!e:e}});Object.defineProperty(this,"false",{get:function(){console.log("No, seriously!");var e=this.It.length!=0;for(key in this.It)e=e&&this.It[key]===false;return this.negative?!e:e}});Object.defineProperty(this,"date",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&this.It[key]instanceof Date;return this.negative?!e:e}});Object.defineProperty(this,"integer",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&this.It[key]===parseInt(this.It[key]);return this.negative?!e:e}});Object.defineProperty(this,"float",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&this.It[key]===parseFloat(this.It[key]);return this.negative?!e:e}});Object.defineProperty(this,"function",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&typeof this.It[key]==="function";return this.negative?!e:e}});Object.defineProperty(this,"empty",{get:function(){var e=this.It.length!=0;for(key in this.It)e=e&&(this.It[key]===""||JSON.stringify(this.It[key])==="{}"||JSON.stringify(this.It[key])==="[]");return this.negative?!e:e}});Object.defineProperty(this,"json",{get:function(){var e=this.It.length!=0;for(key in this.It){try{JSON.parse(this.It[key]);e=e&&true}catch(t){e=e&&false}}return this.negative?!e:e}});this.equalTo=this.equal=function(){for(key in this.It)for(index in arguments)if(this.It[key]!=arguments[index])return false;if(arguments.length===0&&this.It.length>0)return false;return true};this.differentFrom=this.different=function(){for(key in this.It)for(index in arguments)if(this.It[key]==arguments[index])return false;return true};this.defineSyn=function(e,t){Object.defineProperty(this,e,{get:function(){return this[t]}})};this.syn={array:["arr"],string:["str"],numeric:["num"],"boolean":["bool"],object:["obj"],element:["elem"],regex:["reg"],"undefined":["undef"],integer:["int"],"function":["func"],empty:["emp","empt"],nan:["NaN"],finite:["Finite"]};this.setPlurial=function(){var e={array:["arrays"],string:["strings"],number:["numbers"],"boolean":["booleans"],object:["objects"],element:["elements"],integer:["integers"],"function":["funcctions"]};for(key in e){var t=this;e[key].map(function(e){t.defineSyn(e,key)})}};for(key in this.syn){var e=this;this.syn[key].map(function(t){e.defineSyn(t,key)})}}is=function(){if(window.it&&JSON.stringify(window.it)===JSON.stringify(arguments[0])){window.negative=false;return window.it}var e=new isIt;e.It=[arguments[0]];e.negative=false;window.it=e;window.is.it=e;Object.defineProperty(window.it,"is",{get:function(){return this}});return e};are=function(){if(window.they&&JSON.stringify(window.they)===JSON.stringify(arguments[0])){window.they.negative=false;return window.they}var e=new isIt;e.It=arguments;e.negative=false;e.setPlurial();window.they=e;Object.defineProperty(window.they,"are",{get:function(){return this}});return e};isn_t=isnt=function(){if(window.it&&JSON.stringify(window.it)===JSON.stringify(arguments[0])){window.it.negative=true;return window.it}var e=new isIt;e.It=[arguments[0]];e.negative=true;window.it=e;Object.defineProperty(window.it,"isnt",{get:function(){return this}});Object.defineProperty(window.it,"isn_t",{get:function(){return this}});return e};aren_t=arent=function(){if(window.func&&JSON.stringify(window.they)===JSON.stringify(arguments[0])){window.they.negative=true;return window.they}var e=new isIt;e.It=arguments;e.negative=true;e.setPlurial();window.they=e;return e};Object.defineProperty(String.prototype,"is",{get:function(){return is(this.valueOf())}});Object.defineProperty(Number.prototype,"is",{get:function(){return is(this.valueOf())}});Object.defineProperty(Boolean.prototype,"is",{get:function(){return is(this.valueOf())}});Object.defineProperty(Array.prototype,"is",{get:function(){return is(this.valueOf())}});Object.defineProperty(Object.prototype,"is",{get:function(){return is(this.valueOf())}});Object.defineProperty(Function.prototype,"is",{get:function(){return is(this.valueOf())}});Object.defineProperty(String.prototype,"isnt",{get:function(){return isnt(this.valueOf())}});Object.defineProperty(Number.prototype,"isnt",{get:function(){return isnt(this.valueOf())}});Object.defineProperty(Boolean.prototype,"isnt",{get:function(){return isnt(this.valueOf())}});Object.defineProperty(Array.prototype,"isnt",{get:function(){return isnt(this.valueOf())}});Object.defineProperty(Object.prototype,"isnt",{get:function(){return isnt(this.valueOf())}});Object.defineProperty(Function.prototype,"isnt",{get:function(){return isnt(this.valueOf())}});Object.defineProperty(String.prototype,"isn_t",{get:function(){return isn_t(this.valueOf())}});Object.defineProperty(Number.prototype,"isn_t",{get:function(){return isn_t(this.valueOf())}});Object.defineProperty(Boolean.prototype,"isn_t",{get:function(){return isn_t(this.valueOf())}});Object.defineProperty(Array.prototype,"isn_t",{get:function(){return isn_t(this.valueOf())}});Object.defineProperty(Object.prototype,"isn_t",{get:function(){return isn_t(this.valueOf())}});Object.defineProperty(Function.prototype,"isn_t",{get:function(){return isn_t(this.valueOf())}});Object.defineProperty(Array.prototype,"are",{get:function(){return are(this.valueOf())}});Object.defineProperty(Array.prototype,"arent",{get:function(){return arent(this.valueOf())}});Object.defineProperty(Array.prototype,"aren_t",{get:function(){return aren_t(this.valueOf())}})
