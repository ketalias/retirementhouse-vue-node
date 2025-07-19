<template>
    <div class="w-full px-4 py-12 flex justify-center" data-aos="fade-up">
        <div class="card w-full max-w-4xl bg- shadow- bg-white rounded-xl shadow-md p-6">
            <div class="card-body">
                <h2 class="card-title text-2xl md:text-3xl mb-6 text-center text-primary">Напишіть нам</h2>
                <form class="form-control flex flex-col space-y-4 w-full">
                    <input type="text" placeholder="Ваше ім’я" class="input input-bordered text-lg w-full bg-white" />
                    <input type="email" placeholder="Ваш Email" class="input input-bordered text-lg w-full bg-white " />
                    <textarea class="textarea textarea-bordered text-lg w-full bg-white" placeholder="Ваше повідомлення"
                        rows="5"></textarea>
                    <button class="btn btn-primary text-lg w-full">Надіслати</button>
                </form>
            </div>
        </div>
    </div>
</template>
