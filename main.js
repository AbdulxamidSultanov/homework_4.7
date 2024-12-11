// function

const functionArr = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.trunc(Math.random() * 200 - 100);
  }
  return arr;
};

// ============
// 1-masala:
//  Berilgan massivdagi barcha elementlarni konsolga chiqaring.
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
// ============
// 2-masala:
//  Massiv elementlarining yig‘indisini hisoblang.
const stockNumbers = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let i = 0; i < stockNumbers.length; i++) {
  sum2 += stockNumbers[i];
}

console.log(sum2);
// ============
// 3-masala:
//  Massivdagi eng katta elementni toping.

let arr3 = functionArr();
let maxNumber3 = arr3[0];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > maxNumber3) {
    maxNumber3 = arr3[i];
  }
}
console.log(maxNumber3);
// ============
// 4-masala:
//  Massivdagi eng kichik elementni toping.
const arr4 = functionArr();
let maxNumber4 = arr4[0];
for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] < maxNumber4) {
    maxNumber3 = arr3[i];
  }
}
console.log(maxNumber3);
// ============
// 5-masala:
//  Massivdagi barcha juft sonlarni konsolga chiqaring.
const arr5 = functionArr();
let count5 = 0;
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] % 2 == 0) {
    console.log(arr5[i]);
    count5++;
  }
}
if (count5 === 0) {
  console.log("Massivda juft sonlar mavjud emas");
}
// ============
// 6-masala:
//  Massivdagi barcha toq sonlarni konsolga chiqaring.
const arr6 = functionArr();
let count6 = 0;
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] % 2 != 0) {
    console.log(arr6[i]);
    count6++;
  }
}
if (count6 === 0) {
  console.log("Massivda toq sonlar mavjud emas");
}
// ============
// 7-masala:
//  Massivdagi manfiy sonlar sonini hisoblang.
const arr7 = functionArr();
let count7 = 0;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] < 0) {
    count7++;
  }
}
if (count7 === 0) {
  console.log("Massivda manfiy sonlar mavjud emas");
} else {
  console.log(count7);
}
// ============
// 8-masala:
//  Massivdagi musbat sonlar sonini hisoblang.
const arr8 = functionArr();
let count8 = 0;
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] > 0) {
    count8++;
  }
}
if (count8 === 0) {
  console.log("Massivda manfiy sonlar mavjud emas");
} else {
  console.log(count8);
}
// ============
// 9-masala:
//  Massivdagi elementlarning o‘rtacha qiymatini toping.
const arr9 = functionArr();
let count9 = 0;
let sum9 = 0;
for (let i = 0; i < arr9.length; i++) {
  count9++;
  sum9 += arr9[i];
}
console.log(arr9);
console.log(sum9 / count9);
// ============
// 10-masala:
//  Massivdagi barcha elementlarni teskari tartibda joylashtiring (massivni o‘zgartirmasdan).
const arr10 = functionArr();
console.log(arr10);
const reversedArr10 = arr10.reverse();

console.log(reversedArr10);

// ============
// 11-masala:
//  Massivning teskari nusxasini yarating.
const arr11 = functionArr();
const reversedArr11 = [];
console.log(arr11);
for (let i = 0; i < arr11.length - 1; i++) {
  reversedArr11.push(arr11[i]);
}

console.log(reversedArr11);
// ============
// 12-masala:
//  Massivning har bir elementini 2 ga ko‘paytiring va natijani yangi massivga saqlang.
const arr12 = functionArr();
const newArr12 = [];
let multi12;

for (let i = 0; i < arr12.length; i++) {
  multi12 = arr12[i] * 2;
  newArr12.push(multi12);
}

console.log(newArr12);
// ============
// 13-masala:
//  Massiv elementlari orasidan 0 qiymatlari sonini hisoblang.
const randomNumbersOneToZero = () => {
  const arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.trunc(Math.random() * 2);
  }
  return arr;
};

