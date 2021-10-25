export class ServerError extends Error {
  constructor (stack: string = 'no stack') {
    super('Internal server error')
    this.name = 'ServerError'
    this.stack = stack
  }
}
