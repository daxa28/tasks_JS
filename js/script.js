/* 1. Факториал. 
Напиши функцию, в которое передается число и от него необходимо 
вывести факториал.
Например, в функцию передала 4, на выход: 24
*/

// вариант 1
function factorial(x) {
    let result = 1;
    const error = 'Ошибка! Факториал можно вычислить тольно из положительного целого числа.'
    if (x > 0) {
        for (i = 1; i <= x; i++) {
        result = result * i;
        }
        return result;
    }
    else {
        return error;
    }
  
}
console.log('\nЗадача 1. Ответ варианта 1:', factorial(4));

// вариант 2 рекурсия 
let result = 1;
function factorialTwo(x, i = 1) {
    const error = 'Ошибка! Факториал можно вычислить тольно из положительного целого числа.'
    if (x > 0) {
        result = result * i;
        i++;
        if (i <= x) { 
            factorialTwo(x, i)
        }
        return result;
    }
    else {
        return error;
    }
}
console.log('\nЗадача 1. Ответ варианта 2:', factorialTwo(4));


/* 2. Четное нечетное.
Создайте функцию, которая принимает на вход целое число и возвращает 
на выходе ответ «четное» это число или «нечетное», для четных и 
нечетных чисел соответственно.
*/
function multiplicity (x) {
    if (x%2 === 0) {
        console.log('\nЗадача 2. Ответ: Число четное')
    }
    else {
        console.log('\nЗадача 2. Ответ: Число НЕчетное')

    }
    return x;
}
multiplicity(4);


/* 3. Номер телефона.
Напиши функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и 
возвращает строку из этих чисел в виде номера телефона. 
Например: +7 (999) 999 99 22.
*/
function phoneNumber(arr) {
    let phone = '+7';
    if (arr.length === 10) {
       for (i = 0; i <= 9; i++) {
        if (i == 0) {
            phone = phone + ' (' + arr[i]
        }
        else if ( i == 3) {
            phone = phone + ') ' + arr[i]
        }
        else if ( i == 6 || i == 8) {
            phone = phone + ' ' + arr[i]
        }
        else {
            phone = phone + arr[i]
        }
    }
    return phone; 
    }
    else {
        return 'Ошибка! Массив должен состоять из 10 чисел.'
    }
    
}
const array = [5, 4, 3, 3, 5, 6, 9, 3, 2, 4];
console.log('\nЗадача 3. Ответ:', phoneNumber(array))


/* 4. Сумма положительных чисел из массива.
Вы получаете массив чисел, возвращаете сумму всех положительных значений. 
*/
// Вариант 1
function sumOneFn (arr) {
    let res = 0;
    arr.map(function(x){
        if (x > 0) {
            res = res + x
            return res;
        }
    })
    return res;
}
const array4 = [5, -4, 0, 3, -5, 6, -9, 3, 2, 4];
console.log('\nЗадача 4. Ответ варианта 1:', sumOneFn(array4))

// Вариант 2
function sumTwoFn (arr) {
    let res = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res = res + arr[i]
        }
    }
    return res;

}
console.log('\nЗадача 4. Ответ варианта 2:', sumTwoFn(array4))


/* 5. Массив целых чисел.
Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0. 
*/

// Вариант 1
function arrayNumOne (n) {
    let arr = [];
    const error = 'Ошибка! Введите положительное число.';
    if (n > 0) {
        for (i = 1; i <= n; i++) {
            arr.push(i);
        }
        return arr.reverse();
    }
    else {
        return error;
    }
}
console.log('\nЗадача 5. Ответ варианта 1:', arrayNumOne(5))

// Вариант 2
function arrayNumTwo (n) {
    let arr = [];
    const error = 'Ошибка! Введите положительное число.';
    if (n > 0) {
        for (i = 1; i <= n; i++) {
            arr.unshift(i);
        }
        return arr;
    }
    else {
        return error;
    }
}
console.log('\nЗадача 5. Ответ варианта 2:', arrayNumTwo(5))


/* 6. Сортировка чисел в массиве.
Вам будет выдан массив чисел. Вы должны отсортировать нечетные числа 
в порядке возрастания, оставив четные числа на их первоначальных позициях. 
*/
function arraySortFn (arr) {
    let oddNumbers = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0){
            oddNumbers.push(arr[i]);
        }
    }

    oddNumbers.sort((a, b) => a - b)

    let j = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0){ 
            arr[i] = oddNumbers[j]
            j++;
        } 
    }
    return arr;
}
const array6 = [5, 6, -9, 3, 2, 4];
console.log('\nЗадача 6. Ответ:', arraySortFn(array6))


