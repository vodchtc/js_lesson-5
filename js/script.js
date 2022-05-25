//1)
function isMozartHere(str) {
    return str.trim().toLowerCase().includes('Mozart'.toLowerCase());
}

console.log('isMozartHere', isMozartHere('Мир труд Mozart'));

//2)
function showUppercaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(showUppercaseFirstLetter('тест'));

//3)
const books = ['1984', 'Гарри Поттер', 'Вино из одуванчиков', 'Преступление и наказание'];

console.log(books[books.length - 1]);
console.log(books[books.length - 2]);

console.log(books.length);

//4)
let javaScriptTypes = ['number', 'null', 'undefined', 'string'];
javaScriptTypes.push('symbol', 'object');
javaScriptTypes.push('boolean');

console.log('javaScriptTypes', javaScriptTypes);

//5)
const text =
    'Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.';

const searchText = '451 градус по Фаренгейту';
const firstIndex = text.indexOf(searchText);
const lastIndex = firstIndex + searchText.length;

console.log(text.substring(firstIndex, lastIndex));


//6)
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

console.log('random number 1', getRandomNumber());
console.log('random number 2', getRandomNumber());
console.log('random number 3', getRandomNumber());

//7)
const textInf = 'Я учу JavaScript очень мало';

console.log(textInf.replace('мало', 'много'));

//8)

const textI = 'Дорогой, а вдруг он потеряется?';

console.log("включает 'вдруг'", textI.includes('вдруг'));
console.log("включает 'рассвет'", textI.includes('рассвет'));

//9)
const colors = ['red', 'blue', 'green', 'yellow'];

colors.pop();
colors.shift();

console.log(colors);

colors.push('purple');
colors.unshift('black');

console.log(colors);