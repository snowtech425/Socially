import React from "react";
import dynamic from "next/dynamic";
import { getHumeAccessToken } from "../../lib/getHumeAccessToken";
import { HumeClient } from "hume";

const Chat = dynamic(() => import("../../components/Chat"), {
  ssr: false,
});

const client = new HumeClient(getHumeAccessToken as any);

const socket = await client.empathicVoice.chat.connect({
  configId: String(process.env.NEXT_PUBLIC_HUME_CONFIG_ID),
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
