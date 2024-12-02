export class UserEmailValue {
    public value: string
    constructor (value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid () {
        if ( this.value.length < 0 ) {
            throw new Error('Email es obligatorio')
        }
        if (!this.value.includes("@") || !this.value.includes(".")) {
            throw new Error('El formato no es valido')
        }
    }
}