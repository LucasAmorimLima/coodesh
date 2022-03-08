import { Articles } from "../../domain/articles";
import { ArticlesRepository } from "../repositories/articlesRepository";

export class ListArticles {
    constructor(
        private readonly articlesRepository: ArticlesRepository
    ) { }
    async execute(): Promise<Articles[]> {
        return await this.articlesRepository.list()
    }
}