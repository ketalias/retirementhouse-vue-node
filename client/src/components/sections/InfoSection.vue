<template>
    <section class="bg-base-100 py-8 px-4 sm:px-6 lg:px-12">
        <div class="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
            <!-- Header -->
            <header>
                <h2 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-3">
                    Приватний пансіонат «Панська Втіха» в Ужгороді
                </h2>
                <p class="text-base sm:text-lg md:text-xl text-base-content max-w-3xl mx-auto">
                    Турбота, безпека і гідне життя для людей похилого віку з медичним супроводом.
                </p>
            </header>

            <!-- Photo -->
            <div class="w-full">
                <img src="/img/hero-background.jpg" alt="Пансіонат Панська Втіха"
                    class="w-full max-w-5xl h-48 sm:h-64 md:h-80 mx-auto rounded-xl shadow-xl object-cover transition-transform duration-300 hover:scale-[1.02]" />
            </div>

            <!-- Advantages -->
            <section class="space-y-5 max-w-5xl w-full">
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary">Чому обирають нас</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base-content text-base sm:text-lg md:text-xl">
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span><strong>Цілодобовий догляд:</strong> медичний супровід і допомога в побуті.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span><strong>Комфортне проживання:</strong> просторі номери, адаптація під стан
                            здоров’я.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span><strong>Безпечне середовище:</strong> без ризику побутових травм.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span><strong>Живе спілкування:</strong> дозвілля, творчість, прогулянки, концерти.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span><strong>Прозорі ціни:</strong> все в договорі, без прихованих витрат.</span>
                    </li>
                </ul>
            </section>

            <!-- When to Contact -->
            <section class="space-y-5 max-w-5xl w-full">
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary">Коли це особливо актуально
                </h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base-content text-base sm:text-lg md:text-xl">
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span>Родичі живуть далеко або не мають змоги доглядати.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span>Пенсіонер сам бажає переїхати в пансіонат.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span>Домашні умови не підходять для догляду.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span>Потрібен постійний контроль і допомога.</span>
                    </li>
                    <li class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span>Складний робочий графік не дозволяє бути поруч.</span>
                    </li>
                </ul>
            </section>

            <!-- How to Join -->
            <section class="space-y-5 max-w-5xl w-full">
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary">Як потрапити до пансіонату
                </h3>
                <ol
                    class="list-decimal list-inside text-base-content text-base sm:text-lg md:text-xl space-y-2 text-left">
                    <li>Залиште заявку або зателефонуйте нам.</li>
                    <li>Отримайте консультацію і розрахунок вартості.</li>
                    <li>Обговоріть умови та документи.</li>
                    <li>Підпишіть договір, організуємо трансфер.</li>
                    <li>Проводимо медогляд і допомагаємо адаптуватись.</li>
                </ol>
            </section>

            <!-- How to Prepare -->
            <section class="space-y-5 max-w-5xl w-full">
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary">Як допомогти адаптації</h3>
                <ul class="list-disc list-inside text-base-content text-base sm:text-lg md:text-xl space-y-2 text-left">
                    <li>Відверто обговоріть переїзд і його переваги.</li>
                    <li>Покажіть фото, відео або організуйте екскурсію.</li>
                    <li>Домовтесь про часті дзвінки чи візити.</li>
                    <li>Візьміть улюблені речі — книги, фото, рукоділля.</li>
                </ul>
            </section>

            <!-- CTA -->
            <footer class="text-center space-y-3">
                <p class="text-base sm:text-lg text-base-content">
                    Маєте питання чи хочете поселити близьку людину?
                </p>
                <a href="tel:+380675496995"
                    class="btn btn-primary text-base sm:text-lg px-6 py-2 rounded-lg transition-transform duration-300 hover:scale-105">
                    +38 067 549 69 95
                </a>
            </footer>
        </div>
    </section>
</template>

<script setup>
// без логіки
</script>