import Head from "next/head";
import React, { useState, useRef } from "react";
const array = [
  {
    path: "./1.webp",
  },
  {
    path: "./2.jpg",
  },
  {
    path: "./3.jpg",
  },
  {
    path: "./4.jpg",
  },
  {
    path: "./5.jpg",
  },
  {
    path: "./6.jpg",
  },
  {
    path: "./7.jpg",
  },
  {
    path: "./8.jpg",
  },
  {
    path: "./9.webp",
  },
  {
    path: "./10.webp",
  },
  {
    path: "./11.webp",
  },
  {
    path: "./12.png",
  },
];
export default function Home() {
  const [defImg, setDefImg] = useState("./1.webp");
  const prev = useRef();
  const next = useRef();
  return (
    <>
      <Head>
        <title>Ayo's Gallery | Home</title>
      </Head>
      <div className="header">
        <h1>Ayo's Gallery</h1>
      </div>
      <main>
        <img
          src="./icon-arrow-up.svg"
          alt="arrow"
          className="arrow left"
          ref={prev}
          onClick={() => {
            array.map((a) => {
              const position = array.indexOf(a);
              if (a.path === defImg) {
                position > 0 && setDefImg(array[position - 1].path);
              }
            });
          }}
        />
        <div className="display">
          <img src={defImg} alt="img" />
        </div>
        <img
          src="./icon-arrow-up.svg"
          alt="arrow"
          className="arrow right"
          ref={next}
          onClick={() => {
            array.map((a) => {
              const position = array.indexOf(a);
              if (a.path === defImg) {
                position <= array.length - 2 &&
                  setDefImg(array[position + 1].path);
              }
            });
          }}
        />
      </main>
      <div className="img-cont">
        {array.map((e, index) => {
          return (
            <div
              className={`card ${defImg === e.path && "active"} `}
              key={index}
              onClick={() => {
                setDefImg(e.path);
              }}
            >
              <img src={e.path} alt="img" />
            </div>
          );
        })}
      </div>
    </>
  );
}
