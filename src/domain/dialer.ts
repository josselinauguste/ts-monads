import { Maybe } from "../monads/maybe"

class Response {
}

export function dial(contact: string): Maybe<Response> {
    if (contact.startsWith("06"))
        return new Maybe(new Response())
    return new Maybe<Response>(undefined) 
}
