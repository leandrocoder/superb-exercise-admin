<template>
    <div class="sidebar elevation-2">
      <v-list-item-title class="text-h6"> Booking System</v-list-item-title>
      <v-list>
        <v-list-item link @click="userOptions = !userOptions">
          <v-list-item-content>
            <v-list-item-title class="text-h7">
              Leandro Carlos
            </v-list-item-title>
            <v-list-item-subtitle>leandrocoder@gmail.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon v-if="!userOptions">mdi-menu-down</v-icon>
            <v-icon v-else>mdi-menu-up</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>

        <div v-if="userOptions">
            <v-divider></v-divider>
            <v-list-item link to="login">
                <v-list-item-icon>
                <v-icon>mdi-exit-run</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </div>

      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
          mandatory
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-spacer/>
        </v-list-item-group>
      </v-list>

    </div>
</template>

<script>
export default {
    data: () => ({
      selectedItem: 0,
      userOptions:false,
      items: [
        { text: 'Bookings', icon: 'mdi-book-account', to: 'bookings' },
        { text: 'Tables', icon: 'mdi-silverware-fork-knife', to:'tables' },
        { text: 'Settings', icon: 'mdi-cog', to:'settings' },
      ],
    }),
}
</script>

<style lang="scss" scoped>
.sidebar {
    position: relative;
    min-width: 260px;
    width: 260px;
    background-color: white;
    min-height: 100%;

    text-align: left;
        padding: 0.5rem;

}
</style>