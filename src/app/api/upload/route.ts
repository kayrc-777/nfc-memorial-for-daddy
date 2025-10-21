import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { filename } = await request.json();

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'No token' }, { status: 500 });
  }

  const res = await fetch('https://blob.vercel-storage.com', {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${token}`,
      'x-upload-filename': filename,
      'x-upload-content-type': 'video/mp4',
    },
  });

  if (!res.ok) {
    const error = await res.text();
    return NextResponse.json({ error }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json({ url: data.url });
}