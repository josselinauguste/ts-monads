import { Just, None } from "../monads/maybe"

const id = (v: any) => v

describe("Maybe", () => {
  test("Functor maps value", () => {
    expect(Just(0).map((v) => v + 1).value).toBe(1)
  })
  test("Functor maps none", () => {
    expect(None<number>().map((v) => v + 1)).toEqual(None())
  })

  test("Functor identity", () => {
    const m = Just(1)

    expect(m.map(id)).toEqual(m)
  })
  test("Functor composition", () => {
    const f = (v: string) => v + "a"
    const g = (v: string) => v + "b"
    const m = None<string>()

    expect(m.map((v) => f(g(v)))).toEqual(m.map(g).map(f))
  })

  test("Monad binds value", () => {
    const result = Just(0).bind((v) => Just(v + 1))

    expect(result).toEqual(Just(1))
  })
  test("Monad binds none", () => {
    const result = None<number>().bind((v) => Just(v + 1))

    expect(result).toEqual(None())
  })

  test("Monad left identity", () => {
    const f = (v: number) => Just(v + 1)
    const x = 1

    expect(Just(x).bind(f)).toEqual(f(x))
  })
  test("Monad right identity", () => {
    const m = Just(1)

    expect(m.bind(Just)).toEqual(m)
  })
  test("Monad associativity", () => {
    const f = (v: string) => Just(v + "a")
    const g = (v: string) => Just(v + "b")
    const m = Just("")

    expect(m.bind(f).bind(g)).toEqual(m.bind((v) => f(v).bind(g)))
  })

  test("Applicative functor", () => {
    const f = (a: number) => (b: number) => a - b
    const result = Just(f).apply(Just(1)).apply(Just(1))

    expect(result).toEqual(Just(0))
  })
})

