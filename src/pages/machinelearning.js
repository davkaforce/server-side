import Card from "@/components/Card";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Machinelearning({ articles }) {
  const router = useRouter();
  console.log(articles);
  return (
    <div>
      <div className="w-[2220px] h-[25px] justify-start gap-10 flex pl-[50px]">
        <button
          onClick={() => {
            router.push("/");
          }}
          className=" text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]"
        >
          All
        </button>
        <button
          onClick={() => {
            router.push("/machinelearning");
          }}
          className="text-orange-300 text-2xs font-bold font-['Work Sans'] leading-[25px]"
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

        <Link href={"/meta"}>
          <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
            Web development
          </div>
        </Link>
        <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
          Rising
        </div>
        <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
          Fresh
        </div>
      </div>
      <div>
        {articles.map((article) => (
          <Card
            title={article.title}
            url={article.cover_image}
            id={article.id}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:4000/api/machinelearning");
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
}
