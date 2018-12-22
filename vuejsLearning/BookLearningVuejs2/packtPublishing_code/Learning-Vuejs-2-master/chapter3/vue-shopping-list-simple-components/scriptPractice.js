Vue.component('add-item-component', {
    template: '#add-item-template',
    data() {
        return {
            newItem: ''
        }
    }
});

Vue.component('item-compontent', {
    template: '#item-template',
    
    
})

new Vue({
    el: '#app',
    data: data,
    methods
})