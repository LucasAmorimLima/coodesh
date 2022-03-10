import { ArticlesController } from "../../controllers/articlesController";
import { ArticlesRepositoryMongoose } from "../../infra/database/repositories/articlesRepositoryMongoose";
import { Validation } from "../../infra/validator/validation";
import { CreateArticles } from "../../use-cases/articles/createArticles";
import { DeleteArticles } from "../../use-cases/articles/deleteArticles";
import { ListArticles } from "../../use-cases/articles/listArticles";
import { ListArticlesbyId } from "../../use-cases/articles/listArticlesById";
import { MessageArticles } from "../../use-cases/articles/messageArticles";
import { UpdateArticles } from "../../use-cases/articles/updateArticles";

export const makeArticlesController = (): ArticlesController => {
    const articlesRepository = new ArticlesRepositoryMongoose()
    const listArticles = new ListArticles(articlesRepository)
    const listArticlesById = new ListArticlesbyId(articlesRepository)
    const updateArticles = new UpdateArticles(articlesRepository)
    const createArticles = new CreateArticles(articlesRepository)
    const deleteArticles = new DeleteArticles(articlesRepository)
    const messageArticles = new MessageArticles()
    const validator = new Validation()
    
    return new ArticlesController(
        listArticles,
        listArticlesById,
        updateArticles,
        deleteArticles,
        createArticles,
        messageArticles,
        validator
    )
}
