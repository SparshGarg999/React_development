import { useCallback, useState, useEffect, useRef } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllow) str += "0123456789";
    if (characterAllow) str += "!@#$%^&*()_+[]{}|;:,.<>?/`~-=";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);

  }, [length, numberAllow, characterAllow]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, characterAllow, passwordGenerator]);


  const copyPassword = useCallback(() => {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);

    window.navigator.clipboard.writeText(passwordRef.current.value);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

  }, []);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">

      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6">

        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Password Generator
        </h1>

        <div className="flex mb-2">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full px-3 py-2 rounded-l-lg bg-gray-700 text-white outline-none"
          />

          <button
            onClick={copyPassword}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-r-lg"
          >
            Copy
          </button>
        </div>

        {copied && (
          <p className="text-green-400 text-sm mb-4">
            Password copied!
          </p>
        )}

        <div className="flex flex-col gap-4 text-white">

          <div className="flex items-center justify-between">
            <label>Password Length: {length}</label>

            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />

          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => setNumberAllow((prev) => !prev)}
            />
            <label>Include Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => setCharacterAllow((prev) => !prev)}
            />
            <label>Include Special Characters</label>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;