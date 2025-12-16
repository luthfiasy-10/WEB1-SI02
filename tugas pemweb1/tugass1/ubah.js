
const namaEl = document.getElementById('nama');
const prodiEl = document.getElementById('program-studi');
const fotoEl = document.getElementById('foto-profil');
const containerEl = document.getElementById('biodata-container');

const btnUbahNama = document.getElementById('ubah-nama');
const btnUbahProdi = document.getElementById('ubah-prodi');
const btnGantiFoto = document.getElementById('ganti-foto');
const btnSembunyi = document.getElementById('sembunyikan-biodata');
const btnTampil = document.getElementById('tampilkan-biodata');

btnUbahNama.onclick = function() {
    
    const newName = prompt("Masukkan Nama:", namaEl.innerHTML);
    if (newName) {
        namaEl.innerHTML = newName;
    }
};

btnUbahProdi.onclick = function() {
    prodiEl.innerHTML = prodiBaru;
};

btnGantiFoto.onclick = function() {
    fotoEl.setAttribute('src', fotoBaru);
    fotoEl.setAttribute('alt', 'Foto Profil Baru');
    alert("Foto telah diganti!");
};

btnSembunyi.onclick = function() {
    containerEl.style.display = 'none';
    btnSembunyi.style.display = 'none';
    btnTampil.style.display = 'inline-block';
};

btnTampil.onclick = function() {
    containerEl.style.display = 'flex'; 
    btnSembunyi.style.display = 'inline-block';
    btnTampil.style.display = 'none';
};