const arr13 = randomNumbersOneToZero();
let counter13 = 0;
console.log(arr13);
for (let i = 0; i < arr13.length; i++) {
  if (arr13[i] === 0) {
    counter13++;
  }
}
console.log(counter13);
// ============
// 14-masala:
//  Massiv elementlari ichida 5 ga karrali bo‘lgan sonlarni konsolga chiqaring.
const arr14 = functionArr();
console.log(arr14);

for (let i = 0; i < arr14.length; i++) {
  if (arr14[i] % 5 == 0) {
    console.log(arr14[i]);
  }
}
// ============
// 15-masala:
//  Massivni tartiblang (o‘sish bo‘yicha).
const arr15 = functionArr();

arr15.sort((a, b) => a - b);

console.log(arr15);

// ============
// 16-masala:
//  Massivni tartiblang (kamayish bo‘yicha).
const arr16 = functionArr();

arr16.sort((a, b) => b - a);

console.log(arr16);
// ============
// 17-masala:
//  Massivning har bir elementiga 3 qo‘shing va natijani yangi massivga saqlang.
const arr17 = functionArr();
let sum17;
const newArr17 = [];

for (let i = 0; i < arr17.length; i++) {
  sum17 = arr17[i] + 3;
  newArr17.push(sum17);
}

// ============
// 18-masala:
//  Massivdagi barcha musbat sonlarni alohida massivga ajrating.
const arr18 = functionArr();

const newArr18 = [];

for (let i = 0; i < arr18.length; i++) {
  if (arr18[i] > 0) {
    newArr18.push(arr18[i]);
  }
}
// ============
// 19-masala:
//  Massivdagi barcha manfiy sonlarni alohida massivga ajrating.
const arr19 = functionArr();

const newArr19 = [];

for (let i = 0; i < arr19.length; i++) {
  if (arr19[i] < 0) {
    newArr19.push(arr19[i]);
  }
}
// ============
// 20-masala:
//  Massivning faqat toq indeksdagi elementlarini konsolga chiqaring.
const arr20 = functionArr();
console.log(arr20);
for (let i = 0; i < arr20.length; i++) {
  if (i % 2 == 1) {
    console.log(arr20[i]);
  }
}

// ============
// 21-masala:
//Massivni ikkiga bo‘ling: birinchi va ikkinchi yarmlarini alohida massivlarga ajrating.
const arr21 = functionArr();
const newArr21 = [];
const newNewArr21 = [];

for (let i = 0; i < arr21.length; i++) {
  if (i < arr21.length / 2) {
    newArr21.push(arr21[i]);
  } else {
    newNewArr21.push(arr21[i]);
  }
}

// ============
// 22-masala:
//Massivda nechta element 10 dan katta ekanini aniqlang.
const arr22 = functionArr();

let count = 0;

for (let i = 0; i < arr22.length; i++) {
  if (arr22[i] > 10) {
    count++;
  }
}
console.log(count);
// ============
// 23-masala:
//Massivdagi barcha elementlarni 0 ga almashtiring.
const arr23 = functionArr();
for (let i = 0; i < arr23.length; i++) {
  arr23[i] = 0;
}

console.log(arr23);
// ============
// 24-masala:
//Massivning birinchi elementini oxiriga o‘tkazing.
const arr24 = functionArr();
let firstElement24 = arr24.shift();
arr24.push(firstElement24);
// ============
// 25-masala:
//Massivning oxirgi elementini boshiga o‘tkazing.
const arr25 = functionArr();
let firstElement25 = arr25.pop();
arr25.push(firstElement25);
// ============
// 26-masala:
//Massivdan har ikkinchi elementni o‘chiring.
const arr26 = functionArr();
let removeElements26;
let res26 = [];
for (let i = 0; i < arr26.length; i++) {
  removeElements26 = arr26.shift();
  if (i % 2 != 0) {
    res26.push(removeElements26);
  }
}
// ============
// 27-masala:
//Massivdagi faqat manfiy elementlarni 0 bilan almashtiring.
const arr27 = functionArr();

for (let i = 0; i < arr27.length; i++) {
  if (arr27[i] < 0) {
    arr27[i] = 0;
  }
}

