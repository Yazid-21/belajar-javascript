// var satu = 1;
// while (satu <= 6) {
//   console.log(`angkot nomer ` + satu + ` sedang beroperasi`);
//   satu++;
// }

// for (let dua = 7; dua <= 10; dua++) {
//   console.log(`angkot nomer ` + dua + ` sedang tidak beroperasi`);
// }

// const button = document.getElementById(`button`);
// const moon = document.getElementById(`moon`);
// const container = document.getElementsByClassName(`container`);

// button.addEventListener(`click`, () => {
//   alert(`not yet bro`);
// });

// const moon = document.getElementById(`moon`);
// const body = document.getElementById(`body`);
// const sun = document.getElementById(`sun`);

// moon.addEventListener(`click`, () => {
//   body.classList.toggle(`body`);
//   body.classList.toggle(`main`);
//   body.classList.toggle(`one`);
//   body.classList.toggle(`two`);
//   body.classList.toggle(`three`);
//   body.classList.toggle(`four`);
// });

// sun.addEventListener(`click`, () => {
//   body.classList.toggle(`body2`);
//   body.classList.toggle(`main2`);
//   body.classList.toggle(`one3`);
//   body.classList.toggle(`two4`);
//   body.classList.toggle(`four4`);
//   body.classList.toggle(`user`);
//   body.classList.toggle(`lock`);
// });

// var nomer = prompt(`masukkan angka`);

// if (nomer % 2 == 0) {
//   console.log(`nomer anda genap`);
// } else if (nomer % 2 == 1) {
//   console.log(`nomer anda ganjil`);
// } else {
//   console.log(`itu bukan nomer `);
// }

// var operasi1 = " beroperasi dengan baik.";
// var operasi2 = " sedang tidak beroperasi.";
// var operasi3 = " sedang lembur.";
// var jumlahAngkot = 10;

// for (var angkot = 1; angkot <= jumlahAngkot; angkot++) {
//   if (angkot <= 6) {
//     var aksi = operasi1;
//   } else if (angkot === 8) {
//     var aksi = operasi3;
//   } else {
//     var aksi = operasi2;
//   }
//   console.log("Angkot No. " + angkot + aksi);
// }

// rar

// let angkot = 1;
// let semua = 10;
// let sakit = 8;
// let sehat = 6;

// for (let angkot = angkot; angkot <= semua; angkot++)
//   if (angkot <= sehat) {
//     console.log(`angkot  sedang beroperasi`);
//   } else if (angkot == sakit) {
//     console.log(`angkot  sedang lembur`);
//   } else {
//     console.log(`angkot  sedang tidak beroperas`);
//   }

const display = document.querySelector(".display");
const button = document.querySelectorAll("button");

console.log(display, button);
