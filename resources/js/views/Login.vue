<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 class="text-center text-3xl font-extrabold leading-9 text-gray-900">Welcome Our App!</h1>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
        </div>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                class="space-y-6"
                @submit.prevent="handleSubmitForm"
            >
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            v-model="formData.email"
                            :disabled="isSubmitting"
                        />
                    </div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            v-model="formData.password"
                            :disabled="isSubmitting"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <router-link
                    to="/register"
                    class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                    Register now!
                </router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import authService from '../services/auth-service';

const formData = ref({
    email: '',
    password: ''
});

const isSubmitting = ref(false);

const handleSubmitForm = () => {
    if (isSubmitting.value) {
        return;
    }
    if (!formData.value.email || !formData.value.password) {
        return;
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.value.email)) {
        return;
    }
    authService.login(formData.value).then(() => {
        router.push({ name: 'Home' });
    }).catch((error) => {
        console.error(error);
    });
}
</script>
