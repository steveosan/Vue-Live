// Footer
Vue.component('footer-component' ,{
        template: `  <v-footer app padless dark dense>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>{{msg1}}</strong>
    </v-col>
  </v-footer>`,
        data(){
            return {
                msg1: 'Happy Little Footer',
            }
        }
    }
)
//text cards
Vue.component('cards-component' ,{
        template: `<div class="row p-5">
        <div class="col-sm p-5">
          <v-card elevation="5" outlined>{{msg4}} &#128528;</v-card>
        </div>
        <div class="col-sm p-5">
          <v-card elevation="5" outlined>{{msg11}} <br> <li>TO DO: first fav etc...</li> </v-card>
        </div>
        </div>`,
        data(){
            return {
                msg11:'Favorites List',
                msg4: ' Happy little text box '
            }
        }
    }
)
//Component # 2 Nav Drawer hamburger non-functional
Vue.component('nav-drawer' ,{
        template: `<div>
                <v-toolbar dense dark>
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                  <v-spacer></v-spacer>
                  <v-toolbar-title>My First Vue App : Built with Vuetify</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
              </div>`,
    }
)
//Component # 1 Body Message
Vue.component('body-message' ,{
        template: `<v-card elevation="5"><div class="container bg-dark text-light text-center">
         <h1>{{msg1}}</h1>
         <p> {{msg2}} </p>
        </div>
        </v-card>`,
        data(){
            return {
                msg1: 'Welcome to the Freezer App',
                msg2: 'Simple little app for storing list items '
            }
        }
    }
)

// Second nav with menu items
Vue.component('nav-redone' ,{
    template:`<div><v-col col="12">

          <v-app-bar dense dark rounded>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
             <v-spacer></v-spacer>
             <v-toolbar-title>My First Vue App : Built with Vuetify</v-toolbar-title>
             <v-spacer></v-spacer>
          </v-app-bar>
          <v-navigation-drawer v-model="drawer" absolute temporary height="400">
            <v-list nav dense>
              <v-list-item-group v-model="group" active-class="deep-grey--text text--accent-4">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title><a href="Index.html" style="text-decoration: none; color: inherit;">Home</v-list-item-title>
                </v-list-item>
                    <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-checkbox-marked-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title><a href="favs.html" style="text-decoration: none; color: inherit;">Favorites</a></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
      </v-col></div>`,
    data () {
        return {
            drawer: false
        }
    }
})
//favorites text body
Vue.component('fav-message' ,{
        template: `<v-card elevation="5"><div class="container bg-dark text-light text-center">
         <h1>&#128526; {{msg1}} &#128526;</h1>
         <p> {{msg2}} </p>
        </div>
        </v-card>`,
        data(){
            return {
                msg1: 'All your favorites in one place',
                msg2: 'maybe update this late to show low inventory or something... '
            }
        }
    }
)
