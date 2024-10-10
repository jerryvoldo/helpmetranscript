import Head from "next/head";

export default function Home() {
  return (
    <div>
      <form action="/api" method="POST">
        <label>Enter name</label>
        <input className="border" type="text" name="name" id="name"></input>
        
        <label>Enter age</label>
        <input className="border" type="number" name="age" id="age"></input>

        <button className="border rounded px-1" type="submit">Submit</button>
      </form>
    </div>
  );
}
