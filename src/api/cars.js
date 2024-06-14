import { createClient } from 'contentful';

export async function getCars(slug = null){
    try {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
      });
      let res;
      if(slug){
        const entries = await client.getEntries({
            content_type: 'cars',
            'fields.slug': slug,
            limit: 1
        });
        if (entries.items.length == 1) {
            const id = entries.items[0].sys.id;
            res = await client.getEntry(id);
            return res; 
        } else {
            throw new Error(`Duplicate Entries Data`);
        }
      }else{
        res = await client.getEntries({content_type: "cars"})
        return res.items;
      }
    } catch (error) {
      console.log(error);
      return [];
    }
}