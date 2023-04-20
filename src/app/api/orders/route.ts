import pgInstance from "@/lib/pgInstance";
import { NextResponse, NextRequest } from "next/server";

type Body = {
    bookId?: string;
    customerName?: string
};

// getting all orders
export async function GET() {
  let query = "SELECT * from orders";
  const data = await pgInstance.unsafe(query);
  return NextResponse.json(data, {
    status: 200,
  });
}

// Posting new orders
export async function POST(request:Request) {
    const {bookId, customerName } : Body = await request.json()
    console.log(bookId, customerName)
    try {
        let query = `INSERT INTO orders (bookid, customername) VALUES ('${bookId}',' ${customerName}') returning *`;
        const data = await pgInstance.unsafe(query);
        return NextResponse.json(data, {
          status: 201,
        });
      } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ message: error.message });
      }
    }

// Updating order
export async function PUT(request:Request) {
    const {orderId, customerName } = await request.json()
    console.log(orderId, customerName)
    try {
        let query = `UPDATE orders SET customerName =  '${customerName}' WHERE orderId = '${orderId}' returning *`;
        const data = await pgInstance.unsafe(query);
        return NextResponse.json(data, {
          status: 201,
        });
      } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ message: error.message });
      }
    }
