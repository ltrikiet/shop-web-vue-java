<script setup lang="ts"></script>
<template>
  <v-footer class="text-center flex-column">
    <v-container>
      <v-row>
        <v-col cols="4" class="flex items-center justify-start">
          <p class="text-lg">Refer a Friend <span class="underline">Get $5</span></p>
        </v-col>
        <v-col cols="4" class="flex items-center justify-center">
          <v-icon size="50" icon="mdi-alpha-v-circle-outline" />
        </v-col>
        <v-col cols="4" class="flex items-center justify-end">
          <v-btn class="ma-2" icon="mdi-facebook" variant="text"></v-btn>
          <v-btn class="ma-2" icon="mdi-instagram" variant="text"></v-btn>
          <v-btn class="ma-2" icon="mdi-twitter" variant="text"></v-btn>
        </v-col>
      </v-row>
      <v-divider :thickness="3" class="my-5 border-opacity-100 w-full"></v-divider>
      <v-row class="text-left tracking-widest">
        <v-col cols="4">
          <div class="mr-10">
            <h4 class="text-lg mb-5">BE THE FIRST TO KNOW!</h4>
            <p class="mb-3 tracking-widest">
              Subscribers will receive first access to special offers and limited releases.
            </p>
            <v-text-field placeholder="ENTER YOUR EMAIL" />
            <v-btn type="submit" text="Submit" block color="grey-lighten-2" />
          </div>
        </v-col>
        <v-col cols="3">
          <h4 class="text-lg mb-5">CONTACT US</h4>
          <ul>
            <li class="flex items-center mb-3">
              <v-icon class="mr-3" icon="mdi-chat" size="35" />
              <div>
                <p>Live Chat</p>
                <p>M-F 9:00am - 5:00pm</p>
              </div>
            </li>
            <li class="flex items-center mb-3">
              <v-icon class="mr-3" icon="mdi-email-outline" size="35" />
              <p>support@some.com</p>
            </li>
            <li class="flex items-center mb-3">
              <v-icon class="mr-3" icon="mdi-cellphone" size="35" />
              <p>123-456-7890</p>
            </li>
          </ul>
        </v-col>
        <v-col cols="3">
          <h4 class="text-lg mb-5">SUPPORT</h4>
          <ul>
            <li class="mb-3">Contact Us</li>
            <li class="mb-3">Shipping & Returns</li>
            <li class="mb-3">Order Status</li>
            <li class="mb-3">Frequently Asked Questions</li>
            <li class="mb-3">Manage Subscriptions</li>
            <li class="mb-3">Gift Cards</li>
          </ul>
        </v-col>
        <v-col cols="2">
          <h4 class="text-lg mb-5">ABOUT VUEFLY</h4>
          <ul>
            <li class="mb-3">Jobs</li>
            <li class="mb-3">Story</li>
            <li class="mb-3">Wholesale</li>
            <li class="mb-3">Blog</li>
            <li class="mb-3">Locations</li>
            <li class="mb-3">Farmlevel</li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
