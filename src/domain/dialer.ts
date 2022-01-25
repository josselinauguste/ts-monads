import { Maybe, Just, None } from "../monads/maybe"

class Response {
}

export function dial(contact: string): Maybe<Response> {
    if (contact.startsWith("06"))
        return Just(new Response())
    return None<Response>() 
}
