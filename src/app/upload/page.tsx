'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setProgress(0);

    const file = (e.target as HTMLFormElement).file.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', file.name);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        alert('Upload failed: ' + error.error);
        return;
      }

      const data = await res.json();
      setVideoUrl(data.url);
    } catch (error) {
      alert('Network error: ' + error);
    }

    setUploading(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-khaki-500 flex items-center justify-center p-4">
      <form onSubmit={handleUpload} className="bg-white p-6 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-khaki-800">Upload Video</h1>
        <input type="file" name="file" accept="video/*" className="mb-4 w-full" required />
        <p className="text-xs text-gray-600 mb-2">21.5MB OK — Uses Vercel Blob SDK</p>
        <button
          type="submit"
          disabled={uploading}
          className="bg-khaki-500 text-white px-4 py-2 rounded w-full"
        >
          {uploading ? `Uploading... ${progress}%` : 'Upload to Blob'}
        </button>
        {videoUrl && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            <p className="text-green-800 font-medium">Success!</p>
            <p className="text-xs break-all">{videoUrl}</p>
          </div>
        )}
      </form>
    </div>
  );
}