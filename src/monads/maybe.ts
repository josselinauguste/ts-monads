export class Maybe<T> {
  value?: T

  constructor(value?: T) {
    this.value = value
  }

  isValue(): boolean {
    return this.value !== undefined
  }

  map<G>(f: (value: T) => G): Maybe<G> {
    if (this.value !== undefined)
      return Just(f(this.value))
    return None<G>()
  }
}

export function None<T>() {
  return new Maybe<T>(undefined)
}

export function Just<T>(v: T) {
  return new Maybe<T>(v)
}
