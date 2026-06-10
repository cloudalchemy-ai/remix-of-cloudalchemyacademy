The global map image is currently referenced via a Lovable CDN pointer (`/__l5e/assets-v1/...`). That path is served on Lovable's preview domain but is NOT available on the custom Cloudflare-published site, so the `<img>` 404s and renders the broken-image placeholder.

Fix: stop using the CDN pointer for this image and let Vite bundle it as a normal hashed asset under `dist/assets/` so it ships with the build to Cloudflare.

Steps:
1. Download the binary from the current CDN URL (`/__l5e/assets-v1/d462d642-.../globalmap.jpeg`) into `src/assets/globalmap.jpeg` so the real file lives in the repo.
2. Update `src/components/GlobalReachMap.tsx`:
   - Remove: `import globalMap from "@/assets/globalmap.jpeg.asset.json";` and `src={globalMap.url}`
   - Add: `import globalMap from "@/assets/globalmap.jpeg";` and `src={globalMap}`
3. Delete the now-unused pointer file `src/assets/globalmap.jpeg.asset.json`.
4. Verify the image renders in preview.

Result: Vite imports the JPEG, emits it to `dist/assets/globalmap-[hash].jpeg`, and Cloudflare serves it correctly on both preview and the published `cloudalchemyai.lovable.app` site.