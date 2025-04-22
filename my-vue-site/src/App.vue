<template>
    <HeaderComponent />
    <main>
      <router-view /> <!-- Здесь будут отображаться страницы -->
    </main>
    <FooterComponent />
</template>

<script>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'

export default {
  components: { HeaderComponent, FooterComponent }
  
}
</script>