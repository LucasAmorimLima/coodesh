
import api from './infra/axios/configAxios'
import { articlesModel } from './infra/database/models/articlesModel'

export async function createOrUpdate() {
    try {
        const response = await (await api.get('/articles')).data
        const articles = await articlesModel.find()
        const result = articles.filter((itens) => {
            if (itens.customId) return itens
        })
        result.map((itens) => {
            response.map(async (articles: { id: number; updatedAt: string }) => {
                await articlesModel.updateOne(
                    {
                        _id: itens._id,
                        customId: articles.id,
                        updatedAt: { $lt : articles.updatedAt}
                    }
                )
            })
        })

    } catch (error) {
        console.log(error)
    }
}
