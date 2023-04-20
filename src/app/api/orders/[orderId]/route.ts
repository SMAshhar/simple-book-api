import pgInstance from "@/lib/pgInstance";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  orderId?: string;
};


//Get order by ID
export async function GET(request: NextRequest) {
  try {
    const id = request.url.slice(request.url.lastIndexOf("/") + 1);
    if (!id) return NextResponse.json({ message: "Nothing Found" });

    const query = `SELECT * FROM orders WHERE orderId = ${id}`;

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

// Delete Order by ID
export async function DELETE(request: NextRequest) {
  try {
    const id = request.url.slice(request.url.lastIndexOf("/") + 1);
    if (!id) return NextResponse.json({ message: "Nothing Found" });

    const query = `DELETE FROM orders WHERE orderId = ${id}`;

    const data = await pgInstance.unsafe(query);

    return NextResponse.json("Success", {
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
