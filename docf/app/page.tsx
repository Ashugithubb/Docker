'use client'
import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");

  const handleClick = async () => {
    try {
      const res = await fetch('http://localhost:3001/app');
      const data = await res.json();
      setMsg(data.message || "Response received");
      console.log(data);
      
    } catch (error) {
      console.error(error);
      setMsg("Error occurred");
    }
  };

  return (
    <>
      <h1>{msg}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
