// Dapatkan semua elemen yang dibutuhkan
const todoInput = document.getElementById('todo-input');
const btnTambah = document.getElementById('btn-tambah');
const btnHapusTerakhir = document.getElementById('btn-hapus-terakhir');
const todoList = document.getElementById('todo-list'); // Elemen <ul>

// --- FUNGSI TAMBAH (Create Element) ---
btnTambah.onclick = function() {
    const taskText = todoInput.value.trim(); // Ambil teks dan hapus spasi di awal/akhir

    // Pastikan input tidak kosong
    if (taskText === "") {
        alert("Masukkan teks tugas terlebih dahulu!");
        return;
    }

    // 1. createElement(): Buat elemen <li> baru
    const newLi = document.createElement('li');

    // Isi konten <li> dengan teks dari input
    newLi.innerHTML = taskText;

    // 2. appendChild(): Tambahkan <li> baru ke dalam elemen <ul> (todoList)
    todoList.appendChild(newLi);

    // Kosongkan input setelah tugas ditambahkan
    todoInput.value = "";
    todoInput.focus(); // Kembalikan fokus ke input
};

// --- FUNGSI HAPUS (Delete Element) ---
btnHapusTerakhir.onclick = function() {
    // Dapatkan semua item <li> yang ada di dalam <ul>
    const items = todoList.getElementsByTagName('li');

    // Cek apakah ada item di dalam list
    if (items.length > 0) {
        // Dapatkan elemen <li> terakhir (indeks terakhir = items.length - 1)
        const lastItem = items[items.length - 1];

        // 3. removeChild(): Hapus elemen terakhir dari induknya (todoList)
        // Syntax: parentElement.removeChild(childElement)
        todoList.removeChild(lastItem);
    } else {
        alert("Daftar tugas sudah kosong!");
    }
};

// Bonus: Memungkinkan penambahan item dengan menekan Enter
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        btnTambah.click();
    }
});