/* 7. Повторяющиеся слова в строке.
Ваша задача состоит в том, чтобы удалить все повторяющиеся слова из строки, 
оставив только одиночные (первые) записи слов.
Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta 
gamma gamma gamma delta'
Output:'alpha beta gamma delta'
*/

const stroka = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
function uniqueValues (str) {
    const arrOne = str.split(' ')
   
    // Способ 1
    // // const arrTwo = [... new Set(arrOne)];
    // const arrTwo = Array.from(new Set(arrOne));
    // return arrTwo;


    // Способ 2
    // const arrTwo = arrOne.filter((item, index) => index === arrOne.indexOf(item));
    // return arrTwo;


    // Способ 3
    // const arrTwo = arrOne.reduce((uniq, item) => {
    //     return uniq.includes(item) ? uniq : [...uniq, item];
    // }, [])
    // return arrTwo;

    // Способ 4
    let arrTwo = []
    for (i = 0; i < arrOne.length; i++) {
        let isFound = false;
        for (j = 0; j < arrTwo.length; j++) {
            if (arrOne[i] === arrTwo[j]) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            arrTwo.push(arrOne[i]);
        }
    }
    return arrTwo;
}
console.log('\nЗадача 7. Ответ:', uniqueValues(stroka))


/* 8. Маленькая Энни.
Маленькая Энни очень взволнована предстоящими событиями. 
Она хочет знать, сколько дней ей осталось ждать определенного события. Помоги ей выбраться.
Задача: Написать функцию, которая возвращает количество дней с сегодняшнего дня до заданной даты. 
Функция примет объект Date в качестве параметра. Вы должны округлить количество дней.
Если событие осталось в прошлом, верните "День остался в прошлом!"
Если мероприятие состоится сегодня, верните "Сегодня тот самый день!"
В противном случае верните "x дней"
*/
const date1 = '2021, 2, 20';
const date2 = '2023, 4, 25';
const date3 = '2024, 1, 1';
function amountOfDays (date) {

    const dateInMilliseconds = Date.parse(date);
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDay = now.getDate();
    const todayDateInMilliseconds = Date.parse(nowYear + ', ' + nowMonth + ', ' + nowDay);
    
    if (dateInMilliseconds < todayDateInMilliseconds) {
        return 'День остался в прошлом!'
    }
    else if (dateInMilliseconds === todayDateInMilliseconds) {
        return 'Сегодня тот самый день!'
    }
    else {
        const intervalOfDays = (dateInMilliseconds - todayDateInMilliseconds)/86400000;
        return `До события осталось: ${intervalOfDays} дней!`
    }
}
console.log('\nЗадача 7. Ответ для даты 20.03.2021:', amountOfDays(date1));
console.log('\nЗадача 7. Ответ для даты 25.05.2023:', amountOfDays(date2));
console.log('\nЗадача 7. Ответ для даты 01.02.2024:', amountOfDays(date3));


/* 9. Объект с доступными и "обновляемыми" свойствами.

Если .firstName или .lastName изменены, то .fullName также должно быть изменено
Если .fullName изменено, то .firstName и .lastName также должны быть изменены.
Примечание: 
"формат ввода" в fullName будет = firstName + пробел + lastName. 
Если заданное fullName недопустимо, то никакое свойство не изменяется.

var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
 */

// ===============
// способ 1 не особо подходит, не соответствует критериям задачи 

// class NamedOne {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.fullName = this.firstName + ' ' + this.lastName;
//     }

//     setFirstName(value) {
//         this.firstName = value;
//         this.fullName = value + ' ' + this.lastName;
//     }

//     getFirstName() {    
//         return this.firstName;
//     }

//     setLastName(value) {
//         this.lastName = value;
//         this.fullName = this.firstName + ' ' + value;
//     }

//     getLastName() {    
//         return this.lastName;
//     }

//     setFullName(value) {
//         this.fullName = value;
//         this.firstName = value.split(' ')[0];
//         this.lastName = value.split(' ')[1];
//     }

