export default function Display({ catchphrases }) {
  return (
    <div>
      {catchphrases.map((catchphrase) => (
        <p key={catchphrase}>{catchphrase}</p>
      ))}
    </div>
  );
}
