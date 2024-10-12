import Head from "next/head";

export default function Home() {
  return (
    <div>
      <form action="/api" method="POST">
            <label className="mb-2 input input-bordered flex items-center gap-2">Nama
                <input className="grow" type="text" name="nama" id="nama" />
            </label>
      </form>
    </div>
  );
}
