import { Question, QuestionAdapter } from "@serenity-js/core"
import { GetRequest, LastResponse, Send } from "@serenity-js/rest"

export class Questions {
  static httpGet<T = any>(url: string): QuestionAdapter<T> {
    return Question.about('get response body', async actor => {
      const request = Send.a(GetRequest.to(url))
      await request.performAs(actor)
      return await actor.answer(LastResponse.body())
    })
  }

  static getArraySize(description: string, array: any[]): QuestionAdapter<number> {
      return Question.about(description, async actor => {
        return await actor.answer(array.length)
      })
  }
}