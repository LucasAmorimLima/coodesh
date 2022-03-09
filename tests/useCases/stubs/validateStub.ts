import { Validator } from "../../../src/controllers/validator";
import { CreateArticlesDto } from "../../../src/use-cases/dto/createArticlesDto";

export class ValidatorStub implements Validator {
    createValidate(data: CreateArticlesDto): boolean {
        return true
    }
}