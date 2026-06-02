# PRD: Emotion Reflection Dashboard

## 1. Ringkasan Produk

Emotion Reflection Dashboard adalah aplikasi web berbahasa Indonesia yang membantu pengguna mengenali, menamai, dan merawat emosi harian mereka melalui visual interaktif, latihan regulasi emosi singkat, afirmasi berbasis nilai, journaling, dan refleksi AI.

Aplikasi ini tidak diposisikan sebagai pengganti psikolog, dokter, atau layanan kesehatan mental profesional. Perannya adalah sebagai companion reflektif yang hangat: membantu pengguna berhenti sebentar, memahami apa yang dirasakan, lalu memilih satu langkah kecil yang lebih sehat.

## 2. Latar Belakang

Banyak pengguna mengalami emosi seperti cemas, sedih, malu, marah, butuh validasi, atau bahkan takut saat sedang bahagia. Tantangannya bukan hanya "menghilangkan" emosi, tetapi memahami sinyalnya, memberi nama, menenangkan tubuh, dan merespons dengan lebih sadar.

Aplikasi ini menggabungkan tiga pendekatan:

- Affect labeling: menamai emosi agar pengalaman batin lebih terstruktur.
- Self-compassion dan self-affirmation: membantu pengguna berbicara pada diri sendiri dengan lebih adil.
- Savoring dan regulation practice: melatih pengguna menikmati atau menenangkan emosi secara bertahap.

## 3. Tujuan Produk

Tujuan utama:

1. Membantu pengguna memilih emosi yang paling dekat dengan kondisi mereka.
2. Memberi latihan singkat yang praktis dan mudah dilakukan.
3. Menyediakan afirmasi yang terasa realistis, bukan sekadar kalimat positif kosong.
4. Memberi ruang journaling dengan bantuan AI yang validatif dan suportif.
5. Menjadi ruang visual yang terasa lembut, aman, dan menyenangkan untuk digunakan berulang.

Tujuan sekunder:

1. Menyediakan dua eksplorasi dashboard agar pengguna/pembuat produk bisa membandingkan arah desain.
2. Menghubungkan konten self-help dengan referensi ilmiah awal.
3. Membantu pengguna membangun kebiasaan refleksi singkat.

## 4. Target Pengguna

Pengguna utama:

- Remaja akhir hingga dewasa muda yang ingin memahami emosi harian.
- Pengguna yang suka journaling, afirmasi, atau aplikasi self-care.
- Pengguna yang membutuhkan validasi emosi dalam bahasa Indonesia yang natural.

Pengguna sekunder:

- Mahasiswa atau pekerja muda yang sering merasa cemas, malu, lelah secara sosial, atau takut dinilai.
- Pengguna yang sulit menikmati momen bahagia karena takut sesuatu buruk akan terjadi setelahnya.

## 5. Masalah Pengguna

Masalah yang ingin diselesaikan:

1. Pengguna sering merasa sesuatu, tetapi sulit menamai emosinya.
2. Pengguna tahu sedang tidak baik-baik saja, tetapi tidak tahu langkah kecil apa yang bisa dilakukan.
3. Pengguna membutuhkan validasi, tetapi tidak selalu punya orang aman untuk bercerita.
4. Pengguna sering menghakimi diri sendiri setelah kesalahan kecil.
5. Pengguna merasa bahagia, tetapi langsung takut kebahagiaan itu akan "dibayar" dengan hal buruk.
6. Pengguna ingin aplikasi self-care yang terasa personal, visual, dan tidak terlalu klinis.

## 6. Nilai Produk

Value proposition:

> Aplikasi ini membantu pengguna memahami emosi harian dengan cara yang lembut, visual, dan berbasis refleksi, lalu memberi latihan singkat serta afirmasi yang bisa langsung digunakan.

Diferensiasi:

- Bahasa Indonesia natural dan dekat.
- Visual mood orbit yang playful tetapi tetap lembut.
- Refleksi AI dengan struktur JSON yang konsisten.
- Konten mood dilengkapi evidence dan sumber ilmiah awal.
- Menggabungkan journaling, afirmasi, latihan tubuh, dan desain interaktif.

## 7. Scope Versi Saat Ini

### 7.1 Dashboard 1: Dashboard Perasaan Utama

Dashboard pertama adalah pengalaman utama saat ini. Pengguna melihat pertanyaan "Apa yang sedang kamu rasakan?" dan memilih salah satu emosi pada orbit di sekitar karakter pixel.

Mood tersedia:

