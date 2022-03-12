import { differenceWith, isEqual, omit } from 'lodash'
import api from '../axios/configAxios'
import { articlesModel } from '../database/models/articlesModel'

export async function dataForTheCron() {
    let verify: number[] = []
    const response = await (await api.get('/')).data
    const articlesFromApi = response.map((itens: any) => {
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

    if (databaseIds[0]) {
        verify = differenceWith(apiIds, databaseIds, isEqual)
    }

    return { 
        verify,
        articlesFromApi,
        articles,
        apiIds,
        databaseIds
    }
}