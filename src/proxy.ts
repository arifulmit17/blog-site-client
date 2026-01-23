import { NextRequest, NextResponse } from "next/server";


export function proxy(request:NextRequest){
  console.log("hello proxy", request.url);
    return NextResponse.next()
}
export const config={
    matcher:['/dashboard']
}