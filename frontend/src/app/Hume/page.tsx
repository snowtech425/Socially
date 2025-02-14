import React from "react";
import dynamic from "next/dynamic";
import { getHumeAccessToken } from "../../lib/getHumeAccessToken";
import { HumeClient } from "hume";
import { useSearchParams } from "next/navigation";

const Chat = dynamic(() => import("../../components/Chat"), {
  ssr: false,
});

export default async function HumePage() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error();
  }

  return (
    <div className={"grow flex flex-col"}>
      <Chat accessToken={accessToken} />
    </div>
  );
}
