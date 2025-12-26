// ===== FOTOS GIRATORIAS CON KURO AMY ESPECIAL =====

class SimplePhotos {
    constructor() {
        this.container = document.getElementById('photos-container');
        this.photos = [];
        this.angle = 0;
        this.radius = 250;
        this.centerX = window.innerWidth / 2;
        this.centerY = window.innerHeight / 2;
        this.animationSpeed = 0.003;
        
        this.KURO_AMY_INDEX = 9;
        // Nombres de las imágenes con sus respectivos títulos
        this.imageList = [
            {filename: 'kurona1.png', title: 'Navidad Kurona', artist: 'Artista Kuro Amy'},
            {filename: 'kurona2.png', title: 'Brillo Estelar', artist: 'Artista Kuro Amy'},
            {filename: 'kurona3.png', title: 'Ángel Navideño', artist: 'Artista Kuro Amy'},
            {filename: 'kurona4.png', title: 'Noche de Paz', artist: 'Artista Kuro Amy'},
            {filename: 'kurona5.png', title: 'Estrella Guía', artist: 'Artista Kuro Amy'},
            {filename: 'kurona6.png', title: 'Regalo de Amor', artist: 'Artista Kuro Amy'},
            {filename: 'kurona7.png', title: 'Brisa Invernal', artist: 'Artista Kuro Amy'},
            {filename: 'kurona8.png', title: 'Luz de Esperanza', artist: 'Artista Kuro Amy'},
            {filename: 'kurona9.png', title: 'Sueños de Invierno', artist: 'Artista Kuro Amy'},
            {filename: 'kuro_amy.png', title: 'Kuro Amy', artist: ''}
            
            // Para agregar más imágenes en el futuro:
            // {filename: 'kurona7.png', title: 'Título 7', artist: 'Artista Kurona'},
            // {filename: 'kurona8.png', title: 'Título 8', artist: 'Artista Kurona'},
        ];
        
        // Más frases para las tarjetas de Kurona (índices 0-8)
        this.kuronaMessages = [
            `¡Feliz Navidad comunidad Kurona! 🎄\n\nQue este año termine lleno de alegría y el próximo comience con nuevas esperanzas. Brindemos por más momentos juntos, por más risas compartidas y por esta maravillosa familia virtual que hemos construido. Que cada luz en sus árboles navideños brille tan fuerte como la pasión que ponen en cada ilustración, cada stream y cada mensaje de apoyo.\n\n¡Sigamos creciendo juntos! 🥂`,
            
            `Que la magia de la Navidad llene sus corazones ✨\n\nQue cada luz en el árbol represente un sueño cumplido y cada campanada anuncie un nuevo deseo por alcanzar. Que el espíritu navideño les traiga paz interior, momentos de reflexión y la certeza de que, aunque estemos distantes físicamente, nuestros corazones laten al mismo ritmo de comunidad y solidaridad.\n\n¡Brillemos juntos en esta temporada especial! 🌟`,
            
            `Unidos en espíritu navideño ❤️\n\nEn la distancia o cerca, nuestra comunidad permanece unida por lazos invisibles pero fuertes como el acero. Gracias por ser parte de esta familia virtual, por cada apoyo, cada palabra de aliento y cada momento compartido. Que esta Navidad nos recuerde que la verdadera magia está en la conexión humana, en el apoyo mutuo y en el amor que compartimos.\n\n¡Felices fiestas a todos! 🎁`,
            
            `Brillando juntos estas fiestas 🌟\n\nComo estrellas en el cielo, cada uno de ustedes ilumina nuestro camino con su talento único, su creatividad desbordante y su calidez humana. Que estas fiestas nos encontremos compartiendo, creando y apoyándonos mutuamente. Recordemos que juntos somos más fuertes, juntos brillamos más y juntos podemos alcanzar cualquier meta que nos propongamos.\n\n¡Sigamos iluminando el camino! 💫`,
            
            `Amor y paz para todos ☮️\n\nQue estas fiestas traigan tranquilidad a sus hogares y felicidad a sus corazones. Abramos nuestras almas al amor, al perdón y a la esperanza. Que el nuevo año nos encuentre más unidos que nunca, celebrando cada pequeño logro y apoyándonos en cada desafío. La comunidad Kurona es un faro de creatividad y bondad, y estoy orgulloso de ser parte de ella.\n\n¡Paz y amor para todos! 🕊️`,
            
            `¡Feliz Navidad y próspero Año Nuevo! 🎉\n\nQue el próximo año esté lleno de éxitos, salud y momentos inolvidables. A celebrar con alegría cada logro, cada nuevo proyecto y cada paso adelante. Que nos traiga nuevas oportunidades para crecer como artistas, como comunidad y como personas. Mantengamos viva la llama de la creatividad y sigamos inspirándonos mutuamente.\n\n¡Salud, amor y prosperidad para todos! 🥳`,
            
            `Luz, amor y creatividad eterna 🎨\n\nQue el nuevo año nos traiga paletas de colores vibrantes, pinceles que nunca se sequen y lienzos infinitos para plasmar nuestros sueños. Que cada proyecto sea una aventura, cada creación una pieza de nuestro corazón y cada desafío una oportunidad para brillar. La comunidad Kurona es un faro de inspiración donde cada artista encuentra su voz única y su estilo personal.\n\n¡Que la musa nunca nos abandone! ✨`,
            
            `Nueva energía, nuevos horizontes 🚀\n\nAl cerrar este capítulo, abramos uno nuevo lleno de posibilidades infinitas. Que cada amanecer traiga ideas frescas, cada atardecer reflexiones profundas y cada noche descanso merecido. Que nuestros proyectos florezcan como jardines en primavera y nuestros éxitos se multipliquen como estrellas en el firmamento.\n\n¡El límite es el cielo! 🌌`,
            
            `Conexiones que trascienden pantallas 💻\n\nAunque nos separan kilómetros, nos une la pasión por el arte, la creatividad y el apoyo mutuo. Que esta Navidad fortalezca nuestros lazos, que el Año Nuevo traiga más colaboraciones emocionantes y que siempre recordemos que detrás de cada avatar hay un corazón que late con el mismo amor por lo que hacemos.\n\n¡Juntos hasta el infinito y más allá! 🌠`,
            
            // Mensaje especial para Kuro Amy (índice 9)
            `Para nuestra amada jefa Kuro Amy, 💖\n\nTu luz ha guiado esta comunidad como la estrella de Belén guió a los Reyes Magos. Tu dedicación, creatividad y cariño han transformado nuestro espacio en un verdadero hogar virtual.\n\nGracias por cada stream lleno de energía positiva, por cada risa compartida que ilumina nuestros días, por cada consejo dado con paciencia y sabiduría. Eres más que una streamer: eres nuestra líder, nuestra inspiración, nuestra amiga y el corazón que late al ritmo de esta maravillosa comunidad.\n\nRecuerdo cuando empezamos este viaje, éramos solo un grupo pequeño con grandes sueños. Hoy, gracias a tu visión y esfuerzo, somos una familia que crece día a día, apoyándonos mutuamente en cada proyecto, celebrando cada logro y consolándonos en cada dificultad.\n\nQue esta Navidad te traiga toda la felicidad que mereces, que el Año Nuevo esté repleto de éxitos profesionales, salud abundante y bendiciones sin fin. Que nunca dejes de brillar con esa luz única que tienes, esa combinación perfecta de talento, humildad y generosidad que nos inspira a todos a ser mejores.\n\nDondequiera que estés en estas fiestas, sabes que tienes un ejército de Kuronas que te apoya, te admira y te quiere. Este regalo navideño es solo un pequeño reflejo de todo el cariño que sentimos por ti.\n\n¡Feliz Navidad, Jefa! 👑✨\nCon todo el amor, respeto y admiración de tu comunidad Kurona. 🎄❤️🎅`
        ];
        
        this.init();
    }
    
