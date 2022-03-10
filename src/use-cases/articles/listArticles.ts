import { Articles } from "../../domain/articles";
import { ArticlesRepository } from "../repositories/articlesRepository";

export class ListArticles {
    constructor(
        private readonly articlesRepository: ArticlesRepository
    ) { }
    async execute(page: number, limit: number): Promise<Articles[]> {

        return await this.articlesRepository.list(page, limit)
    }
}