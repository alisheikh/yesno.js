		is = function()
		{
			var object = new isIt();
			object.It = [arguments[0]];
			object.negative = false;
			return object;
		}
		are = function()
		{
			var object = new isIt();
			object.It = arguments;
			object.negative = false;
			return object;
		}
		isn_t = isnt = function()
		{
			var object = new isIt();
			object.It = [arguments[0]];
			object.negative = true;
			return object;
		}
		aren_t = arent = function()
		{
			var object = new isIt();
			object.It = arguments;
			object.negative = true;
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
						if(this.It[key]!=arguments[index])
							return false;
				if(arguments.length === 0 && this.It.length>0)
					return false;
				return true;
			}
			this.differentFrom = this.different = function ()
			{
				for(key in this.It)
					for(index in arguments)
						if(this.It[key]==arguments[index])
							return false;
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
			for(key in this.syn) 
			{
				var copy = this;
				this.syn[key].map(function(elem)
				{
					copy.defineSyn(elem,key)
				});
			}
		}
