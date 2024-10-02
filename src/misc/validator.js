class Validator {
  #EMAIL_REG_EXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  #ERRORS = {
    required: 'Please fill out this field',
    invalidEmail: 'Please enter a valid email address'
  }

  errorClasses = ['border-red-600', 'border-2']

  /*
        {
            'required': {ref1: ref1, ref2: ref2,...refn: refn},
            'email': {ref1: ref1},
            ...
        }
    */
  constructor(rules) {
    this.errors = {}
    this.rules = rules
  }

  validate() {
    for (const [rule, refs] of Object.entries(this.rules)) {
      switch (rule) {
        case 'required':
          this.#dispatch('isEmpty', refs, 'required')
          break
        case 'email':
          this.#dispatch('isInvalidEmail', refs, 'invalidEmail')
          break
      }
    }
  }

  #dispatch(method, refs, errMsg) {
    for (const [property, ref] of Object.entries(refs)) {
      if (this[method](ref.value)) {
        this.errors[property] = errMsg
      }
    }
  }

  isEmpty(value) {
    return !value
  }
  isInvalidEmail(value) {
    return !this.#EMAIL_REG_EXP.test(value)
  }
}

export default Validator
