import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

// Augment the built-in session and user types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    role: string;
  }
}

// Augment the built-in JWT type
declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
  }
}