# Nextjs 16 Portal Bug

When using `cacheComponents: true`, nextjs fails to replace portals.

## Repro steps

1. `npm run dev`
2. go to localhost:3000
3. Click on 'a', see the portal at the top
4. Click on 'b', see the portal at the top, it does not replace A's portal.

## Note:

If you update `next.config.ts` and set `cacheComponents: false`, then the portals is replaced on navigation.

This issue does not exist on Next 15
