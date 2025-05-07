// Custom cursor
document.addEventListener("DOMContentLoaded", () => {
  // Hide preloader after page load
  setTimeout(() => {
    const preloader = document.querySelector(".preloader")
    preloader.classList.add("hidden")

    // Initialize animations after preloader is hidden
    initAnimations()

    // Initialize 3D scenes
    initHeroScene()
    initAboutScene()
    initProjectsScene()
    initContactScene()

    // Initialize other functionality
    initCustomCursor()
    initScrollProgress()
    initNavigation()
    initScrollTriggers()
    initProjectFilter()
    initContactForm()
    initBackToTop()
    initTiltEffect()

    // Initialize magnetic buttons
    initMagneticButtons()

    // Initialize ribbon effect
    initRibbonEffect()

    // Initialize dynamic background
    initDynamicBackground()

    // Initialize project modal
    initProjectModal()

    // Remove this line: initTestimonialsSlider()
  }, 1500)
})

/*--------------------------------------------------------------
# Custom Cursor
--------------------------------------------------------------*/
function initCustomCursor() {
  const cursorOuter = document.querySelector(".cursor-outer")
  const cursorInner = document.querySelector(".cursor-inner")

  if (!cursorOuter || !cursorInner) return

  document.addEventListener("mousemove", (e) => {
    cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
  })

  // Add hover effect to links and buttons
  const hoverElements = document.querySelectorAll("a, button, .project-card, .skill-item, .social-link")

  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover")
    })

    element.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover")
    })
  })

  // Add click effect
  document.addEventListener("mousedown", () => {
    cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%) scale(0.8)`
  })

  document.addEventListener("mouseup", () => {
    cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%) scale(1)`
  })
}

/*--------------------------------------------------------------
# Scroll Progress
--------------------------------------------------------------*/
function initScrollProgress() {
  const progressBar = document.getElementById("progress-bar")

  if (!progressBar) return

  window.addEventListener("scroll", () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight
    const progress = (window.pageYOffset / totalHeight) * 100
    progressBar.style.width = `${progress}%`
  })
}

/*--------------------------------------------------------------
# Navigation
--------------------------------------------------------------*/
function initNavigation() {
  const header = document.querySelector(".header")
  const menuToggle = document.querySelector(".menu-toggle")
  const mobileNav = document.querySelector(".mobile-nav")
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")
  const backToTop = document.querySelector(".back-to-top")

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open")
      mobileNav.classList.toggle("active")
    })
  }

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      // Close mobile menu if open
      if (mobileNav && mobileNav.classList.contains("active")) {
        document.body.classList.remove("menu-open")
        mobileNav.classList.remove("active")
      }

      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

/*--------------------------------------------------------------
# Animations
--------------------------------------------------------------*/
function initAnimations() {
  // Split text for hero title animation
  let SplitType
  if (typeof SplitType !== "undefined") {
    const heroTitleLines = document.querySelectorAll(".hero-title-line")

    heroTitleLines.forEach((line) => {
      new SplitType(line, { types: "chars" })

      const chars = line.querySelectorAll(".char")

      chars.forEach((char, index) => {
        char.style.animationDelay = `${0.05 * index + 0.5}s`
        char.style.animation = "fade-in-up 0.5s forwards"
        char.style.opacity = "0"
        char.style.transform = "translateY(20px)"
      })
    })
  }
}

