import { Articles } from '../../domain/articles'
import { CreateArticlesDto } from '../dto/createArticlesDto'

export interface ArticlesRepository {
  create (articles: CreateArticlesDto): Promise<Articles>
  list (page: number, limit: number): Promise<Articles[]>
  listById (id: number): Promise<Articles | null>
  update (articles: Articles): Promise<Articles>
  delete (id: number): Promise<string | null>
}
