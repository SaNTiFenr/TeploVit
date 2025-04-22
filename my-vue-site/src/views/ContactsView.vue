<template>
        <div class="Contacts_wrapper">
            <div class="main_wrapper">
                <div class="about_us_info">
                    <p class="big_p">
                        Контакты
                    </p>
                    <p>
                        Компания "ТеплоВит" Республика Беларусь, 210040, г. Витебск, ул. Фрунзе д. 22 к.3
                    </p>
                    <p>
                        Телефоны:
                    </p>
                    <div class="number_wrapper">
                        <img src="..\Image\mts.jpg">
                        <p>+ 375 33 613-01-08</p>
                    </div>
                    <div class="number_wrapper">
                        <img src="..\Image\mts.jpg">
                        <p>+ 375 29 717-78-80</p>
                    </div>
                    <p>
                        Электронная почта: <a href="mailto:teplo.vit@mail.ru">teplo.vit@mail.ru</a> 
                    </p>
                </div>
                <div class="map_wrapper">
                    <p class="bolid_p">
                        Схема проезда:
                    </p>
                    <iframe src="https://yandex.ru/map-widget/v1/?scroll=false&amp;source=constructor-api&amp;um=constructor%3AV3aK97zjxxN1nqcru_bnX0L1R2zGUcGq" frameborder="0" allowfullscreen="true" width="600px" height="450px" style="display: block;">
                    </iframe>
                </div>
                <div class="form-container">
                    <h2>Форма обратной связи</h2>
                    <form action="#" method="post">
                        <div class="form-group">
                            <label for="name">Имя:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Сообщение:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="form_button">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>
export default {
  name: 'ContactPage'
}
</script>
<style>
    .contacts_wrapper {
    justify-items: center;
    width: 50%;
    padding: 2%;
    border-radius: 1%;
    box-shadow: -5px 0 5px -3px rgba(0, 0, 0, 0.5), 5px 0 5px -3px rgba(0, 0, 0, 0.5), 0 -5px 5px -3px rgba(0, 0, 0, 0), 0 5px 5px -3px rgba(0, 0, 0, 0);
}
</style>