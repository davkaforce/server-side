import Card from "@/components/Card";
// import { useRouter } from "next/router";

export default function Page({ articles }) {
  //   console.log(articles);
  //   const router = useRouter();

  return (
    <div>
      <div className="w-[2220px] h-[25px] justify-start gap-10 flex pl-[50px]">
        <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
          All
        </div>
        <div className="text-zinc-600 text-2xs font-bold font-['Work Sans'] leading-[25px]">
          Machine Learning
        </div>
        <div className="text-orange-300 text-2xs font-bold font-['Work Sans'] leading-[25px]">
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
      <div>
        {articles.map((article) => (
          <Card title={article.title} url={article.cover_image} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch("https://dev.to/api/articles?tag=meta");
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
}
