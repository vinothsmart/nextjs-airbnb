import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <div className="text-7xl">AboutPage</div>
      <Link href="/" className="text-xl text-blue-500 inline-block mt-8">
        Go to Home Page
      </Link>
    </>
  );
};
export default AboutPage;
