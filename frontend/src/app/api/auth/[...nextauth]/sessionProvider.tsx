"use client";
import React from "react";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

function SessionAuthProvider({ children }: SessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default SessionAuthProvider;
