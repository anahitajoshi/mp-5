"use client";
import { useState } from "react";
import newUrl from "@/lib/newUrl";

export default function Form() {
  const [url, setUrl] = useState("");
  const [Alias, setAlias] = useState("");
  const [short, setShort] = useState("");


  //set error messages for all different types -- front end
  const [error, setError] = useState("");

  const a = async () => {
    setShort("");


    setError("");


    try {
      new URL(url); // use URL object to see if the URL is validated.
    } catch (error) {
      setError("This is not a valid URL!");
      console.error(error);
      return;
    }

    // i can't figure out how to make sure that the alias isn't already taken here within the front end. 

    const alias = Alias;
    newUrl(url, alias);
    // upon research, I can use window.location.origin so we can extend the origin URL with the alias. this is so we can extend local host, or vercel, etc. 
    setShort(`${window.location.origin}/${alias}`);



  };


  // tailwind css - source: https://daily.dev/blog/tailwind-css-basics-for-beginners
  return (
    <div className="w-full max-w-md bg-pink-100 border border-pink-300 rounded-xl p-6">
      <p className="text-center text-pink-300 text-xl font-bold mb-6">Enter URL to be shortened:</p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-800 mb-1">URL</label>
        <input
          placeholder="https://website.com" type="text" required className="w-full px-3 py-2 border border-pink-300 rounded-md bg-white text-pink-900 placeholder-pink-400"
          onChange={(e) => setUrl(e.target.value)} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-pink-800 mb-1">Alias</label>
        <input
          placeholder="alias" type="text" className="w-full px-3 py-2 border border-pink-300 rounded-md bg-white text-pink-900 placeholder-pink-400" required
          onChange={(e) => setAlias(e.target.value)} />
      </div>

      {error && <div className="mb-4 text-sm text-red-500 font-medium">{error}</div>}

      {short && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-pink-800 mb-1">NEW URL! Copy & paste it!</label>
          <div className="flex mb-2">
            <input
              type="text" value={short} className="w-full px-3 py-2 border border-pink-300 rounded-md bg-pink-50 text-pink-800"
            />
          </div>
        </div>
      )}
      <button type="submit" onClick={a} className="w-full bg-pink-500 text-white font-bold rounded-md" >Submit!</button>
    </div>
  );
}