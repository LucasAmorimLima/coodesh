import { ArticlesController } from "../../src/controllers/articlesController"
import { ServerError } from "../../src/controllers/error/serverError"
import { HttpStatusCodes } from "../../src/controllers/types/http"
import { CreateArticles } from "../../src/use-cases/articles/createArticles"
import { DeleteArticles } from "../../src/use-cases/articles/deleteArticles"
import { ListArticles } from "../../src/use-cases/articles/listArticles"
import { ListArticlesbyId } from "../../src/use-cases/articles/listArticlesById"
import { UpdateArticles } from "../../src/use-cases/articles/updateArticles"
import { ArticlesNotFoundError } from "../../src/use-cases/error/articlesNotFoundError"
import { ArticlesRepositoryStub } from "../useCases/stubs/articlesRepositoryStub"
import { ValidatorStub } from "../useCases/stubs/validateStub"

type sutTypes = {
    sut: ArticlesController,
    listArticles: ListArticles
    listArticlesById: ListArticlesbyId
    updateArticles: UpdateArticles
    createArticles: CreateArticles
    deleteArticles: DeleteArticles
    validator: ValidatorStub
}
const makeSut = (): sutTypes => {
    const articlesRepository = new ArticlesRepositoryStub()
    const listArticles = new ListArticles(articlesRepository)
    const listArticlesById = new ListArticlesbyId(articlesRepository)
    const updateArticles = new UpdateArticles(articlesRepository)
    const createArticles = new CreateArticles(articlesRepository)
    const deleteArticles = new DeleteArticles(articlesRepository)
    const validator = new ValidatorStub()
    const sut = new ArticlesController(listArticles, listArticlesById, updateArticles, deleteArticles, createArticles, validator)

    return {
        sut,
        listArticles,
        listArticlesById,
        updateArticles,
        createArticles,
        deleteArticles,
        validator
    }

}

