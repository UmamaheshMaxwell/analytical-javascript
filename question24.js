/*
    Javascript Debugging Like a PRO with Console
*/
console.log('Hello World!'); //log a message or an object to console
console.info('Something happened…'); //same as console log
console.warn('Something strange happened…'); //same as console log but outputs a warning
console.error('Something horrible happened…'); //same as console log but outputs an error

/* use the %c pattern to use the second argument as a style formatting parameter */
console.log("%cThis is green text on a yellow background.",
    "color:green; background-color:yellow");

/* If you want to know where the log is being prompted from use 
   console.trace() to get the stack trace with the logged data. */
console.trace()

/* If you are trying to find a sneaky performance issue, 
   start counting time with console.time() and print with
   console.timeEnd(). */
console.time();
console.timeEnd();

/* If your performance issue is even trickier, and you are 
   looking for a sneaky memory leak, you might like to try 
   and utilize console.memory (property, not a function) 
   to check out your heap size status. */
console.log(console.memory)

/* You can start and end a browser performance tool - performance 
   profile from the code using console.profile(‘profileName’) and 
   then console.profileEnd(‘profileName’). This will help you 
   profile EXACTLY what you want, and prevents you from having to 
   be mouse-click, timing dependent.
*/

console.profile('profileName')
console.profileEnd('profileName')

/*  In a case of recurring function or code, you can use 
    console.count(‘?’) to keep count of how many times 
    your code is read.
*/

console.count("STUFF I COUNT")

/*
    You can use console.assert(condition, msg) to log something 
    when the condition is falsy
*/

console.assert(1 === 2, 'Log me!')

/*
    Using console group, your console logs are grouped together, 
    while each grouping creates another level in the hierarchy. 
    Calling groupEnd reduces one.
*/

console.group('group')
console.groupEnd('group')

/*
    When logging, you can incorporate variables using string 
    substitutions. These references should be types 
    (%s = string, %i = integer, %o = object, %f = float).
*/
console.log("Hello %s you ID is %i", "Uma", 123456789)

// To clear the console
console.clear();

/*
    You can actually print a very nice table with the objects 
    you log using the console.table()
*/
console.table([{ name: 'Uma', age: 36 }, { name: 'Swathi', age: 36 }])