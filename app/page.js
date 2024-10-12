import Head from "next/head";

export default function Home() {
  return (
    <div>
      <h2>Input email untuk memulai</h2>
      <form action="/api" method="POST">
            <label className="mb-2 input input-bordered flex items-center gap-2">Email
                <input className="grow" type="email" name="email" id="email" />
            </label>

            <button type="submit" className="btn btn-primary">Selanjutnya</button>
      </form>
    </div>
  );
}
