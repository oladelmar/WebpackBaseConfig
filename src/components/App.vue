<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawerRight"
                fixed
                right
                clipped
                app
        >
          <v-card>
            <v-card-actions>
              <v-spacer />
            </v-card-actions>
            <v-container
              v-bind="{ [`grid-list-${size}`]: true }"
              fluid
            >
              <v-layout
                row
                wrap
              >
                <v-flex
                  v-for="img in images"
                  :key="img"
                  sm6
                  md4
                  xs12
                >
                  <v-card
                    flat
                    tile
                    class="d-flex"
                  >
                    <v-img
                      max-width="100%"
                      :src="img"
                    />
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
import img1 from 'img/1.jpg'
import img2 from 'img/2.jpg'
import img3 from 'img/3.jpeg'
import img4 from 'img/4.jpeg'
import img5 from 'img/5.jpeg'
import img6 from 'img/6.jpeg'
import img7 from 'img/7.jpeg'
import img8 from 'img/8.jpeg'
import img9 from 'img/9.jpg'
export default {
  data: () => ({
    drawer: false,
    drawerRight: false,
    right: true,
    left: false,
    size: 'sm',
    images: [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9
    ]
  })
}
</script>
