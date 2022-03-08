import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (reviews) {
      return;
    }
    try {
      reviews = await conn
        .db(process.env.MOVIEREVIEWS_NS)
        .collectionn("reviews");
    } catch (error) {
      console.error(
        `unable to establish connection handle in reviewsDAO: ${error}`
      );
    }
  }
}