export class UserIdValue {
    value: string
    constructor (value: string) {
        this.value = value
        this.ensureIsVaid()
    }

    private ensureIsVaid () {
        if (this.value.length < 0) {
            throw new Error('UserId es obligatoria')
        }
    }
}