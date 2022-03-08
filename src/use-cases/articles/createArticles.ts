import { Articles } from "../../domain/articles";
import { CreateArticlesDto } from "../dto/createArticlesDto";
import { ArticlesRepository } from "../repositories/articlesRepository";

export class CreateArticles {
    constructor(
        private articlesRepository: ArticlesRepository
    ) {}
    async execute(article: CreateArticlesDto): Promise<Articles>{
        const newArticle  = await this.articlesRepository.create(article)

        return newArticle
    }
}