<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <!-- <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
      </v-card> -->
        <v-card>
          <v-card-title class="headline"> Welcome to My Portfolio</v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/about"> About </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-container class="card-wrapper">
      <v-card>
        <v-row> ようこそ！ </v-row>
        <v-row>
          <v-col>aaa</v-col>
          <v-col>aaa</v-col>
        </v-row>
      </v-card>

      <v-card>
        <v-row>
          <v-col>aaa</v-col>
          <v-col>aaa</v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
</script>

<style lang="scss">
</style>
