import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
                      <div className="text-2xl text-black font-dark font-extrabold">
            {" "}
            CareSync Presents
          </div>
          <div className="text-7xl text-sky-500 font-dark font-extrabold mb-8">
            {" "}
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Sorry we couldn't find the page you're looking for
          </p>

          <Link
            href="/"
            className="text-gray-500 font-mono text-xl bg-gray-200 shadow-2xl transition-all duration-400 border border-transparent rounded-lg focus:outline-none  p-3 hover:shadow-md"
          >
            Go back
          </Link>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          {/* <Error404 className={""} color={""}/> */}

          <Image
            src="/Error404.svg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Error"
          />
        </div>
      </div>
    </div>
  );
}