// ============
// 28-masala:
//Massivdagi har bir elementni uning indeksiga ko‘paytiring va natijani yangi massivga saqlang.
const arr28 = functionArr();
const newArr28 = [];
let multi28;

for (let i = 0; i < arr28.length; i++) {
  multi28 = arr28[i] * i;
  newArr28.push(multi28);
}
// ============
// 29-masala:
//Massivdan 3 ga bo‘linmaydigan barcha elementlarni o‘chiring.
const arr29 = functionArr();
const newArr29 = [];

for (let i = 0; i < arr29.length; i++) {
  let removeElements29 = arr29.shift;
  if (arr29[i] % 3 == 0) {
    newArr29.push(removeElements29);
  }
}
// ============
// 30-masala:
//Massivdagi barcha bir xil elementlarni o‘chiring (bir marta qolishi kerak).
const arr30 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
let removeElement30;
const newArr30 = [];

for (let i = 0; i < arr30.length; i++) {
  if (arr30[i] === arr30[i + 1]) {
    removeElement30 = arr30.shift;
  }
}

// ============
// 31-masala:
//Massiv elementlari orasidan faqat juft indeksdagi sonlarni yangi massivga saqlang.
const arr31 = functionArr();
const newArr31 = [];

for (let i = 0; i < arr31.length; i++) {
  if (i % 2 == 0) {
    newArr31.push(arr31[i]);
  }
}
// ============
// 32-masala:
//Massivdan 2 ga karrali sonlarni olib tashlang.
const arr32 = functionArr();
const newArr32 = [];
let removeElement32;
for (let i = 0; i < 9; i++) {
  removeElement32 = arr32.shift();
  if (removeElement32 % 2 != 0) {
    newArr32.push(removeElement32);
  }
}
// ============
// 33-masala:
//Massivning faqat o‘rtadagi elementlarini olib tashlang (elementlar soni juft bo‘lsa, o‘rtadagi ikkitasini olib tashlang).
const arr33 = functionArr();
const newArr33 = [];

for (let i = 0; i < arr33.length; i++) {
  if (i != 4) {
    newArr33.push(arr33[i]);
  }
  if (arr33.length % 2 == 0) {
    if (i != 4 && i != 5) {
      newArr33.push(arr33[i]);
    }
  }
}
// ============
// 34-masala:
//Massivning birinchi va oxirgi elementlarini almashtiring.
const arr34 = functionArr();
let removeElement34 = arr34.shift();
arr34.push(removeElement34);
// ============
// 35-masala:
//Massivni boshqa massiv bilan birlashtiring.
const arr35 = functionArr();
const secondArr = randomNumbersOneToZero();

for (let i = 0; i < arr35.length; i++) {
  secondArr.push(arr35[i]);
}
console.log(secondArr);
// ============
// 36-masala:
//Massivdagi barcha elementlarni 3 ga bo‘lingan holatda yangi massivga saqlang.
const arr36 = functionArr();
const newArr36 = [];
let divided;
for (let i = 0; i < arr36.length; i++) {
  divided = arr36[i] / 3;
  newArr36.push(divided);
}
// ============
// 37-masala:
//Massivdan manfiy sonlarni olib tashlang.
const arr37 = functionArr();
const newArr37 = [];

for (let i = 0; i < 10; i++) {
  let removeElement37 = arr37.shift();
  if (removeElement37 > 0) {
    newArr37.push(removeElement37);
  }
}
console.log(newArr37);
// ============
// 38-masala:
//Massivdagi juft indeksdagi elementlarni 0 ga almashtiring.
const arr38 = functionArr();
const newArr38 = [];

for (let i = 0; i < 10; i++) {
  let removeElement38 = arr38.shift;
  if (i % 2 == 0) {
    newArr38.push("0");
  } else {
    newArr38.push(removeElement38);
  }
}
// ============
// 39-masala:
//Massivdan takroriy elementlarni olib tashlang.
const arr39 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
let removeElement39;
const newArr39 = [];

