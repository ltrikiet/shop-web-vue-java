<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { Field as VeeValidateField, Form as VeeValidateForm } from 'vee-validate';
import type { SignInRequest, SignUpRequest } from '@/services/auth/types';
import { useAuthStore } from '@/stores/authStore';
import router from '@/router';
import { signInValidationSchema, signUpValidationSchema } from './constants';

const visible = ref(false);
const tab = ref();
const authStore = useAuthStore();
const { userToken, error } = storeToRefs(authStore);

const handleLogin = async (values: SignInRequest): Promise<void> => {
  await authStore.signIn(values);
};

const handleRegister = async (values: SignUpRequest): Promise<void> => {
  await authStore.signUp(values);
};

onMounted(() => {
  if (userToken.value.length > 0) {
    router.push('/');
  }
});
</script>
<template>
  <v-app>
    <v-main class="flex justify-center items-center">
      <v-card class="pa-12 pb-8" elevation="8" width="400" rounded="lg">
        <div class="font-semibold text-4xl mb-6 text-center">Vuefly</div>

        <v-alert v-if="error" class="mb-5" type="error" :text="error" variant="tonal" />

        <v-tabs v-model="tab" align-tabs="center">
          <v-tab value="login">Login</v-tab>
          <v-tab value="register">Register</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item value="login">
            <vee-validate-form
              as="v-form"
              :validation-schema="signInValidationSchema"
              v-slot="{ errors }"
              @submit="handleLogin as any"
            >
              <div class="text-subtitle-1 text-medium-emphasis">Email</div>

              <vee-validate-field
                as="v-text-field"
                name="email"
                density="compact"
                placeholder="Email address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                :error-messages="errors['email']"
              />

              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Password</div>

              <vee-validate-field
                as="v-text-field"
                name="password"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
              />

              <v-btn block class="mb-4" color="blue" size="large" variant="tonal" type="submit"> Log In </v-btn>
            </vee-validate-form>
          </v-window-item>
          <v-window-item value="register">
            <vee-validate-form
              as="v-form"
              :validation-schema="signUpValidationSchema"
              v-slot="{ errors }"
              @submit="handleRegister as any"
            >
              <div class="text-subtitle-1 text-medium-emphasis">Fullname</div>

              <vee-validate-field
                as="v-text-field"
                name="fullName"
                density="compact"
                placeholder="Fullname"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                :error-messages="errors['fullName']"
              />

              <div class="text-subtitle-1 text-medium-emphasis">Email</div>

              <vee-validate-field
                as="v-text-field"
                name="email"
                density="compact"
                placeholder="Email address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                :error-messages="errors['email']"
              />

              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Password</div>

              <vee-validate-field
                as="v-text-field"
                name="password"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
                :error-messages="errors['password']"
              />

              <v-btn block class="my-4" color="blue" size="large" variant="tonal" type="submit"> Register </v-btn>
            </vee-validate-form>
          </v-window-item>
        </v-window>
      </v-card>
    </v-main>
  </v-app>
</template>