- Cemas
- Sedih
- Malu
- Butuh validasi
- Marah
- Bahagia

Setiap mood memiliki:

- Label
- Emoji
- Tone atau deskripsi sensasi
- Kebutuhan emosional
- Latihan singkat
- Pertanyaan reflektif
- Afirmasi
- Evidence
- Sumber ilmiah

Fitur visual:

- Karakter pixel idle/talking.
- Sapaan karakter secara berkala.
- Efek angin sesekali.
- Mood orbit yang dapat dipilih.

### 7.2 Journal dan AI Companion

Pengguna dapat menulis catatan singkat tentang hari mereka. Sistem mengirim mood dan catatan ke backend AI.

Output AI:

- Validasi emosi
- Positive reframe
- Latihan singkat
- Langkah kecil konkret
- Afirmasi personal
- Prompt journaling lanjutan

Prinsip respons AI:

- Hangat dan tidak menghakimi.
- Tidak membuat diagnosis.
- Tidak menggantikan bantuan profesional.
- Jika pengguna menyebut niat menyakiti diri atau tidak aman, AI diarahkan menyarankan bantuan orang tepercaya atau layanan darurat setempat.

### 7.3 Halaman Afirmasi

Halaman kedua berfokus pada afirmasi harian, khususnya kondisi merasa kurang karena penampilan, cermin, komentar, atau perbandingan.

Fitur:

- Ilustrasi karakter bercermin.
- Afirmasi yang bisa diulang.
- Pop-up "Kenapa afirmasi itu penting?"
- Carousel dasar ilmiah.
- Referensi awal.

### 7.4 Dashboard 3: Konsep Dashboard Orbit Baru

Dashboard ketiga adalah eksplorasi konsep baru, belum menggantikan dashboard pertama.

Konsep visual:

- Background putih lembut.
- Planet/inti tengah dengan gradien biru muda, pink muda, dan ungu muda.
- Ring orbit gradien yang berputar.
- Emoji emosi mengorbit di sekitar inti.
- Emosi yang dipilih pengguna tampil paling depan, lebih besar, lebih terang, dan lebih menonjol.

Tujuan dashboard 3:

- Menjadi alternatif visual yang lebih dreamy, modern, dan emosional.
- Memberi rasa "emosi sedang mengitari diri pengguna".
- Memudahkan eksplorasi ide sebelum memutuskan apakah dashboard 1 akan diganti.

## 8. User Flow

### Flow Utama

1. Pengguna membuka aplikasi.
2. Pengguna melihat Dashboard 1.
3. Pengguna memilih emosi yang paling dekat.
4. Pengguna menekan tombol "Aku sedang merasakan ...".
5. Aplikasi menampilkan latihan, afirmasi, pertanyaan reflektif, dan dasar ilmiah.
6. Pengguna dapat menulis journal.
7. AI memberi refleksi terstruktur.

### Flow Afirmasi

1. Pengguna menekan panah kanan dari Dashboard 1.
2. Pengguna masuk ke halaman Afirmasi.
3. Pengguna membaca afirmasi harian.
4. Pengguna dapat membuka pop-up dasar ilmiah.
5. Pengguna bisa kembali ke Dashboard 1 atau lanjut ke Dashboard 3.

### Flow Dashboard 3

1. Pengguna menekan panah kanan dari halaman Afirmasi.
2. Pengguna masuk ke Dashboard 3.
3. Pengguna melihat emosi dalam orbit gradien.
4. Pengguna memilih emosi.
5. Emosi terpilih berpindah ke posisi depan.
6. Panel bawah menampilkan emosi yang sedang terasa paling depan.

## 9. Konten Mood

### Cemas

Masalah: tubuh siaga, pikiran berlari.

Solusi:

- Latihan napas 4 detik masuk, 6 detik keluar.
- Memisahkan fakta dari ketakutan pikiran.
- Afirmasi keamanan saat ini.

Sumber: Russo et al., 2017.

### Sedih

Masalah: energi turun, hati terasa berat.

Solusi:

- Affect labeling: menyebutkan perasaan dengan kalimat jujur.
- Mengakui sedih tanpa mengidentifikasi diri sepenuhnya dengan kesedihan.

Sumber: Lieberman et al., 2007.

### Malu

Masalah: ingin menghilang atau menutup diri.

Solusi:

- Self-compassion.
- Menulis kalimat yang akan diucapkan kepada teman baik.
- Mengubah nada batin dari menghukum menjadi merawat.

