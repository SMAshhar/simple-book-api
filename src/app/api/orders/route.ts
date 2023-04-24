import pgInstance from "@/src/lib/pgInstance";
import { NextRequest, NextResponse } from "next/server";

type Body = {
  bookId?: string;
  customerName?: string;
};

// submit a new order
export async function POST(request: NextRequest) {
  try {
    const { bookId, customerName } = (await request.json()) as Body;
    const userId = JSON.parse(request.headers.get("userId")!);

    if (!bookId || !customerName) {
      return NextResponse.json(
        { error: "required fields missing." },
        {
          status: 403,
        }
      );
    }

    const query = `INSERT INTO "orders" (createdBy, bookId, customer_name, quantity)
VALUES (${userId}, ${bookId}, '${customerName}', 1) returning *`;

    const response = await pgInstance.unsafe(query);

    return NextResponse.json(response, {
      status: 201,
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { error: error.message || "Somethineg went wrong" },
      {
        status: 500,
      }
    );
  }
}

// get all orders
export async function GET(request: NextRequest) {
  try {
    const userId = JSON.parse(request.headers.get("userId")!);
    const query = `SELECT * FROM orders WHERE createdBy = ${userId}`;

    const response = await pgInstance.unsafe(query);

    return NextResponse.json(response, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { error: error.message || "Somethineg went wrong" },
      {
        status: 500,
      }
    );
  }
}
