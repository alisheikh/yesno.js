
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
and you have many other properties to test, which are :

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
are(a,b).numbers // and you can use are() with every property and function used with is()


are([],[1,2,3]).arrays; // returns true
are("",[],{}).empty; // returns true
```

#### Negative form question

instead of using the negative (opposite) of the is() function, you can use the isnt() or isn_t() like this:

 ```javascript
isn_t(a).string; // returns true
isnt(a).finite; // returns false
arent([],{}).undefined // returns true
aren_t(123,456).numbers // return false
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
			
and you can suggest your synonymes to be added to the library.

#### The `is` object (1.1)

Starting from the 1.1 Release, you can make your if statments more readable.
The `is` object is added into all the types' prototypes 

Now you can do:

``` javascript 
// Simple test
var myVariable = 123;
if( myVariable.is.number ) 
{   /* code ... */  }

// Let's shift elements and put them in another array
var myArray = [1,2,3];
var newArray = [];
while( myArray.isnt.empty ) 
{   /* code ... */  }

// Plurial 
var Names = ['khalid', 'Ahmed', 'Mohammed'];
if( Names.are.strings )
{  /* code ... */ }
```

#### Memorize your test using `it` and `they` (1.2)

When you do a test about a value if it is number or string or whatever, and you need to do another test about the exact same value, you can make your test readable and meaningful by using the global variables `it` and `they`

``` javascript 
if(("abc").is.number)
{ /* Do something funny ! */ }

if( it.is.array ) 
{ /* Do something fun ! */ }
// -it- refers to "abc"

if( it.is.string )
{ /* Do something clever */ }
// -it- still refers to "abc"

var Answer1 = is(123).array;
var Answer2 = is(it).boolean;
// -it- refers to 123


if( [1,2,3].are.strings )
{ /* Do something stupid */ }

if( they.are.numbers )
{ /* Nevermind ! */ }
// -they- refers refers to [1,2,3]

var Answer3 = are(they).null;
// -they- still refers to [1,2,3]
```
