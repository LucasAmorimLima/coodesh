import { Articles } from "../../domain/articles";
import { ArticlesNotFoundError } from "../error/articlesNotFoundError";
import { ArticlesRepository } from "../repositories/articlesRepository";

export class UpdateArticles {
    constructor(
        private articlesRepository: ArticlesRepository
    ) { }
    async execute(data: Articles): Promise<Articles> {
        const article = await this.articlesRepository.listById(data.id)
        if (!article) {
            throw new ArticlesNotFoundError("Article not found")
        }
        const articleUpdated = await this.articlesRepository.update(data)
        return articleUpdated
    }
}