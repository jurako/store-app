class Validator {
  static errorClasses = ['border-red-600', 'border-2']

  constructor(items) {
    this.#validateArgument(items)

    this.errors = {}
    this.items = items
  }

  validate() {
    this.errors = {}

    for (const item of this.items) {
      for (const rule of item.rules) {
        if (rule.fails(item.ref.value)) {
          this.errors[item.errorField] = rule.errorMsg
        }
      }
    }
  }

  #validateArgument(rules) {
    if (rules?.constructor?.name != 'Array') throw new Error('Passed value is not an Array')

    if (!rules.length) throw new Error('Validator must contain atleast one validation item')

    for (const validationObj of rules) {
      if (validationObj?.constructor?.name != 'Object')
        throw new Error('Invalid validation item value, must be an Object')

      if (
        !validationObj.hasOwnProperty('ref') ||
        !validationObj.hasOwnProperty('rules') ||
        !validationObj.hasOwnProperty('errorField')
      )
        throw new Error('Validation object must contain ref, rules and errorField properties')
    }
  }
}

class ValidationRule {
  fails(value) {
    throw new Error('This method must be overridden by subclasses')
  }
}

class isEmptyRule extends ValidationRule {
  errorMsg = 'Please fill out this field'

  fails(value) {
    return !value
  }
}

class isInvalidEmailRule extends ValidationRule {
  static #emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  errorMsg = 'Please enter a valid email address'

  fails(value) {
    return !isInvalidEmailRule.#emailRegExp.test(value)
  }
}
export const isEmpty = new isEmptyRule()
export const isInvalidEmail = new isInvalidEmailRule()
export { Validator }
