# Deploy SANTOKI Cyber Marketplace

## Publish the website with Vercel

1. Open https://vercel.com/new on your phone or computer.
2. Sign in using the GitHub account that owns `jayeshmore9007-alt/SANTOKI-CYBER-MARKETPLACE`.
3. Choose **Add New → Project**, then import **SANTOKI-CYBER-MARKETPLACE**.
4. Keep Framework Preset as **Next.js**. Keep the Root Directory as `./`.
5. Select **Deploy**. Vercel installs dependencies and builds the site automatically.
6. When deployment succeeds, open the Vercel URL shown on the success screen.

## Current demo limitations

- Product listings, wishlist and cart are browser-only demo state; they do not persist after refresh.
- The seller form adds a temporary demo listing. It does not create a real seller account or publish to a database.
- Checkout, payments, shipping, refunds, seller verification, admin moderation and order management are not connected.
- Do not accept real orders or payments until a secure backend, database, authentication and payment provider have been implemented and tested.

## Google Search

After the website is live, add its exact Vercel/custom domain in Google Search Console:
https://search.google.com/search-console

Then submit:
`https://YOUR-LIVE-DOMAIN/sitemap.xml`

Replace `YOUR-LIVE-DOMAIN` with the actual domain shown by Vercel.
