import mongoose from "mongoose";

const CatatanKhusus = mongoose.Schema({
    tanggal: Date,
    isi: String,
    issued_by: String,
    status: String
});

const Konsultan = mongoose.Schema({
    nama: String,
    nip: String,
    divisi: String,
    path_ttd_file: String,
});

const Hasil = mongoose.Schema({
    kategori: String,
    detail: String,
    tindaklanjut: String
});

const TranskripKonsultasi = mongoose.Schema({
    nomor: String,
    datetime_kirim: Date,
    status_kirim: String,
    path_file: String
})

const CatatanKonsultasi = mongoose.Schema({
    datetime_mulai: Date,
    datetime_selesai: Date,
    loket: String,
    topik: String,
    konsultan: Konsultan,
    hasil: Hasil,
    status: String,
    transkrip: [TranskripKonsultasi]
})

const AsosiasiPerusahaan = mongoose.Schema(
    {
        nama: String,
        alamat: String,
        jenis: String,
        notlpn: String,
        nowa: String,
        email: String,
        pimpinan: String,
        catatan_khusus: [CatatanKhusus],
    }
)

const Konsultasi = mongoose.Schema(
    {
        nama_client: String,
        alamat: String,
        notlpn: String,
        nowa: String,
        email: String,
        asosiasi_perusahaan: [AsosiasiPerusahaan],
        konsultasi: [CatatanKonsultasi],
        path_ttd_file: String,
    }
)

export default mongoose.models.Konsultasi || mongoose.model("Konsultasi", Konsultasi);