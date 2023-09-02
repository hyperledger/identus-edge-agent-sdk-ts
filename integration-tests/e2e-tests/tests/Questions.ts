import { Question, QuestionAdapter } from "@serenity-js/core"
import { GetRequest, LastResponse, Send } from "@serenity-js/rest"

export class Questions {
  static httpGet<T>(url: string): QuestionAdapter<T> {
    return Question.about(`GET '${url}'`, async actor => {
      const request = Send.a(GetRequest.to(url))
      await request.performAs(actor)
      return await actor.answer(LastResponse.body())
    })
  }
}
