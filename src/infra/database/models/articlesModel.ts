
import mongoose from 'mongoose'
import { IArticles } from './IArticleModel'

const articleSchema = new mongoose.Schema(
    {
        _id: {
            type: Number
        },
        seq:{
            type: Number
        },
        customId: {
            type: Number,
        },
        updatedAt: {
            type: String,
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
export const articlesModel = mongoose.model<IArticles>('articles', articleSchema)
