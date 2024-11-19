export function GET(request: Request) {
  console.log('GET request:', request);

  return new Response('Hello');
}

// export function POST(request) {}
