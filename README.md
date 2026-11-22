# Landing Page Peternakan Babi

Website one-page statis, responsif, dan siap dipublikasikan ke Vercel.

## Isi proyek
- `index.html` — struktur konten website
- `styles.css` — desain dan responsif desktop/mobile
- `script.js` — tombol WhatsApp, Google Maps, menu mobile, tahun otomatis
- `vercel.json` — konfigurasi Vercel

## Sebelum dipublikasikan
1. Buka `index.html`, ganti `NAMA PETERNAKAN` dengan nama usaha.
2. Buka `script.js`, ganti `WHATSAPP_NUMBER` dengan nomor WhatsApp format internasional. Contoh Indonesia: `6281234567890`.
3. Ganti `GOOGLE_MAPS_URL` dengan tautan lokasi Google Maps peternakan.
4. Di `index.html`, ganti alamat, jam layanan, dan nomor kontak.
5. Ganti foto contoh dengan dokumentasi peternakan sendiri. Cari `images.unsplash.com` di `index.html` dan `styles.css` untuk mengganti URL foto.
6. Sesuaikan kategori produk, bobot, serta harga aktual. Jangan tampilkan klaim yang belum dapat dibuktikan.

## Deploy ke Vercel
1. Ekstrak ZIP ini.
2. Buat repository baru di GitHub dan unggah semua isi folder ini.
3. Masuk ke https://vercel.com lalu pilih **Add New → Project**.
4. Import repository GitHub tersebut.
5. Framework Preset: **Other**. Build Command dan Output Directory dapat dikosongkan untuk situs statis.
6. Klik **Deploy**.

Alternatif: gunakan Vercel CLI dari folder proyek dengan `vercel` lalu ikuti instruksi terminal.

## Catatan
Foto saat ini adalah foto contoh dari Unsplash dan dapat diganti. Katalog serta harga dibuat sebagai placeholder agar tidak mengarang informasi usaha. Pastikan nomor WhatsApp dan URL Maps diganti sebelum situs dibagikan.
