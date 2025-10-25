import { NextResponse } from 'next/server';
import { getSignedUrl } from '@vercel/blob';

export async function GET() {
  try {
    // Replace 'your-store-handle' with the actual handle from Vercel dashboard
    // Example: 'my-app/default' or 'my-app/videos'
    const { url } = await getSignedUrl('videos/memory.mp4', {
      store: 'nfc-memorial-for-daddy/nfc-memorial-for-daddy-blob', // <--- Enter the store handle here
      mode: 'public-read',
      expiresIn: 3600, // 1 hour
    });

    return NextResponse.json({ videoUrl: url });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    return NextResponse.json({ error: 'Failed to generate video URL' }, { status: 500 });
  }
}