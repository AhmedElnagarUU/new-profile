import NextAuth, { AuthOptions } from "next-auth"
import { authOptions } from "@/lib/nextAuth"

export const dynamic = 'force-dynamic'

const handler = NextAuth(authOptions as AuthOptions)
  
export { handler as GET, handler as POST }