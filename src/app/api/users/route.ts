import pgInstance from "@/lib/pgInstance";
import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    console.log(token);

    const verifiedToken = verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as Record<string, string>;
    console.log(verifiedToken.payload);

    const userEmail = verifiedToken.email;
    const query = `SELECT * from users WHERE email = '${userEmail}'`;

    // console.log("Reached after query definition");
    const user = await pgInstance.unsafe(query);

    return NextResponse.json(user[0]);
  } catch (error) {
    console.log(error);
    throw new Error("Not registered");
  }
}
