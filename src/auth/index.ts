import NextAuth, { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: "test-user-2",
            userName: "test2",
            name: "Test 2",
            password: "pass",
            email: "test2@donotreply.com",
            role: "user",
          },

          {
            id: "test-user-3",
            userName: "admin",
            name: "Admin Test",
            password: "admin",
            email: "admin@donotreply.com",
            role: "admin",
          },
        ];

        const user = users.find(
          (user) =>
            user.userName === credentials?.username &&
            user.password === credentials?.password
        );
        return user
          ? {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            }
          : null;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
// export default authOptions;
