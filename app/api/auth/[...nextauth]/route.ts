// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import { MongoDBAdapter } from "@auth/mongodb-adapter"
// import clientPromise from "@/lib/mongodb" // your MongoDB connection

// export const authOptions = {
//   callbacks: {
//     async session({ session, user }: { session: any; user: any }) {
//        session.user.id = user.id;
//       session.user.isPremium = user?.isPremium || false;
//       return session;
    
//     },
//   },
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
