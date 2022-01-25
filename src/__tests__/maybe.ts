import { Just, None } from "../monads/maybe"

describe("Maybe", () => {
  test("Functor maps value", () => {
    expect(Just(0).map((v) => v + 1).value).toBe(1)
  })
  test("Functor maps undefined", () => {
    expect(None<number>().map((v) => v + 1)).toEqual(None())
  })

  test("Functor identity", () => {
    const id = (v: any) => v
    const m = Just(1)

    expect(m.map(id)).toEqual(m)
  })
  test("Functor composition", () => {
    const f = (v: string) => v + "a"
    const g = (v: string) => v + "b"
    const m = None<string>()

    expect(m.map((v) => f(g(v)))).toEqual(m.map(g).map(f))
  })
})

