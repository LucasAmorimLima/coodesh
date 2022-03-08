import { Articles } from "../../../src/domain/articles";
import { CreateArticlesDto } from "../../../src/use-cases/dto/createArticlesDto";
import { ArticlesRepository } from "../../../src/use-cases/repositories/articlesRepository";

export class ArticlesRepositoryStub implements ArticlesRepository {

    create(articles: CreateArticlesDto): Promise<Articles> {
        return Promise.resolve(
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
    }
    list(): Promise<Articles[]> {
        return Promise.resolve(
            [
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
                },
                {
                    id: 14166,
                    title: "Beames becomes SpiderOak's chairman of the board",
                    url: "https://spacenews.com/beames-joins-spideroak/",
                    imageUrl: "https://spacenews.com/wp-content/uploads/2016/03/Charles_Beames.jpg",
                    newsSite: "SpaceNews",
                    summary: "SmallSat Alliance Chairman Charles Beames is taking the helm of cybersecurity firm SpiderOak as chairman of the board.",
                    publishedAt: "2022-03-08T05:04:06.000Z",
                    updatedAt: "2022-03-08T05:04:06.195Z",
                    featured: false,
                    launches: [],
                    events: []
                }
            ]
        )
    }
    listById(id: number): Promise<Articles> {
        return Promise.resolve(
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
    }
    update(articles: Articles): Promise<Articles> {
        return Promise.resolve(
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
    }
    delete(id: number): Promise<string> {
        return Promise.resolve("Article deleted successfully")
    }
}