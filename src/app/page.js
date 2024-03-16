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

    const min = 0;
    const max = data.jokes.length;

    let random = Math.floor(Math.random() * (max-min+1)+min);

    setDadJoke(data.jokes[random]);
  }

  const [dadJoke, setDadJoke] = useState('Press the button to activate awesomeness');

  return (
    <main className="flex gap-16 min-h-screen flex-col items-center justify-center p-24">

      <div className="grid lg:max-w-8xl lg:w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to the Dad Joke Generator</h1>
        </div>     
      </div>

      <div className="mb-32 grid grid-cols-9 text-center lg:max-w-8xl lg:w-full lg:mb-0">
        <div className="col-span-2 hidden xl:flex">
          <Image
            src="/dad-jokes-generator-dad-600x600-01.jpg"
            width={600}
            height={600}
            alt=""
          />
        </div>
        <div className="col-span-9 xl:col-span-5 px-0 xl:px-52 py-0 xl:py-24">
          <p className="text-xl mb-6">{dadJoke}</p>
          <button className="mt-6 p-5 bg-indigo-500 hover:bg-black text-white	rounded" onClick={fetchData}>Generate Dad Joke</button>
        </div>
        <div className="col-span-2 hidden xl:flex">
          <Image
              src="/dad-jokes-generator-teenager-600x600-01.jpg"
              width={600}
              height={600}
              alt=""
          />
        </div>
        <div className="grid grid-cols-8 justify-center col-span-9 mt-10 text-center">
          <div className="col-span-1"></div>
          <div className="col-span-3 flex xl:hidden">
            <Image
            src="/dad-jokes-generator-dad-600x600-01.jpg"
            width={600}
            height={600}
            alt=""
            />
          </div>
          <div className="col-span-3 flex xl:hidden">
            <Image
                src="/dad-jokes-generator-teenager-600x600-01.jpg"
                width={600}
                height={600}
                alt=""
            />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>

    </main>
  );
}
