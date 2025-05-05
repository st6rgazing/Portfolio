// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Declare variables for external libraries
    let AOS, Typed, particlesJS, THREE, imagesLoaded;

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
    const canvas = document.getElementById('hero-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Create a group to hold all objects
    const group = new THREE.Group();
    scene.add(group);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Create geometric shapes with pastel colors
    const geometry1 = new THREE.TorusGeometry(3, 1, 16, 100);
    const material1 = new THREE.MeshPhongMaterial({
        color: 0xa0d2eb,
        wireframe: true
    });
    const torus = new THREE.Mesh(geometry1, material1);
    group.add(torus);
    
    const geometry2 = new THREE.IcosahedronGeometry(2, 0);
    const material2 = new THREE.MeshPhongMaterial({
        color: 0xffc8dd,
        wireframe: true
    });
    const icosahedron = new THREE.Mesh(geometry2, material2);
    group.add(icosahedron);
    
    const geometry3 = new THREE.OctahedronGeometry(1.5, 0);
    const material3 = new THREE.MeshPhongMaterial({
        color: 0xcdb4db,
        wireframe: true
    });
    const octahedron = new THREE.Mesh(geometry3, material3);
    group.add(octahedron);
    
    // Position camera
    camera.position.z = 10;
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        }
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        torus.rotation.x += 0.003;
        torus.rotation.y += 0.005;
        
        icosahedron.rotation.x += 0.005;
        icosahedron.rotation.y += 0.003;
        
        octahedron.rotation.x -= 0.004;
        octahedron.rotation.z += 0.004;
        
        group.rotation.y += 0.002;
        
        renderer.render(scene, camera);
    }
    
    animate();

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