
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
is(a).number;
is(a).string;
is(a).array;
is(a).numeric;
is(a).integer;
is(a).float;
is(a).boolean;
is(a).true;
is(a).false;
is(a).object;
is(a).json;
is(a).regex;
is(a).function;
is(a).null;
is(a).undefined;
is(a).NaN;
is(a).Finite;
is(a).empty; <-- Works for arrays, strings and objects
is(a).set; <-- has a value or not
is(a).date; <-- is it a Date object
is(a).element; <-- HTML Element
```

#### Functions

You also can use functions like
			
 ```javascript
is(a).equal(123); // returns true
is(a).differentFrom(8); // returns true
```

There are many functions comming
#### Plurial form

When you need to test many things instead of using is() function you can use are() function

 ```javascript
is(a).number && is(b).number // you can write this expression like this:
are(a,b).number // and you can use are() with every property and function used with is()


are([],[1,2,3]).array; // returns true
are("",[],{}).empty; // returns true
```

#### Negative form question

instead of using the negative (opposite) of the is() function, you can use the isnt() or isn_t() like this:

 ```javascript
isn_t(a).string; // returns true
isnt(a).finite; // returns false
arent([],{}).undefined // returns true
aren_t(123,456).number // return false
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
