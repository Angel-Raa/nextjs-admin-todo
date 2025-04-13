import { getTodoById } from "@/lib/db/actions";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  const td = await getTodoById({ id: Number(id) });

  if (!td)
    return NextResponse.json(
      {
        message: "Not found Todo",
      },
      { status: 400 }
    );

  return NextResponse.json({
    td,
  });
}
