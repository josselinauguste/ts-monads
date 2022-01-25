export class Maybe<T> {
  value?: T

  constructor(value?: T) {
    this.value = value
  }

  isValue(): boolean {
    return this.value !== undefined
  }
}
