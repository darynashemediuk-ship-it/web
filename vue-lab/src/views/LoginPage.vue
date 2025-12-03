<template>
  <div class="main-page-container">

    <div class="top-half-container">
      <div class="logo-icon-large">
        <svg class="heart-svg-large" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    </div>

    <div class="bottom-half-container">
      <form @submit.prevent="handleLoginSubmit" class="auth-content-wrapper">

        <div class="logo-text">FATED</div>

        <div class="flex w-full mb-3 space-x-2 tab-bar">
          <RouterLink to="/login" class="tab-button tab-login">LOGIN</RouterLink>
          <RouterLink to="/register" class="tab-button tab-register">REGISTER</RouterLink>
        </div>

        <div class="input-group">
          <input
            type="text"
            placeholder="user name"
            class="action-input-field"
            :class="{'input-error-field': errors.username}"
            v-model="formData.username"
            @input="validateField('username')"
          >
          <p class="error-message" :class="{'visible-error': errors.username}">{{ errors.username }}</p>
        </div>

        <div class="input-group">
          <input
            type="password"
            placeholder="password"
            class="action-input-field"
            :class="{'input-error-field': errors.password}"
            v-model="formData.password"
            @input="validateField('password')"
          >
          <p class="error-message" :class="{'visible-error': errors.password}">{{ errors.password }}</p>
        </div>

        <div class="input-group">
          <input
            type="email"
            placeholder="email"
            class="action-input-field"
            :class="{'input-error-field': errors.email}"
            v-model="formData.email"
            @input="validateField('email')"
          >
          <p class="error-message" :class="{'visible-error': errors.email}">{{ errors.email }}</p>
        </div>

        <RouterLink to="/forgot-password" class="forgot-password">FORGOT PASSWORD?</RouterLink>

        <button type="submit" class="main-login-button">LOGIN</button>


        <div class="dont-have-account mt-3 text-sm">
          DON'T HAVE AN ACCOUNT? <RouterLink to="/register" class="link-register">REGISTER</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

type FormFields = 'username' | 'password' | 'email';

const formData = ref({
  username: '',
  password: '',
  email: ''
});

const errors = ref({
  username: '',
  password: '',
  email: ''
});

const validationRules: Record<FormFields, (value: string) => string> = {
  username: (value: string) => {
    if (!value) return 'Ім\'я користувача обов\'язкове.';
    return '';
  },
  password: (value: string) => {
    if (!value) return 'Пароль обов\'язковий.';
    return '';
  },
  email: (value: string) => {
    if (value && !/\S+@\S+\.\S+/.test(value)) return 'Невірний формат email.';
    return '';
  }
};

const validateField = (fieldName: FormFields) => {
  errors.value[fieldName] = validationRules[fieldName](formData.value[fieldName]);
};

const validateForm = () => {
  let isValid = true;

  (Object.keys(formData.value) as FormFields[]).forEach(field => {
    validateField(field);
    if (errors.value[field]) {
      isValid = false;
    }
  });

  return isValid;
};

const handleLoginSubmit = () => {
  if (validateForm()) {
    console.log('✅ Вхід успішний! Дані форми:');
    console.log('Username:', formData.value.username);
    console.log('Password:', formData.value.password);
    console.log('Email:', formData.value.email || 'Не вказано');

  } else {
    console.log('❌ Вхід не вдалася. Будь ласка, виправте помилки.');
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Cherry+Bomb+One&display=swap');

:root {
  --main-red: #f4625b;
}

.main-page-container {
  font-family: 'Lato', sans-serif;
  color: white;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  background-color: var(--main-red);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}

.top-half-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 5px;
}

.bottom-half-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-grow: 1;
  padding: 10px 0 20px 0;
  box-sizing: border-box;
}

.auth-content-wrapper {
  width: 100%;
  max-width: 400px;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0px;
}

.logo-icon-large {
  width: 25vh;
  height: 25vh;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
.heart-svg-large {
  fill: var(--main-red);
  width: 50%;
  height: 50%;
}
.logo-text {
  font-family: 'Cherry Bomb One', cursive;
  font-size: 38px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-shadow: 2px 2px 0px #e75a52, 3px 3px 0px #b03c37;
}

.flex { display: flex; }
.w-full { width: 100%; }
.mb-3 { margin-bottom: 0.75rem; }
.space-x-2 > :not([hidden]) ~ :not([hidden]) { margin-left: calc(0.5rem * 1); }
.tab-bar { margin-bottom: 10px; }
.tab-button {
  padding: 10px 0;
  flex-grow: 1;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border: 2px solid white;
  text-decoration: none;
}
.tab-login { background-color: white; color: var(--main-red); margin-right: 5px; }
.tab-register { background-color: var(--main-red); color: white; margin-left: 5px; }

.input-group {
  width: 100%;
  margin-bottom: 5px;
}
.action-input-field {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  color: #000;
  text-align: center;
  background-color: white;
  font-weight: 400;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border: 2px solid transparent;
  margin-bottom: 0;
}
.action-input-field::placeholder { color: #999; }

.input-error-field {
  border: 2px solid #ffdddd !important;
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
}
.error-message {
  height: 15px;
  line-height: 15px;
  color: #ffdddd;
  font-size: 11px;
  align-self: flex-start;
  padding-left: 10px;
  margin-top: 3px;
  opacity: 0;
  transition: opacity 0.2s;
}
.visible-error {
  opacity: 1;
}

.main-login-button {
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  border: none;
  border-radius: 8px;
  background-color: white;
  color: var(--main-red);
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.forgot-password, .dont-have-account {
  font-size: 13px;
  color: white;
  text-decoration: none;
}
.forgot-password {
  align-self: flex-end;
  margin-right: 5px;
  margin-top: 15px;
  margin-bottom: 5px;
}
.dont-have-account { margin-top: 10px; }
.mt-3 { margin-top: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.link-register {
  font-weight: bold;
  text-decoration: underline;
  color: white;
}
</style>