Sumber: Marsh et al., 2018.

### Butuh Validasi

Masalah: nilai diri terasa bergantung pada respons orang.

Solusi:

- Kembali pada nilai personal.
- Melakukan tindakan kecil tanpa menunggu dilihat.
- Afirmasi berbasis nilai diri.

Sumber: Cascio et al., 2016.

### Marah

Masalah: ada batas yang terasa dilanggar.

Solusi:

- Menunda respons.
- Mengubah amarah menjadi permintaan spesifik.
- Menjaga batas tanpa kehilangan kendali.

Sumber: Torre & Lieberman, 2018.

### Bahagia

Masalah: pengguna merasa senang, lega, atau hangat, tetapi mungkin takut bahwa kebahagiaan akan disusul hal buruk.

Solusi:

- Savoring 30 detik.
- Mengamati sensasi tubuh saat bahagia.
- Menyebutkan 3 detail momen baik.
- Mengingatkan diri: "Aku boleh aman saat merasa bahagia."

Afirmasi:

- Aku pantas mendapatkan kebahagiaan yang sehat.
- Aku boleh menikmati hal baik tanpa harus langsung membayar dengan rasa takut.
- Bahagia hari ini tidak berarti aku lengah. Aku tetap bisa hadir dan bijak.

Sumber:

- Fredrickson, 2001.
- Joshanloo & Weijers, 2014.
- Najib & Kumalasari, 2023.
- Miyamoto & Ma, 2011.
- SkillJoy RCT, 2022.

## 10. Prinsip Desain

Tone visual:

- Lembut
- Hangat
- Tidak terlalu klinis
- Playful tetapi tetap dewasa
- Interaktif

Dashboard 1:

- Lebih grounded dan karakter-driven.
- Memakai karakter pixel sebagai companion.
- Cocok untuk rasa "teman kecil yang menemani".

Dashboard 3:

- Lebih dreamy dan konseptual.
- Memakai orbit, planet, dan gradien lembut.
- Cocok untuk eksplorasi visual baru yang lebih modern.

Prinsip UI:

- Tombol besar dan jelas.
- Interaksi mood harus terasa langsung.
- Teks tidak boleh terlalu panjang di elemen kecil.
- Desain harus nyaman di desktop dan mobile.
- Referensi ilmiah tersedia tanpa membuat UI terasa akademik berat.

## 11. Requirement Fungsional

### Mood Selection

- Sistem harus menampilkan daftar mood.
- Pengguna harus bisa memilih mood.
- Mood terpilih harus mengubah konten latihan, afirmasi, prompt, dan evidence.
- Mood terpilih harus tampil aktif secara visual.

### Dashboard Navigation

- Dari Dashboard 1, pengguna bisa menuju halaman Afirmasi.
- Dari Afirmasi, pengguna bisa kembali ke Dashboard 1.
- Dari Afirmasi, pengguna bisa menuju Dashboard 3.
- Dari Dashboard 3, pengguna bisa kembali ke halaman Afirmasi.

### AI Reflection

- Pengguna harus mengisi journal sebelum meminta refleksi AI.
- Jika journal kosong, aplikasi menampilkan error ringan.
- Backend harus mengirim mood dan catatan pengguna ke layanan AI.
- AI harus mengembalikan JSON valid.
- Frontend harus menampilkan hasil refleksi dalam section terpisah.

### Science Popup

- Pengguna dapat membuka pop-up dasar ilmiah di halaman Afirmasi.
- Pop-up bisa ditutup dengan tombol close, klik scrim, atau Escape.
- Pengguna bisa navigasi antar sumber dengan tombol carousel.

### Audio

- Aplikasi memiliki background music.
- Pengguna bisa mute/unmute.
- Audio mencoba autoplay, tetapi tetap menghormati batasan browser.

## 12. Requirement Non-Fungsional

Performance:

- Aplikasi harus build dengan Vite tanpa error.
- Interaksi mood harus terasa ringan.
- Asset visual perlu dijaga agar tidak terlalu berat untuk mobile.

Accessibility:

- Tombol memiliki aria-label.
- Dialog science menggunakan role dialog dan aria-modal.
- Navigasi utama bisa digunakan dengan tombol yang jelas.

Reliability:

- Jika AI gagal, pengguna menerima pesan error yang dapat dipahami.
- Jika API key belum tersedia, backend memberi error eksplisit.

Privacy:

- Catatan pengguna dikirim ke backend hanya saat pengguna meminta refleksi AI.
- PRD versi ini belum mencakup penyimpanan data permanen.

