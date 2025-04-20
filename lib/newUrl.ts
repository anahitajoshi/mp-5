"use server";
import getCollection, { ALIAS_COLLECTION } from "@/db";

export default async function newUrl(url: string, alias: string) {
  // Use try so error handling can be done correctly
  try {

    // is URL valid
    try {
      new URL(url); // validate the URL by creating a new URL object
    } catch (e) {
      console.error(e);
      return "This is not a valid URL!";
    }


    //lab
    const collection = await getCollection(ALIAS_COLLECTION);
    const exists = await collection.findOne({ alias });
    // check if it already exists in the DB
    if (exists) {
      return "Already exists!";
    }

    const result = await collection.insertOne({ url, alias });
    if (!result.acknowledged) {
      return "Failed to save to DB";
    }

    return true; // need return statement




    // error catch for large try statement
  } catch (e) {
    console.error(e);
    return "An unexpected error occurred";
  }
}