for (let i = 0; i < arr39.length; i++) {
  if (arr39[i] === arr39[i + 1]) {
    removeElement30 = arr30.shift;
  }
}
// ============
// 40-masala:
//Massivning o‘rta indeksiga yangi element qo‘shing
const arr40 = functionArr();
let counter40 = 0;

for (let i = 0; i < arr40.length; i++) {
  counter40++;
  if (counter40 % i == 0) {
  }
}

// ============
// 41-masala:
// Massivni ikkiga ajratib, ikkala yarmni teskari tartibda saqlang.
const arr41 = functionArr();
const newArr41 = [];
const newNewArr41 = [];
for (let i = 0; i < arr41.length; i++) {
  if (i != 5) {
    newArr41.push(arr41[i]);
  } else {
    newNewArr41[arr41[i]];
  }
}
newArr41.reverse;
newNewArr41.reverse;

// ============
// 42-masala:
// Massivni aylantiring (so‘nggi elementni boshiga qo‘ying).
const arr42 = functionArr();
arr42.reverse;
let removeElement42 = arr42.pop;
arr42.unshift(removeElement42);

// ============
// 43-masala:
// Massivni aylantiring (birinchi elementni oxiriga qo‘ying).
const arr43 = functionArr();
arr43.reverse;
let removeElement43 = arr43.shift;
arr43.push(removeElement43);
// ============
// 44-masala:
// Massivni barcha musbat va manfiy elementlarga ajratib, musbatlarini boshiga, manfiylarini oxiriga joylashtiring.
const arr44 = functionArr();
const newArr44 = [];
for (let i = 0; i < arr44.length; i++) {
  if (arr44[i] > 0) {
    newArr44.push(arr44[i]);
  }
}
for (let i = 0; i < arr44.length; i++) {
  if (arr44[i] < 0) {
    newArr44.push(arr44[i]);
  }
}
// ============
// 45-masala:
// Massivning eng kichik elementini o‘chiring.
const arr45 = functionArr();
console.log(arr45);
let minElement45 = arr45[0];
let counter = 0;
for (let i = 0; i < arr45.length; i++) {
  if (minElement45 > arr45[i]) {
    minElement45 = arr45[i];
    counter = i;
  }
}

delete arr45[counter];
console.log(minElement45);
console.log(arr45);

// ============
// 46-masala:
// Massivning eng katta elementini o‘chiring.
const arr46 = functionArr();
let minElement46 = arr45[0];
let counter46 = 0;
for (let i = 0; i < arr46.length; i++) {
  if (minElement46 > arr46[i]) {
    minElement46 = arr46[i];
    counter46 = i;
  }
}

delete arr46[counter];

// ============
// 47-masala:
// Massivdagi barcha sonlarni 2 ga karrali bo‘lgan sonlar bilan almashtiring.
const arr47 = functionArr();

for (let i = 0; i < arr47.length; i++) {
  if (arr47[i] % 2 != 0) {
    arr47[i] *= 2;
  }
}
console.log(arr47);
// ============
// 48-masala:
// Massivdan bir xil qiymatlarni olib tashlab, faqat noyob qiymatlarni qaytaring.
const arr48 = [1, 1, 2, 2, 3, 3, 4, 4];
const newArr48 = [];
for (let i = 0; i < arr48.length; i++) {
  if (!newArr48.includes(arr48[i])) {
    newArr48.push(arr48[i]);
  }
}

// ============
// 49-masala:
// Massiv elementlarini karralik bo‘yicha (2, 3, 5 kabi) guruhlarga ajrating.
// ============
const arr49 = functionArr()
const newArr49 = []
for(let i = 0; i < arr49.length; i++){
  if(arr49[i] % 5 == 0){
    newArr49.push(arr49[i])
  }
}
for(let i = 0; i < arr49.length; i++){
  if(arr49[i] % 3 == 0){
    newArr49.push(arr49[i])
  }
}
for(let i = 0; i < arr49.length; i++){
  if(arr49[i] % 2 == 0){
    newArr49.push(arr49[i])
  }
}
// 50-masala:
// Massivni aylantirish (rotation) orqali 3 marta oldinga suring.
