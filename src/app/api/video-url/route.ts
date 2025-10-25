/* import { NextResponse } from 'next/server';
import { head } from '@vercel/blob';
import { put } from "@vercel/blob";

const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });

export async function GET() {
  try {
    // Replace 'your-store-handle' with the actual handle from Vercel dashboard
    // Example: 'my-app/default' or 'my-app/videos'
    const { url } = await head('video.url', {
     store: 'nfc-memorial-for-daddy/nfc-memorial-for-daddy-blob', // <--- Enter the store handle here
      mode: 'public-read',
      expiresIn: 3600, // 1 hour
    });

    return NextResponse.json({ videoUrl: url });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    return NextResponse.json({ error: 'Failed to generate video URL' }, { status: 500 });
  }
} */ 

  import { NextResponse } from 'next/server';
  import { head } from '@vercel/blob';
  
  export async function GET() {
    try {
      // Replace with your blob's pathname (e.g., 'nfc-memorial-for-daddy-blob/video.mp4')
      const pathname = 'https://vhzepgxvplwatq5w.public.blob.vercel-storage.com/IMG_1977.mov'; // Update with actual video path
  
      // Get blob metadata
      const blob = await head(pathname);
      if (!blob) {
        return NextResponse.json({ error: 'Video not found' }, { status: 404 });
      }
  
      // Return the public URL
      return NextResponse.json({ videoUrl: blob.url });
    } catch (error) {
      console.error('Error fetching video URL:', error);
      return NextResponse.json({ error: 'Failed to fetch video URL' }, { status: 500 });
    }
  }