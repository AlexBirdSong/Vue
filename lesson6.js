Vue.component('app-car',{
    data: function(){
        return{
            cars: [
                {model: "BMW"},
                {model: "Audi"},
                {model: "Mercedes-Benz AMG"},
                {model: "Ford"},
                {model: "Volvo"},
                {model: "Siat"},
                {model: "Fiat"},
            ]
        }

    },

    template: '<div><div class="car" v-for="car in cars"><p>{{car.model}}</p></div></div>'
});

new Vue ({
    el:'#app',
   components: {
       'app-car':{
        data: function(){
            return{
                cars: [
                    {model: "BMW M5"},
                    {model: "Audi 100"},
                    {model: "Mercedes-Benz Brabus"},
                    {model: "Ford Focus"},
                    {model: "Volvo S60"},
                    {model: "Siat DA"},
                    {model: "Fiat NET"},
                ]
            }
    
        },
        template: '<div><div class="car" v-for="car in cars"><p>{{car.model}}</p></div></div>'

       }
   }

});

new Vue({
    el: '#app2',
});