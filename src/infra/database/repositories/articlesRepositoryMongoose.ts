import { Articles } from "../../../domain/articles";
import { CreateArticlesDto } from "../../../use-cases/dto/createArticlesDto";
import { ArticlesRepository } from "../../../use-cases/repositories/articlesRepository";
import { articlesModel } from '../models/articlesModel'

export class ArticlesRepositoryMongoose implements ArticlesRepository {
    async create(articles: CreateArticlesDto): Promise<Articles> {
        const newArticle = await articlesModel.create(articles)

        return newArticle
    }
    async list(page: number, limit: number): Promise<Articles[]> {
        const articles = await articlesModel.find()
            .limit(limit)
            .skip((page - 1) * limit)

        return articles
    }
    async listById(id: string): Promise<Articles> {
        const article = await articlesModel.findById(id)

        return article
    }
    async update(articles: Articles): Promise<Articles> {
        const updatedBook = await articlesModel.findOneAndUpdate({ _id: articles.id }, articles, {
            new: true
        })

        return updatedBook
    }
    async delete(id: string): Promise<string> {
        await articlesModel.findByIdAndDelete(id)

        return `Article with id ${id} deleted`
    }
}