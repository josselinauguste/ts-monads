export class Maybe<T> {
  value?: T

  constructor(value?: T) {
    this.value = value
  }

  isValue(): boolean {
    return this.value !== undefined
  }

  map<G>(f: (value: T) => G): Maybe<G> {
    if (this.value === undefined)
      return None<G>()
    return Just(f(this.value))
  }

  bind<G>(f: (value: T) => Maybe<G>): Maybe<G> {
    if (this.value === undefined)
      return None<G>()
    return f(this.value)
  }
}

export function None<T>() {
  return new Maybe<T>(undefined)
}

export function Just<T>(v: T) {
  return new Maybe<T>(v)
}
