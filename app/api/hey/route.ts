import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log(request);
    
  return NextResponse.json({
    message: "Hola Mundo",
  });
}

export async function POST(request: Request) {
  console.log(request);
  
  return NextResponse.json({
    message: "Hola Mundo desde POST",
  });
}
