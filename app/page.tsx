import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="text-7xl">HomePage</div>
      <Link href="/about" className="text-xl text-blue-500 inline-block mt-8">
        Go to About Page
      </Link>
    </>
  );
};
export default HomePage;
