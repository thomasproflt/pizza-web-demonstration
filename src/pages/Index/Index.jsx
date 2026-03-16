import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import PlaceOrder from "../../components/PlaceOrder/PlaceOrder";
import { catalogPizzas } from "../../data/catalogPizzas.data";

const StarIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
);

const textLeft = {
    hidden: {
        opacity: 0,
        x: -80
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const textRight = {
    hidden: {
        opacity: 0,
        x: 80
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const catalogContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const catalogItem = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const pizzaItem = {
    hidden: {
        opacity: 0,
        y: -440
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2.6,
            ease: "easeOut"
        }
    }
};

const Index = () => {
    const [quantities, setQuantities] = useState({});

    const increase = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const decrease = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(0, (prev[id] || 0) - 1)
        }));
    };
    return (
        <>
            <Navbar />

            <div className="min-h-screen">
                <section className="flex flex-col min-h-screen bg-[#1D1412] max-w-full h-[75.10rem] md:h-0 px-5 md:px-[7.10rem] relative overflow-hidden [clip-path:polygon(0_0,100%_0,100%_90%,0_100%)]">

                    <motion.div
                        variants={catalogContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="absolute top-25 right-10 md:top-0 md:-right-0"
                    >
                        <motion.div
                            variants={pizzaItem}
                            className="w-full h-full overflow-hidden rounded-full"
                        >
                            <img
                                src="/images/057f1b6c-ec55-47d9-8275-cabf3479c3fe-Photoroom.png"
                                alt="people"
                                loading="lazy"
                                decoding="async"
                                className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] object-cover rounded-full"
                            />
                        </motion.div>
                    </motion.div>

                    <div className="relative flex flex-col top-[22.20rem] md:top-[12.20rem] items-start justify-start">
                        <motion.h1
                            variants={textLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-left md:max-w-[35.10rem] text-4xl mb-5"
                        >
                            PIZZA
                        </motion.h1>

                        <motion.p
                            variants={textRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-left max-w-lg mb-5"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque tempora vel amet nam error perferendis natus totam necessitatibus, sunt similique laudantium autem fugiat exercitationem quisquam aspernatur maiores quis adipisci.
                        </motion.p>

                        <motion.div
                            variants={catalogContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-row items-center gap-2 mb-20"
                        >
                            <motion.div
                                variants={catalogItem}
                            >
                                <button
                                    variants={catalogItem}
                                    className="bg-red-500 hover:bg-red-500/85 px-6 py-2 rounded-full cursor-pointer transition-all duration-200"
                                >
                                    Ver Cardápio
                                </button>
                            </motion.div>

                            <motion.div
                                variants={catalogItem}
                            >
                                <button
                                    variants={catalogItem}
                                    className="bg-transparent hover:bg-white/5 border border-zinc-100/10 px-6 py-2 rounded-full cursor-pointer transition-all duration-200"
                                >
                                    Realizar Pedido
                                </button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={catalogContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-row items-center"
                        >
                            <motion.div
                                variants={catalogItem}
                                className="w-10 h-10 overflow-hidden rounded-full"
                            >
                                <img
                                    src="/images/people/headshot-1-100w.webp"
                                    alt="people"
                                    loading="lazy"
                                    decoding="async"
                                    width={50}
                                    height={50}
                                    className="object-cover rounded-full"
                                />
                            </motion.div>

                            <motion.div
                                variants={catalogItem}
                                className="w-10 h-10 overflow-hidden rounded-full -ml-5"
                            >
                                <img
                                    src="/images/people/headshot-2-100w.webp"
                                    alt="people"
                                    loading="lazy"
                                    decoding="async"
                                    width={50}
                                    height={50}
                                    className="object-cover rounded-full"
                                />
                            </motion.div>

                            <motion.div
                                variants={catalogItem}
                                className="w-10 h-10 overflow-hidden rounded-full -ml-5"
                            >
                                <img
                                    src="/images/people/headshot-3-100w.webp"
                                    alt="people"
                                    loading="lazy"
                                    decoding="async"
                                    width={50}
                                    height={50}
                                    className="object-cover rounded-full"
                                />
                            </motion.div>

                            <motion.div
                                variants={catalogContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-col items-start ml-5"
                            >
                                <motion.h1
                                    variants={textLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="text-left text-[14px] mb-2"
                                >
                                    Nossos clientes satisfeitos
                                </motion.h1>

                                <motion.div
                                    variants={catalogItem}
                                    className="flex flex-row items-baseline gap-4 text-[#EDB313]"
                                >
                                    {StarIcon}
                                    <motion.h1
                                        variants={textRight}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="text-zinc-50 text-left text-[16px] mb-5"
                                    >
                                        4.8
                                    </motion.h1>

                                    <motion.p
                                        variants={textRight}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="text-zinc-50 text-left text-[13px] mb-5"
                                    >
                                        (12.5k Avaliações)
                                    </motion.p>
                                </motion.div>

                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="relative flex mt-[22.10rem] md:mt-60">
                        <PlaceOrder />
                    </div>

                </section>

                <section className="min-h-screen text-black bg-[#1D1412] max-w-full relative overflow-hidden py-[0.10rem] md:py-[30.10rem]">

                    {/* CONTAINER */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-[9.10rem]">

                        {/* IMAGEM */}
                        <motion.div
                            variants={catalogContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div
                                variants={pizzaItem}
                                className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full mb-5 md:mb-0"
                            >
                                <img
                                    src="/images/057f1b6c-ec55-47d9-8275-cabf3479c3fe-Photoroom.png"
                                    alt="people"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>

                        {/* TEXTO */}
                        <div className="flex flex-col items-start max-w-md">

                            <motion.h1
                                variants={textRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-[20px] md:text-3xl font-semibold text-[#bdcfff] mb-5"
                            >
                                Toda empresa tem uma história. Nem todas sabem apresentá-la.
                            </motion.h1>

                            <motion.p
                                variants={textLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-[#c9d7fd] mb-10"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </motion.p>

                            <motion.a
                                variants={catalogItem}
                                href="https://proflt.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#DC1A38] font-semibold text-white px-4 py-2 hover:bg-[#DC1A38]/90"
                            >
                                Conhecer o estúdio
                            </motion.a>

                        </div>

                    </div>

                </section>

                <section className="min-h-screen text-black bg-[#1D1412] max-w-full relative overflow-hidden py-[10.10rem]">

                    {/* HEADER */}
                    <div className="flex flex-col items-center text-center px-10 md:px-[9.10rem] mb-20">

                        <motion.h1
                            variants={textRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-[20px] md:text-3xl font-semibold text-[#bdcfff] mb-5"
                        >
                            Sua <span className="highlight-text">Deliciosa Pizza</span> Começa Aqui!
                        </motion.h1>

                        <motion.p
                            variants={textLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-[#c9d7fd] max-w-md"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </motion.p>

                    </div>

                    {/* GRID */}
                    <motion.div
                        variants={catalogContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-35 md:gap-10 px-10 md:px-[9.10rem] mb-15"
                    >

                        {catalogPizzas.map((item) => {

                            const quantity = quantities[item.id] || 0;

                            return (
                                <motion.div
                                    key={item.id}
                                    variants={catalogItem}
                                    className="relative bg-zinc-100/5 h-90 pt-20 pb-6 px-6 rounded-2xl"
                                >

                                    {/* IMAGEM FORA DO CARD */}
                                    <motion.img
                                        variants={pizzaItem}
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute -top-20 left-1/2 -translate-x-1/2 w-44 drop-shadow-2xl pointer-events-none select-none"
                                    />

                                    <div className="flex flex-col md:flex-row justify-between items-left md:items-center mt-15 md:mt-20">
                                        {/* TITULO */}
                                        <motion.h1
                                            variants={textLeft}
                                            className="text-xl font-semibold text-white mb-2 text-left"
                                        >
                                            {item.title}
                                        </motion.h1>

                                        {/* PREÇO */}
                                        <div className="flex justify-left mb-4">
                                            <span className="text-red-400 font-bold text-lg">
                                                {item.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* DESCRIÇÃO */}
                                    <motion.p
                                        variants={textRight}
                                        className="text-zinc-400 text-left mb-5 md:mb-10"
                                    >
                                        {item.description}
                                    </motion.p>

                                    {/* QUANTIDADE (AGORA NO FINAL) */}
                                    <div className="flex justify-center">
                                        <div className="flex items-center gap-3 bg-black/30 rounded-full px-2 py-1">

                                            <button
                                                onClick={() => decrease(item.id)}
                                                className="w-7 h-7 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition"
                                            >
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                    <rect x="5" y="11" width="14" height="2" />
                                                </svg>
                                            </button>

                                            <span className="text-white text-sm w-4 text-center">
                                                {quantity}
                                            </span>

                                            <button
                                                onClick={() => increase(item.id)}
                                                className="w-7 h-7 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition"
                                            >
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                    <path d="M11 5h2v14h-2zM5 11h14v2H5z" />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="flex flex-col items-center text-center px-10 md:px-[9.10rem] mb-20">
                        <motion.a
                            variants={catalogItem}
                            href="#"
                            className="bg-[#DC1A38] font-semibold text-white px-4 py-2 hover:bg-[#DC1A38]/90"
                        >
                            Ver mais
                        </motion.a>
                    </div>

                </section>

                <section className="min-h-screen text-black max-w-full relative overflow-hidden [clip-path:polygon(0_10%,100%_0,100%_100%,0_100%)]">

                    <div className="absolute select-none pointer-events-none w-full h-full">
                        <img
                            src="/images/pizza-pizza-filled-with-tomatoes-salami-olives.jpg"
                            alt="thumb"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 max-w-full w-full h-full bg-gradient-to-b from-black via-black/50 to-black/0" />
                    </div>

                    <div className="flex flex-col relative z-10 px-10 md:px-[9.10rem] md:py-[9.10rem] items-center justify-center mt-[10rem]">

                        <motion.div
                            variants={catalogContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <motion.h1
                                variants={catalogItem}
                                className="text-center text-[20px] md:text-3xl font-semibold md:max-w-md text-[#bdcfff] mb-5"
                            >
                                Toda empresa tem uma história. Nem todas sabem apresentá-la.
                            </motion.h1>

                            <motion.p
                                variants={catalogItem}
                                className="text-center max-w-xs mt-4 text-[#c9d7fd] mb-15"
                            >
                                Projetos digitais que transformam identidade em presença profissional.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={catalogContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-row items-center gap-2 mb-20"
                        >

                            <motion.a
                                variants={catalogItem}
                                href="https://proflt.vercel.app/"
                                target="_blank"
                                rel="noopener nooreferrer"
                                className="bg-[#DC1A38] font-semibold text-white px-4 py-2 hover:bg-[#DC1A38]/90 cursor-pointer"
                            >
                                Conhecer o estúdio
                            </motion.a>
                        </motion.div>
                    </div>

                </section>
            </div>
        </>
    );
};

export default Index;