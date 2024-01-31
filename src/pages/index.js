import Image from "next/image";
import Card from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoverCard from "@/components/CoverCard";

import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home(props) {
  const { posts } = props;

  return (
    <div className="w-[2420px] items-center justify-center flex flex-col">
      <Header />
      <div className="w-[1500px] h-[500px] mt-[100px] bg-gray-900 bg-opacity-40 rounded-xl items-center justify-center flex flex-row">
        <Carousel>
          <div>
            <img src={posts[0].cover_image} alt="Image 1" />
            <p className="legend">Caption 1</p>
          </div>
          <div>
            <img src={posts[1].cover_image} alt="Image 2" />
            <p className="legend">Caption 2</p>
          </div>
          <div>
            <img src={posts[2].cover_image} alt="Image 3" />
            <p className="legend">Caption 3</p>
          </div>
        </Carousel>
      </div>
      <div className="w-[2420px] h-[3005px] flex-col justify-start items-center gap-[100px] flex p-[150px]">
        <div className="w-[2220px] h-[25px] justify-start gap-10 flex pl-[50px]">
          <div className="text-orange-300 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            All
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Machine Learning
          </div>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Meta
          </div>
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
          {posts.map((el) => (
            <Card title={el.title} url={el.cover_image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?1");
  const posts = await res.json();

  const res2 = await fetch(
    "https://dev.to/api/articles?page=1&per_page=5&tag=meta"
  );
  const posts2 = await res2.json();

  return {
    props: {
      posts,
      posts2,
    },
  };
};

//some text