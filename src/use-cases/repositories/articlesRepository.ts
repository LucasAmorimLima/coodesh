import { Articles } from '../../domain/articles'
import { CreateArticlesDto } from '../dto/createArticlesDto'

export interface ArticlesRepository {
  create (articles: CreateArticlesDto): Promise<Articles>
  list (): Promise<Articles[]>
  listById (id: string): Promise<Articles>
  update (articles: Articles): Promise<Articles>
  delete (id: string): Promise<string>
}
