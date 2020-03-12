const myMixin = {
    create: () => {
        this.hello()
    },
    methods: {
        hello() {
            console.log('hello from mixin')
        }
    }
}

export default myMixin