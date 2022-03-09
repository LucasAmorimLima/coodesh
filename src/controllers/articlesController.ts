import { CreateArticles } from "../use-cases/articles/createArticles";
import { DeleteArticles } from "../use-cases/articles/deleteArticles";
import { ListArticles } from "../use-cases/articles/listArticles";
import { ListArticlesbyId } from "../use-cases/articles/listArticlesById";
import { UpdateArticles } from "../use-cases/articles/updateArticles";
import { ArticlesNotFoundError } from "../use-cases/error/articlesNotFoundError";
import { HttpRequest, HttpResponse, HttpStatusCodes } from "./types/http";
import { Validator } from "./validator";


export class ArticlesController {
    constructor(
        private listArticles: ListArticles,
        private listeArticlesById: ListArticlesbyId,
        private updateArticles: UpdateArticles,
        private deleteArticles: DeleteArticles,
        private createArticles: CreateArticles,
        private validator: Validator
    ) { }

    async create(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { body } = httpRequest

            const isBodyValid = this.validator.createValidate(body)
            if (!isBodyValid) {
                return {
                    httpStatusCode: HttpStatusCodes.badRequest.code,
                    body: {
                        message: 'Invalid fields'
                    }
                }
            }
            const response = await this.createArticles.execute(body)

            return {
                httpStatusCode: HttpStatusCodes.created.code,
                body: response
            }
        } catch (error: any) {
            return {
                httpStatusCode: HttpStatusCodes.serverError.code,
                body: error.message
            }
        }
    }

    async index(): Promise<HttpResponse> {
        try {
            const response = await this.listArticles.execute()

            return {
                httpStatusCode: HttpStatusCodes.ok.code,
                body: response
            }
        } catch (error: any) {
            return {
                httpStatusCode: HttpStatusCodes.serverError.code,
                body: error.message
            }
        }
    }

    async show(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params
            const response = await this.listeArticlesById.execute(id)

            return {
                httpStatusCode: HttpStatusCodes.ok.code,
                body: response
            }
        } catch (error: any) {
            if (error instanceof ArticlesNotFoundError) {
                return {
                    httpStatusCode: HttpStatusCodes.badRequest.code,
                    body: {
                        message: error.message
                    }
                }
            }

            return {
                httpStatusCode: HttpStatusCodes.serverError.code,
                body: error.message
            }
        }
    }

    async delete(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params
            const response = await this.deleteArticles.execute(id)

            return {
                httpStatusCode: HttpStatusCodes.ok.code,
                body: response
            }
        } catch (error: any) {
            if (error instanceof ArticlesNotFoundError) {
                return {
                    httpStatusCode: HttpStatusCodes.badRequest.code,
                    body: {
                        message: error.message
                    }
                }
            }

            return {
                httpStatusCode: HttpStatusCodes.serverError.code,
                body: error.message
            }
        }
    }

    async update(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params
            const { body } = httpRequest

            const response = await this.updateArticles.execute({ id, ...body })

            return {
                httpStatusCode: HttpStatusCodes.ok.code,
                body: response
            }
        } catch (error: any) {
            if (error instanceof ArticlesNotFoundError) {
                return {
                    httpStatusCode: HttpStatusCodes.badRequest.code,
                    body: {
                        message: error.message
                    }
                }
            }

            return {
                httpStatusCode: HttpStatusCodes.serverError.code,
                body: error.message
            }
        }
    }
}