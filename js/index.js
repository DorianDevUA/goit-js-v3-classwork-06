// =====================
// Repeta ==============
// =====================

// =============== 01-spread ====================
/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [1000, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000, ...[7, 8, 9], 9000];

// console.log(numbers);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.min(...temps));
// console.log(temps);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({name: 'Mango' }, a, b);

// const c = {
//   ...a,
//   x: 10,
//   ...b,
//   y: 20,
// };

// console.log(c);

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

// ======================== 02-destructuring =============================
/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const { rating, tracks, name, trackCount: numberOfTracks = 0, author = 'user' } = playlist;

// console.log(numberOfTracks);

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   avatar,
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

/*
 * Деструктуризация массивов
 */

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(red, green, blue); // 255, 100, 80

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);
// console.log(entries);
// // ур3
// for (const [name, rating] of entries) {
//   // ур2
//   // const [name, rating] = entry;
//   // ур1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

// const showProfileInfo = function (userProfile) {
//   const { name, tag, location, ...restProps } = userProfile;

//   // console.log(name, tag, location, avatar, followers, views, likes);
//   console.log(restProps);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);

// ======================== 03-markup =========================
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const makeProfileMarkup = function (userProfile) {
//   const {
//     avatar = 'https://i.pravatar.cc/400?img=6',
//     name,
//     tag,
//     location = 'Planet Earth',
//     stats: { followers, views, likes },
//   } = userProfile;

//   return `<div>
//     <img src="${avatar}" alt="user avatar">
//     <p>${name}<span>@${tag}</span></p>
//     <p>Location: ${location}</p>
//     <ul>
//       <li>Followers: ${followers}</li>
//       <li>Views: ${views}</li>
//       <li>Likes: ${likes}</li>
//     </ul>
//   </div>`;
// };

// const markup = makeProfileMarkup(profile);

// console.log(markup);

// document.body.insertAdjacentHTML('afterbegin', markup);

// ==============================================================
//! Rysich ======================================================
// ==============================================================
// const arr = [1, 2, 3];
// const [, _, third] = arr;

// console.log(_);
// console.log(third);
// ==========================================

// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// };
// const name = 'value';
// const userName = 'Some name'
// const {age: userAge , name : nameUser} = user;

// console.log('age',userAge);
// console.log(name);
// console.log(userName);
// console.log(nameUser);
// const age = user.age;
// const html = user.skills.html;

// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         cars: {
//             audi: 'A6',
//             bmw: 'x5'
//         }
//     },
//     languages : [{html : true}, {css: false}]
// };

// const {languages : [skillHtml, css]} = user
// const {html} = skillHtml
// console.log(html);
// console.log(css);

// const skills = 123
// const {
//     name,
//     skills: {
//         js,
//         css : sass,
//         cars: {
//             audi
//         }
//     }
// } = user;

// console.log(sass);

// const user = {
//     name: 'Test',
//     age: 11,
//     skills: {
//         html: true,
//         css: true,
//         js: false,
//         cars: {
//             audi: 'A6',
//             bmw: 'x5'
//         }
//     },
//     languages: [{
//         html: true
//     }, {
//         css: false
//     }]
// };
// for(const {html} of user.languages){
//     console.log(html);
// }

// const users = [{
//     name: 'User1',
//     language: 'html',
//     car: {
//         audi: 'A6',
//         bmw: 'X5'
//     }
// }, {
//     name: 'User2',
//     language: 'css',
//     car: {
//         audi: 'A8',
//         bmw: 'X6'
//     }
// }, {
//     name: 'User3',
//     language: 'js',
//     car: {
//         audi: 'A7'
//     }
// }]
// а чому на кар нема конфлікту?

// for(const {name, car : {audi : car}} of users){
//     console.log(car);
// }
// for (const {
//         name,
//         cars: {
//             audi = "None",
//             bmw = 'None'
//         }
//     } of users) {
//     console.log(audi, bmw);
// }

// function foo({name = "No name", car: {bmw = 'None'} = {}} = {}) {
//     console.log(name,bmw);
//     ///
// }
// foo({
//     name: 'User1',
//     language: 'html',
//     car: {
//         audi: 'A6',
//         bmw: 'X5'
//     }

// })
// foo({
//     name: 'User2',
//     language: 'html',
// })
// foo()

// const arr1 = [12, 22, 3, 14, 45, 16, 57];
// // // spread
// // const min = Math.min(...arr1)
// // console.log(min);
// //    12, 22, 3, 14, 45, 16, 57
// const arr2 = [...arr1];
// // arr2.splice(0, 1)
// console.log(arr1 === arr2);

// // // rest
// const [first, second, ...props] = arr1;
// console.log('props', props);
// console.log(first);
// // for(let prop of props){
// //     prop *= first
// // }
// for (let i = 0; i < props.length; i += 1) {
//     props[i] *= first
// }
// console.log(props);

// function foo(first, second, ...args) {
//     console.log(args);
// }

// foo(1, 2, 3, 4, 5, 6)
// const arr1 = [12, 22, 3, 14, 45, 16, 57];

// function foo(first, second, ...rest) {
//     console.log(arguments);
//     console.log(first, second,rest);
// }
// foo(...arr1)

// ===========================================================
// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// JS Doc /** */
/**
 * Розраховуємо індекс маси тіла людини
 * @param {Object} obj
 * @returns {Number} BMI
 */
// function calcBMI({
//     weight,
//     height
// }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // // Було
// // console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));
// console.log(calcBMI({
//     weight: '68,3',
//     height: '1.65'
// }));
// console.log(calcBMI({
//     weight: '118,3',
//     height: '1.95'
// }));

// =========================================================
// Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// /**
//  *
//  * @param {Object} obj
//  */
// function printContactsInfo({names, phones}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300'
// }, );

// ==========================================================
// Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({
//     companyName,
//     repairBots,
//     defenceBots
// }) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було
// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     repairBots: 150,
//     defenceBots: 50
// }));

// =========================================================
// Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({companyName, stock}) {
//     // let total = repairBots + defenceBots;
//     let total = 0
//     for (const value of Object.values(stock)) {
//         total += value;
//     }
//     return `${companyName} has ${total} items in stock`;
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         }
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         }
//     })); // "Belacci has 35 item in stock"

//====================================================
// Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         createdAt: new Date(),
//         list :"default",
//         ...partialContact,
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// ========================================================
// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю De, замість firstName та lastName.

// function transformUsername({firstName, lastName, ...props}) {
// return {
//     fullName: `${firstName} ${lastName}`,
//     ...props
// }
// }
