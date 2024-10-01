class Validator {
    static #EMAIL_REG_EXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    static ERRORS = {
        EMPTY_FIELD:   'Please fill out this field',
        INVALID_EMAIL: 'Please enter a valid email address'
    }
    static errorClasses = ['border-red-600', 'border-2'];
    static isEmpty(value) {
        return !value;
    }
    static isInvalidEmail(value) {
        return !this.#EMAIL_REG_EXP.test(value)
    }
}

export default Validator;