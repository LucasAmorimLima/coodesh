import Joi from "joi"

export const Schema  = {
    createSchema: Joi.object(
        {
            featured: Joi.boolean().required(),
            title: Joi.string().required(),
            url: Joi.string().required(),
            imageUrl: Joi.string().required(),
            newsSite: Joi.string().required(),
            publishedAt: Joi.string().required(),
            launches: Joi.array().items(
                {
                    id: Joi.string().required(),
                    provider: Joi.string().required()
                }
            ),
            events: Joi.array().items(
                {
                    id: Joi.string().required(),
                    provider: Joi.string().required()
                }
            )
        }
    )
}
