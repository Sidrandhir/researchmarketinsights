import NextAuth from "next-auth/next" // <-- This is the crucial fix
import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };