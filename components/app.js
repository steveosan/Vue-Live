Vue.component('item-list' ,{
        props: {
            cats : Array,
            removeCat : Function
        },
        template: `<div>
                    <div class="container bg-dark text-light " >
                         {{key + 1}} - {{cat.name}} - {{cat.fav}} - {{cat.count}}
                    <button class="btn btn-secondary btn-sm ml-5 m-1" @click="removeCat(n)">Remove</button></div>
                  </div>`,
        data(){
            return {
            }
        }
    }
)
new Vue({
    el: '#app',vuetify: new Vuetify(),
    data() {

        return {
            cats: [],
            name : "",
            count:0,
            newCat: {name: '', fav: false, count: 0},
            msg1: 'ItemIndex | Item | isFavorite | Qty'

        }
    },
    mounted() {
        if (localStorage.getItem('cats')) {
            try {
                this.cats = JSON.parse(localStorage.getItem('cats'));
            } catch(e) {
                localStorage.removeItem('cats');
            }
        }
    },
    methods: {
        //set the cat
        addCat() {
            // insure they actually typed something
            if (!this.newCat) {
                return;
            }
            // If txt add cat
            this.newCat.fav = false;
            this.newCat.count = this.count;
            this.cats.push(this.newCat);
            this.newCat = {name: ''};
            this.saveCats();
        },
        //Delete cat
        removeCat(x) {
            this.cats.splice(x, 1);
            this.saveCats();
        },
        //We keep you
        saveCats() {
            const parsed = JSON.stringify(this.cats);
            localStorage.setItem('cats', parsed);
        },
        //bestest cat
        favCat() {
            if (!this.newCat) {
                return;
            }
            this.newCat.count = this.count;
            this.newCat.fav = true;
            this.cats.push(this.newCat)
            this.newCat = {name:''};
            this.saveCats();
        },
    }
})