    init() {
        this.createPhotos();
        this.animate();
        this.setupEvents();
        
        window.addEventListener('resize', () => {
            this.centerX = window.innerWidth / 2;
            this.centerY = window.innerHeight / 2;
            this.radius = Math.min(window.innerWidth, window.innerHeight) * 0.3;
            this.positionPhotos();
        });
    }
    
    createPhotos() {
        this.container.innerHTML = '';
        this.photos = [];
        
        this.imageList.forEach((imageData, index) => {
            const photo = document.createElement('div');
            photo.className = 'photo-frame';
            photo.style.position = 'absolute';
            
            if (index === this.KURO_AMY_INDEX) {
                photo.style.width = '380px';
                photo.style.height = '214px';
                photo.classList.add('special-photo', 'kuro-amy-photo');
                photo.style.zIndex = '1000';
            } else {
                photo.style.width = '170px';
                photo.style.height = '220px';
                photo.classList.add('normal-photo');
            }
            
            photo.style.cursor = 'pointer';
            
            const frame = document.createElement('div');
            frame.className = 'frame';
            if (index === this.KURO_AMY_INDEX) {
                frame.style.cssText = `
                    background: linear-gradient(135deg, 
                        rgba(255, 107, 107, 0.3), 
                        rgba(255, 215, 0, 0.4),
                        rgba(255, 107, 107, 0.3));
                    border: 4px solid var(--color-gold);
                    box-shadow: 
                        inset 0 0 35px rgba(255, 255, 255, 0.4), 
                        0 15px 45px rgba(0, 0, 0, 0.9),
                        0 0 50px rgba(255, 215, 0, 0.6);
                    border-radius: 18px;
                `;
            }
            
            const imgContainer = document.createElement('div');
            imgContainer.className = 'photo';
            if (index === this.KURO_AMY_INDEX) {
                imgContainer.style.cssText = `
                    top: 15px;
                    left: 15px;
                    right: 15px;
                    bottom: 15px;
                    border-radius: 12px;
                    overflow: hidden;
                    background: #000;
                `;
            }
            
            const img = new Image();
            img.src = `img/${imageData.filename}`;
            
            if (index === this.KURO_AMY_INDEX) {
                img.alt = 'Kuro Amy - La Jefa';
                img.style.cssText = `
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.5s ease;
                `;
                
                photo.addEventListener('mouseenter', () => {
                    img.style.transform = 'scale(1.08)';
                    photo.style.filter = 'brightness(1.3) drop-shadow(0 0 20px gold)';
                });
                
                photo.addEventListener('mouseleave', () => {
                    img.style.transform = 'scale(1)';
                    photo.style.filter = 'brightness(1) drop-shadow(none)';
                });
                
                const crown = document.createElement('div');
                crown.style.cssText = `
                    position: absolute;
                    top: -35px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 70px;
                    height: 40px;
                    background: var(--color-gold);
                    clip-path: polygon(0% 100%, 20% 0%, 40% 30%, 60% 0%, 80% 30%, 100% 100%);
                    z-index: 20;
                    box-shadow: 0 0 30px var(--color-gold);
                    animation: crownFloat 3s ease-in-out infinite;
                `;
                photo.appendChild(crown);
                
                const jefaText = document.createElement('div');
                jefaText.style.cssText = `
                    position: absolute;
                    bottom: -45px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: var(--color-gold);
                    font-family: var(--font-title);
                    font-size: 22px;
                    font-weight: bold;
                    text-shadow: 0 0 25px rgba(255, 215, 0, 1);
                    white-space: nowrap;
                    letter-spacing: 4px;
                    z-index: 10;
                    padding: 8px 20px;
                    background: rgba(0, 0, 0, 0.7);
                    border-radius: 25px;
                    border: 2px solid rgba(255, 215, 0, 0.5);
                `;
                jefaText.textContent = 'LA JEFA';
                photo.appendChild(jefaText);
            } else {
                img.alt = imageData.title;
                img.style.objectFit = 'cover';
                img.style.width = '100%';
                img.style.height = '100%';
            }
            
            img.onerror = () => {
                img.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.style.cssText = `
                    width: 100%;
                    height: 100%;
                    background: ${index === this.KURO_AMY_INDEX ? 
                        'linear-gradient(135deg, rgba(255, 107, 107, 0.6), rgba(255, 215, 0, 0.6))' : 
                        'linear-gradient(135deg, rgba(138, 43, 226, 0.4), rgba(75, 0, 130, 0.4))'};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: ${index === this.KURO_AMY_INDEX ? '22px' : '14px'};
                    text-align: center;
                    padding: 20px;
                    border-radius: 10px;
                    font-family: ${index === this.KURO_AMY_INDEX ? 'var(--font-title)' : 'inherit'};
                `;
                placeholder.textContent = index === this.KURO_AMY_INDEX ? 'KURO AMY\n👑 LA JEFA 👑' : imageData.title;
                imgContainer.appendChild(placeholder);
            };
            
            imgContainer.appendChild(img);
            photo.appendChild(frame);
            photo.appendChild(imgContainer);
            
            const shine = document.createElement('div');
            shine.className = 'shine';
            photo.appendChild(shine);
            
            const isSpecial = index === this.KURO_AMY_INDEX;
            photo.dataset.index = index;
            photo.dataset.special = isSpecial;
            
            let angle, radiusOffset, heightOffset;
            
            if (isSpecial) {
                angle = 0;
                radiusOffset = 0;
                heightOffset = window.innerHeight * 0.75;
            } else {
                angle = (index / (this.imageList.length - 1)) * Math.PI * 2;
                radiusOffset = this.radius * (0.8 + Math.random() * 0.4);
                heightOffset = (Math.random() - 0.5) * 100;
            }
            
            this.photos.push({
                element: photo,
                originalAngle: angle,
                currentAngle: angle,
                radius: radiusOffset,
                heightOffset: heightOffset,
                isSpecial: isSpecial,
                fixedY: isSpecial ? heightOffset : null
            });
            
            this.container.appendChild(photo);
        });
    }
    
