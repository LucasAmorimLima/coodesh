import { omit } from 'lodash';
import { MongoClient } from 'mongodb'
import { exit } from 'process';
import api from '../../axios/configAxios'

async function seed() {
    const uri = "mongodb+srv://adm:1d494E7E@cluster0.i0zjh.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const collection = client.db("coodesh").collection("articles")
        
        collection.drop()
        const response = await (await api.get('/articles')).data;

        const dataWhithoutId: any = response.map((itens: any)=>{
            return {
                ...omit(itens, "id"),
                customId: itens.id
            }
        })

        await collection.insertMany(dataWhithoutId);
    
        exit()
    } catch (err: any) {
        console.log(err);
    }
}

seed()

