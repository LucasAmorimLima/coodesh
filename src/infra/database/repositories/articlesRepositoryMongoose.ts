import { Articles } from "../../../domain/articles";
import { CreateArticlesDto } from "../../../use-cases/dto/createArticlesDto";
import { ArticlesRepository } from "../../../use-cases/repositories/articlesRepository";
import { articlesModel } from '../models/articlesModel'

export class ArticlesRepositoryMongoose implements ArticlesRepository {
    async create(articles: CreateArticlesDto): Promise<Articles> {
        const newArticle = await articlesModel.create(articles)

        return newArticle
    }
    async list(): Promise<Articles[]> {
        const articles = await articlesModel.find()

        return articles
    }
    async listById(id: number): Promise<Articles> {
        const article = await articlesModel.findById(id)

        return article
    }
    async update(articles: Articles): Promise<Articles> {
        const updatedBook = await articlesModel.findOneAndUpdate({ _id: articles.id }, articles, {
            new: true
        })

        return updatedBook
    }
    async delete(id: number): Promise<string> {
        await articlesModel.findByIdAndDelete(id)

        return `Article with id ${id} deleted`
    }
}