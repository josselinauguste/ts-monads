import { Maybe } from "../monads/maybe"

interface Book {
  [id: string]: string
}

const BOOK: Book = {
    "JOSSELIN": "0612345678"
}

export function find(name: string): Maybe<string> {
    return new Maybe(BOOK[name])
}
