import Head from "next/head";

export default function Home() {
  return (
    <div>
      <label className="h4">Nama Pengkonsul</label>
      
      <form action="/api" method="POST">
        <label>Nama</label>
        <input className="border" type="text" name="name" id="name"></input>
        
        <label>ALamat</label>
        <input className="border" type="number" name="age" id="age"></input>

        <button className="border rounded px-1" type="submit">Submit</button>
      </form>
    </div>
  );
}
