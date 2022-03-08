import { UpdateArticles } from "../../src/use-cases/articles/updateArticles";
import { ArticlesRepositoryStub } from "./stubs/articlesRepositoryStub";
import { ArticlesNotFoundError } from '../../src/use-cases/error/articlesNotFoundError'
type sutTypes = {
    sut: UpdateArticles
    articlesRepositoryStub: ArticlesRepositoryStub
}

const makeSut = (): sutTypes => {
    const articlesRepositoryStub = new ArticlesRepositoryStub
    const sut = new UpdateArticles(articlesRepositoryStub)
    return {
        sut,
        articlesRepositoryStub
    }
}
describe('listArticlesById', () => {
    it("shoud call bookRepository with corrects params", async () => {
        const { sut } = makeSut()
        const article = {
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
        const result = await sut.execute(article)
        expect(result.id).toEqual(article.id)
    })
    it('should throw BookNotFoundError if id is not found', async () => {
        const { sut, articlesRepositoryStub } = makeSut()
        const article = {
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
        jest.spyOn(articlesRepositoryStub, 'listById').mockReturnValueOnce(Promise.resolve(null))
        const promise = sut.execute(article)
        await expect(promise).rejects.toThrow(ArticlesNotFoundError)
    })
})
