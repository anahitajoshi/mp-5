import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function getAlias(alias: string) {
  //lab
  const collection = await getCollection(ALIAS_COLLECTION);
  const data = await collection.findOne({ alias });




  if (!data) {
    return null;
  }

  const newurl = {
    url: data.url,
    alias: data.alias,
  };
  return newurl;


}