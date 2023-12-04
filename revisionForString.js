
let container = [];

let unhashedPassword = "HelloThereHelloThere";
let length = unhashedPassword.length;
let slicedPassword = unhashedPassword.slice(0,5); //end not included
let lastLetter = unhashedPassword[-1];
let replacedText = unhashedPassword.replace(/hellothere/i, "Gluten Tag"); //returns new string
let replaceAllWithRegex = unhashedPassword.replace(/hello/g, "Meow");
let replaceAll = unhashedPassword.replaceAll(/hello/i, "there");


container.append(unhashedPassword);
container.append(length);
container.append(slicedPassword);
container.append(lastLetter);
container.append(replacedText);
container.append(replaceAllWithRegex);
container.append(replaceAll);




