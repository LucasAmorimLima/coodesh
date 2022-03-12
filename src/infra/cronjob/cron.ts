import moment from 'moment'
import { articlesModel } from '../database/models/articlesModel'
import { getNextSequence } from '../database/repositories/articlesRepositoryMongoose'
import { dataForTheCron } from './dataForTheCron'
import { errorHandling } from './errorHandling'


export const cronJob = async () => {
    try {

        const { articlesFromApi, articles, verify } = await dataForTheCron()

        if (!articles[0]) {
            articlesFromApi.map(async (itens: any) => {
                await articlesModel.create({
                    _id: await getNextSequence(),
                    ...itens
                })
            })
        }
        if (verify[0]) {
            articlesFromApi.map(async (articles: any) => {
                for (let index = 0; index < verify.length; index++) {
                    if (articles.customId === verify[index]) {
                        await articlesModel.create({
                            _id: await getNextSequence(),
                            ...articles
                        })
                    }
                }
            })
        }

        articles.map(async (itens) => {
            for (let index = 0; index < articlesFromApi.length; index++) {
                if (itens.customId === articlesFromApi[index]) {
                    const apiDate = moment(articlesFromApi[index].updatedAt)
                    const databaseDate = moment(itens.updatedAt)
                    if (databaseDate < apiDate) {
                        await articlesModel.updateOne({ customId: articlesFromApi[index] }, { ...articlesFromApi[index] })
                    }    
                }
            }
        })

    } catch (error: any) {
        errorHandling(error)
    }
}

