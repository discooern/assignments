const app = Vue.createApp({
    data() {
        return {
           inputBox: '',
           isVisible: false,
           colorBox: ''
        };
    },
    methods: {
        userSelected(input){
            if(input == 'user1' || input == 'user2')
            return input;
        },
        toggleVisibility(){
            this.isVisible = !this.isVisible
        },
    },
});

app.mount('#assignment');