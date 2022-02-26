const DateCounter = {
    data(){
        return{
            dateCounter: ""
        }
    },mounted(){
        setInterval(() => {
            d = new Date()
            this.dateCounter = d
        },100)
    }
}

Vue.createApp(DateCounter).mount("#counter")