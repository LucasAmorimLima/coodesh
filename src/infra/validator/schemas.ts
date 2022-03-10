import Joi from "joi"

export const Schema  = {
    createSchema: Joi.object(
        {
            summary: Joi.string().required(),
            featured: Joi.boolean().required(),
            title: Joi.string().required(),
            url: Joi.string().required(),
            imageUrl: Joi.string().required(),
            newsSite: Joi.string().required(),
            publishedAt: Joi.string().required(),
            launches: Joi.array().items(
                {
                    id: Joi.string(),
                    provider: Joi.string()
                }
            ),
            events: Joi.array().items(
                {
                    id: Joi.string(),
                    provider: Joi.string()
                }
            )
        }
    )
}
