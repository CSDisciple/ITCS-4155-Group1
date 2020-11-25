const express = require('express');
const path = require('path');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Oleks:PlasticBottle823@cluster0.ka0hr.mongodb.net/sample_airbnb?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
const OpenAI =require('openai-api');
const OPEN_AI_API_KEY = "sk-UAI47DsbnY4MFn1awPMAKXrax0lN52PBxofs1w8x";
const openai = new OpenAI(OPEN_AI_API_KEY);

router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html')); //get the html 
});

//Create Read Update and Delete

async function main() {

  try {
    await client.connect();
    await listDatabases(client);
    await create(client, [
      {
          name: "Hello world",
          summary: "Modern home with infinite views from the infinity pool",
          property_type: "House",
          bedrooms: 5,
          bathrooms: 4.5,
          beds: 5
      },
      {
          name: "Private room in London",
          property_type: "Apartment",
          bedrooms: 1,
          bathroom: 1
      },
      {
          name: "Beautiful Beach House",
          summary: "Enjoy relaxed beach living in this house with a private beach",
          bedrooms: 4,
          bathrooms: 2.5,
          beds: 7,
          last_review: new Date()
      }

  ]);
    await read(client, 'Infinite Views');
    await update(client, 'Infinite Views', {bedrooms: 6, beds:8,});
    await deleteListing(client, 'Cozy Cottage');
  // await gpt3();
  // await gpt3res();
  } catch (e) {
    console.error(e);
  }

  finally {
    await client.close();
  }
}
main().catch(console.error);

async function create(client, newListings){
const result = await client.db('sample_airbnb').collection("listingsAndReviews").insertMany(newListings);

console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
console.log(result.insertedIds);
}

async function read(client, nameOfListing) {

  result = await client.db("sample_airbnb").collection("listingsAndReviews")
                      .findOne({ name: nameOfListing });

  if (result) {
      console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
      console.log(result);
  } else {
      console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

async function update(client, nameOfListing, updatedListing) {
  result = await client.db('sample_airbnb').collection("listingsAndReviews")
  .updateOne({ name: nameOfListing}, {$set:updatedListing});
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`)
  console.log(result.name);
}

async function deleteListing(client, nameOfListing){
result = await client.db('sample_airbnb').collection("listingsAndReviews").deleteOne({name: nameOfListing});
console.log(`${result.deleteCount} document(s) was/were deleted.`);

}
// async function userFilter(client, {

// })
async function listDatabases(client){
databasesList = await client.db().admin().listDatabases();
console.log("Databases: ");
databasesList.databases.forEach(db => console.log(`- ${db.name}`));
}


 
async function gpt3(){
   const gptResponse = await openai.complete({
    engine: 'davinci',
    prompt: 'this is a test',
    maxTokens: 5,
    temperature: 0.9,
    topP: 1,
    n: 1,
    stream: false,
    stop: ['\n', "testing"]
  });
  
  console.log(gptResponse.data);
};
 
async function gpt3res(){
   const gptResponse = await openai.search({
    engine: 'davinci',
    documents: ["White House", "hospital", "school"],
    query: "the president"
  });
  
  console.log(gptResponse.data);
}
module.exports = router;
//this page is posts.js in the tutorial