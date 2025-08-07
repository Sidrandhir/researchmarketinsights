import NextAuth from 'next-auth'; // This is the correct import for the handler
import { authOptions } from '@/lib/auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };