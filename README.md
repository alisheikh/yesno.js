
A better way to make your if statements readable !

####Introduction 

Coding should be fun, but code like this destroys all the fun
 ```javascript
if( a===b && ( parseInt(a) === a || b != false ) ) { ... }
```
It's overwhelming and it's understandable only the second you're writing it.

However, if you try using the Yes-No.js, it makes your if statements clean, clear and understandable everytime you comeback to work on your yesterday's code :)

####Properties

 ```javascript
var a = 123;

is(a).number; // returns true
is(a).string; // returns false

```
and you have many other properties to test which are :

 ```javascript
is(a).array;
is(a).string;
is(a).object;
is(a).boolean;
is(a).date; <-- is it a Date object
is(a).element; <-- HTML Element
is(a).null;
is(a).integer;
is(a).regex;
is(a).numeric;
is(a).undefined;
is(a).NaN;
is(a).Finite;
is(a).empty; <-- Works for arrays, strings and objects
is(a).set; <-- has a value or not
is(a).true;
is(a).false;
is(a).float;
is(a).function;
is(a).json;
```

#### Functions

You also can use functions like
			
 ```javascript
is(a).equal(123); // returns true
is(a).differentFrom(8); // returns true
```

There are many functions comming

#### Negative form question

instead of using the negative (opposite) of the is() function, you can use the isnt() or isn_t() like this:

 ```javascript
isn_t(a).string; // returns true
isnt(a).finite; // returns false
```

#### Synonymes 
There are properties and functions synonmys which makes it readable and not long like this

is(a).string is the same thing as is(a).str

 ```javascript
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
				'finite' : ['Finite'],
				'equal' :  ['equalTo'],
				'different': ['differentTo']
			};
```
			
and you can suggest your synonymes to be added to the library
