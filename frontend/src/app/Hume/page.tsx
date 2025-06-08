import React from "react";
import dynamic from "next/dynamic";
import { getHumeAccessToken } from "../../lib/getHumeAccessToken";
import Chat from "../../components/Chat";
// const Chat = dynamic(() => import("../../components/Chat"), {
//   ssr: false,
// });

export default async function HumePage() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error();
  }

  return (
    <div
      className={
        "grow flex flex-col bg-gradient-to-t dark:from-gray-800 dark:to-gray-900"
      }
    >
      <Chat accessToken={accessToken} />
    </div>
  );
}
