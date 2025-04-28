<template>
    
        <div class="portfolio-page">
            <div class="portfolio-header">
                <h1>Наши выполненные работы</h1>
                <div class="header-divider">   </div>
            </div>

        <div class="portfolio-grid">
        <div 
            class="portfolio-card"
            v-for="(work, index) in works"
            :key="index"
            @mouseenter="hoverIndex = index"
            @mouseleave="hoverIndex = null"
        >
            <div class="image-container">
            <img 
                :src="work.image" 
                :alt="work.title"
                class="portfolio-image"
            >
            <div 
                class="image-overlay"
                :class="{ 'active': hoverIndex === index }"
            ></div>
            </div>
            <div class="card-content">
            <h3 class="work-title">{{ work.title }}</h3>
            <p class="work-description">{{ work.description }}</p>
            <button 
                class="details-button"
                :style="{ backgroundColor: hoverIndex === index ? '#f35d22' : '#131d82' }"
            >
                Подробнее
            </button>
            </div>
        </div>
        </div>

        <div class="load-more">
        <button class="load-button">Показать еще</button>
        </div>
    </div>
    
</template>
<script>
    export default {
    data() {
        return {
        hoverIndex: null,
        works: [
            {
            image: require('../Image/anqipfst0rw.jpg'),
            title: 'Монтаж отопления',
            description: 'Комплексный монтаж системы отопления в частном доме'
            },
            {
            image: require('../Image/anqipfst0rw.jpg'),
            title: 'Установка котла',
            description: 'Установка газового котла с обвязкой'
            },
            {
            image: require('../Image/anqipfst0rw.jpg'),
            title: 'Водоснабжение',
            description: 'Монтаж системы водоснабжения коттеджа'
            },
            {
            image: require('../Image/anqipfst0rw.jpg'),
            title: 'Тёплый пол',
            description: 'Укладка системы водяного тёплого пола'
            }
        ]
        }
    }
    }
</script>