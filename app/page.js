import Head from "next/head";

export default function Home() {
  return (
    <div>
      <label className="h4">Nama Pengkonsul</label>

      <form action="/api" method="POST">
        <label>Nama</label>
        <input className="input input-bordered w-full max-w-xs" type="text" name="name" id="name"></input>
        
        <label>ALamat</label>
        <input className="input input-bordered w-full max-w-xs" type="number" name="age" id="age"></input>

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}
