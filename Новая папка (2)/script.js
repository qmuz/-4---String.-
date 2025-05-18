// function cssToCamelCase(cssStyle) {
//     return cssStyle.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
// }

// console.log(cssToCamelCase("font-size"));
// console.log(cssToCamelCase("background-color"));
// console.log(cssToCamelCase("text-align"));

// ---------------------------------------------------------------------

// function swapCaseAndDigits(str) {
//     return str.split('').map(char => {
//         if (/[a-z]/.test(char)) return char.toUpperCase();
//         if (/[A-Z]/.test(char)) return char.toLowerCase();
//         if (/[0-9]/.test(char)) return '_';
//         if (/[а-я]/.test(char)) return char.toUpperCase();
//         if (/[А-Я]/.test(char)) return char.toLowerCase();
//         return char;
//     }).join('');
// }

// console.log(swapCaseAndDigits("AbCd123"));
// console.log(swapCaseAndDigits("ПрИвІт123"));

// ---------------------------------------------------------------------

// function cssToCamelCaseRegex(cssStyle) {
//     return cssStyle.replace(/-([a-z0-9])/g, (match, letter) => letter.toUpperCase());
// }

// console.log(cssToCamelCaseRegex("font-size-20px"));
// console.log(cssToCamelCaseRegex("border-radius-5px"));

// ---------------------------------------------------------------------

// function formatString(template, ...args) {
//     return template.replace(/%(\d+)/g, (match, index) => args[parseInt(index) - 1] || match);
// }

// console.log(formatString("Today is %1 %.%2.%.%4", "Monday", 10, 8, 2020)); 

// ---------------------------------------------------------------------

function parseURL(url) {
    const [protocol, rest] = url.split('://');
    const [domain, ...pathParts] = rest.split('/');
    const path = '/' + pathParts.join('/');
    const query = path.includes('?') ? path.split('?')[1] : null;

    const result = {
        protocol,
        domain,
        path: query ? path.split('?')[0] : path,
        query: query || null
    };

    return result;
}

const urlInfo = parseURL("https://itstep.org/ua/about?param1=value1&param2=value2");
console.log(`Протокол: ${urlInfo.protocol}, домен: ${urlInfo.domain}, шлях: ${urlInfo.path}, параметри: ${urlInfo.query || 'немає'}`);