class Response {
}

export function dial(contact: string): any {
    if (contact.startsWith("06"))
        return new Response()
}
