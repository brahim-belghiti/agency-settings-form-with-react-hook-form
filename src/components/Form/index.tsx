import { useEffect, useState } from "react";
import Input from "./Input";

type TPayload = {
  password: string;
  pricePerKg: string;
  currency: string;
  token: string | null;
};

function Form() {
  const [token, setToken] = useState<string | null>("");
  useEffect(() => {
    // Get the token from the URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get("token") || null;
    setToken(token);

    // Now you can use the token as needed (e.g., store it in state, send it with form submission, etc.)
    // console.log("Token:", token);
  }, []);
  console.log("🚀 ~ file: index.tsx:13 ~ Form ~ token:", token);

  const APIBASE = import.meta.env.VITE_API_URL;
  const API = `${APIBASE}/v1/app/set-settings`;
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  console.log("🚀 ~ file: index.tsx:19 ~ Form ~ isSuccess:", isSuccess);
  const payload: TPayload = {
    password: password,
    pricePerKg: "0.5",
    currency: "EUR",
    token: token,
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response data for debugging purposes
        if (data.isSetup === true) {
          setIsSuccess(true);
        } else {
          setIsSuccess(false);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="flex flex-col gap-4">
      <Input
        label="password"
        type="text"
        placeholder="Entrez votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        label="cofirm password"
        type="text"
        placeholder="Entrez votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Envoyer
      </button>
    </form>
  );
}

export default Form;
