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
      return new Maybe(f(this.value))
    return new Maybe<G>(undefined)
  }
}
