import api from '../axios/configAxios'
import { articlesModel } from '../database/models/articlesModel'
async function createOrUpdate() {
    try {
        const response = await (await api.get('/articles')).data
        const articles = articlesModel.find({
            customId: /(\d+)| /g
        })
        console.log(articles)
    } catch (error) {
        console.log(error)
    }
}