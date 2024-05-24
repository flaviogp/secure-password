import SecurePassword from "../SecurePassword";

describe('SecurePassword', () => {
  test('should be called correctly', () => {
    const wrongPassword = 'testeDeSenhaErrada';
    const correctPassword = 'testeD3Senh@C0rr&ta';

    const securePasswordNotValid = new SecurePassword(wrongPassword)
    const securePasswordValid = new SecurePassword(correctPassword)

    expect(securePasswordNotValid.passwordIsValid).toBeFalsy();
    expect(securePasswordValid.passwordIsValid).toBeTruthy();

  })

  test('the correct error messages should be called', () => {
    const errorsArray = [
      { message: 'senha precisa ter ao menos 8 caracteres' },
      { message: 'senha precisa ter letras minusculas' },
      { message: 'senha precisa ter letras maiusculas' },
      { message: 'senha precisa ter numeros' },
      { message: 'senha precisa ter ao menos um caracter especial (ex: *, $, #)' }
    ]


    const passwordWithoutSpecialCharacters = 'aaAA33abc'
    const passwordWithoutNumbers = 'aaAA&&abc'
    const passwordWithoutUppercase = 'aa&&33abc'
    const passwordWithoutLowercase = '@@AA33ABC'
    const passwordWithoutEightDigits = '@e3A'
    const displayAllErrors = ''

    expect(new SecurePassword(passwordWithoutEightDigits).errors).toEqual([errorsArray[0]])
    expect(new SecurePassword(passwordWithoutLowercase).errors).toEqual([errorsArray[1]])
    expect(new SecurePassword(passwordWithoutUppercase).errors).toEqual([errorsArray[2]])
    expect(new SecurePassword(passwordWithoutNumbers).errors).toEqual([errorsArray[3]])
    expect(new SecurePassword(passwordWithoutSpecialCharacters).errors).toEqual([errorsArray[4]])
    expect(new SecurePassword(displayAllErrors).errors).toEqual([...errorsArray])

  })

})