//     getFullName() {
//         return this.fullName;
//     }

// }

// const namedOne = new NamedOne('dasha', 'osa');

// console.log(namedOne.firstName)
// namedOne.setFirstName('dima')
// console.log(namedOne.getFirstName())

// console.log(namedOne.lastName)
// namedOne.setLastName('osadchuk')
// console.log(namedOne.getLastName())

// console.log(namedOne.fullName)
// namedOne.setFullName('danya osa')
// console.log(namedOne.getFullName())
// console.log(namedOne.getFirstName())
// console.log(namedOne.getLastName())







// ===============
// способ 2 - хороший способ, доделан

function NamedOne(first, last) {
    let firstName = first;
    let lastName = last;
    let  fullName = firstName + " " + lastName;

    Object.defineProperty(this, 'firstName', {
        get: function () {
            return firstName;
        },
        set: function (value) {
            firstName = value;
            fullName = firstName + " " + lastName;
        }
    });

    Object.defineProperty(this, 'lastName', {
        get: function () {
            return lastName;
        },
        set: function (value) {
            lastName = value;
            fullName = firstName + " " + lastName;
        }
    });

    Object.defineProperty(this, 'fullName', {
        get: function () {
            return fullName;
        },
        set: function (value) {
            const arr = value.split(" ")
            let reCapitals = /[A-ZА-ЯЁ]/g,
            capitalsAmount = value.match(reCapitals).length;
            if( arr.length > 1) {
                fullName = value;
                firstName = arr[0]
                lastName = arr[1]
            }
            else if (capitalsAmount = 2) {
                console.log('no : no space between first & last names')
            }
            else {
                console.log('no : lastName or firstName missing')
            }
        }
    });
}
const namedOne = new NamedOne('Dasha', 'Osa');
console.log('\nЗадача 9. Начальные данные:')
console.log('firstName:', namedOne.firstName)
console.log('lastName:', namedOne.lastName)
console.log('fullName:', namedOne.fullName)

namedOne.firstName = 'Dima'
console.log('\nЗадача 9. firstName изменили на Dima:')
console.log('firstName:', namedOne.firstName)
console.log('lastName:', namedOne.lastName)
console.log('fullName:', namedOne.fullName)

namedOne.lastName = 'Osadcuk'
console.log('\nЗадача 9. lastName изменили на Osadcuk:')
console.log('firstName:', namedOne.firstName)
console.log('lastName:', namedOne.lastName)
console.log('fullName:', namedOne.fullName)

namedOne.fullName = 'Danya'
console.log('\nЗадача 9. fullName изменили на Danya:')
console.log('firstName:', namedOne.firstName)
console.log('lastName:', namedOne.lastName)
console.log('fullName:', namedOne.fullName)

namedOne.fullName = 'DanyaOsad'
console.log('\nЗадача 9. fullName изменили на DanyaOsad:')
console.log('firstName:', namedOne.firstName)
console.log('lastName:', namedOne.lastName)
console.log('fullName:', namedOne.fullName)

namedOne.fullName = 'Danya Osad'
console.log('\nЗадача 9. fullName изменили на Danya Osad:')
console.log('firstName:', namedOne.firstName)
console.log('lastName:', namedOne.lastName)
console.log('fullName:', namedOne.fullName)
    
// ===============
// способ 3 - норм способ но устарел - deprecated

// class NamedOne {
//     constructor(first, last) {
//         this.firstName2 = first;
//         this.lastName2 = last;
//         this.fullName2 = this.firstName2 + ' ' + this.lastName2;
//     }
// }

// const namedOne = new NamedOne('Dasha', 'Osa');

// namedOne.__defineSetter__('firstName', function(val) { this.firstName2 = val; this.fullName2 = this.firstName2 + ' ' + this.lastName2; });
// namedOne.__defineGetter__('firstName', function() { return this.firstName2; });

// namedOne.__defineSetter__('lastName', function(val) { this.lastName2 = val; this.fullName2 = this.firstName2 + ' ' + this.lastName2; });
// namedOne.__defineGetter__('lastName', function() { return this.lastName2; });

// namedOne.__defineSetter__('fullName', function(val) {
//     const arr = val.split(" ")
//     if (arr.length > 1) {
//         this.firstName2 = arr[0]
//         this.lastName2 = arr[1]
//         this.fullName2 = val;
//     }
// });
// namedOne.__defineGetter__('fullName', function() { return this.fullName2; });

