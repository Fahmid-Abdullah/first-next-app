"use client";
import { useState, FormEvent } from "react";

export default function page() {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
  }

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type Your Name..." value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
