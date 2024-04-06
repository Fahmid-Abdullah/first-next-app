"use client";
import { useState, FormEvent } from "react";
import { useRouter } from 'next/navigation';

export default function page() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  }

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" className="text-black" placeholder="Type Your Name..." value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
