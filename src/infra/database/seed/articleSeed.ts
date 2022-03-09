import { MongoClient } from 'mongodb'
import { exit } from 'process';
import api from '../../axios/configAxios'

async function seed() {
    const uri = "mongodb+srv://adm:1d494E7E@cluster0.i0zjh.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection = client.db("coodesh").collection("articles")
        const response = await api.get('/articles');
        const { data } = response

        collection.insertMany(data); 
        exit()
    } catch (err: any) {
        console.log(err);
    }
}

seed()

