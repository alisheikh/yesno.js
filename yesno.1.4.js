is = function()
{
	if(window.it && JSON.stringify(window.it) === JSON.stringify(arguments[0]))
	{
		window.negative = false;
		return window.it;
	}
	var object = new isIt();
	object.It = [arguments[0]];
	object.negative = false;
	window.it = object;
	window.is.it = object;
	Object.defineProperty(window.it,'is',{ get : function(){ 
		return this;
	}});
	return object;
}
are = function()
{
	if(window.they && JSON.stringify(window.they) === JSON.stringify(arguments[0]))
	{
		window.they.negative = false;
		return window.they;
	}
	var object = new isIt();
	object.It = arguments;
	object.negative = false;
	object.setPlurial();
	window.they = object;
	Object.defineProperty(window.they,'are',{ get : function(){ 
		return this;
	}});
	return object;
}
isn_t = isnt = function()
{
	if(window.it && JSON.stringify(window.it) === JSON.stringify(arguments[0]))
	{
		window.it.negative = true;
		return window.it;
	}
	var object = new isIt();
	object.It = [arguments[0]];
	object.negative = true;
	window.it = object;
	Object.defineProperty(window.it,'isnt',{ get : function(){ 
		return this;
	}});
	Object.defineProperty(window.it,'isn_t',{ get : function(){ 
		return this;
	}});
	return object;
}
aren_t = arent = function()
{
	if(window.func && JSON.stringify(window.they) === JSON.stringify(arguments[0]))
	{
		window.they.negative = true;
		return window.they;
	}
	var object = new isIt();
	object.It = arguments;
	object.negative = true;
	object.setPlurial();
	window.they = object;
	return object;
}
function isIt()
{
	Object.defineProperty(this, 'array', 
	{ 
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				( toString.call( this.It[key] ) === '[object Array]' );
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'string', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				( (typeof this.It[key] === 'string') || this.It[key] instanceof String );
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'number', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				( (typeof this.It[key] === 'number') || this.It[key] instanceof Number );
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'boolean', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				( (this.It[key] === !!this.It[key]) || this.It[key] instanceof Boolean );
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'object', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && (this.It[key] === Object(this.It[key]));
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'regex', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				!!(this.It[key] && this.It[key].test && this.It[key].exec 
				&& (this.It[key].ignoreCase || this.It[key].ignoreCase === false));
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'element', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && typeof HTMLElement !== 'undefined' ?
				this.It[key] instanceof HTMLElement :
				this.It[key] && this.It[key].nodeType === 1;
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'numeric', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				!isNaN(parseFloat(this.It[key])) && isFinite(this.It[key]);
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'set', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				this.It[key] !== null && this.It[key] !== (void 0);
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'nan', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				isNaN(this.It[key]);
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'finite', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				isFinite(this.It[key]);
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'undefined', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				this.It[key] === undefined;
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'null', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				this.It[key] === null;
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'true', 
	{
		get : function() 
		{ 
			console.log("No, seriously!");
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				this.It[key] === true;
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'false', 
	{
		get : function() 
		{ 
			console.log("No, seriously!");
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				this.It[key] === false;
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'date', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				(this.It[key] instanceof Date);
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'integer', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				this.It[key] === parseInt(this.It[key]);
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'float', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				this.It[key] === parseFloat(this.It[key]);
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'function', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				typeof this.It[key] === "function";
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'empty', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
				indicator = indicator && 
				(this.It[key] === '' || JSON.stringify(this.It[key]) === "{}"
				 || JSON.stringify(this.It[key]) === "[]" );
			return (this.negative)?!indicator:indicator;
		}  
	});
	Object.defineProperty(this, 'json', 
	{
		get : function() 
		{ 
			var indicator = (this.It.length!=0);
			for( key in this.It )
			{
				try 
				{
					JSON.parse(this.It[key]); 
					indicator = indicator && true;
				}
				catch(e) 
				{
					indicator = indicator && false;
				};
			}
			return (this.negative)?!indicator:indicator;
		}  
	});
	this.equalTo = this.equal = function ()
	{
		for(key in this.It)
			for(index in arguments)
			{
				arguments[index] = ((arguments[index]===window['it'])?it.It:arguments[index]);
				arguments[index] = ((arguments[index]===window['they'])?they.It:arguments[index]);
				if(this.It[key]!=arguments[index])
					return false;
			}
		if(arguments.length === 0 && this.It.length>0)
			return false;
		return true;
	}
	this.differentFrom = this.different = function ()
	{
		for(key in this.It)
			for(index in arguments)
			{
				arguments[index] = ((arguments[index]===window['it'])?it.It:arguments[index]);
				arguments[index] = ((arguments[index]===window['they'])?they.It:arguments[index]);
				if(this.It[key]==arguments[index])
					return false;
			}
		return true;
	}
	this.defineSyn = function (name, property)
	{
		Object.defineProperty(this,name,{ get : function(){ return this[property] ; }});
	}
	this.syn = 
	{
		'array' : ['arr'],
		'string' : ['str'],
		'numeric' : ['num'],
		'boolean' : ['bool'],
		'object' : ['obj'],
		'element' : ['elem'],
		'regex' : ['reg'],
		'undefined' : ['undef'],
		'integer' : ['int'],
		'function' : ['func'],
		'empty' : ['emp','empt'],
		'nan' : ['NaN'],
		'finite' : ['Finite']
	};
	this.setPlurial = function()
	{
		var plurial =
		{
			'array' : ['arrays'],
			'string' : ['strings'],
			'number' : ['numbers'],
			'boolean' : ['booleans'],
			'object' : ['objects'],
			'element' : ['elements'],
			'integer' : ['integers'],
			'function' : ['funcctions']
		}
		for(key in plurial) 
		{
			var copy = this;
			plurial[key].map(function(elem){
				copy.defineSyn(elem,key)
			});
		}
	}
	for(key in this.syn) 
	{
		var copy = this;
		this.syn[key].map(function(elem)
		{
			copy.defineSyn(elem,key)
		});
	}
}
Object.defineProperty(String.prototype,'is',
	{ get : 
		function()
		{ 
			return is(this.valueOf());
		}
	});
Object.defineProperty(Number.prototype,'is',
	{ get : 
		function()
		{ 
			return is(this.valueOf());
		}
	});
Object.defineProperty(Boolean.prototype,'is',
	{ get : 
		function()
		{ 
			return is(this.valueOf());
		}
	});
Object.defineProperty(Array.prototype,'is',
	{ get : 
		function()
		{ 
			return is(this.valueOf());
		}
	});
Object.defineProperty(Object.prototype,'is',
	{ get : 
		function()
		{ 
			return is(this.valueOf());
		}
	});
Object.defineProperty(Function.prototype,'is',
	{ get : 
		function()
		{ 
			return is(this.valueOf());
		}
	});
Object.defineProperty(String.prototype,'isnt',
	{ get : 
		function()
		{ 
			return isnt(this.valueOf());
		}
	});
Object.defineProperty(Number.prototype,'isnt',
	{ get : 
		function()
		{ 
			return isnt(this.valueOf());
		}
	});
Object.defineProperty(Boolean.prototype,'isnt',
	{ get : 
		function()
		{ 
			return isnt(this.valueOf());
		}
	});
Object.defineProperty(Array.prototype,'isnt',
	{ get : 
		function()
		{ 
			return isnt(this.valueOf());
		}
	});
Object.defineProperty(Object.prototype,'isnt',
	{ get : 
		function()
		{ 
			return isnt(this.valueOf());
		}
	});
Object.defineProperty(Function.prototype,'isnt',
	{ get : 
		function()
		{ 
			return isnt(this.valueOf());
		}
	});
Object.defineProperty(String.prototype,'isn_t',
	{ get : 
		function()
		{ 
			return isn_t(this.valueOf());
		}
	});
Object.defineProperty(Number.prototype,'isn_t',
	{ get : 
		function()
		{ 
			return isn_t(this.valueOf());
		}
	});
Object.defineProperty(Boolean.prototype,'isn_t',
	{ get : 
		function()
		{ 
			return isn_t(this.valueOf());
		}
	});
Object.defineProperty(Array.prototype,'isn_t',
	{ get : 
		function()
		{ 
			return isn_t(this.valueOf());
		}
	});
Object.defineProperty(Object.prototype,'isn_t',
	{ get : 
		function()
		{ 
			return isn_t(this.valueOf());
		}
	});
Object.defineProperty(Function.prototype,'isn_t',
	{ get : 
		function()
		{ 
			return isn_t(this.valueOf());
		}
	});
Object.defineProperty(Array.prototype,'are',
	{ get : 
		function()
		{ 
			return are.apply(null,this.valueOf());
		}
	});
Object.defineProperty(Array.prototype,'arent',
	{ get : 
		function()
		{ 
			return arent.apply(null,this.valueOf());
		}
	});
Object.defineProperty(Array.prototype,'aren_t',
	{ get : 
		function()
		{ 
			return aren_t.apply(null,this.valueOf());
		}
	});
