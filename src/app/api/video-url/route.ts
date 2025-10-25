/* import { NextResponse } from 'next/server';
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
} */

  import { NextResponse } from 'next/server';
  import { put, del } from '@vercel/blob'; // Use actual exports: put for upload, del for delete; no getSignedUrl
  
  export async function GET() {
    try {
      // Example: Assume you're generating a URL for an existing blob at 'path/to/video.mp4'
      // For upload (if needed in this route), use put() like this:
      // const blob = await put('path/to/video.mp4', fileBuffer, { access: 'private' }); // or 'public'
  
      // To generate a signed URL for private access (expires in 1 hour):
      const pathname = 'nfc-memorial-for-daddy/nfc-memorial-for-daddy-blob'; // Replace with your blob's pathname
      const expiresInSeconds = 3600; // 1 hour; adjust as needed
      const token = generateToken(); // Implement your token generation (see below)
  
      const signedUrl = `https://blob.vercel-storage.com/${pathname}?token=${token}&expires=${Date.now() + expiresInSeconds * 1000}`;
  
      return NextResponse.json({ url: signedUrl });
    } catch (error) {
      console.error('Error generating video URL:', error);
      return NextResponse.json({ error: 'Failed to generate URL' }, { status: 500 });
    }
  }
  
  // Helper: Generate a secure token (use Vercel auth or your own JWT/crypto)
  function generateToken() {
    // Option 1: Use Vercel-specific token from env (if using Vercel Auth)
    // return process.env.VERCEL_AUTH_TOKEN || '';
  
    // Option 2: Simple HMAC-based token (for demo; use crypto.subtle in prod for security)
    const crypto = await import('crypto');
    const secret = process.env.BLOB_SIGNING_SECRET || 'your-secret-key'; // Set this in Vercel env vars
    const data = `pathname=${pathname}&expires=${Date.now() + 3600 * 1000}`;
    return crypto.createHmac('sha256', secret).update(data).digest('hex');
  }