Safety:

- Aplikasi tidak memberi diagnosis.
- Aplikasi tidak menggantikan bantuan profesional.
- Respons AI diarahkan untuk menyarankan bantuan segera jika ada indikasi risiko keselamatan.

## 13. Out of Scope Saat Ini

Belum termasuk:

- Login dan akun pengguna.
- Riwayat journaling permanen.
- Dashboard analytics mood.
- Reminder harian.
- Integrasi kalender.
- Mode krisis lengkap.
- Personalisasi karakter.
- Pilihan bahasa selain Indonesia.
- Admin CMS untuk mengubah konten mood.

## 14. Success Metrics

Metrik awal:

- Pengguna berhasil memilih mood.
- Pengguna menekan tombol reveal guidance.
- Pengguna mengisi journal dan meminta refleksi AI.
- Pengguna membuka halaman Afirmasi.
- Pengguna mencoba Dashboard 3.
- Pengguna kembali menggunakan aplikasi lebih dari satu kali.

Metrik kualitatif:

- Pengguna merasa bahasa aplikasinya hangat.
- Pengguna merasa afirmasinya realistis.
- Pengguna merasa dashboard 1 atau dashboard 3 lebih cocok secara emosional.
- Pengguna merasa AI membantu memahami perasaan, bukan menggurui.

## 15. Risiko Produk

Risiko:

- Pengguna menganggap aplikasi sebagai pengganti terapi.
- Afirmasi terasa terlalu generik jika tidak dipersonalisasi.
- Dashboard 3 terlalu visual dan kurang jelas secara fungsi.
- Emosi bahagia bisa terasa aneh jika pengguna sedang tidak siap menerima emosi positif.
- Respons AI bisa gagal format atau terlalu panjang.

Mitigasi:

- Pertahankan disclaimer dalam prompt dan copy produk.
- Gunakan afirmasi realistis dan berbasis tindakan kecil.
- Uji Dashboard 1 vs Dashboard 3 dengan pengguna.
- Untuk bahagia, gunakan pendekatan bertahap: menikmati sedikit, bukan memaksa positif.
- Validasi output AI dan tampilkan error fallback.

## 16. Roadmap

### Versi 0.1

- Dashboard 1 dengan mood orbit.
- Halaman Afirmasi.
- Dashboard 3 sebagai konsep orbit baru.
- AI reflection.
- Referensi ilmiah awal.

### Versi 0.2

- Pilih salah satu dashboard sebagai default.
- Tambahkan onboarding singkat.
- Tambahkan opsi "aku tidak tahu rasanya apa".
- Tambahkan mode tanpa musik.
- Rapikan copy untuk mobile.

### Versi 0.3

- Riwayat journal lokal.
- Mood check-in harian.
- Insight sederhana dari mood yang sering dipilih.
- Konten mood tambahan.

### Versi 1.0

- Akun pengguna.
- Sinkronisasi data.
- Personalization.
- CMS konten mood dan afirmasi.
- Safety flow yang lebih lengkap untuk krisis.

## 17. Keputusan yang Masih Perlu Dipilih

1. Dashboard utama akan memakai Dashboard 1 atau Dashboard 3?
2. Apakah karakter pixel tetap menjadi identitas utama aplikasi?
3. Apakah Dashboard 3 perlu tetap punya karakter, atau cukup visual orbit?
4. Apakah halaman Afirmasi menjadi fitur utama atau fitur pendukung?
5. Apakah journal akan disimpan, atau tetap sekali pakai?
6. Apakah aplikasi akan punya nama brand khusus?

## 18. Referensi Awal

- Lieberman et al., Psychological Science, 2007.
- Cascio et al., Social Cognitive and Affective Neuroscience, 2016.
- Russo et al., Breathe, 2017.
- Marsh et al., Mindfulness, 2018.
- Torre & Lieberman, Emotion Review, 2018.
- Kim et al., Scientific Reports, 2021.
- Hatzigeorgiadis et al., Perspectives on Psychological Science, 2011.
- Dutcher et al., Social Cognitive and Affective Neuroscience, 2020.
- Fredrickson, American Psychologist, 2001.
- Joshanloo & Weijers, Journal of Happiness Studies, 2014.
- Najib & Kumalasari, Jurnal Ilmiah Psikologi Terapan, 2023.
- Miyamoto & Ma, Emotion, 2011.
- SkillJoy RCT, Journal of Consulting and Clinical Psychology, 2022.
