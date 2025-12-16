$(document).ready(function() {
    
    // Dapatkan semua elemen gambar dan tombol
    const slides = $('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0; // Mulai dari gambar pertama

    const prevBtn = $('#prev-btn');
    const nextBtn = $('#next-btn');
    
    // Fungsi untuk menampilkan slide tertentu
    function showSlide(index) {
        // 1. Sembunyikan slide yang sedang aktif (gunakan .fadeOut())
        slides.eq(currentIndex).fadeOut(500).removeClass('active');

        // 2. Update currentIndex ke indeks baru, pastikan loop terjadi
        if (index >= totalSlides) {
            currentIndex = 0; // Kembali ke slide pertama
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Kembali ke slide terakhir
        } else {
            currentIndex = index;
        }

        // 3. Tampilkan slide baru (gunakan .fadeIn())
        slides.eq(currentIndex).fadeIn(500).addClass('active');
    }

    // --- Event Handler Tombol Next ---
    nextBtn.click(function() {
        showSlide(currentIndex + 1);
    });

    // --- Event Handler Tombol Prev ---
    prevBtn.click(function() {
        showSlide(currentIndex - 1);
    });
    
    // Inisialisasi: Pastikan hanya slide pertama yang terlihat saat start
    showSlide(0); 
});