window.onload = function () {
    let calc = new Vue({
        el: '#app',
        data: {
            x: 0,
            y: 0,
            appResult: 0
        },
        methods: {
            multiplyBy: function () {
                this.appResult = this.x * this.y;
                return this.appResult;
            },
            divideBy: function () {
                this.appResult = this.x / this.y;
                return this.appResult;
            }
        },

        computed: {
            result: function () {
                return this.appResult;
            }
        }
    })
}