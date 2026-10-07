import { useMemo, useState } from "react";

function Memo() {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("");

  console.log(number)
  const double = useMemo(() => {
    console.log("Calculation chal rahi hai...");

    return number * 2;
  }, [number]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <h2>Double: {double}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Memo;