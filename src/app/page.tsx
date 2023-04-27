import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const ICON_SIZE = 25;
  return (
    <>
      {/* Header */}
      <header className="bg-gray-700">
        <div className="flex justify-between mx-64 pt-8">
          <Link href={"/"} className="text-white font-bold text-2xl">
            DAFEX
          </Link>
          <div className="flex gap-4 font-semibold">
            <Link
              href={"/"}
              className="text-gray-100 flex flex-col items-center"
            >
              <div>Home</div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            </Link>
            <Link
              href={""}
              className="text-gray-500 opacity-60 hover:opacity-100 hover:text-gray-200"
            >
              About
            </Link>
          </div>
        </div>
      </header>
      {/* End of Header */}

      {/* Hero */}
      <main className="bg-gray-700 text-white">
        <div className="mx-64">
          <div className="flex gap-3">
            {/* Left Layout */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold">
                Fahrel
                <br />
                Gibran
                <br />
                Alghany.
              </h1>
              <div className="w-12 h-2 mt-3 bg-yellow-500"></div>
              <div className="flex mt-5 gap-2">
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/fahrelga/"}
                >
                  <Image
                    src={"/assets/icons/linkedin.svg"}
                    alt={"Linkedin"}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                  ></Image>
                </Link>
                <Link target="_blank" href={"https://github.com/dafex301"}>
                  <Image
                    src={"/assets/icons/github.svg"}
                    alt={"GitHub"}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                  ></Image>
                </Link>
              </div>
            </div>
            {/* End of Left Layout */}
            <div>
              <Image
                alt="Cover"
                src={"/cover.png"}
                width={500}
                height={500}
              ></Image>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-sm text-gray-400">Introduction</h3>
              <h2 className="text-2xl mb-5 mt-2 font-semibold">
                CEO of Racism
              </h2>
              <p className="text-xs text-gray-400 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                ipsum distinctio, atque nulla harum blanditiis ea quae accusamus
                libero ratione.
              </p>
              <Link
                href={"https://wa.me/+6281270360350"}
                target="_blank"
                className="text-sm font-semibold inline hover:cursor-pointer text-yellow-500 hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* End of Hero */}

      {/* Content */}
      <div className="bg-gray-800 text-white">
        <div className="mx-64 py-16">
          <center>
            <h2 className="text-2xl">Specialities</h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum at
              quod consequatur, placeat nemo obcaecati debitis optio natus
              blanditiis et?
            </p>
          </center>
        </div>
      </div>
      {/* End of Content */}
    </>
  );
}
