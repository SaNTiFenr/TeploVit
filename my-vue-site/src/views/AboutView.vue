<template>
        <div class="about_us">
            <div class="main_ab_us_wrapper">
                <div class="about-container">
                    <div class="about-header">
                        <h1>О компании</h1>
                        <div class="header-line">
                            
                        </div>
                    </div>

                    <div class="about-content">
                        <div class="company-description">
                            <p class="intro-text">
                            Компания «ТеплоВит» предлагает современные инженерные решения и услуги по профессиональной комплектации объектов различным оборудованием для систем водоснабжения и отопления.
                            </p>
                        
                            <div class="highlight-box">
                                <p>Мы специализируемся на комплексных поставках качественного оборудования, которое поступает непосредственно со склада завода-изготовителя, что гарантирует качество и хорошую цену.</p>
                            </div>
                        </div>

                        <div class="reasons-section">
                            <h2>7 причин работать с компанией «ТеплоВит»</h2>
                            
                            <div class="reasons-grid">
                            <div 
                                class="reason-card"
                                v-for="(reason, index) in reasons"
                                :key="index"
                            >
                                <div class="reason-header" :style="headerStyle(index)">
                                {{ reason.title }}
                                </div>
                                <div class="reason-content">
                                {{ reason.content }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="conclusion-section">
                        <p class="conclusion-text">
                        Обращайтесь к нам, и мы принесем тепло и уют в Ваши дома!
                        </p>
                        <div class="contact-button">
                        <router-link to="/contacts">Связаться с нами</router-link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
export default {
    data() {
        return {
        reasons: [
            {
            title: "Профессионализм",
            content: "Мы предлагаем исчерпывающие консультации опытных специалистов и грамотные рекомендации по составлению оптимального бюджета вашего проекта."
            },
            {
            title: "Эффективность",
            content: "Мы ценим деньги, время и силы наших покупателей, рекомендуя исключительно эффективные варианты решения задач."
            },
            {
            title: "Индивидуальный подход",
            content: "Мы внимательно относимся к каждому покупателю, индивидуально подбирая продукт, который максимально соответствует вашим требованиям."
            },
            {
            title: "Обязательность",
            content: "Мы четко выполняем взятые обязательства, соблюдая все условия, сроки и договоренности с клиентами."
            },
            {
            title: "Гибкие условия",
            content: "Наша работа основана на лояльном подходе, оперативности в решениях и гибкой ценовой политике."
            },
            {
            title: "Гарантии",
            content: "На всю продукцию производитель предоставляет гарантию качества. Мы всегда поддерживаем своих заказчиков."
            },
            {
            title: "Лучшие цены",
            content: "Мы заказываем продукцию напрямую у производителей, что позволяет предлагать лучшие цены на рынке Беларуси."
            }
        ]
        }
    },
    methods: {
        headerStyle(index) {
        const colors = ['#131d82', '#f35d22'];
        return {
            backgroundColor: colors[index % 2]
        };
        }
    }
    }
</script>