    positionPhotos() {
        const windowHeight = window.innerHeight;
        
        this.photos.forEach(photo => {
            let totalAngle;
            
            if (photo.isSpecial) {
                totalAngle = 0;
            } else {
                totalAngle = photo.currentAngle;
            }
            
            const x = this.centerX + Math.cos(totalAngle) * photo.radius;
            let y;
            
            if (photo.isSpecial) {
                y = photo.fixedY;
            } else {
                y = this.centerY + Math.sin(totalAngle) * photo.radius * 0.3 + photo.heightOffset;
            }
            
            const frontFactor = Math.cos(totalAngle);
            const scale = photo.isSpecial ? 1.2 : (0.7 + frontFactor * 0.3);
            const zIndex = photo.isSpecial ? 1000 : Math.floor((frontFactor + 1) * 50);
            
            const halfWidth = parseInt(photo.element.style.width) / 2;
            const halfHeight = parseInt(photo.element.style.height) / 2;
            
            photo.element.style.transform = `translate(${x - halfWidth}px, ${y - halfHeight}px) scale(${scale})`;
            photo.element.style.zIndex = zIndex;
            photo.element.style.opacity = photo.isSpecial ? 1 : (0.6 + frontFactor * 0.4);
            
            if (photo.isSpecial) {
                const floatOffset = Math.sin(Date.now() * 0.002) * 8;
                photo.element.style.transform = `translate(${x - halfWidth}px, ${y - halfHeight + floatOffset}px) scale(${scale})`;
            }
        });
    }
    
    animate() {
        this.photos.forEach(photo => {
            if (!photo.isSpecial) {
                photo.currentAngle += this.animationSpeed;
            }
        });
        
        this.positionPhotos();
        requestAnimationFrame(() => this.animate());
    }
    