// console.log(namedOne.firstName)
// console.log(namedOne.lastName)
// console.log(namedOne.fullName)

// namedOne.firstName = 'Dima'
// console.log(namedOne.firstName)
// console.log(namedOne.lastName)
// console.log(namedOne.fullName)

// namedOne.lastName = 'Osadcuk'
// console.log(namedOne.firstName)
// console.log(namedOne.lastName)
// console.log(namedOne.fullName)


// namedOne.fullName = 'Danya'
// console.log(namedOne.firstName)
// console.log(namedOne.lastName)
// console.log(namedOne.fullName)

// namedOne.fullName = 'Danya Osad'
// console.log(namedOne.firstName)
// console.log(namedOne.lastName)
// console.log(namedOne.fullName)


/* 10. Наименьшее значение массива или индекс этого значения.
Напишите функцию, которая может возвращать наименьшее значение массива или индекс этого значения. 
2-й параметр функции укажет, должна ли она возвращать значение или индекс.
Предположим, что первым параметром всегда будет массив, заполненный 
как минимум 1 числом и не содержащий дубликатов. Предположим, что вторым параметром 
будет строка, содержащая одно из двух значений: 'value' и 'index'.
*/

function minValArr (arr, str) {
    if (str === 'value') {
        // return Math.min(...arr)
        return Math.min.apply(null, arr)
    }
    else if (str === 'index') {
        return arr.indexOf(Math.min(...arr))
    }
}
const array10 = [2, 4, 0, 9, -3, 4, 3, 5, 7, 1, 4]
console.log('\nЗадача 10. Массив: [2, 4, 0, 9, -3, 4, 3, 5, 7, 1, 4]. \nОтвет для значения:', minValArr(array10, 'value'))
console.log('\nЗадача 10. Массив: [2, 4, 0, 9, -3, 4, 3, 5, 7, 1, 4]. \nОтвет для индекса:', minValArr(array10, 'index'))


/* 11. Алфавит.
Рассмотрим слово "abode". Мы видим, что буква a находится в позиции 1, а b - в позиции 2. 
В алфавите a и b также находятся в позициях 1 и 2. Обратите также внимание, 
что d и e в abode занимают позиции, которые они занимали бы в алфавите, а именно позиции 4 и 5.

Учитывая массив слов, верните массив количества букв, которые занимают свои позиции в алфавите 
для каждого слова. Например, решить (["abode","ABc","xyz"]) = [4, 3, 1]
Дополнительные примеры приведены в тестовых примерах.
Ввод будет состоять из символов алфавита, как прописных, так и строчных. Никаких пробелов.
 */
function alfavit(arr) {
    const arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arrCount = [];
    for (n = 0; n < arr.length; n++) {
        const arrWord = arr[n].toLowerCase().split('');
        let count = 0;
        for (i = 0; i < arrEn.length; i++) {
            for (j = 0; j < arrWord.length; j++) {
                if (arrEn[i] === arrWord[j] && arrEn.indexOf(arrEn[i]) === arrWord.indexOf(arrWord[j])) {
                    count++;
                }
            }
        }
        arrCount.push(count);
    } 
    return arrCount;
}
console.log('\nЗадача 11. Массив: AboDe, abc, Yic. \nОтвет:', alfavit(['AboDe', 'abc', 'Yic']))


/* 12. Может ли Санта спасти Рождество?
О, нет! Маленькие эльфы Санты в этом году заболели. Он должен раздавать подарки самостоятельно.
Но у него осталось всего 24 часа. Сможет ли он это сделать?
Ваша задача:
В качестве входных данных вы получите массив с длительностью времени в виде строки 
в следующем формате: ЧЧ:ММ:СС. Каждая длительность представляет время, затраченное Сантой 
на доставку подарка. Определите, сможет ли он сделать это за 24 часа или нет. В случае, 
если время, необходимое для доставки всех подарков, составляет ровно 24 часа, 
Санта может завершить доставку ;-).
*/

//==============
// Вариант 1

