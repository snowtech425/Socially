import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ToggleDiplayMode } from "./ui/toggleDisplayMode";
import { auth } from "@/auth";

const Navbar = async () => {
  // const user = undefined;
  const session = await auth();

  const isAdmin = session?.user?.role === "admin";

  console.log(session);
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b bg-transparent border-gray-200  dark:bg-black/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold text-[#9d76d4]  ">
            Socially<span>.ai</span>
          </Link>

          {/* <div className="h-full flex items-center space-x-4">
            {session ? (
              <>
                <Link
                  href="/api/auth/signout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign Out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/api/auth/signout"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard
                  </Link>
                ) : null}

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Upload File
                  <ArrowRightIcon className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign Up
                </Link>

                <Link
                  href="/api/auth/signin"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>

                <div className="h-8 w-px   hidden sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Upload File
                  <ArrowRightIcon className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
            <ToggleDiplayMode />
          </div> */}
          <ToggleDiplayMode />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
