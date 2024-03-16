"use client"
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then(res => res.json())

function useDadJokes() {
  return useSWR('/api/storeJSONData', fetcher);
}

export default function Home({ localData }) {

  const { data, error } = useDadJokes(); // Using the custom hook

  const fetchData = async () => {
    // console.log(data);
    // console.log(data.jokes[333]);

    const min = 0;
    const max = data.jokes.length;

    let random = Math.floor(Math.random() * (max-min+1)+min);

    setDadJoke(data.jokes[random]);
  }

  const [dadJoke, setDadJoke] = useState('Press the button to activate awesomeness');

  return (
    <main className="flex gap-16 min-h-screen flex-col items-center justify-center p-24">

      <div>
        <h1 className="text-4xl font-bold">Welcome to the Dad Joke Generator</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0">
        <p className="text-xl">{dadJoke}</p>
      </div>

      <div className="relative flex place-items-center">
        <button className="p-3 bg-indigo-500 text-white	rounded" onClick={fetchData}>Generate Dad Joke</button>
      </div>

      

    </main>
  );
}
