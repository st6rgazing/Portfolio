// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Declare variables for external libraries
    let AOS, Typed, particlesJS, THREE, imagesLoaded, Isotope;

    // Initialize loader
    setTimeout(function() {
        document.querySelector('.loader-container').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loader-container').style.display = 'none';
        }, 500);
    }, 1500);

    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize Typed.js
    const typed = new Typed('#typed', {
        strings: ['Designer', 'Developer', 'Freelancer', 'Creative Thinker'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true
    });

    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#a0d2eb', '#ffc8dd', '#cdb4db']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#cdb4db',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Initialize Three.js for hero section
    initHeroCanvas();
    initAboutCanvas();
    initSkillsCanvas();
    initProjectsCanvas();
    initContactCanvas();

    // Initialize Isotope for project filtering
    let iso;
    
    // Wait for images to load before initializing Isotope
    imagesLoaded(document.querySelector('.projects-grid'), function() {
        iso = new Isotope('.projects-grid', {
            itemSelector: '.project-item',
            layoutMode: 'fitRows'
        });
        
        // Filter items on button click
        document.querySelector('.filter-buttons').addEventListener('click', function(event) {
            if (!event.target.matches('.filter-btn')) return;
            
            const filterValue = event.target.getAttribute('data-filter');
            
            // Toggle active class
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            iso.arrange({
                filter: filterValue === '*' ? null : filterValue
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
        
        // Animate skill bars when in viewport
        const skillBars = document.querySelectorAll('.progress-bar');
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                const dataWidth = bar.getAttribute('data-width');
                bar.style.width = dataWidth;
            }
        });
    });

    // Mobile menu toggle
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.nav-menu').classList.toggle('active');
        
        // Transform hamburger to X
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = this.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : '';
        bars[1].style.opacity = this.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = this.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : '';
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.menu-toggle').classList.remove('active');
            document.querySelector('.nav-menu').classList.remove('active');
            
            // Reset hamburger
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = '';
            bars[1].style.opacity = '1';
            bars[2].style.transform = '';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the form data to a server
            // For this demo, we'll just log it and show a success message
            console.log('Form Data:', formData);
            
            // Show success message (in a real application, you'd do this after successful submission)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Hero Canvas - 3D Animation
function initHeroCanvas() {
    const container = document.getElementById('hero-canvas-container');
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Create a group to hold all objects
    const group = new THREE.Group();
    scene.add(group);
    
    // Create geometric shapes with pastel colors
    const torusGeometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 16);
    const torusMaterial = new THREE.MeshPhongMaterial({
        color: 0xa0d2eb,
        wireframe: true,
        transparent: true,
        opacity: 0.8
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    group.add(torusKnot);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xffc8dd,
        transparent: true,
        opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add post-processing
    const composer = new THREE.EffectComposer(renderer);
    const renderPass = new THREE.RenderPass(scene, camera);
    composer.addPass(renderPass);
    
    const bloomPass = new THREE.UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,  // strength
        0.4,  // radius
        0.85  // threshold
    );
    composer.addPass(bloomPass);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        torusKnot.rotation.x += 0.003;
        torusKnot.rotation.y += 0.005;
        
        group.rotation.y += 0.002;
        
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;
        
        composer.render();
    }
    
    animate();
}

// About Canvas - Floating 3D Objects
function initAboutCanvas() {
    const container = document.getElementById('about-canvas-container');
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Create floating objects
    const objects = [];
    const colors = [0xa0d2eb, 0xffc8dd, 0xcdb4db];
    const geometries = [
        new THREE.IcosahedronGeometry(1, 0),
        new THREE.TetrahedronGeometry(1, 0),
        new THREE.OctahedronGeometry(1, 0),
        new THREE.DodecahedronGeometry(1, 0)
    ];
    
    for (let i = 0; i < 20; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = new THREE.MeshPhongMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            transparent: true,
            opacity: 0.7,
            wireframe: Math.random() > 0.5
        });
        
        const object = new THREE.Mesh(geometry, material);
        
        object.position.x = (Math.random() - 0.5) * 40;
        object.position.y = (Math.random() - 0.5) * 40;
        object.position.z = (Math.random() - 0.5) * 40;
        
        object.rotation.x = Math.random() * Math.PI;
        object.rotation.y = Math.random() * Math.PI;
        
        object.scale.x = object.scale.y = object.scale.z = Math.random() * 2 + 0.5;
        
        scene.add(object);
        objects.push({
            mesh: object,
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            },
            floatSpeed: (Math.random() - 0.5) * 0.01
        });
    }
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        objects.forEach(obj => {
            obj.mesh.rotation.x += obj.rotationSpeed.x;
            obj.mesh.rotation.y += obj.rotationSpeed.y;
            obj.mesh.rotation.z += obj.rotationSpeed.z;
            
            obj.mesh.position.y += Math.sin(Date.now() * 0.001) * obj.floatSpeed;
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Skills Canvas - Interactive 3D Skills Visualization
function initSkillsCanvas() {
    const container = document.getElementById('skills-canvas-container');
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Create a network of connected nodes
    const nodes = [];
    const connections = [];
    
    // Create nodes
    for (let i = 0; i < 15; i++) {
        const geometry = new THREE.SphereGeometry(0.3, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            color: i % 2 === 0 ? 0xa0d2eb : 0xffc8dd,
            transparent: true,
            opacity: 0.8
        });
        
        const node = new THREE.Mesh(geometry, material);
        
        node.position.x = (Math.random() - 0.5) * 30;
        node.position.y = (Math.random() - 0.5) * 30;
        node.position.z = (Math.random() - 0.5) * 30;
        
        scene.add(node);
        nodes.push({
            mesh: node,
            originalPosition: node.position.clone(),
            floatSpeed: Math.random() * 0.002 + 0.001
        });
    }
    
    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (Math.random() > 0.7) continue;
            
            const distance = nodes[i].mesh.position.distanceTo(nodes[j].mesh.position);
            if (distance > 15) continue;
            
            const geometry = new THREE.BufferGeometry().setFromPoints([
                nodes[i].mesh.position,
                nodes[j].mesh.position
            ]);
            
            const material = new THREE.LineBasicMaterial({
                color: 0xcdb4db,
                transparent: true,
                opacity: 0.3
            });
            
            const line = new THREE.Line(geometry, material);
            scene.add(line);
            
            connections.push({
                line: line,
                pointA: i,
                pointB: j
            });
        }
    }
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Animate nodes
        nodes.forEach(node => {
            const time = Date.now() * node.floatSpeed;
            node.mesh.position.y = node.originalPosition.y + Math.sin(time) * 2;
            node.mesh.position.x = node.originalPosition.x + Math.cos(time) * 2;
        });
        
        // Update connections
        connections.forEach(connection => {
            connection.line.geometry.dispose();
            connection.line.geometry = new THREE.BufferGeometry().setFromPoints([
                nodes[connection.pointA].mesh.position,
                nodes[connection.pointB].mesh.position
            ]);
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Projects Canvas - 3D Project Showcase
function initProjectsCanvas() {
    const container = document.getElementById('projects-showcase-container');
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Create a wave of particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    const colorChoices = [
        [160/255, 210/255, 235/255], // light blue
        [255/255, 200/255, 221/255], // light pink
        [205/255, 180/255, 219/255]  // light purple
    ];
    
    for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        // Position
        positions[i3] = (Math.random() - 0.5) * 50;
        positions[i3 + 1] = (Math.random() - 0.5) * 50;
        positions[i3 + 2] = (Math.random() - 0.5) * 50;
        
        // Color
        const colorIndex = Math.floor(Math.random() * colorChoices.length);
        colors[i3] = colorChoices[colorIndex][0];
        colors[i3 + 1] = colorChoices[colorIndex][1];
        colors[i3 + 2] = colorChoices[colorIndex][2];
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        const positions = particlesGeometry.attributes.position.array;
        
        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            
            // Create a wave effect
            const x = positions[i3];
            const y = positions[i3 + 1];
            const z = positions[i3 + 2];
            
            positions[i3 + 1] = y + Math.sin((Date.now() * 0.001) + (x * 0.1)) * 0.05;
        }
        
        particlesGeometry.attributes.position.needsUpdate = true;
        
        particlesMesh.rotation.y += 0.001;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Contact Canvas - 3D Contact Elements
function initContactCanvas() {
    const container = document.getElementById('contact-canvas-container');
    
    // Create scene
    const scene = new THREE.Scene();
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Create a flowing ribbon
    const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-10, -5, 0),
        new THREE.Vector3(-5, 5, 5),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(5, -5, 5),
        new THREE.Vector3(10, 0, 0)
    ]);
    
    curve.closed = true;
    
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    const material = new THREE.LineBasicMaterial({
        color: 0xa0d2eb,
        linewidth: 2
    });
    
    const curveObject = new THREE.Line(geometry, material);
    scene.add(curveObject);
    
    // Create a tube along the curve
    const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.5, 8, true);
    const tubeMaterial = new THREE.MeshPhongMaterial({
        color: 0xffc8dd,
        transparent: true,
        opacity: 0.6,
        wireframe: true
    });
    
    const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    scene.add(tube);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        curveObject.rotation.y += 0.005;
        tube.rotation.y += 0.005;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Create favicon.png for the project
// This is a simple placeholder - in a real project, you'd create a proper favicon
const faviconCanvas = document.createElement('canvas');
faviconCanvas.width = 32;
faviconCanvas.height = 32;
const faviconCtx = faviconCanvas.getContext('2d');

// Draw a gradient background
const gradient = faviconCtx.createLinearGradient(0, 0, 32, 32);
gradient.addColorStop(0, '#a0d2eb');
gradient.addColorStop(0.5, '#cdb4db');
gradient.addColorStop(1, '#ffc8dd');
faviconCtx.fillStyle = gradient;
faviconCtx.fillRect(0, 0, 32, 32);

// Draw a simple 'P' letter
faviconCtx.fillStyle = '#ffffff';
faviconCtx.font = 'bold 24px Arial';
faviconCtx.textAlign = 'center';
faviconCtx.textBaseline = 'middle';
faviconCtx.fillText('P', 16, 16);

// Convert to data URL and set as favicon
const faviconDataUrl = faviconCanvas.toDataURL('image/png');
const faviconLink = document.createElement('link');
faviconLink.rel = 'icon';
faviconLink.href = faviconDataUrl;
document.head.appendChild(faviconLink);