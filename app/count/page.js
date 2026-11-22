import Counter from "./Counter";

export default function CountPage() {
  return (
    <main>
      <h1>Counters</h1>
      <Counter increment={1} backgroundColor="lightblue" />
      <Counter increment={2} backgroundColor="lightgreen" />
    </main>
  );
}
