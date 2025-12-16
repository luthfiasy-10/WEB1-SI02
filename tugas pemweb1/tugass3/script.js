$(document).ready(function() {
    
    // --- 1. Event Hover (Warna Biru) ---
    // Menggunakan .hover() untuk mengubah warna pertanyaan saat mouse masuk/keluar.
    $('.faq-question').hover(
        // Fungsi saat mouse masuk (mouse in)
        function() {
            // Tambahkan kelas CSS 'hover-blue'
            $(this).addClass('hover-blue');
        },
        // Fungsi saat mouse keluar (mouse out)
        function() {
            // Hapus kelas CSS 'hover-blue' (kembali normal)
            $(this).removeClass('hover-blue');
        }
    );

    // --- 2. Event Klik (Tampilkan/Sembunyikan Jawaban) ---
    // Menggunakan .click() dan .toggle()
    $('.faq-question').click(function() {
        // Cari elemen .faq-answer yang merupakan saudara (sibling) dari elemen .faq-question yang diklik
        // dan gunakan metode .toggle() untuk menampilkan/menyembunyikannya.
        $(this).next('.faq-answer').toggle(300); // 300ms untuk efek animasi (opsional)
        
        // Bonus: Togle panah atau indikator lain (opsional, tergantung styling)
        // $(this).toggleClass('active'); 
    });

});