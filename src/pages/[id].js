import { useRouter } from "next/router";
import parse from "html-react-parser";

export default function Page({ data }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="w-[1200px] mx-auto">
      <div>
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          back to home
        </button>
      </div>
      <div className="p-[100px] mx-auto text-center text-2xl">
        <p>{data.title}</p>
      </div>
      <div>{parse(data.body_html)}</div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
};
