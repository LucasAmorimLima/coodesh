import { Articles } from '../../domain/articles'
import { CreateArticlesDto } from '../dto/createArticlesDto'

export interface ArticlesRepository {
  create (articles: CreateArticlesDto): Promise<Articles>
  list (): Promise<Articles[]>
  listById (id: number): Promise<Articles>
  update (articles: Articles): Promise<Articles>
  delete (id: number): Promise<string>
}
