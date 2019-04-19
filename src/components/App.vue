<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawerRight"
                fixed
                right
                clipped
                app
        >
            <v-list dense>
                <v-list-tile @click.stop="right = !right">
                    <v-list-tile-action>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
                color="blue-grey"
                dark
                fixed
                app
                clipped-right
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Toolbar</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
        </v-toolbar>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
        >
            <v-list dense>
                <v-list-tile @click.stop="left = !left">
                    <v-list-tile-action>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer
                v-model="left"
                temporary
                fixed
        ></v-navigation-drawer>
        <v-content>
            <v-layout center>
                <v-flex sm10 offset-sm1 mt-5>
                    <v-card>
                        <v-card-actions>
                            <v-select v-model="size" :items="items" label="Size"></v-select>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                        <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
                            <v-layout row wrap>
                                <v-flex
                                        v-for="n in 9"
                                        :key="n"
                                        sm6 md4 xs12
                                >
                                    <v-card flat tile>
                                        <v-img
                                                :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                                                height="150px"
                                        ></v-img>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-content>
        <v-navigation-drawer
                v-model="right"
                right
                temporary
                fixed
        ></v-navigation-drawer>
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
      size: 'sm',
      items: [
        { text: 'Extra small (2px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>
