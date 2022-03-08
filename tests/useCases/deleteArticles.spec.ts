import { DeleteArticles } from "../../src/use-cases/articles/deleteArticles";
import { ArticlesRepositoryStub } from "./stubs/articlesRepositoryStub";
import { ArticlesNotFoundError } from '../../src/use-cases/error/articlesNotFoundError'

type sutTypes = {
    sut: DeleteArticles
    articlesRepositoryStub: ArticlesRepositoryStub
}

const makeSut = (): sutTypes => {
    const articlesRepositoryStub = new ArticlesRepositoryStub
    const sut = new DeleteArticles(articlesRepositoryStub)
    return {
        sut,
        articlesRepositoryStub
    }
}
describe('deleteArticlesById', () => {
    it("shoud call bookRepository with corrects params", async () => {
        const { sut } = makeSut()
        const articleId = 14167 
        const result = await sut.execute(articleId)

        expect(result).toEqual("Article deleted successfully")
    })
    it('should throw BookNotFoundError if id is not found', async () => {
        const { sut, articlesRepositoryStub } = makeSut()
        const articleId = 0
            
        jest.spyOn(articlesRepositoryStub, 'listById').mockReturnValueOnce(Promise.resolve(null))
        const promise = sut.execute(articleId)//wrong ig

        await expect(promise).rejects.toThrow(ArticlesNotFoundError)
    })
})