    setupEvents() {
        this.container.addEventListener('click', (e) => {
            const photo = e.target.closest('.photo-frame');
            if (photo) {
                const index = parseInt(photo.dataset.index);
                this.showCard(index);
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.photo-frame') && 
                !e.target.closest('.card-content') &&
                !e.target.closest('.gift-button') &&
                !e.target.closest('.dog-content')) {
                this.hideCard();
                this.hideDogModal();
            }
        });
    }
    
    
    showCard(index) {
    const overlay = document.getElementById('card-overlay');
    const cardImage = document.getElementById('card-image');
    const cardArtist = document.getElementById('card-artist');
    const cardMessage = document.getElementById('card-message-text');
    const cardTitle = document.getElementById('card-title');
    const cardFooter = document.querySelector('.card-footer');
    
    // Limpiar cualquier contenido anterior
    cardImage.src = `img/${this.imageList[index].filename}`;
    
    // 1. TÍTULO - Solo texto, sin estilos complicados
    cardTitle.textContent = this.imageList[index].title;
    cardTitle.removeAttribute('style');
    cardTitle.style.cssText = `
        color: var(--color-gold);
        font-family: var(--font-title);
        font-size: ${index === this.KURO_AMY_INDEX ? '2.8rem' : '2.3rem'};
        margin-bottom: ${index === this.KURO_AMY_INDEX ? '10px' : '15px'};
        text-align: center;
        text-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
        line-height: 1.2;
        display: block;
        visibility: visible;
        opacity: 1;
        font-weight: bold;
        padding: 10px 15px;
        width: 100%;
        box-sizing: border-box;
    `;
    
    // 2. ARTISTA - Solo si existe
    if (this.imageList[index].artist && this.imageList[index].artist.trim() !== '') {
        cardArtist.textContent = this.imageList[index].artist;
        cardArtist.style.cssText = `
            color: ${index === this.KURO_AMY_INDEX ? 'var(--color-gold)' : 'var(--color-text-dim)'};
            font-weight: ${index === this.KURO_AMY_INDEX ? 'bold' : 'normal'};
            font-size: ${index === this.KURO_AMY_INDEX ? '1.5rem' : '1.3rem'};
            margin-bottom: 20px;
            text-align: center;
            ${index === this.KURO_AMY_INDEX ? 'text-shadow: 0 0 10px rgba(255, 215, 0, 0.7);' : ''}
            display: block;
            visibility: visible;
            opacity: 1;
        `;
    } else {
        cardArtist.style.display = 'none';
    }
    
    // 3. MENSAJE - Corregido para evitar duplicación
    const messageIndex = index < this.kuronaMessages.length ? index : 0;
    cardMessage.textContent = this.kuronaMessages[messageIndex];
    
    // Limpiar cualquier mensaje duplicado
    const existingMessages = document.querySelectorAll('#card-message-text');
    if (existingMessages.length > 1) {
        for (let i = 1; i < existingMessages.length; i++) {
            existingMessages[i].remove();
        }
    }
    
    cardMessage.style.cssText = `
        font-size: ${index === this.KURO_AMY_INDEX ? '1.2rem' : '1.1rem'};
        line-height: 1.8;
        white-space: pre-line;
        text-align: left;
        color: var(--color-text);
        font-family: var(--font-body);
        margin: 0;
        padding: 0;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
        display: block;
        visibility: visible;
        opacity: 1;
    `;
    
    // 4. CONTENEDOR DE MENSAJE - Hacerlo más grande
    const cardMessageContainer = document.querySelector('.card-message');
    if (!cardMessageContainer) {
        // Si no existe, crearlo
        const newMessageContainer = document.createElement('div');
        newMessageContainer.className = 'card-message';
        newMessageContainer.id = 'card-message-container';
        const cardTextContainer = document.querySelector('.card-text-container');
        
        // Insertar después del artista
        if (cardArtist.style.display !== 'none') {
            cardTextContainer.insertBefore(newMessageContainer, cardMessageContainer || cardFooter);
        } else {
            cardTextContainer.insertBefore(newMessageContainer, cardTitle.nextElementSibling);
        }
        newMessageContainer.appendChild(cardMessage);
    }
    
    cardMessageContainer.style.cssText = `
        padding: 30px;
        background: rgba(255, 215, 0, ${index === this.KURO_AMY_INDEX ? '0.12' : '0.08'});
        border-left: 5px solid var(--color-gold);
        border-radius: 12px;
        margin: 20px 0;
        overflow-y: auto;
        position: relative;
        box-shadow: inset 0 0 15px rgba(255, 215, 0, 0.05);
        display: block;
        visibility: visible;
        opacity: 1;
        height: auto;
        min-height: 200px;
        max-height: 350px;
        flex: 1;
    `;
    
    // 5. FOOTER - Simplificado
    cardFooter.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: auto;
        padding: 20px;
        border-top: 2px solid rgba(255, 215, 0, 0.4);
        position: relative;
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0 0 20px 20px;
        min-height: 60px;
        flex-direction: column;
        visibility: visible;
        opacity: 1;
    `;
    
    // 6. TEXTO DEL FOOTER
    let footerText = cardFooter.querySelector('.footer-text');
    if (!footerText) {
        footerText = document.createElement('div');
        footerText.className = 'footer-text';
        cardFooter.innerHTML = '';
        cardFooter.appendChild(footerText);
    }
    footerText.textContent = 'Con cariño, la Comunidad Kurona';
    footerText.style.cssText = `
        color: var(--color-silver);
        font-size: 1.1rem;
        text-align: center;
        padding: 5px;
        white-space: normal;
        word-wrap: break-word;
        overflow-wrap: break-word;
        width: 100%;
        font-family: var(--font-body);
        line-height: 1.5;
        display: block;
        visibility: visible;
        opacity: 1;
    `;
    
    // 7. BOTÓN ESPECIAL PARA KURO AMY
    const cardTextContainer = document.querySelector('.card-text-container');
    if (index === this.KURO_AMY_INDEX) {
        // Verificar que no haya un botón existente
        const existingBtn = cardTextContainer.querySelector('.gift-button');
        if (existingBtn) {
            existingBtn.remove();
        }
        
        // Crear y añadir el botón
        const giftButton = document.createElement('button');
        giftButton.className = 'gift-button';
        giftButton.innerHTML = `
            <i class="fas fa-gift"></i>
            <span class="gift-text">Solo para ti</span>
            <i class="fas fa-heart"></i>
        `;
        
        giftButton.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            background: linear-gradient(135deg, 
                var(--color-red) 0%,
                #ff3366 50%,
                var(--color-red) 100%);
            background-size: 200% 100%;
            border: none;
            color: white;
            padding: 16px 32px;
            border-radius: 15px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            margin: 20px auto;
            transition: all 0.3s ease;
            min-width: 300px;
            max-width: 90%;
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(255, 51, 102, 0.6);
            letter-spacing: 0.5px;
            pointer-events: auto;
        `;
        
        giftButton.onmouseover = () => {
            giftButton.style.backgroundPosition = '100% 0';
            giftButton.style.transform = 'translateY(-3px)';
            giftButton.style.boxShadow = '0 12px 30px rgba(255, 51, 102, 0.8)';
        };
        
        giftButton.onmouseout = () => {
            giftButton.style.backgroundPosition = '0 0';
            giftButton.style.transform = 'translateY(0)';
            giftButton.style.boxShadow = '0 8px 25px rgba(255, 51, 102, 0.6)';
        };
        
        giftButton.onclick = (e) => {
            e.stopPropagation();
            giftButton.style.animation = 'buttonPulse 0.5s ease';
            setTimeout(() => {
                this.showDogModal();
            }, 500);
        };
        
        // Insertar antes del footer
        if (cardFooter) {
            cardTextContainer.insertBefore(giftButton, cardFooter);
        } else {
            cardTextContainer.appendChild(giftButton);
        }
    } else {
        // Eliminar botón si existe y no es Kuro Amy
        const existingBtn = cardTextContainer.querySelector('.gift-button');
        if (existingBtn) {
            existingBtn.remove();
        }
    }
    
