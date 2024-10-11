import Head from "next/head";

export default function Home() {
  return (
    <div>
      <label className="h4">Data Pengkonsul</label>

      <form action="/api" method="POST">
        <label className="mb-2 input input-bordered flex items-center">Nama
          <input className="grow" type="text" name="name" id="name" />
        </label>
        
        <label className="mb-2 input input-bordered flex items-center">Alamat
          <input className="grow" type="text" name="alamat" id="alamat" />
        </label>

        <label className="mb-2 input input-bordered flex items-center">Nomor Telepon
          <input className="grow" type="text" name="notlpn" id="notlpn" />
        </label>

        <label className="mb-2 input input-bordered flex items-center">Nomor Whatsapp
          <input className="grow" type="text" name="nowa" id="nowa" />
        </label>

        <label className="mb-2 input input-bordered flex items-center">Email
          <input className="grow" type="email" name="email" id="email" />
        </label>

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}
