window.onload = function () {
    let calc = new Vue({
        el: '#app',
        data: {
            x: 0,
            y: 0,
            appResult: 0,
            previous: 0
        },
        methods: {
            multiplyBy: function () {
                this.appResult = this.x * this.y;
                localStorage.sign = '*';
                localStorage.appResult = this.appResult;
                return this.appResult;
            },
            divideBy: function () {
                this.appResult = this.x / this.y;
                localStorage.sign = '/';
                localStorage.appResult = this.appResult;
                return this.appResult;
            },


        },
        watch: {
           x(newX) {
            localStorage.x = newX;
           },
           y(newY) {
            localStorage.y = newY;
           },
           previous(newPrev) {
               this.previous = newPrev;
               return this.previous;
           }
        },
        computed: {
            result: function () {
                console.log(localStorage.getItem('x'))
                return this.appResult;
            },
            prev: function () {
                this.previous = localStorage.getItem('x') + localStorage.getItem('sign') +
                localStorage.getItem('y') + '=' + localStorage.getItem('appResult');
                return this.previous;
            }

        }
    })
}