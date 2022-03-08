export type HttpRequest = {
    headers?: {
      authorization: string
    }
    params?: any
    body?: any
    query?: any
  }
  
  export type HttpResponse = {
    httpStatusCode: number
    body?: any
  }
  
  export const HttpStatusCodes = {
    ok: {
      code: 200,
      message: 'OK'
    },
    created: {
      code: 201,
      message: 'Created'
    },
    badRequest: {
      code: 400,
      message: 'Bad Request'
    },
    unauthorized: {
      code: 401,
      message: 'Unauthorized'
    },
    forbidden: {
      code: 403,
      message: 'Forbidden'
    },
    serverError: {
      code: 500,
      message: 'Internal Server Error'
    }
  }
  