import NextAuth from 'next-auth/next'; // This is the correct import for the App Router handler
import { authOptions } from '@/lib/auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };