import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  console.log('API /api/upload called');

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      console.log('No file in formData');
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    console.log('File received:', file.name, file.size, 'bytes');

    const blob = await put(`videos/${file.name}`, file, {
      access: 'public',
      addRandomSuffix: false,
    });

    console.log('Blob uploaded:', blob.url);
    return NextResponse.json({ url: blob.url });
  } catch (error: any) {
    console.error('Blob upload failed:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};