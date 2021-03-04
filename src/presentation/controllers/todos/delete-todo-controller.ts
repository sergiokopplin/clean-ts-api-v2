import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequestError, serverError } from '@/presentation/helpers'

export class DeleteTodoController implements Controller {
  constructor(private readonly validation: Validation) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequestError(error)
      }
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace DeleteTodoController {
  export interface Request {
    id: string
  }
}
