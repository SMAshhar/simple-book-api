import pgInstance from "@/lib/pgInstance";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  bookId?: string;
};

export async function GET(request: NextRequest) {
  try {
    const id = request.url.slice(request.url.lastIndexOf("/") + 1);
    if (!id) return NextResponse.json({ message: "Nothing Found" });

    if (id === "fiction" || id === "business") {
      const query = `SELECT * FROM books WHERE booktype = '${id}'`;

      const data = await pgInstance.unsafe(query);

      return NextResponse.json(data, {
        status: 200,
      });
    }

    if (Number(id) > 20)
      return NextResponse.json({
        message: "Please keep the number between 1 and 20",
      });
    const query = `SELECT * FROM books WHERE id = ${id}`;

    const data = await pgInstance.unsafe(query);

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        error: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
