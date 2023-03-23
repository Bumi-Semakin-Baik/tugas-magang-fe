// Ambil elemen tombol Tambah dan tabel
const btnTambah = document.querySelector('.btn.btn-primary');
const tabel = document.querySelector('.table.table-striped tbody');

// Buat variabel untuk menyimpan nomor urut terakhir
let lastNo = 3;

// Tambahkan event listener pada tombol Tambah
btnTambah.addEventListener('click', function() {
  // Ambil nilai dari input kode buku, nama buku, pengarang, dan klasifikasi
  const inputKode = prompt('Masukkan kode buku:');
  const inputNama = prompt('Masukkan nama buku:');
  const inputPengarang = prompt('Masukkan pengarang:');
  const inputKlasifikasi = prompt('Masukkan klasifikasi:');

  // Jika input kode buku tidak kosong, tambahkan data ke dalam tabel
  if (inputKode) {
    // Tambahkan nomor urut untuk data baru
    lastNo++;
    
    // Buat elemen row baru
    const row = document.createElement('tr');
    
    // Tambahkan isi dari row baru
    row.innerHTML = `
      <th class="row1" scope="row">${lastNo}</th>
      <td>${inputKode}</td>
      <td>${inputNama}</td>
      <td>${inputPengarang}</td>
      <td>${inputKlasifikasi}</td>
      <td><i class="fa-solid fa-pencil"></i> &emsp; <i class="fa-solid fa-trash-can"></i></td>
    `;
    
    // Tambahkan row baru ke dalam tabel
    tabel.appendChild(row);
  }
});