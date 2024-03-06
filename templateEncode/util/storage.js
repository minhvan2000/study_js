// const ENCODE_STORAGE_KEY = 'ENCODE';

// let Dictionary = [];

// (function getFileDictionary() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', './json/dictionary.json', true);
//     console.log(xhr);
//     xhr.onload = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var jsonData = JSON.parse(xhr.responseText);
//             var lengthJsonData = JSON.parse(xhr.responseText).length;
//             for (var i = 0; i < lengthJsonData; i++) {
//                 Dictionary.push(jsonData[i]);
//             }
//             console.log(Dictionary);
//             return Dictionary;
//         }
//     };
//     xhr.send();
// })();

// console.log(Dictionary);

// const app = Dictionary.find((value) => value.type == 'app');

// console.log(app);

// export default {
//     get() {
//         return [
//             {
//                 label: 'App',
//                 data: [],
//             },
//         ];
//     },
//     set(encode) {
//         localStorage.setItem(ENCODE_STORAGE_KEY, JSON.stringify(encode));
//     },
// };
