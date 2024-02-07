// const penumpang = [`yazid`, `hamad`, `roni`, `fuad`];
// var tambahPenumpang = function (penumpang, namaPenumpang) {
//   if (penumpang.length == 0) {
//     penumpang.push(namaPenumpang);
//     return penumpang;
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == undefined) {
//         penumpang[i] = namaPenumpang;
//         return penumpang;
//       } else if (penumpang[i] == namaPenumpang) {
//         console.log(namaPenumpang + `sudah ada nama itu bang`);
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//       }
//     }
//   }
// };

// const hapusPenumpang = function (namaPenumpang, arrayPenumpang) {
//   if (penumpang.length == 0) {
//     console.log(`angkot sedang kosong`);
//     return penumpang;
//   } else {
//     for (var y = 0; y < penumpang; y++) {
//       if (penumpang[y] == namaPenumpang) {
//         namaPenumpang = undefined;
//         return penumpang;
//       } else if (penumpang.length - 1) {
//         console.log(namaPenumpang + `tidak ada di dalam array`);
//       }
//     }
//   }
// };

// var yazid = {
//   hobby: `tidur`,
//   favBola: `messi`,
//   favCLub: `barcelona`,
//   alamat: {
//     kota: `mataram`,
//     province: `ntb`,
//     negara: `indonesia`,
//   },
// };

// function murid(nama, umur, alamat, tinggi) {
//   this.nama = nama;
//   this.umur = umur;
//   this.alamat = alamat;
//   this.tinggi = tinggi;
// }

// var siswa = murid(`yazid`, `19`, `lombok`, `170cm`);

function Taxi(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert(`taxi sedang kosong`);
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
      }
    }
  };
}
var taxi1 = new Taxi(`yazid`, [`lombok`, `sumbawa`], [], 0);
