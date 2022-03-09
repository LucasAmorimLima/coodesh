import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        featured: {
            type: Boolean
        },
        title: {
            type: String 
        },
        url: {
            type: String 
        },
        imageUrl: {
            type: String 
        },
        newsSite: {
            type: String 
        },
        summary: {
            type: String 
        },
        publishedAt: {
            type: String 
        },
        launches : [
            {
                id: {
                    type: String
                },
                provider: {
                    type:String
                }
            }
        ],
        events : [
            {
                id: {
                    type: String
                },
                provider: {
                    type:String
                }
            }
        ]
    }
)

export const articlesModel = mongoose.model('articles', articleSchema)