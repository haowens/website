import { defineConfig, defineSchema } from "tinacms";
import * as dotenv from "dotenv";

import collectionPage from './collections/page.js';
import collectionBlog from './collections/blog.js';
import collectionArchive from './collections/archive.js';
import collectionCategory from './collections/category.js'

const schema = defineSchema({
  collections: [
    collectionPage,
    collectionBlog,
    collectionArchive, 
    collectionCategory
  ]
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;
