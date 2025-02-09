import { auth } from "@/auth";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <div className=" ">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52 ">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/logo.png"
                  className="max-w-none"
                  width={170}
                  height={170}
                  alt="logoimg"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight  text-5xl md:text-6xl lg:text-7xl">
                My Image on a{" "}
                <span className="bg-green-600 px-2  underline">Custom</span>{" "}
                Boilerplate
              </h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Body Section */}

      <section className="bg-slate-100 dark:bg-gray-900/70 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-cener gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl ">
              About US Section
            </h2>
          </div>
          <h1>Body Section</h1>

          {/* Description Part */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="text-lg leading-8">
              <div>
                Hello this is the description part of the boilerplate @Prerit
                Bhandari
                <div>
                  {session ? (
                    <pre>{JSON.stringify(session, null, 2)}</pre>
                  ) : (
                    <>Not Logged In</>
                  )}
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
