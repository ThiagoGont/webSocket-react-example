import { useState } from "react";
import InputText from "../components/inputText";

export default function LoginPage() {
  const [username, setUsername] = useState("");

  function onLogin() {
    localStorage.setItem("user", username);
  }

  return (
    <div className="rounded-2xl p-4 h-10 bg-gray-100">
      <InputText onChange={(v) => setUsername(v.target.value)} />
      <section>
        <button onClick={onLogin}> Login </button>
      </section>
    </div>
  );
}