// function spastiSantu(arr) {
//     const sutki = 24 * 60 * 60 * 1000;
//     let totalDeliveryTime = 0;
//     for (i = 0; i < arr.length; i++) {
//         date = Date.parse('1970-01-01T' + arr[i] +'Z');
//         totalDeliveryTime = totalDeliveryTime + date;
//     }
//     console.log(totalDeliveryTime)
//     if (sutki < totalDeliveryTime) {
//         return 'Санта НЕ успеет развести подарки:('
//     }
//     else {
//         return 'Санта успеет развести подарки:)'
//     }
// }

// const array12 = ['08:01:02', '08:08:04', '01:01:20', '07:01:02', '06:01:02', '00:20:02']
// const arr12 = ['02:01:02', '00:08:04', '01:01:20', '00:01:02', '06:01:02', '00:20:02']

// console.log('Задача 12. Ответ для большого времени:', spastiSantu(array12))
// console.log('Задача 12. Ответ для времени который равен или меньше суток:', spastiSantu(arr12))



//==============
// Вариант 2

function spastiSantu(arr) {
    const sutki = 24 * 60 * 60;
    let totalDeliveryTime = 0;
    let hh = 0;
    let mm = 0;
    let ss = 0;
    for (i = 0; i < arr.length; i++) {
        hh = hh + +arr[i].split(":")[0];
        mm = mm + +arr[i].split(":")[1];
        ss = ss + +arr[i].split(":")[2];
    }
    totalDeliveryTime = hh * 60 * 60 + mm * 60 + ss;
    if (sutki < totalDeliveryTime) {
        return 'Санта НЕ успеет развести подарки:('
    }
    else {
        return 'Санта успеет развести подарки:)'
    }
}

const array12 = ['08:01:02', '08:08:04', '01:01:20', '07:01:02', '06:01:02', '00:20:02'];
const arr12 = ['02:01:02', '00:08:04', '01:01:20', '00:01:02', '06:01:02', '00:20:02'];

console.log('\nЗадача 12. Ответ для большого времени:', spastiSantu(array12));
console.log('\nЗадача 12. Ответ для времени который равен или меньше суток:', spastiSantu(arr12));



/* 13. Cудоку
Учитывая структуру данных судоку размером NxN, N > 0 и √N == целое число, 
напишите метод для проверки правильности заполнения.

Структура данных представляет собой многомерный массив, т.е:
[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],
  
  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],
  
  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]
*/

