import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('MIDDLEWARE request:', request);
  return NextResponse.next();
}

export const config = {
  matcher: '/news',
};
