// next-auth.d.ts

import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string; // Add the role property
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
  }
}
