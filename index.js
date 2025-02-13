import { MongoClient } from "mongodb";

const DATABASE = `${process.env.DATABASE}`;
const COLLECTION = `${process.env.COLLECTION}`;
const CONNECTION_STRING = `${process.env.CONNECTION_STRING}`;
const client = new MongoClient(CONNECTION_STRING);
async function deleteData() {
	try {
		await client.connect();
		const db = client.db(DATABASE);
		const mongoCollection = db.collection(COLLECTION);
		const result = await mongoCollection.deleteMany({
			url: "undefined",
		});

		console.log(`Deleted ${result.deletedCount} documents`);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
}

deleteData();
