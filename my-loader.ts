export default function cloudFrontLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const url = new URL(src, process.env.NEXT_PUBLIC_CLOUDFRONT_URL);

  url.searchParams.set("w", width.toString());
  if (quality) {
    url.searchParams.set("q", quality.toString());
  }

  return url.toString();
}
