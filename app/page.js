import Head from "next/head";

export default function Home() {
  return (
    <div>
      <label className="h4">Data Pengkonsul</label>

      <form action="/api" method="POST">
        <label className="mb-2 input input-bordered flex items-center gap-2">Nama
          <input className="grow" type="text" name="nama" id="nama" />
        </label>
        
        <label className="mb-2 input input-bordered flex items-center gap-2">Alamat
          <input className="grow" type="text" name="alamat" id="alamat" />
        </label>

        <label className="mb-2 input input-bordered flex items-center gap-2">Nomor Telepon
          <input className="grow" type="text" name="notlpn" id="notlpn" />
        </label>

        <label className="mb-2 input input-bordered flex items-center gap-2">Nomor Whatsapp
          <input className="grow" type="text" name="nowa" id="nowa" />
        </label>

        <label className="mb-2 input input-bordered flex items-center gap-2">Email
          <input className="grow" type="email" name="email" id="email" />
        </label>

        <p className="h3 my-4">Perusahaan</p>
        <label className="mb-2 input input-bordered flex items-center gap-2">Nama
          <input className="grow" type="text" name="nama_perusahaan" id="nama_perusahaan" />
        </label>
        
        <label className="mb-2 input input-bordered flex items-center gap-2">Alamat
          <input className="grow" type="text" name="alamat_perusahaan" id="alamat_perusahaan" />
        </label>

        <label className="mb-2 input input-bordered flex items-center gap-2">Nomor Telepon
          <input className="grow" type="text" name="notlpn_perusahaan" id="notlpn_perusahaan" />
        </label>

        <label className="mb-2 input input-bordered flex items-center gap-2">Nomor Whatsapp
          <input className="grow" type="text" name="nowa_perusahaan" id="nowa_perusahaan" />
        </label>

        <label className="mb-2 input input-bordered flex items-center gap-2">Email
          <input className="grow" type="email" name="email_perusahaan" id="email_perusahaan" />
        </label>

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}
