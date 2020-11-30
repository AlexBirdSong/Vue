new Vue ({
    el:'#app',
    data:{
        title: "Hello world!",
        styleCSS: '',
    },

    methods:{
        changeText(){
            this.title = 'Какой-то новый текст'
        }
    }

});