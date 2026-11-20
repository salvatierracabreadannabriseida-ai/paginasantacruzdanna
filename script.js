tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'verde-cruceño': '#007A33',      /* Verde Bandera Oficial */
                        'verde-oscuro': '#005623',
                        'verde-claro': '#E6F4EA',
                        'verde-menta': '#A8DFB9',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    }
                }
            }
        }

document.addEventListener('DOMContentLoaded', () => {
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
});

// 2. Datos interactivos para la Reseña Histórica
        const datosHistoria = {
            fundacion: {
                titulo: "El nacimiento junto al arroyo Sutó (1561)",
                p1: "Santa Cruz de la Sierra fue fundada el <strong>26 de febrero de 1561</strong> por el capitán español <strong>Ñuflo de Chaves</strong>, tras una expedición proveniente del Paraguay. La bautizó así en honor a su tierra natal en Extremadura, España.",
                p2: "Debido a constantes conflictos y buscando tierras más fértiles, la ciudad realizó tres traslados históricos hasta asentarse definitivamente a orillas del río Piraí, conservando su espíritu hospitalario y luchador."
            },
            independencia: {
                titulo: "El Grito Libertario del 24 de Septiembre (1810)",
                p1: "El <strong>24 de septiembre de 1810</strong>, el pueblo cruceño se levantó contra el dominio colonial español, liderado por patriotas como Antonio Vicente Seoane, José Manuel Lemoine, Eustaquio Moldes y el coronel Ignacio Warnes.",
                p2: "Durante quince años de intensa lucha, Santa Cruz fue un bastión fundamental para consolidar la independencia y la libertad en todo el territorio."
            },
            modernidad: {
                titulo: "Motor Económico y Metrópoli Cosmopolita",
                p1: "A partir de la segunda mitad del siglo XX, Santa Cruz experimentó un crecimiento histórico gracias a su integración vial, la agroindustria, el comercio y el espíritu emprendedor de su gente.",
                p2: "Hoy es la ciudad más poblada y pujante de Bolivia, reconocida por recibir con los brazos abiertos a ciudadanos de todo el país y del mundo."
            }
        };

        function cambiarTabHistoria(etapa, botonSeleccionado) {
            // Actualizar estilos de los botones
            document.querySelectorAll('.tab-hist-btn').forEach(btn => {
                btn.classList.remove('bg-verde-cruceño', 'text-white');
                btn.classList.add('bg-verde-claro', 'text-verde-cruceño');
            });
            botonSeleccionado.classList.remove('bg-verde-claro', 'text-verde-cruceño');
            botonSeleccionado.classList.add('bg-verde-cruceño', 'text-white');

            // Actualizar contenido con animación
            const contenedor = document.getElementById('contenido-historia');
            const info = datosHistoria[etapa];
            contenedor.innerHTML = `
                <div class="animate-card space-y-4">
                    <p class="font-semibold text-verde-oscuro text-lg">${info.titulo}</p>
                    <p>${info.p1}</p>
                    <p>${info.p2}</p>
                </div>
            `;
        }

        // 3. Mostrar detalle interactivo de Reseñas Típicas
        function mostrarDetalleTipico(titulo, texto) {
            const caja = document.getElementById('caja-detalle-tipico');
            document.getElementById('titulo-detalle-tipico').textContent = titulo;
            document.getElementById('texto-detalle-tipico').textContent = texto;
            caja.classList.remove('hidden');
            caja.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // 4. Datos de las 5 Curiosidades con sus fotografías correspondientes
        const curiosidadesData = [
            {
                titulo: "Ciudad de los Anillos",
                imagen: "https://1.bp.blogspot.com/-XyyJieZoDeg/XmgFJsHnLXI/AAAAAAAAJh4/rhOFshAKdp8XvgU4vspRcT17kBDw4Z7TwCLcBGAsYHQ/w1200-h630-p-k-no-nu/inicio.jpg",
                fallback: "https://placehold.co/800x600/007A33/FFFFFF?text=Ciudad+de+los+Anillos",
                descripcion: "Santa Cruz de la Sierra es mundialmente famosa por su diseño urbanístico radial y concéntrico, inspirado en el plan Techint de la década de 1950. La ciudad crece ordenada en torno a avenidas circulares llamadas 'Anillos' atravesadas por avenidas 'Radiales'.",
                datoExtra: "El Primer Anillo rodea el Casco Viejo histórico, y actualmente la mancha urbana supera el Noveno Anillo."
            },
            {
                titulo: "Fundación",
                imagen: "https://tse1.mm.bing.net/th/id/OIP.Wlg33aPfkiThEv4290eoqgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
                fallback: "https://placehold.co/800x600/007A33/FFFFFF?text=Fundacion+de+Santa+Cruz+1561",
                descripcion: "Fue fundada originalmente en la serranía de Chiquitos (actual San José de Chiquitos) el 26 de febrero de 1561 por Ñuflo de Chaves. Es una de las pocas ciudades en el mundo que se mudó tres veces completa con sus habitantes antes de llegar a su ubicación actual.",
                datoExtra: "El Parque Histórico Santa Cruz La Vieja conserva las ruinas arqueológicas de su primer asentamiento."
            },
            {
                titulo: "Bandera",
                imagen: "https://th.bing.com/th/id/OIP.C8eq_m0Ndcv52nhGC01IKQHaEJ?w=300&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
                fallback: "https://placehold.co/800x600/007A33/FFFFFF?text=Bandera+Cruc%C3%B1a",
                descripcion: "Creada el 24 de julio de 1864 por el prefecto Tristán Roca, la bandera cruceña consta de tres franjas horizontales del mismo ancho: verde, blanco y verde. El verde simboliza la exuberante vegetación de nuestras selvas y llanuras, y el blanco representa la pureza, nobleza y hospitalidad de su gente.",
                datoExtra: "Cada 24 de julio se celebra con orgullo el Día de la Bandera Cruceña en todo el departamento."
            },
            {
                titulo: "Cruceña",
                imagen: "https://th.bing.com/th/id/OIP.v179PqzPDBu1Dii74fTI5QHaNX?w=132&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
                fallback: "https://placehold.co/800x600/007A33/FFFFFF?text=La+Mujer+Cruce%C3%B1a",
                descripcion: "La mujer cruceña es símbolo de alegría, hospitalidad, belleza y fortaleza. En las festividades tradicionales luce con orgullo el 'Tipoy' (vestido largo de una sola pieza adornado con encajes y flores tropicales) y trenzas adornadas con flores de patujú o tajibo.",
                datoExtra: "El famoso taquirari 'Viva Santa Cruz' inmortalizó la frase: 'En tus mujeres se anida el sol'."
            },
            {
                titulo: "El Tajibo",
                imagen: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&w=900&q=80",
                fallback: "https://placehold.co/800x600/007A33/FFFFFF?text=El+Tajibo+en+Flor",
                descripcion: "El Tajibo (Handroanthus) es el árbol emblemático que anuncia la llegada de la primavera en Santa Cruz. Durante los meses de agosto y septiembre pierde sus hojas y se cubre por completo de espectaculares flores rosadas, amarillas, blancas o moradas.",
                datoExtra: "Su madera es extremadamente resistente y sus flores alfombran las calles y plazas cruceñas creando una postal inolvidable."
            }
        ];

        let listaVisible = false;

        // Función del botón principal de Curiosidades
        function toggleCuriosidades() {
            const container = document.getElementById('lista-curiosidades-container');
            const textoBtn = document.getElementById('texto-btn-curiosidades');
            const iconoBtn = document.getElementById('icono-btn-curiosidades');

            listaVisible = !listaVisible;

            if (listaVisible) {
                container.classList.remove('hidden');
                container.classList.add('animate-card');
                textoBtn.textContent = "Ocultar Lista de Curiosidades";
                iconoBtn.className = "fas fa-chevron-up text-xl";
                seleccionarCuriosidad(0); // Muestra el primer ítem por defecto
            } else {
                container.classList.add('hidden');
                textoBtn.textContent = "Mostrar Lista de Curiosidades";
                iconoBtn.className = "fas fa-list-ul text-xl";
            }
        }

        // Función para seleccionar un ítem de la lista de curiosidades y mostrar su foto
        function seleccionarCuriosidad(indice) {
            const item = curiosidadesData[indice];
            const botones = document.querySelectorAll('.curiosidad-item-btn');

            // Actualizar estilos de botones de la lista
            botones.forEach((btn, idx) => {
                const badgeNum = btn.querySelector('span:first-child');
                const subText = btn.querySelector('span:last-child');
                if (idx === indice) {
                    btn.className = "curiosidad-item-btn w-full h-full p-4 rounded-2xl border-2 border-verde-cruceño bg-verde-cruceño text-white font-bold text-left shadow-md transition-all flex flex-col justify-between gap-3";
                    badgeNum.className = "w-8 h-8 rounded-lg bg-white text-verde-cruceño flex items-center justify-center font-extrabold text-sm";
                    subText.className = "text-xs opacity-90 font-normal flex items-center gap-1";
                } else {
                    btn.className = "curiosidad-item-btn w-full h-full p-4 rounded-2xl border-2 border-verde-cruceño/30 bg-white text-verde-cruceño hover:border-verde-cruceño font-bold text-left transition-all flex flex-col justify-between gap-3";
                    badgeNum.className = "w-8 h-8 rounded-lg bg-verde-claro text-verde-cruceño flex items-center justify-center font-extrabold text-sm";
                    subText.className = "text-xs text-slate-500 font-normal flex items-center gap-1";
                }
            });

            // Actualizar tarjeta visual con imagen
            const visor = document.getElementById('visor-curiosidad');
            const imgEl = document.getElementById('curiosidad-img');
            
            visor.classList.remove('animate-card');
            void visor.offsetWidth; // Reiniciar animación
            visor.classList.add('animate-card');

            imgEl.onerror = function() { this.src = item.fallback; };
            imgEl.src = item.imagen;
            imgEl.alt = item.titulo;

            document.getElementById('curiosidad-badge').textContent = `Curiosidad #${indice + 1}`;
            document.getElementById('curiosidad-titulo').textContent = item.titulo;
            document.getElementById('curiosidad-descripcion').textContent = item.descripcion;
            document.getElementById('curiosidad-dato-extra').textContent = item.datoExtra;
        }
