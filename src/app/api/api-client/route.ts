import pgInstance from "@/lib/pgInstance";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

type Body = {
  userName?: string;
  userEmail?: string;
};

// This fucntion will be used for registering new user
export async function POST(request: Request) {
  try {
    const { userName, userEmail } = (await request.json()) as Body;

    if (!userName || !userEmail) {
      return NextResponse.json(
        { message: "Please use proper Data" },
        { status: 401 }
      );
    }

    //Email will be the serial key for our table. If userEmail repeats, we will get an error
    const query = `INSERT INTO users (userName, userEmail) VALUES ('${userName}', '${userEmail}' )`;
    await pgInstance.unsafe(query);

    const accessToken = jwt.sign(
      { email: userEmail },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "7d" }
    );
    //Access token is rendered only once in its lifetime.
    return NextResponse.json(accessToken);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "Already registered" });
  }
}
