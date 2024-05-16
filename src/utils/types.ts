export type Errors = {
  message: string
}

export interface ISecurePassword {
  checkPassword(): void,
  checkToLowerCase(): void,
  checkToUpperCase(): void,
  checkToNumbers(): void,
  checkToespecialCaracters(): void,
  checkLength(): void,
  checkRegex(regex: string, errorMessage: string): void
  setErrorMessage(message: string): void
  getErrors(): Errors[];
}