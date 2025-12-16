$(document).ready(function() {
    
    const notification = $('#notification');
    const triggerBtn = $('#show-notification-btn');

    triggerBtn.click(function() {
        
        // Pastikan notifikasi disembunyikan sebelum memulai (jika sudah terlihat)
        notification.stop(true, true).hide();
        
        // Method Chaining untuk Animasi Muncul dan Menghilang
        notification
            // 1. ANMASI MUNCUL: Ubah Warna (CSS)
            // Menggunakan .css() dan .animate() adalah dua cara mengubah properti.
            // Di sini kita menggunakan .animate() untuk mengubah latar belakang menjadi kuning (seolah-olah penting)
            .animate({ 'background-color': '#ffc107', 'color': '#343a40' }, 300) 
            
            // 2. ANMASI MUNCUL: Fade In
            .fadeIn(300) 
            
            // 3. ANMASI MUNCUL: Slide Down
            .slideDown(300)
            
            // 4. JEDA: Setelah 3 detik
            .delay(3000) 
            
            // 5. ANMASI MENGHILANG: Slide Up
            .slideUp(300)
            
            // 6. ANMASI MENGHILANG: Fade Out
            .fadeOut(500)
            
            // 7. Bersihkan: Kembalikan warna ke default setelah animasi selesai
            // Callback function di .fadeOut() akan dijalankan setelah animasi selesai
            .queue(function(next) {
                // Set warna kembali ke biru default untuk penggunaan berikutnya
                $(this).css({ 'background-color': '#007bff', 'color': 'white' });
                next(); // Lanjutkan antrian jQuery
            });
    });

});