/*--------------------------------------------------------------
# Scroll Triggers
--------------------------------------------------------------*/
function initScrollTriggers() {
  let gsap, ScrollTrigger
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Animate skill bars on scroll
    const skillItems = document.querySelectorAll(".skill-item")

    skillItems.forEach((item) => {
      const progress = item.querySelector(".skill-progress")
      const width = progress.style.width

      progress.style.width = "0"

      ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        onEnter: () => {
          gsap.to(progress, {
            width: width,
            duration: 1.5,
            ease: "power2.out",
          })
        },
        once: true,
      })
    })

    // Animate sections on scroll
    const sections = document.querySelectorAll("section:not(.hero)")

    sections.forEach((section) => {
      const header = section.querySelector(".section-header")
      const content = section.querySelector(".about-content, .projects-grid, .contact-content")

      if (header) {
        gsap.from(header, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            once: true,
          },
        })
      }

      if (content) {
        gsap.from(content, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            once: true,
          },
        })
      }
    })

    // Parallax effect for shapes
    const shapes = document.querySelectorAll(".hero-shape, .about-shape, .contact-shape")

    shapes.forEach((shape) => {
      gsap.to(shape, {
        y: () => Math.random() * 100 - 50,
        x: () => Math.random() * 100 - 50,
        rotation: () => Math.random() * 20 - 10,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
    })
  } else {
    gsap = null
    ScrollTrigger = null
    console.warn("gsap or ScrollTrigger not found. Scroll Triggers will not be initialized.")
  }
}

/* Fix project filter functionality */
function initProjectFilter() {
  
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  if (!filterBtns.length || !projectCards.length) return

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      btn.classList.add("active")

      const filter = btn.getAttribute("data-filter")

      // Filter projects
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category")

        if (filter === "all" || category.includes(filter)) {
          // Show matching projects
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "scale(1)"
          }, 50)
        } else {
          // Hide non-matching projects
          card.style.opacity = "0"
          card.style.transform = "scale(0.8)"
          setTimeout(() => {
            card.style.display = "none"
          }, 300)
        }
      })
    })
  })
}

/*--------------------------------------------------------------
# Contact Form
--------------------------------------------------------------*/
function initContactForm() {
  const contactForm = document.getElementById("contact-form")

  if (!contactForm) return

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const formValues = Object.fromEntries(formData.entries())

    // Here you would typically send the form data to a server
    console.log("Form submitted:", formValues)

    // Show success message (in a real app, do this after successful submission)
    alert("Thank you for your message! I will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}

/*--------------------------------------------------------------
# Back to Top Button
--------------------------------------------------------------*/
function initBackToTop() {
  const backToTop = document.querySelector(".back-to-top")

  if (!backToTop) return

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.classList.add("active")
    } else {
      backToTop.classList.remove("active")
    }
  })

  backToTop.addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

/*--------------------------------------------------------------
# Tilt Effect
--------------------------------------------------------------*/
function initTiltEffect() {
  let VanillaTilt
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll(".project-card, .contact-card"), {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    })
  }
}

/*--------------------------------------------------------------
# 3D Scenes
--------------------------------------------------------------*/
function initHeroScene() {
  let THREE
  if (typeof THREE === "undefined") {
    THREE = window.THREE
  }
  const canvas = document.getElementById("hero-canvas")

  if (!canvas || typeof THREE === "undefined") return

  // Scene setup
  const scene = new THREE.Scene()

  // Camera setup
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create particles
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 2000

  const posArray = new Float32Array(particlesCount * 3)
  const colorsArray = new Float32Array(particlesCount * 3)

  // Colors for particles
  const colors = [
    new THREE.Color(0xff84d8), // Pink
    new THREE.Color(0x9d4edd), // Purple
    new THREE.Color(0x5390d9), // Blue
  ]

  for (let i = 0; i < particlesCount * 3; i += 3) {
    // Positions - create a sphere of particles
    const radius = 4
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    posArray[i] = radius * Math.sin(phi) * Math.cos(theta)
    posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
    posArray[i + 2] = radius * Math.cos(phi)

    // Colors
    const colorIndex = Math.floor(Math.random() * colors.length)
    const color = colors[colorIndex]

    colorsArray[i] = color.r
    colorsArray[i + 1] = color.g
    colorsArray[i + 2] = color.b
  }

  particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
  particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3))

  // Particle material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.03,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
  })

  // Create points mesh
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  // Mouse interaction
  let mouseX = 0
  let mouseY = 0

  document.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1
  })

  // Animation
  const clock = new THREE.Clock()

  function animate() {
    const elapsedTime = clock.getElapsedTime()

    // Rotate particles
    particlesMesh.rotation.x = elapsedTime * 0.05
    particlesMesh.rotation.y = elapsedTime * 0.03

    // Mouse interaction
    particlesMesh.rotation.x += mouseY * 0.01
    particlesMesh.rotation.y += mouseX * 0.01

    // Render
    renderer.render(scene, camera)

    // Call animate again on the next frame
    requestAnimationFrame(animate)
  }

  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}

