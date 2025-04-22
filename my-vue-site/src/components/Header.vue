<template>
    <header>
        <div class="Up_header">
            <div class="Logo">
                <a href=".\Main.html" title="Главная" rel="main" class="logo_img"><img  src="..\Image\logo_0_2.png"></a>
            </div>
            <div class="Logo_text">
                <div class="red_logo_container">
                    <p class="red_logo">Kомпания "ТеплоВит" в Витебске</p>
                </div>
                <div class="blue_logo_container">
                    <p class="blue_logo">Отопление,Водоснабжение</p>
                    <p class="blue_logo">Альтернативная энергетика</p>
                </div>
            </div>
            <div class="Logo_social">
                <div class="number_wrapper">
                    <a href="" title="Vk" rel="" class=""><img  src="..\Image\black_vk.svg"></a> 
                    <a href="" title="Vk" rel="" class=""><p>Наши соц сети</p></a>
                </div>
                <div class="number_wrapper">
                    <a href="" title="Insta" rel="" class=""><img src="..\Image\black_inst.svg"></a>
                    <a href="" title="Insta" rel="" class=""> <p>Наши соц сети</p></a>
                </div>
                <div class="number_wrapper">
                    <img  src="..\Image\mts.jpg">
                    <p>+ 375 33 613-01-08</p>
                </div>
                <div class="number_wrapper">
                    <img src="..\Image\mts.jpg">
                    <p>+ 375 29 717-78-80</p>
                </div>
            </div>
        </div>
        <div class="Nav_header">
            <nav class="Nav_Bar navigation">
                <router-link to="/" class="Nav_Bar_a">Галавная</router-link>
                <router-link to="/services" class="Nav_Bar_a">Услуги</router-link>
                <router-link to="/products" class="Nav_Bar_a">Продукция</router-link>
                <router-link to="/solutions" class="Nav_Bar_a">Готовые решения</router-link>
                <router-link to="/portfolio" class="Nav_Bar_a">Наши работы</router-link>
                <router-link to="/about" class="Nav_Bar_a">О компании</router-link>
                <router-link to="/contacts" class="Nav_Bar_a">Контакты</router-link>
            </nav>
        </div>  
    </header>
</template>