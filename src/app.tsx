import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section class="font-mono">
        <header>
          <h1>mylo</h1>
        </header>
        <nav class="grid grid-cols-3 gap-2 font-mono">
          <button class="px-8 m-1">Hub</button>
          <button class="px-8 m-1">About</button>
          <button class="px-8 m-1">Contact</button>
        </nav>
      </section>
      <section></section>
    </>
  );
}
