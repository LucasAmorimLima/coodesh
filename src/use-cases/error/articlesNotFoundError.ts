class ArticlesNotFoundError extends Error {
    constructor(message:string) {
        super(message)
        this.name = "ArticlesNotFoundError"
    }
}