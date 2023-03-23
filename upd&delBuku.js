tabel.addEventListener('click', function(event) {
    const element = event.target;
    const row = element.parentNode.parentNode;
  
    // Jika ikon edit di klik
    if (element.classList.contains('edit-btn')) {
      const inputKode = prompt('Masukkan Kode Buku:', row.children[1].textContent);
      const inputNama = prompt('Masukkan Nama Buku:', row.children[2].textContent);
      const inputPengarang = prompt('Masukkan Nama Pengarang:', row.children[3].textContent);
      const inputKlasifikasi = prompt('Masukkan Klasifikasi Buku:', row.children[4].textContent);
  
      // Update data pada tabel jika input tidak kosong
      if (inputKode && inputNama && inputPengarang && inputKlasifikasi) {
        row.children[1].textContent = inputKode;
        row.children[2].textContent = inputNama;
        row.children[3].textContent = inputPengarang;
        row.children[4].textContent = inputKlasifikasi;
      }
    }
  
    // Jika ikon hapus di klik
    if (element.classList.contains('delete-btn')) {
      if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        row.remove();
      }
    }
  });