import Card from "@/components/Card";
import Header from "@/components/Header";
import { useRouter } from "next/router";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home({ posts }) {
  // console.log(`INSIDE POSTS`, posts);
  const router = useRouter();
  const [articles, setArticles] = useState(posts);
  const [pageNumber, setPageNumber] = useState(2);

  async function LoadMoreHandler() {
    const response = await fetch(
      `https://dev.to/api/articles?page=${pageNumber}`
    );
    const response_1 = await response.json();
    setArticles([...articles, ...response_1]);
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="w-[2420px] items-center justify-center flex flex-col">
      <Header />
      <div className="w-[1500px] h-[350px] mt-[100px] bg-gray-900 bg-opacity-40 rounded-xl items-center justify-center flex flex-row">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[2420px] h-[3005px] flex-col justify-start items-center gap-[100px] flex p-[150px]">
        <div className="w-[2220px] h-[25px] justify-start gap-10 flex pl-[50px]">
          <div className="text-orange-300 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            All
          </div>
          <button
            onClick={() => {
              router.push("/machinelearning");
            }}
            className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]"
          >
            Machine Learning
          </button>
          <button
            onClick={() => {
              router.push("/meta");
            }}
            className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]"
          >
            Meta
          </button>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Web development
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Rising
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Fresh
          </div>
        </div>
        <div className="w-[2116px] h-[1585px] flex-row justify-start items-center gap-8 flex flex-wrap">
          {/* <img src={posts[3].cover_image}></img> */}
          {articles.map((el, index) => (
            <Card title={el.title} url={el.cover_image} id={el.id} />
          ))}
          <div className="flex flex-row justify-center items-center mx-auto w-full h-[100px] bg-slate-500">
            <button
              onClick={() => {
                LoadMoreHandler();
              }}
            >
              Load more
            </button>
            {}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?1");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
