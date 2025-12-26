// ===== ÁRBOL DE LUCES CON GIRO UNIFORME Y SUAVE =====

class UniformLightsTree {
    constructor() {
        this.canvas = document.getElementById('lights-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.time = 0;
        this.rotationSpeed = 0.0010; // Velocidad más rápida
        this.globalRotation = 0;
        
        // Configuración simple y eficiente
        this.config = {
            colors: ['#ff3366', '#33ff99', '#ffd700', '#3399ff', '#ffffff'],
            tree: {
                centerX: 0,
                centerY: 0,
                height: 0,
                width: 0
            }
        };
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        this.createParticles();
        this.setupCanvasStyle();
        this.animate();
        
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createParticles();
        });
    }
    
    setupCanvasStyle() {
        // Canvas siempre detrás de todo
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '1';
        this.canvas.style.pointerEvents = 'none';
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Configurar árbol centrado
        this.config.tree.centerX = this.canvas.width / 2;
        this.config.tree.centerY = this.canvas.height * 0.88;
        this.config.tree.height = this.canvas.height * 0.7;
        this.config.tree.width = this.canvas.width * 0.3;
    }
    
    createParticles() {
        this.particles = [];
        const centerX = this.config.tree.centerX;
        const baseY = this.config.tree.centerY;
        const treeHeight = this.config.tree.height;
        const treeWidth = this.config.tree.width;
        
        // Crear partículas en forma de árbol
        for (let level = 0; level < 6; level++) {
            const progress = level / 6;
            const y = baseY - (progress * treeHeight);
            const levelWidth = treeWidth * (1 - progress * 0.85);
            
            const particlesInLevel = Math.floor(50 * (0.7 + (1 - progress) * 0.3));
            
            for (let i = 0; i < particlesInLevel; i++) {
                const angle = (i / particlesInLevel) * Math.PI * 2;
                const radius = levelWidth * (0.4 + Math.random() * 0.3);
                
                this.particles.push({
                    centerX: centerX,
                    centerY: y,
                    orbitRadius: radius * (0.7 + Math.random() * 0.3),
                    orbitAngle: angle,
                    x: 0,
                    y: 0,
                    color: this.config.colors[Math.floor(Math.random() * this.config.colors.length)],
                    size: 1.5 + Math.random() * 2,
                    brightness: 0.6 + Math.random() * 0.4,
                    depth: 0.5 + Math.random() * 0.5,
                    previousPositions: [] // Para almacenar posiciones previas
                });
            }
        }
        
        // Tronco (no gira)
        for (let i = 0; i < 8; i++) {
            const progress = i / 8;
            const y = baseY + (progress * treeHeight * 0.06);
            const x = centerX + (Math.random() - 0.5) * treeWidth * 0.04;
            
            this.particles.push({
                x: x,
                y: y,
                color: '#8b4513',
                size: 1 + Math.random() * 0.6,
                brightness: 0.3,
                isTrunk: true
            });
        }
    }
    
    animate() {
        this.time += 0.016;
        this.globalRotation += this.rotationSpeed;
        
        this.updateParticles();
        this.draw();
        
        requestAnimationFrame(() => this.animate());
    }
    
    updateParticles() {
        // Actualizar solo partículas que giran
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            if (p.isTrunk) continue;
            
            // Guardar la posición actual como posición anterior para el rastro
            if (p.x !== 0 && p.y !== 0) {
                p.previousPositions.push({x: p.x, y: p.y});
                
                // Mantener solo las últimas 3 posiciones para el rastro
                if (p.previousPositions.length > 3) {
                    p.previousPositions.shift(); // Remover la más antigua
                }
            }
            
            // GIRO UNIFORME: todas las partículas giran a la misma velocidad
            p.orbitAngle += this.rotationSpeed * p.depth;
            
            // Posición circular simple
            p.x = p.centerX + Math.cos(p.orbitAngle) * p.orbitRadius;
            p.y = p.centerY + Math.sin(p.orbitAngle) * p.orbitRadius * 0.4;
        }
    }
    
    draw() {
        // Fondo muy oscuro casi transparente para que se vean los rastros
        this.ctx.fillStyle = 'rgba(0, 0, 5, 0.08)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Primero dibujar los rastros de las luces
        this.drawLightTrails();
        
        // Luego dibujar las partículas
        this.drawParticles();
    }
    
    drawLightTrails() {
        const ctx = this.ctx;
        
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            if (p.isTrunk || p.previousPositions.length < 2) continue;
            
            const rgb = this.hexToRgb(p.color);
            
            // Dibujar el rastro de la luz
            for (let j = 0; j < p.previousPositions.length - 1; j++) {
                const pos1 = p.previousPositions[j];
                const pos2 = p.previousPositions[j + 1];
                
                // Calcular la transparencia del rastro (más opaco cerca de la luz)
                const alpha = 0.15 * (j / p.previousPositions.length);
                
                ctx.beginPath();
                ctx.moveTo(pos1.x, pos1.y);
                ctx.lineTo(pos2.x, pos2.y);
                ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
                ctx.lineWidth = p.size * 0.8;
                ctx.lineCap = 'round';
                ctx.stroke();
            }
            
            // Dibujar una conexión suave desde la última posición hasta la actual
            if (p.previousPositions.length > 0) {
                const lastPos = p.previousPositions[p.previousPositions.length - 1];
                
                ctx.beginPath();
                ctx.moveTo(lastPos.x, lastPos.y);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.25)`;
                ctx.lineWidth = p.size * 1.2;
                ctx.lineCap = 'round';
                ctx.stroke();
            }
        }
    }
    
    drawParticles() {
        const ctx = this.ctx;
        
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Brillo con parpadeo muy sutil
            const flicker = Math.sin(this.time * 0.5 + i) * 0.1 + 0.9;
            const currentBrightness = p.brightness * flicker;
            const currentSize = p.size * currentBrightness;
            
            // Dibujar partícula con transparencia
            ctx.beginPath();
            ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
            
            if (p.isTrunk) {
                ctx.fillStyle = p.color;
            } else {
                // Partículas luminosas con alpha reducido
                const rgb = this.hexToRgb(p.color);
                ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${currentBrightness * 0.8})`;
                
                // Glow del mismo color de la luz
                ctx.shadowBlur = currentBrightness * 10;
                ctx.shadowColor = p.color;
            }
            
            ctx.fill();
            
            // Resetear sombra
            ctx.shadowBlur = 0;
            
            // Punto central más brillante
            if (!p.isTrunk) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, currentSize * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${currentBrightness * 0.4})`;
                ctx.fill();
            }
        }
    }
    
    hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }
    
    // Método simple para sincronizar velocidad
    setRotationSpeed(speed) {
        this.rotationSpeed = Math.abs(speed); // Siempre positivo, un solo sentido
    }
}

// Inicialización minimalista
document.addEventListener('DOMContentLoaded', () => {
    // Esperar un poco para asegurar que todo esté listo
    setTimeout(() => {
        window.lightsTree = new UniformLightsTree();
        
        // Sincronización básica
        if (window.photoRotationSystem && window.photoRotationSystem.getSpeed) {
            setInterval(() => {
                const photoSpeed = window.photoRotationSystem.getSpeed();
                if (window.lightsTree && window.lightsTree.setRotationSpeed) {
                    window.lightsTree.setRotationSpeed(photoSpeed);
                }
            }, 1000);
        }
        
        // Interfaz simple desde consola
        window.setLightsSpeed = function(speed) {
            if (window.lightsTree) {
                window.lightsTree.setRotationSpeed(speed);
                console.log('Velocidad establecida:', speed);
            }
        };
    }, 500);
});