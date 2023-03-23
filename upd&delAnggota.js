tabel.addEventListener('click', function(event) {
    const element = event.target;
    const row = element.parentNode.parentNode;
  
    // Jika ikon edit di klik
    if (element.classList.contains('edit-btn')) {
      const inputNik = prompt('Masukkan NIK Anggota:', row.children[1].textContent);
      const inputNama = prompt('Masukkan Nama Anggota:', row.children[2].textContent);
      const inputKelamin = prompt('Jenis Kelamin Anggota:', row.children[3].textContent);
      const inputTgllahir = prompt('Masukkan Tgl Lahir Anggota:', row.children[4].textContent);
  
      // Update data pada tabel jika input tidak kosong
      if (inputNik && inputNama && inputKelamin && inputTgllahir) {
        row.children[1].textContent = inputNik;
        row.children[2].textContent = inputNama;
        row.children[3].textContent = inputKelamin;
        row.children[4].textContent = inputTgllahir;
      }
    }
  
    // Jika ikon hapus di klik
    if (element.classList.contains('delete-btn')) {
      if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        row.remove();
      }
    }
  });