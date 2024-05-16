import { Errors, ISecurePassword } from "../utils/types";


export default class SecurePassword implements ISecurePassword {
  private password: string
  public errors: Errors[] = []
  public passwordIsValid: boolean = false;

  setErrorMessage(msg: string): void {
    this.errors.push({
      message: msg
    });
  }

  getErrors(): Errors[] {
    return this.errors
  }

  checkRegex(regex: string, errorMessage: string): void {
    const reg = new RegExp(regex);
    const isValid = reg.test(this.password);

    !isValid && this.setErrorMessage(errorMessage);
  }

  checkLength(): void {
    this.password.length < 8 &&
      this.setErrorMessage('senha precisa ter ao menos 8 caracteres');
  }

  checkToLowerCase(): void {
    this.checkRegex('[a-z]', 'senha precisa ter letras minusculas');
  }
  checkToUpperCase(): void {
    this.checkRegex('[A-Z]', 'senha precisa ter letras maiusculas');
  }
  checkToNumbers(): void {
    this.checkRegex('[0-9]', 'senha precisa ter numeros');
  }
  checkToespecialCaracters(): void {
    this.checkRegex('\\W|_', 'senha precisa ter ao menos um caracter especial (ex: *, $, #)');
  }

  checkPassword(): void | Errors[] {
    this.checkLength();
    this.checkToLowerCase();
    this.checkToUpperCase();
    this.checkToNumbers();
    this.checkToespecialCaracters();

    this.errors.length >= 1 ?
      this.passwordIsValid = false :
      this.passwordIsValid = true;
  }


  constructor(password: string) {
    this.password = password;
    this.checkPassword();
  }

}