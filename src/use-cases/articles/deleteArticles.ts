
import { ArticlesNotFoundError } from "../error/articlesNotFoundError";
import { ArticlesRepository } from "../repositories/articlesRepository";

export class DeleteArticles {
    constructor(
        private articlesRepository : ArticlesRepository
    ) { }
    async execute(id: number): Promise<string>{
        const article = await this.articlesRepository.listById(id)
        if (!article) {
            throw new ArticlesNotFoundError("Article not found")
        }
        await this.articlesRepository.delete(id)
        return "Article deleted successfully"
    }
}