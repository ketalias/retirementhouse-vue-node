<template>
    <div class="relative w-full min-h-[600px] py-16 flex justify-center bg-cover bg-center bg-fixed items-center"
        data-aos="fade-up">
        <div class="card w-[90vw] max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10">
            <div class="card-body">
                <h2 class="card-title text-3xl md:text-4xl mb-8 text-center text-primary-600 font-bold">Напишіть нам</h2>
                <form class="form-control flex flex-col space-y-6 w-full">
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <input type="text" placeholder="Ваше ім’я"
                            class="input input-bordered text-lg w-full bg-white pl-10 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </span>
                        <input type="tel" placeholder="Ваш номер телефону"
                            class="input input-bordered text-lg w-full bg-white pl-10 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <input type="email" placeholder="Ваш Email"
                            class="input input-bordered text-lg w-full bg-white pl-10 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-start pt-3 pl-3">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </span>
                        <textarea
                            class="textarea textarea-bordered text-lg w-full bg-white pl-10 focus:ring-2 focus:ring-blue-500 transition duration-300"
                            placeholder="Ваше повідомлення" rows="5"></textarea>
                    </div>
                    <button
                        class="btn btn-primary text-lg w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition duration-300">Надіслати</button>
                </form>
            </div>
        </div>
    </div>
</template>