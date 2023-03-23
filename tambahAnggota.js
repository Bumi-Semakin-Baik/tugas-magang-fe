// const btnTambah = document.querySelector('.btn.btn-primary');
// const tabel = document.querySelector('.table.table-striped tbody');

// // Buat variabel untuk menyimpan nomor urut terakhir
// let lastNo = 3;

// // Tambahkan event listener pada tombol Tambah
// btnTambah.addEventListener('click', function() {
//   // Ambil nilai dari input kode buku, nama buku, pengarang, dan klasifikasi
//   const inputNik = prompt('Masukkan NIK Anggota:');
//   const inputNama = prompt('Masukkan Nama Anggota:');
//   const inputKelamin = prompt('Jenis Kelamin Anggota:');
//   const inputTgllahir = prompt('Masukkan Tgl Lahir Anggota:');

//   // Jika input kode buku tidak kosong, tambahkan data ke dalam tabel
//   if (inputNik) {
//     // Tambahkan nomor urut untuk data baru
//     lastNo++;
    
//     // Buat elemen row baru
//     const row = document.createElement('tr');
    
//     // Tambahkan isi dari row baru
//     row.innerHTML = `
//       <th class="row1" scope="row">${lastNo}</th>
//       <td>${inputNik}</td>
//       <td>${inputNama}</td>
//       <td>${inputKelamin}</td>
//       <td>${inputTgllahir}</td>
//       <td><i class="fa-solid fa-pencil"></i> &emsp; <i class="fa-solid fa-trash-can"></i></td>
//     `;
    
//     // Tambahkan row baru ke dalam tabel
//     tabel.appendChild(row);
//   }
// });

const btnTambah = document.querySelector('.btn.btn-primary');
const tabel = document.querySelector('.table.table-striped tbody');
const dropdown = document.querySelector('#nama');

// Buat variabel untuk menyimpan nomor urut terakhir
let lastNo = 3;

// Tambahkan event listener pada tombol Tambah
btnTambah.addEventListener('click', function() {
  // Ambil nilai dari input kode buku, nama buku, pengarang, dan klasifikasi
  const inputNik = prompt('Masukkan NIK Anggota:');
  const inputNama = prompt('Masukkan Nama Anggota:');
  const inputKelamin = prompt('Jenis Kelamin Anggota:');
  const inputTgllahir = prompt('Masukkan Tgl Lahir Anggota:');

  // Jika input kode buku tidak kosong, tambahkan data ke dalam tabel dan dropdown NIK & Nama
  if (inputNik) {
    // Tambahkan nomor urut untuk data baru
    lastNo++;

    // Buat elemen row baru
    const row = document.createElement('tr');

    // Tambahkan isi dari row baru
    row.innerHTML = `
      <th class="row1" scope="row">${lastNo}</th>
      <td>${inputNik}</td>
      <td>${inputNama}</td>
      <td>${inputKelamin}</td>
      <td>${inputTgllahir}</td>
      <td><i class="fa-solid fa-pencil"></i> &emsp; <i class="fa-solid fa-trash-can"></i></td>
    `;

    // Tambahkan row baru ke dalam tabel
    tabel.appendChild(row);

    // Buat elemen option baru
    const option = document.createElement('option');

    // Tentukan nilai dan teks dari elemen option
    option.value = inputNik;
    option.textContent = `${inputNik} - ${inputNama}`;

    // Tambahkan elemen option baru ke dalam dropdown NIK & Nama
    dropdown.appendChild(option);
  }
});
