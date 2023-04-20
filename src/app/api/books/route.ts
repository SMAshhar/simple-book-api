import pgInstance from "@/lib/pgInstance";
import { NextResponse, NextRequest } from "next/server";

type Body = {
  name: string;
  booktype: string;
  available: boolean;
};

export async function GET() {
  let query = "SELECT * from books";
  const data = await pgInstance.unsafe(query);
  return NextResponse.json(data, {
    status: 200,
  });
}

// error { "message": "syntax error at or near \"to\"" }
export async function POST(request: Request) {
  const { name, booktype, available } = (await request.json()) as Body;

  try {
    let query = `INSERT INTO books (name, booktype, available) VALUES ('${name}', '${booktype}', '${available}') returning *`;
    console.log(query)
    const data = await pgInstance.unsafe(query);
    return NextResponse.json(data, {
      status: 201,
    });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
