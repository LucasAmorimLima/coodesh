import { differenceWith, find, isEqual, omit } from 'lodash'
import api from './infra/axios/configAxios'
import { articlesModel } from './infra/database/models/articlesModel'
import { getNextSequence } from './infra/database/repositories/articlesRepositoryMongoose'

export async function createOrUpdate() {
    try {
        const response = await (await api.get('/articles')).data
        const responsetrue = response.map((itens: any) => {
            return {
                ...omit(itens, "id"),
                customId: itens.id
            }
        })
        const articles = (await articlesModel.find()).filter((itens) => {
            if (itens.customId) return itens
        })
        const apiIds = response.map((itens: any) => {
            return itens.id
        })
        const databaseIds = articles.map((itens) => {
            return itens.customId
        })
        const verify = differenceWith(databaseIds, apiIds, isEqual)

        if (!articles[0]) {
            responsetrue.map(async (itens: any) => {
                await articlesModel.create({
                    _id: await getNextSequence(),
                    ...itens
                })
            })
        }
        if (verify) {
            responsetrue.map(async (articles: any) => {
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
            for (let index = 0; index < responsetrue.length; index++) {
                if (itens.customId === responsetrue[index]) {

                    await articlesModel.updateOne({ customId: responsetrue[index] }, { ...responsetrue[index] })
                }
            }
        })

    } catch (error) {
        console.log(error)
    }
}
