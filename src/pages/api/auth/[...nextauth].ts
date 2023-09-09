import NextAuth from "next-auth";

import { authOptions } from "beffo/server/auth";

export default NextAuth(authOptions);
