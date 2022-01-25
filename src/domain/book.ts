import { Maybe, Just } from "../monads/maybe"

interface Book {
  [id: string]: string
}

const BOOK: Book = {
    "JOSSELIN": "0612345678"
}

export function find(name: string): Maybe<string> {
    return Just(BOOK[name])
}