function uniqueArray (arr) {
    for (i = 0; i < arr.length - 1; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

function sudoku(arr) {

    let checkStroka = false;
    for (n = 0; n < arr.length; n++) {
        let arrStroka = arr[n];
        // console.log(arrStroka);
        checkStroka = uniqueArray(arrStroka);
        if (!checkStroka) {
            break;
        }
    }
    // console.log(checkStroka)

    let checkStolbik = false;
    let h = 0;
    for (n = 0; n < arr.length; n++) {
        let arrStolbik = [];
        for (m = 0; m < arr.length; m++) {
            let arrStroka = arr[m];
            arrStolbik.push(arrStroka[h]);
        }
        h++;
        // console.log(arrStolbik);
        checkStolbik = uniqueArray(arrStolbik);
        if (!checkStolbik) {
            break;
        }
    }
    // console.log(checkStolbik);

    let checkKub = false;
    let p = 0;
    for (l = 0; l < arr.length/3; l++) {
        let o = 0;
        for (n = 0; n < arr.length/3; n++) {
            let arrKub = [];
            for (m = o*arr.length/3; m < (o+1)*arr.length/3; m++) {
                let miniArr = arr[m];
                for (k = p*miniArr.length/3; k < (p+1)*miniArr.length/3; k++){
                    arrKub.push(miniArr[k]);
                }
            }
            o++;
            // console.log(arrKub);
            checkKub = uniqueArray(arrKub);
            if(!checkKub) {
                break;
            }
        }
        p++;
        if(!checkKub) {
            break;
        }
    }
    // console.log(checkKub);

    if (checkStroka && checkStolbik && checkKub) {
        return 'Судоку заполнин верно.'
    }
    else {
        return 'Судоку заполнин НЕ верно.'
    }
}

const example = [
    [7,8,4,  1,5,9,  3,2,6],
    [5,3,9,  6,7,2,  8,4,1],
    [6,1,2,  4,3,8,  7,5,9],

    [9,2,8,  7,1,5,  4,6,3],
    [3,5,7,  8,4,6,  1,9,2],
    [4,6,1,  9,2,3,  5,8,7],

    [8,7,6,  3,9,4,  2,1,5],
    [2,4,3,  5,6,1,  9,7,8],
    [1,9,5,  2,8,7,  6,3,4]
]

console.log('\nЗадача 13. Ответ:', sudoku(example))



/* 14. Нужно число переводить в строку

То есть -
На вход: 5 
Выход: пять

На вход: 13451110 
Выход: тринадцать миллионов четыреста пятьдесят одна тысяча сто десять

*/
let arr0 = ['Ноль'];
let arr1to9 = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять']
let arr10to19 = ['Десять', 'Одиннадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семнадцать', 'Восемнадцать', 'Девятнадцать'] 
let arr10to90 = ['Десять', 'Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Cемьдесят', 'Восемьдесят', 'Девяносто']
let arr100to900 = ['Cто', 'Двести', 'Триста', 'Четыреста', 'Пятьсот', 'Шестьсот', 'Семьсот', 'Восемьсот', 'Девятьсот']
let arr1000 = ['Тысяча', 'Тысячи', 'Тысяч']
let arr1000000 = ['Миллион', 'Миллиона', 'Миллионов']
let arr1or2 = ['Одна', 'Две']

function nummm (number) {
    if (number === 0) {
        return arr0[0];
    }

    const numberS = number.toString();

    units = arr1to9[numberS.at(-1)-1]

    if (numberS.length === 1) {
        return units;
    }

    const tenthFn = function(num) {
        if (num < 20) {
            return arr10to19[num[1]];
        } else {
            ten = arr10to90[num[0]-1];
            if (num[1] != 0){
                return ten + ' ' + units;
            } else if (num[1] == 0) {
                return ten;
            }  
        }
    }

    if (numberS.length === 2) {
        return tenthFn(numberS);
    }

    const hundredsFn = function (num) {
        hundred = arr100to900[num[0]-1]
        if (num[1] == 0 && num[2] == 0) {
            return hundred;
        }
        if (num[1] != 0 && num[2] == 0) {
            return hundred + ' ' + tenthFn(num[1] + num[2]);
        }
        if (num[1] != 0 && num[2] != 0) {
            return hundred + ' ' + tenthFn(num[1] + num[2]);
        }
        if (num[1] == 0 && num[2] != 0) {
            return hundred + ' ' + units;
        }
    }

    if (numberS.length === 3) {
       return hundredsFn(numberS);
    }

    const thousandsFn = function (num) { 
        const thousand = arr100to900[num[0]-1];
        if (num[1] == 0 && num[2] == 0 ) {
            return thousand + ' ' + arr1000[2];
        }
        if (num[1] != 0 && num[2] == 0) {
            return thousand + ' ' + arr10to90[num[1]-1] + ' ' + arr1000[2];
        }
        if (num[1] != 0 && num[2] != 0) {
            if (num[1] == 1) {
                return thousand + ' ' + arr10to19[num[2]] + ' ' + arr1000[2];
            } else {
                if (num[2] == 1 || num[2] == 2) {
                    return thousand + ' ' + arr10to90[num[1]-1] + ' ' + arr1or2[num[2]-1] + ' ' + arr1000[num[2]-1];
                }
                else {
                    return thousand + ' ' + arr10to90[num[1]-1] + ' ' + arr1to9[num[2]-1] + ' ' + arr1000[2];
                }
            }
        
        }
        if (num[1] == 0 && num[2] != 0) {
            if (num[2] == 1 || num[2] == 2) {
                return thousand + ' ' + arr1or2[num[2]-1] + ' ' + arr1000[num[2]-1];
            }
            else {
                return thousand + ' ' + arr1to9[num[2]-1] + ' ' + arr1000[2];
            }
        }
    }

    if (numberS.length >= 4 && numberS.length <= 6) {
        if (numberS.length === 6) {
            if (numberS[3] == 0 && numberS[4] == 0 && numberS[5] == 0) {
                return thousandsFn(numberS[0] + numberS[1] + numberS[2]);
            }
            if (numberS[3] != 0) {
                return thousandsFn(numberS[0] + numberS[1] + numberS[2]) + " " + hundredsFn(numberS[3] + numberS[4] + numberS[5]);
            }
            if (numberS[3] == 0 && numberS[4] != 0) {
                return thousandsFn(numberS[0] + numberS[1] + numberS[2]) + " " + tenthFn(numberS[4] + numberS[5]);
            }
            if (numberS[3] == 0 && numberS[4] == 0 && numberS[5] != 0) {
                return thousandsFn(numberS[0] + numberS[1] + numberS[2]) + " " + units;
            }
        }
        if (numberS.length === 5) {
            if (numberS[2] == 0 && numberS[3] == 0 && numberS[4] == 0) {
                return tenthFn(numberS[0] + numberS[1]) + ' ' + arr1000[2];
            }
            if (numberS[2] != 0) {
                return tenthFn(numberS[0] + numberS[1]) + ' ' + arr1000[2] + " " + hundredsFn(numberS[3] + numberS[4] + numberS[5]);
            }
            if (numberS[2] == 0 && numberS[3] != 0) {
                return tenthFn(numberS[0] + numberS[1]) + ' ' + arr1000[2] + " " + tenthFn(numberS[4] + numberS[5]);
            }
            if (numberS[2] == 0 && numberS[3] == 0 && numberS[4] != 0) {
                return tenthFn(numberS[0] + numberS[1]) + ' ' + arr1000[2] + " " + units;
            }
        }

        if (numberS.length === 4) {
            if (numberS[1] == 0 && numberS[2] == 0 && numberS[3] == 0) {
                if (numberS[0] == 1 || numberS[0] == 2) {
                    return arr1or2[numberS[0]-1] + ' ' + arr1000[numberS[0]-1];
                } 
                else if (numberS[0] == 3 || numberS[0] == 4) {
                    return arr1to9[numberS[0]-1] + ' ' + arr1000[1];
                } else {
                    return arr1to9[numberS[0]-1] + ' ' + arr1000[2];
                }
            }
            if (numberS[1] != 0) {
                if (numberS[0] == 1 || numberS[0] == 2) {
                    return arr1or2[numberS[0]-1] + ' ' + arr1000[numberS[0]-1] + " " + hundredsFn(numberS[1] + numberS[2] + numberS[3]);
                } 
                else if (numberS[0] == 3 || numberS[0] == 4) {
                    return arr1to9[numberS[0]-1] + ' ' + arr1000[1] + " " + hundredsFn(numberS[1] + numberS[2] + numberS[3]);
                } else {
                    return arr1to9[numberS[0]-1] + ' ' + arr1000[2] + " " + hundredsFn(numberS[1] + numberS[2] + numberS[3]);
                }
            }
            if (numberS[1] == 0 && numberS[2] != 0) {
                if (numberS[0] == 1 || numberS[0] == 2) {
                    return arr1or2[numberS[0]-1] + ' ' + arr1000[numberS[0]-1] + " " + tenthFn(numberS[2] + numberS[3]);
                } 
                else if (numberS[0] == 3 || numberS[0] == 4) {
                    return arr1to9[numberS[0]-1] + ' ' + arr1000[1] + " " + tenthFn(numberS[2] + numberS[3]);
                } else {
                    return arr1to9[numberS[0]-1] + ' ' + arr1000[2] + " " + tenthFn(numberS[2] + numberS[3]);
                }
            }
            if (numberS[1] == 0 && numberS[2] == 0 && numberS[3] != 0) {
                if (numberS[0] == 1 || numberS[0] == 2) {
                    return arr1or2[numberS[0]-1] + ' ' + arr1000[numberS[0]-1] + " " + units;
                } 
                else if (numberS[0] == 3 || numberS[0] == 4) {
                    return arr1to9[numberS[0]-1] + ' ' + arr1000[1] + " " + units;
                } else {
                    return arr1to9[numberS[0]-1] + ' ' + arr1000[2] + " " + units;
                }
            }
        }
    }
    if (numberS.length >= 7 && numberS.length <= 9) {
        if (numberS.length === 7) {
            if (numberS[1]==0 && numberS[2]==0 && numberS[3]==0 && numberS[4]==0 && numberS[5]==0 && numberS[6]==0) {
                if (numberS[0] == 1) {
                    return arr1to9[0] + ' ' + arr1000000[0];
                } else {
                    return arr1to9[numberS[0]-1] + ' ' + arr1000000[1];
                }
            }
        }
    }
    return 'error'
}

console.log('\nЗадача 14. Ответ:', nummm(1003))








