import { CreateArticles } from "../../src/use-cases/articles/createArticles"
import { ArticlesRepositoryStub } from "./stubs/articlesRepositoryStub"

const makeSut = (): CreateArticles => {
    const articlesRepository = new ArticlesRepositoryStub
    return new CreateArticles(articlesRepository)
}
describe('CreateArticles', () => {
    it("shoud call bookRepository with corrects params", async () => {
        const createArticlesUseCase = makeSut()
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
        const result = await createArticlesUseCase.excute(article)
        expect(result.id).toBe(article.id)
    })
})