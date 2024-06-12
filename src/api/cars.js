import { createClient } from 'contentful';

export async function getCars(){
    try {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKKEN,
      });
      const res = await client.getEntries({content_type: "cars"})
      return res.items;
    } catch (error) {
      console.log(error);
      return [];
    }
}