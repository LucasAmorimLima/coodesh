import { Articles } from "../../domain/articles";
import { CreateArticlesDto } from "../../use-cases/dto/createArticlesDto";
export interface Validator {
    createValidate(data: CreateArticlesDto): boolean
}
