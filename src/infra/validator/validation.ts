import { Validator } from "../../controllers/validator";
import { CreateArticlesDto } from "../../use-cases/dto/createArticlesDto";
import { Schema } from './schemas'
export class Validation implements Validator {
    private schema = Schema

    createValidate(data: CreateArticlesDto): boolean {
        const result  = this.schema.createSchema.validate(data)
        if (result.error) {
            return false
        }
        return true
    }
}