function initAboutScene() {
  let THREE
  if (typeof THREE === "undefined") {
    THREE = window.THREE
  }
  const canvas = document.getElementById("about-canvas")

  if (!canvas || typeof THREE === "undefined") return

  // Scene setup
  const scene = new THREE.Scene()

  // Camera setup
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
  camera.position.z = 5

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create a torus knot
  const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)

  // Create shader material
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color(0xff84d8) }, // Pink
      color2: { value: new THREE.Color(0x9d4edd) }, // Purple
      color3: { value: new THREE.Color(0x5390d9) }, // Blue
    },
    vertexShader: `
      varying vec2 vUv;
      varying float vDisplacement;
      uniform float time;
      
      void main() {
        vUv = uv;
        vec3 newPosition = position;
        float displacement = sin(position.x * 10.0 + time) * 0.1;
        displacement += sin(position.y * 10.0 + time) * 0.1;
        vDisplacement = displacement;
        newPosition += normal * displacement;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      uniform float time;
      varying vec2 vUv;
      varying float vDisplacement;
      
      void main() {
        float t = sin(vUv.x * 3.14159 + time) * 0.5 + 0.5;
        vec3 color = mix(color1, color2, t);
        color = mix(color, color3, sin(vUv.y * 3.14159 + time * 0.5) * 0.5 + 0.5);
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  })

  const torusKnot = new THREE.Mesh(geometry, material)
  scene.add(torusKnot)

  // Animation
  const clock = new THREE.Clock()

  function animate() {
    const elapsedTime = clock.getElapsedTime()

    // Update uniforms
    material.uniforms.time.value = elapsedTime

    // Rotate mesh
    torusKnot.rotation.x = elapsedTime * 0.3
    torusKnot.rotation.y = elapsedTime * 0.2

    // Render
    renderer.render(scene, camera)

    // Call animate again on the next frame
    requestAnimationFrame(animate)
  }

  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    // Update camera
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}

function initProjectsScene() {
  let THREE
  if (typeof THREE === "undefined") {
    THREE = window.THREE
  }
  const canvas = document.getElementById("projects-canvas")

  if (!canvas || typeof THREE === "undefined") return

  // Scene setup
  const scene = new THREE.Scene()

  // Camera setup
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
  camera.position.z = 5

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create a wave effect
  const planeGeometry = new THREE.PlaneGeometry(10, 10, 100, 100)

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color(0xff84d8) }, // Pink
      color2: { value: new THREE.Color(0x9d4edd) }, // Purple
      color3: { value: new THREE.Color(0x5390d9) }, // Blue
    },
    vertexShader: `
      varying vec2 vUv;
      varying float vNoise;
      uniform float time;
      
      // Simplex noise function
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        
        // First corner
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        
        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        
        // Permutations
        i = mod289(i);
        vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
              
        // Gradients
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        
        // Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        
        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
      }
      
      void main() {
        vUv = uv;
        
        // Create noise
        float noise = snoise(vec3(position.x * 2.0, position.y * 2.0, time * 0.5));
        vNoise = noise;
        
        // Displace the vertex along the normal
        vec3 newPosition = position + normal * noise * 0.3;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      uniform float time;
      varying vec2 vUv;
      varying float vNoise;
      
      void main() {
        // Create a gradient based on noise and UV coordinates
        float t = vNoise * 0.5 + 0.5;
        vec3 color = mix(color1, color2, t);
        color = mix(color, color3, sin(vUv.x * 10.0 + time) * 0.5 + 0.5);
        
        // Add some shimmer
        float shimmer = sin(vUv.x * 30.0 + vUv.y * 30.0 + time * 2.0) * 0.1 + 0.9;
        
        gl_FragColor = vec4(color * shimmer, 1.0);
      }
    `,
    side: THREE.DoubleSide,
  })

  const plane = new THREE.Mesh(planeGeometry, material)
  scene.add(plane)

  // Animation
  const clock = new THREE.Clock()

  function animate() {
    const elapsedTime = clock.getElapsedTime()

    // Update uniforms
    material.uniforms.time.value = elapsedTime

    // Rotate mesh
    plane.rotation.x = Math.PI / 2
    plane.rotation.z = elapsedTime * 0.1

    // Render
    renderer.render(scene, camera)

    // Call animate again on the next frame
    requestAnimationFrame(animate)
  }

  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    // Update camera
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}

function initContactScene() {
  let THREE
  if (typeof THREE === "undefined") {
    THREE = window.THREE
  }
  const canvas = document.getElementById("contact-canvas")

  if (!canvas || typeof THREE === "undefined") return

  // Scene setup
  const scene = new THREE.Scene()

  // Camera setup
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
  camera.position.z = 5

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Create floating spheres
  const spheres = []
  const colors = [
    new THREE.Color(0xff84d8), // Pink
    new THREE.Color(0x9d4edd), // Purple
    new THREE.Color(0x5390d9), // Blue
  ]

  for (let i = 0; i < 15; i++) {
    const geometry = new THREE.SphereGeometry(Math.random() * 0.3 + 0.1, 32, 32)

    const colorIndex = Math.floor(Math.random() * colors.length)
    const material = new THREE.MeshBasicMaterial({
      color: colors[colorIndex],
      transparent: true,
      opacity: Math.random() * 0.5 + 0.2,
    })

    const sphere = new THREE.Mesh(geometry, material)

    // Random position
    sphere.position.x = (Math.random() - 0.5) * 10
    sphere.position.y = (Math.random() - 0.5) * 10
    sphere.position.z = (Math.random() - 0.5) * 10

    // Random speed
    sphere.speed = {
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.02,
    }

    scene.add(sphere)
    spheres.push(sphere)
  }

  // Animation
  function animate() {
    // Update spheres
    spheres.forEach((sphere) => {
      sphere.position.x += sphere.speed.x
      sphere.position.y += sphere.speed.y
      sphere.position.z += sphere.speed.z

      // Bounce off boundaries
      if (Math.abs(sphere.position.x) > 5) sphere.speed.x *= -1
      if (Math.abs(sphere.position.y) > 5) sphere.speed.y *= -1
      if (Math.abs(sphere.position.z) > 5) sphere.speed.z *= -1
    })

    // Render
    renderer.render(scene, camera)

    // Call animate again on the next frame
    requestAnimationFrame(animate)
  }

  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    // Update camera
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
}

/*--------------------------------------------------------------
# Magnetic Buttons
--------------------------------------------------------------*/
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll(".magnetic-btn")

  magneticBtns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const strength = 20
      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = Math.sqrt((rect.width * rect.width) / 4 + (rect.height * rect.height) / 4)
      const intensity = 1 - distance / maxDistance

      btn.style.transform = `translate(${(x * intensity) / strength}px, ${(y * intensity) / strength}px) scale(1.1)`
    })

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0) scale(1)"
    })
  })
}

/*--------------------------------------------------------------
# Ribbon Effect
--------------------------------------------------------------*/
function initRibbonEffect() {
  const canvas = document.getElementById("ribbon-canvas")

  if (!canvas) return

  const ctx = canvas.getContext("2d")
  const ribbons = []

  // Set canvas size
  canvas.width = canvas.parentElement.offsetWidth
  canvas.height = canvas.parentElement.offsetHeight

  // Create ribbons
  for (let i = 0; i < 3; i++) {
    ribbons.push({
      points: [],
      color: i === 0 ? "#ff84d8" : i === 1 ? "#9d4edd" : "#5390d9",
      width: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
      offset: Math.random() * 100,
      phase: Math.random() * Math.PI * 2,
    })

    // Create points for each ribbon
    for (let j = 0; j < 100; j++) {
      ribbons[i].points.push({
        x: j * (canvas.width / 100),
        y: canvas.height / 2,
      })
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ribbons.forEach((ribbon) => {
      ctx.beginPath()
      ctx.strokeStyle = ribbon.color
      ctx.lineWidth = ribbon.width

      ribbon.phase += 0.005

      ribbon.points.forEach((point, index) => {
        const x = point.x
        const y = canvas.height / 2 + Math.sin(index * 0.05 + ribbon.phase + ribbon.offset) * 50

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }

        // Update point position
        ribbon.points[index].y = y
      })

      ctx.stroke()
    })

    requestAnimationFrame(animate)
  }

  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    canvas.width = canvas.parentElement.offsetWidth
    canvas.height = canvas.parentElement.offsetHeight

    // Recalculate points
    ribbons.forEach((ribbon) => {
      ribbon.points.forEach((point, index) => {
        ribbon.points[index].x = index * (canvas.width / 100)
      })
    })
  })
}

/*--------------------------------------------------------------
# Dynamic Background
--------------------------------------------------------------*/
function initDynamicBackground() {
  const canvas = document.getElementById("dynamic-bg-canvas")

  if (!canvas) return

  const ctx = canvas.getContext("2d")

  // Set canvas size
  canvas.width = canvas.parentElement.offsetWidth
  canvas.height = canvas.parentElement.offsetHeight

  // Create particles
  const particles = []
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      color: i % 3 === 0 ? "#ff84d8" : i % 3 === 1 ? "#9d4edd" : "#5390d9",
      speed: Math.random() * 0.5 + 0.2,
      direction: Math.random() * Math.PI * 2,
    })
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw and update particles
    particles.forEach((particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()

      // Update position
      particle.x += Math.cos(particle.direction) * particle.speed
      particle.y += Math.sin(particle.direction) * particle.speed

      // Bounce off walls
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.direction = Math.PI - particle.direction
      }

      if (particle.y < 0 || particle.y > canvas.height) {
        particle.direction = -particle.direction
      }
    })

    // Draw connections
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 0.5

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(animate)
  }

  animate()

  // Handle window resize
  window.addEventListener("resize", () => {
    canvas.width = canvas.parentElement.offsetWidth
    canvas.height = canvas.parentElement.offsetHeight
  })
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")

  if (window.scrollY > 50) {
    header.style.padding = "15px 0"
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.padding = "20px 0"
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }
})

// Three.js for hero section
function initThreeJS() {
  let THREE
  if (typeof THREE !== "undefined") {
    const canvas = document.getElementById("hero-canvas")

    if (!canvas) return

    // Import Three.js library
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1500

    const posArray = new Float32Array(particlesCount * 3)
    const colorsArray = new Float32Array(particlesCount * 3)

    // Colors for particles
    const colors = [
      new THREE.Color(0xffb6c1), // Pink
      new THREE.Color(0xc8a2c8), // Purple
      new THREE.Color(0xadd8e6), // Blue
    ]

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Positions
      posArray[i] = (Math.random() - 0.5) * 10
      posArray[i + 1] = (Math.random() - 0.5) * 10
      posArray[i + 2] = (Math.random() - 0.5) * 10

      // Colors

      const colorIndex = Math.floor(Math.random() * colors.length)
      const color = colors[colorIndex]

      colorsArray[i] = color.r
      colorsArray[i + 1] = color.g
      colorsArray[i + 2] = color.b
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 5

    // Animation
    function animate() {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.0005
      particlesMesh.rotation.y += 0.0005

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  } else {
    THREE = null
    console.warn("THREE not found. Hero Scene will not be initialized.")
  }
}

// Three.js for about section cube
function initAboutCube() {
  const cubeContainer = document.getElementById("about-cube")

  if (!cubeContainer) return

  // Create cube faces
  const faces = ["front", "back", "left", "right", "top", "bottom"]
  const colors = ["#ffd1dc", "#e0b0ff", "#ccf2ff", "#ffb6c1", "#c8a2c8", "#add8e6"]

  faces.forEach((face, index) => {
    const faceElement = document.createElement("div")
    faceElement.classList.add("cube-face", `cube-face-${face}`)
    faceElement.style.backgroundColor = colors[index]
    faceElement.style.position = "absolute"
    faceElement.style.width = "100%"
    faceElement.style.height = "100%"
    faceElement.style.opacity = "0.7"

    // Position faces
    switch (face) {
      case "front":
        faceElement.style.transform = "translateZ(100px)"
        break
      case "back":
        faceElement.style.transform = "rotateY(180deg) translateZ(100px)"
        break
      case "left":
        faceElement.style.transform = "rotateY(-90deg) translateZ(100px)"
        break
      case "right":
        faceElement.style.transform = "rotateY(90deg) translateZ(100px)"
        break
      case "top":
        faceElement.style.transform = "rotateX(90deg) translateZ(100px)"
        break
      case "bottom":
        faceElement.style.transform = "rotateX(-90deg) translateZ(100px)"
        break
    }

    cubeContainer.appendChild(faceElement)
  })
}

/*--------------------------------------------------------------
# Project Modal
--------------------------------------------------------------*/
function initProjectModal() {
  const projectLinks = document.querySelectorAll(".project-link")
  const projectModal = document.querySelector(".project-modal")
  const projectModalClose = document.querySelector(".project-modal-close")
  const projectModalTitle = document.querySelector(".project-modal-title")
  const projectModalImage = document.querySelector(".project-modal-image img")
  const projectModalDescription = document.querySelector(".project-modal-description p")
  const projectModalTechList = document.querySelector(".project-modal-tech-list")
  const projectModalFeaturesList = document.querySelector(".project-modal-features-list")

  if (!projectModal) return

  // Project data - you can customize this with your actual project details
  const projectsData = [
    {
      title: "Sawty",
      image: "assets/sawty.png",
      description:
        "A responsive voting platform developed as the front-end for voting using Quantum cryptography.",
      technologies: ["React", "Node.js", "MongoDB", "Qiskit"],
      features: [
        "User authentication and profile management",
        "Voting end-to-end encryption",
        "Secure voting processing",
        "Vote tracking and history",
        "Admin dashboard",
      ],
      github:"https://github.com/st6rgazing/sawty-voting",
      live:"https://sawty-voting.vercel.app/"
    },
    {
      title: "Sunset Voyages",
      image: "assets/sunset.png",
      description:
      "A responsive travel agency website that allows users to explore destinations, view offers, and book trips easily. The platform supports secure bookings and dynamic page rendering to ensure smooth user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "SQLite"],
      features: [
        "Responsive design with mobile-first layout",
        "Secure trip booking system with form validation",
        "Dynamically rendered content using Jinja2 templates",
        "Optimized database interactions with SQLite",
        "Clear navigation and engaging visual design",
      ],
      live: "https://i5.abudhabi.nyu.edu/~mom8702/sunset/templates/index.html",
      github:"https://github.com/st6rgazing/FinalAssignment_LOC"
    },
    {
      title: "The Hunger Games",
      image: "assets/hungergames.png",
      description:
        "A creative video project that humorously dramatizes the chaos of course registration, inspired by the dystopian tension of 'The Hunger Games.' Produced using Adobe Premiere Pro, the video is embedded in a sleek website built with HTML, CSS, and JavaScript.",
      technologies: ["JavaScript", "HTML", "CSS", "Adobe Premiere Pro"],
      features: [
"Cinematic storytelling with engaging editing",
  "Responsive and interactive video website",
  "Thematic design inspired by the Hunger Games",
  "Accessible playback across devices",
  "Creative direction and post-production effects",
  "Showcases narrative and technical skills",
      ],
      github:"https://github.com/genesisreyes18/TheHungerGames",
      live:"https://genesisreyes18.github.io/TheHungerGames/#home"
    },
    {
      title: "Portfolio Website",
      image: "https://placeholder.svg?height=600&width=800",
      description:
        "A responsive portfolio website showcasing creative work and professional achievements. The site features modern animations, interactive elements, and optimized performance.",
      technologies: ["HTML/CSS", "JavaScript", "GSAP", "Three.js", "Webpack"],
      features: [
        "Responsive design for all devices",
        "Interactive 3D elements",
        "Smooth page transitions",
        "Project filtering and categorization",
        "Contact form with validation",
        "Performance optimization",
      ],
      github:"https://github.com/st6rgazing/Portfolio",
      live: "https://st6rgazing.github.io/Portfolio/#"
    },
    {
      title: "Interactive Comic",
      image: "assets/comic.png",
      description:
       "An interactive comic website that follows the adventurous journey of a curious penguin through beautifully illustrated panels and engaging animations. Readers can explore the story at their own pace, triggering animations and dialogues as they navigate the comic.",
      technologies: ["HTML", "CSS", "JS", "iBisPaintX"],
      features: [
        "Interactive comic navigation",
        "Animated story panels using GSAP",
        "Responsive design for mobile and desktop",
        "Audio effects and background music",
        "Dynamic text bubbles and character interactions",
        "Smooth scrolling and transitions",
      ],
      live:"https://saamia1.github.io/Interactive-Comic/",
      github:"https://github.com/saamia1/Interactive-Comic"
    },
    {
      title: "Echoes of a Day",
      image: "assets/sound.png",
      description:
        "A storytelling website that immerses users in an atmospheric narrative told entirely through sound. Using ambient audio, voiceovers, and interactive soundscapes, the story unfolds as users navigate different sections of the site, creating a unique and emotional experience.",
      technologies: ["HTML", "CSS", "JS", "Audacity"],
      features: [
"Immersive sound-based storytelling",
  "Interactive audio triggers based on navigation",
  "Layered soundscapes using the Web Audio API",
  "Minimalist design to focus on auditory experience",
  "Accessible interface with visual cues for sound",
  "Custom audio controls and playback options",
      ],
      github:"https://github.com/alinoorisnerd/commlab_assign3/",
      live:"https://alinoorisnerd.github.io/commlab_assign3/"
    },
  ]

  // Open modal when eye icon is clicked
  projectLinks.forEach((link, index) => {
    if (link.querySelector("i.fas.fa-eye")) {
      link.addEventListener("click", (e) => {
        e.preventDefault()

        // Get project card
        const projectCard = link.closest(".project-card")
        const projectTitle = projectCard.querySelector(".project-title").textContent

        // Find matching project data
        const projectData =
          projectsData.find((project) => project.title === projectTitle) || projectsData[index % projectsData.length]

        // Populate modal with project data
        projectModalTitle.textContent = projectData.title
        projectModalImage.src = projectData.image
        projectModalImage.alt = projectData.title
        projectModalDescription.textContent = projectData.description

        // Add technologies
        projectModalTechList.innerHTML = ""
        projectData.technologies.forEach((tech) => {
          const li = document.createElement("li")
          li.textContent = tech
          projectModalTechList.appendChild(li)
        })

        // Add features
        projectModalFeaturesList.innerHTML = ""
        projectData.features.forEach((feature) => {
          const li = document.createElement("li")
          li.textContent = feature
          projectModalFeaturesList.appendChild(li)
        })

        // Show modal
        const liveBtn = document.querySelector(".project-modal-live")
const codeBtn = document.querySelector(".project-modal-github")

// Set link URLs
liveBtn.href = projectData.live || "#"
codeBtn.href = projectData.github || "#"

// Optional: open in new tab
liveBtn.target = "_blank"
codeBtn.target = "_blank"
        projectModal.classList.add("active")
        document.body.style.overflow = "hidden" // Prevent scrolling
      })
    }
  })

  // Close modal when X is clicked
  if (projectModalClose) {
    projectModalClose.addEventListener("click", () => {
      projectModal.classList.remove("active")
      document.body.style.overflow = "" // Re-enable scrolling
    })
  }

  // Close modal when clicking outside content
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove("active")
      document.body.style.overflow = "" // Re-enable scrolling
    }
  })

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal.classList.contains("active")) {
      projectModal.classList.remove("active")
      document.body.style.overflow = "" // Re-enable scrolling
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  initProjectFilter();
});
