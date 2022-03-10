import { Articles } from "../../domain/articles";
import { ArticlesNotFoundError } from "../error/articlesNotFoundError";
import { ArticlesRepository } from "../repositories/articlesRepository";

export class ListArticlesbyId {
    constructor(
        private articlesRepository: ArticlesRepository
    ) { }
    async execute(id: string): Promise<Articles> {
        const article = await this.articlesRepository.listById(id)
        if (!article) {
            throw new ArticlesNotFoundError("Article id not Found");
        }
        return article
    }
}