    // 8. Asegurar que el contenedor de texto tenga el layout correcto
    cardTextContainer.style.cssText = `
        flex: 1;
        padding: 40px;
        display: flex;
        flex-direction: column;
        background: rgba(26, 26, 46, 0.6);
        position: relative;
        overflow: hidden;
        height: 100%;
        visibility: visible;
        opacity: 1;
    `;
    
    // 9. Mostrar el overlay
    overlay.classList.add('active');
    
    // 10. Depuración (opcional)
    console.log('Tarjeta mostrada:', {
        index: index,
        title: this.imageList[index].title,
        artista: this.imageList[index].artist,
        esKuroAmy: index === this.KURO_AMY_INDEX
    });
}
    
    addGiftButton(cardTextContainer) {
        const existingBtn = cardTextContainer.querySelector('.gift-button');
        if (existingBtn) {
            existingBtn.remove();
        }
        
        const giftButton = document.createElement('button');
        giftButton.className = 'gift-button';
        giftButton.innerHTML = `
            <i class="fas fa-gift"></i>
            <span class="gift-text">Abrir regalo especial para la jefa</span>
            <i class="fas fa-heart"></i>
        `;
        
        giftButton.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            background: linear-gradient(135deg, 
                var(--color-red) 0%,
                #ff3366 50%,
                var(--color-red) 100%);
            background-size: 200% 100%;
            border: none;
            color: white;
            padding: 18px 35px;
            border-radius: 20px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            margin: 20px auto;
            transition: all 0.3s ease;
            min-width: 350px;
            max-width: 90%;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(255, 51, 102, 0.8);
            letter-spacing: 0.5px;
            pointer-events: auto;
            flex-shrink: 0;
        `;
        
        giftButton.onmouseover = () => {
            giftButton.style.backgroundPosition = '100% 0';
            giftButton.style.transform = 'translateY(-5px)';
            giftButton.style.boxShadow = '0 15px 35px rgba(255, 51, 102, 1)';
        };
        
        giftButton.onmouseout = () => {
            giftButton.style.backgroundPosition = '0 0';
            giftButton.style.transform = 'translateY(0)';
            giftButton.style.boxShadow = '0 10px 30px rgba(255, 51, 102, 0.8)';
        };
        
        giftButton.onclick = (e) => {
            e.stopPropagation();
            giftButton.style.animation = 'buttonPulse 0.5s ease';
            setTimeout(() => {
                this.showDogModal();
            }, 500);
        };
        
        // Insertar antes del footer
        const cardFooter = cardTextContainer.querySelector('.card-footer');
        if (cardFooter) {
            cardTextContainer.insertBefore(giftButton, cardFooter);
        } else {
            cardTextContainer.appendChild(giftButton);
        }
    }
    
    showDogModal() {
        let dogModal = document.getElementById('dog-modal');
        
        if (!dogModal) {
            dogModal = document.createElement('div');
            dogModal.id = 'dog-modal';
            dogModal.className = 'dog-modal';
            dogModal.innerHTML = `
                <div class="dog-content">
                    <button class="close-dog-modal">×</button>
                    
                    <div class="dog-layout">
                        <div class="dog-image-side">
                            <img src="img/shiro.jpg" alt="Shiro, el angelito" class="dog-image">
                        </div>
                        
                        <div class="dog-text-side">
                            <div class="dog-header">
                                <h3 class="dog-title"><i class="fas fa-paw"></i> Para Shiro, nuestro angelito <i class="fas fa-star"></i></h3>
                                <p class="dog-subtitle">Un recuerdo eterno en nuestros corazones</p>
                            </div>
                            
                            <div class="dog-message-scroll">
                                <div class="dog-message-content">
                                    <p class="poem-stanza">
                                        En el jardín de los recuerdos más puros,<br>
                                        donde el tiempo se detiene en susurros,<br>
                                        vive tu esencia, ligera y eterna,<br>
                                        como una brisa de amor que nunca duerme.
                                    </p>
                                    
                                    <p class="poem-stanza highlight">
                                        No fue un adiós, fue un "hasta pronto",<br>
                                        en el lenguaje del corazón, nuestro idioma,<br>
                                        donde las patitas que marcaron senderos<br>
                                        ahora trazan constelaciones en el cielo entero.
                                    </p>
                                    
                                    <p class="poem-stanza">
                                        Tu pelaje como nieve recién caída,<br>
                                        tus ojos, dos luceros que aún nos guían,<br>
                                        en cada latido, en cada respiro,<br>
                                        tu memoria es el abrigo que nunca expira.
                                    </p>
                                    
                                    <p class="poem-stanza closing">
                                        <em>Descansa, pequeña alma, en mullidas nubes,<br>
                                        juega con ángeles y recibe todas las luces.<br>
                                        Sabiendo que aquí, en este lado del velo,<br>
                                        tu amor permanece, vivo y anhelo.</em>
                                    </p>
                                    
                                    <div class="dog-dedication">
                                        <div class="paw-line">
                                            <span class="paw">🐾</span>
                                            <span class="paw">🐾</span>
                                            <span class="paw">🐾</span>
                                        </div>
                                        
                                        <p class="dedication-text">
                                            Para nuestro pequeño compañero que nos enseñó el significado<br>
                                            del amor incondicional y la lealtad eterna.<br><br>
                                            Que en el cielo de los perritos felices<br>
                                            corra libre entre campos de estrellas y nubes algodonosas.
                                        </p>
                                        
                                        <div class="signature">
                                            <p>Con todo el cariño y respeto de</p>
                                            <p class="community-name">La Comunidad Kurona</p>
                                        </div>
                                        
                                        <div class="paw-line">
                                            <span class="paw">🐾</span>
                                            <span class="paw">🐾</span>
                                            <span class="paw">🐾</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(dogModal);
            
            const modalStyles = document.createElement('style');
            modalStyles.textContent = `
                .dog-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(10, 10, 15, 0.98);
                    backdrop-filter: blur(15px);
                    z-index: 2000;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    padding: 20px;
                }
                
                .dog-modal.active {
                    display: flex;
                    opacity: 1;
                }
                
                .dog-content {
                    background: linear-gradient(145deg, 
                        rgba(26, 26, 46, 0.95),
                        rgba(15, 15, 26, 0.95));
                    border: 3px solid var(--color-gold);
                    border-radius: 20px;
                    width: 95%;
                    max-width: 1300px;
                    height: 85%;
                    overflow: hidden;
                    animation: modalAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8);
                    display: flex;
                    flex-direction: column;
                }
                
                .close-dog-modal {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 45px;
                    height: 45px;
                    background: var(--color-red);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    z-index: 10;
                }
                
                .close-dog-modal:hover {
                    background: #ff3366;
                    transform: rotate(90deg) scale(1.1);
                }
                
                .dog-layout {
                    display: flex;
                    height: 100%;
                    width: 100%;
                }
                
                .dog-image-side {
                    flex: 0 0 450px;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }
                
                .dog-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    border-radius: 10px;
                }
                
                .dog-text-side {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 40px;
                    background: rgba(26, 26, 46, 0.8);
                }
                
                .dog-header {
                    text-align: center;
                    margin-bottom: 25px;
                    flex-shrink: 0;
                }
                
                .dog-title {
                    color: var(--color-gold);
                    font-family: var(--font-title);
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                }
                
                .dog-subtitle {
                    color: var(--color-silver);
                    font-size: 1.2rem;
                    font-style: italic;
                }
                
                .dog-message-scroll {
                    flex: 1;
                    overflow-y: auto;
                    padding: 15px;
                    background: rgba(255, 215, 0, 0.05);
                    border-radius: 15px;
                    border: 2px solid rgba(255, 215, 0, 0.2);
                }
                
                .dog-message-content {
                    padding: 20px;
                }
                
                .poem-stanza {
                    font-size: 1.4rem;
                    line-height: 2.1;
                    margin-bottom: 30px;
                    color: var(--color-text);
                    font-family: var(--font-handwriting);
                    text-align: center;
                }
                
                .poem-stanza.highlight {
                    color: var(--color-gold);
                    font-weight: bold;
                    font-size: 1.5rem;
                    margin: 35px 0;
                }
                
                .poem-stanza.closing {
                    color: var(--color-text-dim);
                    font-style: italic;
                    margin-top: 35px;
                    margin-bottom: 40px;
                }
                
                .dog-dedication {
                    margin-top: 40px;
                    padding-top: 40px;
                    border-top: 2px solid rgba(255, 215, 0, 0.3);
                    text-align: center;
                }
                
                .paw-line {
                    display: flex;
                    justify-content: center;
                    gap: 35px;
                    margin: 25px 0;
                }
                
                .paw {
                    font-size: 32px;
                    animation: pawBounce 2s ease-in-out infinite;
                    opacity: 0.8;
                }
                
                .paw:nth-child(1) { animation-delay: 0s; }
                .paw:nth-child(2) { animation-delay: 0.4s; }
                .paw:nth-child(3) { animation-delay: 0.8s; }
                
                .dedication-text {
                    color: var(--color-silver);
                    font-size: 1.3rem;
                    line-height: 1.9;
                    margin: 30px 0;
                    font-family: var(--font-body);
                }
                
                .signature {
                    margin: 35px 0;
                    color: var(--color-text-dim);
                    font-size: 1.2rem;
                }
                
                .community-name {
                    color: var(--color-gold);
                    font-family: var(--font-title);
                    font-size: 1.5rem;
                    margin: 20px 0;
                    letter-spacing: 3px;
                }
                
                /* Scrollbar */
                .dog-message-scroll::-webkit-scrollbar {
                    width: 10px;
                }
                
                .dog-message-scroll::-webkit-scrollbar-track {
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 5px;
                }
                
                .dog-message-scroll::-webkit-scrollbar-thumb {
                    background: var(--color-gold);
                    border-radius: 5px;
                }
                
                @keyframes modalAppear {
                    from {
                        transform: scale(0.9) translateY(30px);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1) translateY(0);
                        opacity: 1;
                    }
                }
                
                @keyframes pawBounce {
                    0%, 100% { transform: translateY(0); opacity: 0.8; }
                    50% { transform: translateY(-15px); opacity: 1; }
                }
                
                @keyframes buttonPulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.08); }
                    100% { transform: scale(1); }
                }
                
                /* Responsive */
                @media (max-width: 1100px) {
                    .dog-content {
                        max-width: 95%;
                        height: 90%;
                    }
                    
                    .dog-image-side {
                        flex: 0 0 350px;
                    }
                    
                    .dog-title {
                        font-size: 2.2rem;
                    }
                    
                    .poem-stanza {
                        font-size: 1.3rem;
                    }
                }
                
                @media (max-width: 900px) {
                    .dog-layout {
                        flex-direction: column;
                        height: auto;
                        max-height: 90vh;
                    }
                    
                    .dog-content {
                        height: auto;
                        max-height: 95vh;
                    }
                    
                    .dog-image-side {
                        flex: 0 0 auto;
                        height: 300px;
                        width: 100%;
                        padding: 15px;
                    }
                    
                    .dog-image {
                        height: 100%;
                        width: auto;
                        max-width: 100%;
                    }
                    
                    .dog-text-side {
                        flex: 1;
                        padding: 30px;
                        overflow-y: auto;
                        max-height: 60vh;
                    }
                    
                    .dog-title {
                        font-size: 2rem;
                        flex-direction: column;
                        gap: 10px;
                    }
                    
                    .dog-message-scroll {
                        max-height: none;
                    }
                }
                
                @media (max-width: 600px) {
                    .dog-image-side {
                        height: 250px;
                    }
                    
                    .dog-text-side {
                        padding: 20px;
                    }
                    
                    .dog-title {
                        font-size: 1.8rem;
                    }
                    
                    .poem-stanza {
                        font-size: 1.2rem;
                        line-height: 1.9;
                    }
                    
                    .dedication-text {
                        font-size: 1.1rem;
                    }
                    
                    .paw-line {
                        gap: 25px;
                    }
                    
                    .paw {
                        font-size: 28px;
                    }
                }
                
                @media (max-width: 480px) {
                    .dog-image-side {
                        height: 200px;
                    }
                    
                    .dog-title {
                        font-size: 1.6rem;
                    }
                    
                    .dog-subtitle {
                        font-size: 1rem;
                    }
                    
                    .poem-stanza {
                        font-size: 1.1rem;
                        line-height: 1.8;
                    }
                }
            `;
            document.head.appendChild(modalStyles);
            
            const closeBtn = dogModal.querySelector('.close-dog-modal');
            closeBtn.onclick = () => {
                dogModal.classList.remove('active');
            };
            
            dogModal.onclick = (e) => {
                if (e.target === dogModal) {
                    dogModal.classList.remove('active');
                }
            };
        }
        
        dogModal.classList.add('active');
    }
    
    hideCard() {
        document.getElementById('card-overlay').classList.remove('active');
    }
    
    hideDogModal() {
        const dogModal = document.getElementById('dog-modal');
        if (dogModal) {
            dogModal.classList.remove('active');
        }
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new SimplePhotos();
    }, 1000);
});
// Añadir CSS crítico para asegurar que el título sea visible
document.addEventListener('DOMContentLoaded', function() {
    const criticalCSS = document.createElement('style');
    criticalCSS.textContent = `
        /* CSS CRÍTICO - Garantizar visibilidad del título */
        #card-title {
            font-family: var(--font-title) !important;
            font-size: clamp(1.8rem, 4vw, 2.8rem) !important;
            color: var(--color-gold) !important;
            margin-bottom: 15px !important;
            text-shadow: 
                0 0 15px rgba(255, 215, 0, 0.8),
                0 0 30px rgba(255, 215, 0, 0.5),
                0 2px 4px rgba(0, 0, 0, 0.3) !important;
            line-height: 1.2 !important;
            text-align: center !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            font-weight: bold !important;
            position: relative !important;
            z-index: 10 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            padding: 10px !important;
            max-width: 100% !important;
        }
        
        /* Para Kuro Amy específicamente */
        .card-overlay.active[data-special="true"] #card-title {
            font-size: clamp(2rem, 5vw, 3.2rem) !important;
            text-shadow: 
                0 0 25px rgba(255, 215, 0, 0.9),
                0 0 50px rgba(255, 215, 0, 0.6),
                0 0 75px rgba(255, 215, 0, 0.3) !important;
        }
        
        /* Asegurar que el contenedor de texto sea visible */
        .card-text-container {
            display: flex !important;
            flex-direction: column !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
        
        /* Asegurar que el artista sea visible si existe */
        #card-artist:not([style*="display: none"]) {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
        
        /* Asegurar que el mensaje sea visible */
        .card-message,
        #card-message-text {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
        
        /* Asegurar que el footer sea visible */
        .card-footer {
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
    `;
    document.head.appendChild(criticalCSS);
});
// CSS de emergencia para arreglar visualización
const emergencyCSS = document.createElement('style');
emergencyCSS.textContent = `
    /* ARREGLOS DE EMERGENCIA PARA TARJETAS */
    
    /* Título siempre visible */
    #card-title {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        color: var(--color-gold) !important;
        font-family: var(--font-title) !important;
        font-size: 2.3rem !important;
        text-align: center !important;
        margin: 15px 0 !important;
        padding: 10px !important;
        text-shadow: 0 0 15px rgba(255, 215, 0, 0.8) !important;
        line-height: 1.3 !important;
        font-weight: bold !important;
        width: 100% !important;
        box-sizing: border-box !important;
        word-wrap: break-word !important;
    }
    
    /* Artista */
    #card-artist {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        color: var(--color-text-dim) !important;
        font-size: 1.3rem !important;
        text-align: center !important;
        margin: 10px 0 25px 0 !important;
        padding: 0 10px !important;
    }
    
    /* Contenedor de mensaje */
    .card-message {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        background: rgba(255, 215, 0, 0.08) !important;
        border-left: 5px solid var(--color-gold) !important;
        padding: 25px !important;
        border-radius: 10px !important;
        margin: 20px 0 !important;
        min-height: 180px !important;
        max-height: 320px !important;
        overflow-y: auto !important;
        flex: 1 !important;
    }
    
    /* Texto del mensaje */
    #card-message-text {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        font-size: 1.1rem !important;
        line-height: 1.7 !important;
        color: var(--color-text) !important;
        font-family: var(--font-body) !important;
        white-space: pre-line !important;
        text-align: left !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    
    /* Footer */
    .card-footer {
        display: flex !important;
        visibility: visible !important;
        opacity: 1 !important;
        align-items: center !important;
        justify-content: center !important;
        margin-top: auto !important;
        padding: 20px !important;
        border-top: 2px solid rgba(255, 215, 0, 0.3) !important;
        background: rgba(0, 0, 0, 0.2) !important;
        min-height: 60px !important;
    }
    
    /* Texto del footer */
    .footer-text {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        color: var(--color-silver) !important;
        font-size: 1.1rem !important;
        text-align: center !important;
        padding: 5px !important;
        font-family: var(--font-body) !important;
    }
    
    /* Para Kuro Amy específicamente */
    .card-overlay.active #card-title[data-index="${this.KURO_AMY_INDEX}"] {
        font-size: 2.8rem !important;
        color: var(--color-gold) !important;
        text-shadow: 0 0 25px rgba(255, 215, 0, 0.9) !important;
    }
    
    .card-overlay.active #card-artist[data-index="${this.KURO_AMY_INDEX}"] {
        color: var(--color-gold) !important;
        font-weight: bold !important;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.7) !important;
    }
    
    /* Layout del contenedor de texto */
    .card-text-container {
        display: flex !important;
        flex-direction: column !important;
        visibility: visible !important;
        opacity: 1 !important;
        height: 100% !important;
    }
`;
document.head.appendChild(emergencyCSS);