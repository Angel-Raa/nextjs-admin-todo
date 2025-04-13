import { getTodos } from "@/lib/db/actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page");
  const pageSize = request.nextUrl.searchParams.get("pageSize");

  const pageNumber = page ? parseInt(page, 10) : 1;
  const pageSizeNumber = pageSize ? parseInt(pageSize, 10) : 5;

  if (isNaN(pageNumber) || isNaN(pageSizeNumber)) {
    return NextResponse.json(
      { error: "Invalid page or pageSize" },
      { status: 400 }
    );
  }

  const todos = await getTodos({ page: pageNumber, pageSize: pageSizeNumber });

  return NextResponse.json({
    todos,
  });
}
