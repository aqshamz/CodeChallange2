import { createClient } from 'contentful';

export async function getDriver(){
    try {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
      });
      const res = await client.getEntries({content_type: "driver"})
      return res.items;
    } catch (error) {
      console.log(error);
      return [];
    }
}