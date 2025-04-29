<template>
    <header class="site-header">
      <!-- Верхняя часть шапки -->
      <div class="top-header">
        <div class="header-container">
          <!-- Логотип и название -->
          <div class="brand-section">
            <router-link to="/" class="logo-link">
              <img :src="images.Logo" alt="ТеплоВит" class="logo-img">
            </router-link>
            
            <div class="brand-text">
              <div class="brand-name">
                <p class="red-text">Компания "ТеплоВит" в Витебске</p>
              </div>
              <div class="brand-description">
                <p class="blue-text">Отопление, Водоснабжение</p>
                <p class="blue-text">Альтернативная энергетика</p>
              </div>
            </div>
          </div>
  
          <!-- Контакты и соцсети -->
          <div class="contacts-section">
            <div class="contact-item">
              <a href="#" class="social-link">
                <img :src="images.Vk" alt="VK" class="social-icon">
                <span>Наши соц сети</span>
              </a>
            </div>
            
            <div class="contact-item">
              <a href="#" class="social-link">
                <img :src="images.Inst" alt="Instagram" class="social-icon">
                <span>Наши соц сети</span>
              </a>
            </div>
            
            <div class="contact-item">
              <img :src="images.Mts" alt="МТС" class="phone-icon">
              <a href="tel:+375336130108" class="phone-link">+375 33 613-01-08</a>
            </div>
            
            <div class="contact-item">
              <img :src="images.Mts" alt="МТС" class="phone-icon">
              <a href="tel:+375297177880" class="phone-link">+375 29 717-78-80</a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Навигационное меню -->
      <div class="navigation-header">
        <nav class="main-navigation">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path" 
            class="nav-link"
            active-class="active"
          >
            {{ link.title }}
          </router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  import LogoImage from '@/assets/images/logo_0_2.png';
  import VkImage from '@/assets/images/black_vk.svg';
  import InstImage from '@/assets/images/black_inst.svg';
  import MtsImage from '@/assets/images/mts.jpg';
  
  export default {
    data() {
      return {
        images: {
          Logo: LogoImage,
          Vk: VkImage,
          Inst: InstImage,
          Mts: MtsImage
        },
        navLinks: [
          { path: '/', title: 'Главная' },
          { path: '/services', title: 'Услуги' },
          { path: '/products', title: 'Продукция' },
          { path: '/solutions', title: 'Готовые решения' },
          { path: '/portfolio', title: 'Наши работы' },
          { path: '/about', title: 'О компании' },
          { path: '/contacts', title: 'Контакты' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .site-header {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  /* Верхняя часть шапки */
  .top-header {
    background-color: #f5f5f0;
    padding: 15px 0;
  }
  
  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  
  .brand-section {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .logo-link {
    display: block;
  }
  
  .logo-img {
    height: 60px;
    width: auto;
  }
  
  .brand-text {
    display: flex;
    flex-direction: column;
  }
  
  .brand-name {
    margin-bottom: 5px;
  }
  
  .red-text {
    color: #f35d22;
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0;
  }
  
  .blue-text {
    color: #131d82;
    font-size: 0.9rem;
    margin: 2px 0;
    line-height: 1.2;
  }
  
  /* Контакты и соцсети */
  .contacts-section {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: #131d82;
    font-size: 0.9rem;
    transition: color 0.3s;
  }
  
  .social-link:hover {
    color: #f35d22;
  }
  
  .social-icon {
    width: 20px;
    height: 20px;
  }
  
  .phone-icon {
    width: 20px;
    height: 20px;
  }
  
  .phone-link {
    color: #131d82;
    text-decoration: none;
    font-size: 0.9rem;
    white-space: nowrap;
    transition: color 0.3s;
  }
  
  .phone-link:hover {
    color: #f35d22;
  }
  
  /* Навигационное меню */
  .navigation-header {
    background-color: #131d82;
  }
  
  .main-navigation {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
  }
  
  .nav-link {
    font-family: "Finder"; 
    color: white;
    text-decoration: none;
    padding: 15px 10px;
    font-size: 0.95rem;
    text-transform: uppercase;
    position: relative;
    transition: all 0.3s;
  }
  
  .nav-link:hover,
  .nav-link.active {
    color: #f35d22;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #f35d22;
  }
  
  /* Адаптивность */
  @media (max-width: 992px) {
    .header-container {
      flex-direction: column;
      gap: 15px;
    }
    
    .contacts-section {
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .main-navigation {
      overflow-x: auto;
      padding: 0 10px;
      justify-content: flex-start;
    }
    
    .nav-link {
      padding: 15px 8px;
      font-size: 0.85rem;
      white-space: nowrap;
    }
  }
  
  @media (max-width: 576px) {
    .brand-section {
      flex-direction: column;
      text-align: center;
    }
    
    .contacts-section {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    
    .contact-item {
      width: 100%;
      justify-content: center;
    }
  }
  </style>
