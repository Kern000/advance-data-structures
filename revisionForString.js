
let container = [];

let unhashedPassword = "HelloThereHelloThere";
let length = unhashedPassword.length;
let slicedPassword = unhashedPassword.slice(0,5); //end not included
let lastLetter = unhashedPassword[-1];
let replacedText = unhashedPassword.replace(/hellothere/i, "Gluten Tag"); //returns new string
let replaceAllWithRegex = unhashedPassword.replace(/hello/g, "Meow");
let replaceAll = unhashedPassword.replaceAll(/hello/g, "there");
let lowerCasePassword = unhashedPassword.toLowerCase();
let upperCasePassword = unhashedPassword.toUpperCase();
let concatPasswords = unhashedPassword.concat(" ", replacedText);
let concatPasswords2 = concatPasswords.concat(unhashedPassword);

let weirdPassword = "   nononon  "
let trimedPassword = weirdPassword.trim();
let trimStart = weirdPassword.trimStart();
let trimEnd = weirdPassword.trimEnd();

let findStringCharacterBasedOnPosition = unhashedPassword.charAt(0);
let ASCIICharCode = unhashedPassword.charCodeAt(0);
let EcmaStringAccess = unhashedPassword[0];

//string conversion to array
concatPasswords.split(" ");

container.push(unhashedPassword);
container.push(length);
container.push(slicedPassword);
container.push(lastLetter);
container.push(replacedText);
container.push(replaceAllWithRegex);
container.push(replaceAll);
container.push(lowerCasePassword);
container.push(lowerCasePassword);
container.push(upperCasePassword);
container.push(concatPasswords);
container.push(concatPasswords2);
container.push(trimedPassword);
container.push(findStringCharacterBasedOnPosition);
container.push(ASCIICharCode);

console.log(container);

// String search
let container2 = 
[
unhashedPassword.indexOf("ello"), // index of first occurence
unhashedPassword.lastIndexOf("ello"), //index of last occurence
unhashedPassword.indexOf("hello", 5),
unhashedPassword.search(/hello/gi), // search searches regex, return all with g and i for case insensitive
unhashedPassword.match("hello"), //can match regex too

unhashedPassword.includes("Hello"), //not supported in iexplorer, is case sensitive
unhashedPassword.includes("Hello", 5),

//Boolean
unhashedPassword.startsWith("a"),
unhashedPassword.startsWith("There", 5),
unhashedPassword.endsWith("There", 10),
]

// template literals
let helloMessage = `Welcome back, ${unhashedPassword}!`;
container2.push(helloMessage);
console.log(container2);






