import { Maybe } from "../monads/maybe"

describe("Maybe", () => {
  test("Functor maps value", () => {
    expect(new Maybe(0).map((v) => v + 1).value).toBe(1)
  })
  test("Functor maps undefined", () => {
    expect(new Maybe<number>(undefined).map((v) => v + 1).value).toBe(undefined)
  })

  test("Functor identity", () => {
    const id = (v: any) => v
    const m = new Maybe(1)

    expect(m.map(id)).toEqual(m)
  })
  test("Functor composition", () => {
    const f = (v: string) => v + "a"
    const g = (v: string) => v + "b"
    const m = new Maybe("")

    expect(m.map((v) => f(g(v)))).toEqual(m.map(g).map(f))
  })
})

