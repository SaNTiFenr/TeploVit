<template>
        <div class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">Цена: {{ product.price }} ₽</p>
        <button class="product-button">Купить</button>
        </div>
    </template>
    
    <script>
    export default {
        props: {
        product: {
            type: Object,
            required: true,
        },
        },
    };
    </script>
    
    <style scoped>
    .product-card {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        width: 250px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .product-image {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
    }
    .product-name {
        font-size: 1.25rem;
        color: #131d82;
        margin: 10px 0;
    }
    .product-price {
        font-size: 1.1rem;
        color: #f35d22;
        margin: 10px 0;
    }
    .product-button {
        background-color: #f35d22;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
    }
    .product-button:hover {
        background-color: #131d82;
    }
    </style>