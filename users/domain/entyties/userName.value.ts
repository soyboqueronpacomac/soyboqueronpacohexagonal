export class UserName {
    public value: string
    constructor (value: string) {
        this.value = value
        this.ensureIsValid()
    }
    private ensureIsValid () {
        if ( this.value.length < 0 ) {
            throw new Error('UserName es obligatorio')
        }
    }
}