describe('ArticleController', () => {
    describe('create', () => {
        it("should call CreateArticles with correct parameters", async () => {
            const { sut } = makeSut()
            const httpRequest = {
                body: {
                    id: 14167,
                    title: "SpaceX worked for weeks to begin Starlink service in Ukraine",
                    url: "https://spacenews.com/spacex-worked-for-weeks-to-begin-starlink-service-in-ukraine/",
                    imageUrl: "https://spacenews.com/wp-content/uploads/2021/08/36ss-shotwell.jpg",
                    newsSite: "SpaceNews",
                    summary: "SpaceX's president says the company had been working for weeks to secure approval for Starlink services in Ukraine before a government minister tweeted a request to Elon Musk.",
                    publishedAt: "2022-03-08T10:44:06.000Z",
                    updatedAt: "2022-03-08T10:44:06.854Z",
                    featured: false,
                    launches: [],
                    events: []
                }
            }

            const httpResponse = await sut.create(httpRequest)

            expect(httpResponse.body.title).toEqual(httpRequest.body.title)
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.created.code)
        })
        it('should throw a bad request if validation does not match', async () => {
            const { sut, validator } = makeSut()
            jest.spyOn(validator, 'createValidate').mockReturnValueOnce(false)

            const httpRequest = {
                body: {
                    id: "string",
                    title: "",
                    url: "",
                    imageUrl: 123,
                    newsSite: "SpaceNews",
                }
            }
            const response = await sut.create(httpRequest)
            expect(response.httpStatusCode).toEqual(HttpStatusCodes.badRequest.code)
            expect(response.body.message).toEqual('Invalid fields')
        })
        it('should throw server error if usecase throws', async () => {
            const { sut, createArticles } = makeSut()
            jest.spyOn(createArticles, 'execute').mockReturnValueOnce(Promise.reject(new ServerError('Internal Server Error')))
            const httpRequest = {
                body: {
                    id: 14167,
                    title: "SpaceX worked for weeks to begin Starlink service in Ukraine",
                    url: "https://spacenews.com/spacex-worked-for-weeks-to-begin-starlink-service-in-ukraine/",
                    imageUrl: "https://spacenews.com/wp-content/uploads/2021/08/36ss-shotwell.jpg",
                    newsSite: "SpaceNews",
                    summary: "SpaceX's president says the company had been working for weeks to secure approval for Starlink services in Ukraine before a government minister tweeted a request to Elon Musk.",
                    publishedAt: "2022-03-08T10:44:06.000Z",
                    updatedAt: "2022-03-08T10:44:06.854Z",
                    featured: false,
                    launches: [],
                    events: []
                }
            }
            const httpResponse = await sut.create(httpRequest)
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.serverError.code)
            expect(httpResponse.body).toEqual('Internal Server Error')
        })
    })
    describe('update', () => {
        it("should call UpdateArticles with correct parameters", async () => {
            const { sut } = makeSut()
            const httpRequest = {
                body: {
                    title: "SpaceX worked for weeks to begin Starlink service in Ukraine",
                    url: "https://spacenews.com/spacex-worked-for-weeks-to-begin-starlink-service-in-ukraine/",
                    imageUrl: "https://spacenews.com/wp-content/uploads/2021/08/36ss-shotwell.jpg",
                    newsSite: "SpaceNews",
                    summary: "SpaceX's president says the company had been working for weeks to secure approval for Starlink services in Ukraine before a government minister tweeted a request to Elon Musk.",
                    publishedAt: "2022-03-08T10:44:06.000Z",
                    updatedAt: "2022-03-08T10:44:06.854Z",
                    featured: false,
                    launches: [],
                    events: []
                },
                params: {
                    id: 14167
                }
            }
            const httpResponse = await sut.update(httpRequest)

            expect(httpResponse.body.title).toEqual(httpRequest.body.title)
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.ok.code)
        })
        it('should throw server error if usecase throws', async () => {
            const { sut, updateArticles } = makeSut()
            jest.spyOn(updateArticles, 'execute').mockReturnValueOnce(Promise.reject(new ServerError('Internal Server Error')))
            const httpRequest = {
                body: {
                    title: "SpaceX worked for weeks to begin Starlink service in Ukraine",
                    url: "https://spacenews.com/spacex-worked-for-weeks-to-begin-starlink-service-in-ukraine/",
                    imageUrl: "https://spacenews.com/wp-content/uploads/2021/08/36ss-shotwell.jpg",
                    newsSite: "SpaceNews",
                    summary: "SpaceX's president says the company had been working for weeks to secure approval for Starlink services in Ukraine before a government minister tweeted a request to Elon Musk.",
                    publishedAt: "2022-03-08T10:44:06.000Z",
                    updatedAt: "2022-03-08T10:44:06.854Z",
                    featured: false,
                    launches: [],
                    events: []
                },
                params: {
                    id: 14167
                }
            }
            const httpResponse = await sut.update(httpRequest)
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.serverError.code)
            expect(httpResponse.body).toEqual('Internal Server Error')
        })
        it('should return a bad request if articles id is not found', async () => {
            const { sut, updateArticles } = makeSut()
            jest.spyOn(updateArticles, 'execute').mockReturnValueOnce(Promise.reject(new ArticlesNotFoundError('Article not found')))
            const httpRequest = {
                body: {
                    title: "SpaceX worked for weeks to begin Starlink service in Ukraine",
                    url: "https://spacenews.com/spacex-worked-for-weeks-to-begin-starlink-service-in-ukraine/",
                    imageUrl: "https://spacenews.com/wp-content/uploads/2021/08/36ss-shotwell.jpg",
                    newsSite: "SpaceNews",
                    summary: "SpaceX's president says the company had been working for weeks to secure approval for Starlink services in Ukraine before a government minister tweeted a request to Elon Musk.",
                    publishedAt: "2022-03-08T10:44:06.000Z",
                    updatedAt: "2022-03-08T10:44:06.854Z",
                    featured: false,
                    launches: [],
                    events: []
                },
                params: {
                    id: 14167
                }
            }
            const httpResponse = await sut.update(httpRequest)
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.badRequest.code)
            expect(httpResponse.body.message).toEqual('Article not found')
        })
    })
    describe('delete', () => {
        it("should call DeleteArticles with correct parameters", async () => {
            const { sut } = makeSut()
            const httpRequest = {
                params: {
                    id: 14167
                }
            }
            const httpResponse = await sut.delete(httpRequest)

            expect(httpResponse.body).toEqual("Article deleted successfully")
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.ok.code)
        })
        it('should throw server error if usecase throws', async () => {
            const { sut, deleteArticles } = makeSut()
            jest.spyOn(deleteArticles, 'execute').mockReturnValueOnce(Promise.reject(new ServerError('Internal Server Error')))
            const httpRequest = {
                params: {
                    id: 14167
                }
            }
            const httpResponse = await sut.delete(httpRequest)
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.serverError.code)
            expect(httpResponse.body).toEqual('Internal Server Error')
        })
        it('should return a bad request if articles id is not found', async () => {
            const { sut, deleteArticles } = makeSut()
            jest.spyOn(deleteArticles, 'execute').mockReturnValueOnce(Promise.reject(new ArticlesNotFoundError('Article not found')))
            const httpRequest = {
                params: {
                    id: 0 //wrongId
                }
            }
            const httpResponse = await sut.delete(httpRequest)
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.badRequest.code)
            expect(httpResponse.body.message).toEqual('Article not found')
        })
    })
    describe('listById', () => {
        it("should call ListArticlesById with correct parameters", async () => {
            const { sut } = makeSut()
            const httpRequest = {
                params: {
                    id: 14167
                }
            }
            const httpResponse = await sut.show(httpRequest)

            expect(httpResponse.body).toEqual(
                {
                    id: 14167,
                    title: "SpaceX worked for weeks to begin Starlink service in Ukraine",
                    url: "https://spacenews.com/spacex-worked-for-weeks-to-begin-starlink-service-in-ukraine/",
                    imageUrl: "https://spacenews.com/wp-content/uploads/2021/08/36ss-shotwell.jpg",
                    newsSite: "SpaceNews",
                    summary: "SpaceX's president says the company had been working for weeks to secure approval for Starlink services in Ukraine before a government minister tweeted a request to Elon Musk.",
                    publishedAt: "2022-03-08T10:44:06.000Z",
                    updatedAt: "2022-03-08T10:44:06.854Z",
                    featured: false,
                    launches: [],
                    events: []
                }
            )
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.ok.code)
        })
        it('should throw server error if usecase throws', async () => {
            const { sut, listArticlesById } = makeSut()
            jest.spyOn(listArticlesById, 'execute').mockReturnValueOnce(Promise.reject(new ServerError('Internal Server Error')))
            const httpRequest = {
                params: {
                    id: 14167
                }
            }
            const httpResponse = await sut.show(httpRequest)
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.serverError.code)
            expect(httpResponse.body).toEqual('Internal Server Error')
        })
        it('should return a bad request if articles id is not found', async () => {
            const { sut, listArticlesById } = makeSut()
            jest.spyOn(listArticlesById, 'execute').mockReturnValueOnce(Promise.reject(new ArticlesNotFoundError('Article not found')))
            const httpRequest = {
                params: {
                    id: 0 //wrongId
                }
            }
            const httpResponse = await sut.show(httpRequest)
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.badRequest.code)
            expect(httpResponse.body.message).toEqual('Article not found')
        })
    })
    describe('list', () => {
        it("should call ListBook with correct parameters", async () => {
            const { sut } = makeSut()
            const httpResponse = await sut.index()

            expect(httpResponse.body[0]).toEqual(
                {
                    id: 14167,
                    title: "SpaceX worked for weeks to begin Starlink service in Ukraine",
                    url: "https://spacenews.com/spacex-worked-for-weeks-to-begin-starlink-service-in-ukraine/",
                    imageUrl: "https://spacenews.com/wp-content/uploads/2021/08/36ss-shotwell.jpg",
                    newsSite: "SpaceNews",
                    summary: "SpaceX's president says the company had been working for weeks to secure approval for Starlink services in Ukraine before a government minister tweeted a request to Elon Musk.",
                    publishedAt: "2022-03-08T10:44:06.000Z",
                    updatedAt: "2022-03-08T10:44:06.854Z",
                    featured: false,
                    launches: [],
                    events: []
                }
            )
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.ok.code)
        })
        it('should throw server error if usecase throws', async () => {
            const { sut, listArticles } = makeSut()
            jest.spyOn(listArticles, 'execute').mockReturnValueOnce(Promise.reject(new ServerError('Internal Server Error')))
            
            const httpResponse = await sut.index()
            expect(httpResponse.httpStatusCode).toEqual(HttpStatusCodes.serverError.code)
            expect(httpResponse.body).toEqual('Internal Server Error')
        })
    })

})
