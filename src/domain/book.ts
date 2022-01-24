interface Book {
  [id: string]: string
}

const BOOK: Book = {
    "JOSSELIN": "0612345678"
}

export function find(name: string): string {
    return BOOK[name]
}
