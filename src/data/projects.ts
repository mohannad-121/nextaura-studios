import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "aether-drift",
    title: "Aether Drift",
    tagline: "High-velocity kinetic space racing built for low-latency touch & controller.",
    category: "games",
    categoryLabel: "Game / Racing",
    year: "2026",
    platforms: ["iOS", "Android", "Cross-Platform"],
    status: "In Development",
    featured: true,
    theme: {
      accent: "#FF6A1A",
      ambient: "rgba(255, 106, 26, 0.15)",
      gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    },
    summary:
      "A fast-paced celestial racing title focusing on zero-gravity vector momentum, procedural orbital tracks, and responsive haptic audio feedback.",
    overview:
      "Aether Drift represents NextAura Studios' exploration into high-fidelity mobile gaming mechanics. Designed around fluid touch controls and 120Hz display refresh rates, players guide aerodynamic energy craft through dying stellar coronas and floating asteroid rings.",
    challenge:
      "Balancing physics precision with forgiving touch gestures was the central engineering challenge. We developed custom predictive vector smoothing to translate micro-finger movements into razor-sharp aerodynamic flight vectors without latency.",
    experience:
      "Every drift produces solar particle dispersion and directional audio cues. The tactile interface responds to speed thresholds, immersing the player in sheer kinetic momentum.",
    technologies: ["Custom C# Engine", "Metal / Vulkan API", "Direct Audio Synthesis", "Bespoke Haptic Engine"],
    metrics: [
      { label: "Target Framerate", value: "120 FPS" },
      { label: "Input Latency", value: "< 8ms" },
      { label: "Track Generation", value: "Realtime Procedural" },
    ],
  },
  {
    slug: "solis-flow",
    title: "Solis Flow",
    tagline: "Biometric solar-rhythm focus companion that synchronizes with natural light.",
    category: "apps",
    categoryLabel: "Mobile App",
    year: "2025",
    platforms: ["iOS", "macOS"],
    status: "Released",
    featured: true,
    theme: {
      accent: "#A90F24",
      ambient: "rgba(169, 15, 36, 0.12)",
      gradient: "from-rose-600/20 via-crimson/10 to-transparent",
    },
    summary:
      "A minimalist focus and circadian management mobile experience that adapts its visual temperature, typography, and acoustic soundscapes to the sun's elevation.",
    overview:
      "Most productivity tools are rigid checklists. Solis Flow treats human energy as an organic solar curve. At dawn, the interface breathes with warm golden ambient light and low-tempo harmonic tones. As midday peaks, clarity and high-contrast typographic focus states take over.",
    challenge:
      "Creating an interface that subtly alters its chromatic palette and contrast without disrupting reading comprehension or requiring manual recalibration throughout the day.",
    experience:
      "Interactions feel physical: pulling the timer feels like dialing a brass solar compass with gentle haptic resistance and glowing chromatic refraction around the touch point.",
    technologies: ["SwiftUI", "CoreLocation Astro Math", "Spatial Audio Kit", "Dynamic Display Pipeline"],
    metrics: [
      { label: "Battery Impact", value: "Near Zero (<1%)" },
      { label: "Spatial Tone Modes", value: "24 Hourly Curves" },
      { label: "Haptic Profiles", value: "Custom Tactile" },
    ],
  },
  {
    slug: "prism-spatial",
    title: "Prism Spatial",
    tagline: "Gesture-driven 3D acoustic sandbox and spatial audio synthesizer.",
    category: "experiments",
    categoryLabel: "Experimental",
    year: "2026",
    platforms: ["Spatial", "Web"],
    status: "Concept",
    featured: true,
    theme: {
      accent: "#FF7424",
      ambient: "rgba(255, 116, 36, 0.16)",
      gradient: "from-orange-600/20 via-rose-500/10 to-transparent",
    },
    summary:
      "An experimental spatial playground where users sculpt musical harmonies in three dimensions by bending light rays and manipulating luminous floating prisms.",
    overview:
      "Prism Spatial tests the boundary between visual art and musical composition. By treating spatial audio emitters as light prisms, moving an object bends pitch, timbre, and delay lines in real-time.",
    challenge:
      "Real-time ray tracing of spatial acoustic nodes across web browsers and headset displays while maintaining a 90 FPS rendering budget.",
    experience:
      "Users pluck vibrating beams of orange light that resonate with rich polyphonic chords. Pinching a prism refracts the frequency into granular sub-harmonics.",
    technologies: ["WebAudio API", "WebGPU", "Hand-Tracking SDK", "Mathematical Physics Solver"],
    metrics: [
      { label: "Audio Polyphony", value: "64 Discrete Voices" },
      { label: "Latency Buffer", value: "2.8ms" },
      { label: "Gesture Precision", value: "Sub-millimeter" },
    ],
  },
  {
    slug: "kroma-canvas",
    title: "Kroma Canvas",
    tagline: "Ultra-fluid vector motion playground for designers and visual storytellers.",
    category: "products",
    categoryLabel: "Creative Software",
    year: "2025",
    platforms: ["macOS", "Web"],
    status: "In Development",
    featured: true,
    theme: {
      accent: "#C31531",
      ambient: "rgba(195, 21, 49, 0.14)",
      gradient: "from-red-600/20 via-orange-500/10 to-transparent",
    },
    summary:
      "Next-generation vector animation environment featuring spring-based dynamic tweens, real-time shaders, and direct GPU timeline scrubbing.",
    overview:
      "Traditional animation software is hindered by cumbersome multi-track keyframe clutter. Kroma Canvas introduces physical inertia directly to vector paths, turning timeline editing into an elastic, expressive, and tactile art form.",
    challenge:
      "Building a bespoke rendering engine capable of tessellating complex SVG beziers into GPU vertex buffers on every frame without dropping below 120 FPS.",
    experience:
      "Every node behaves with authentic mass and tension. Designers can stretch shapes like warm glass, bake realistic spring dampening, and export instant production code.",
    technologies: ["Rust Core Engine", "WebAssembly", "Skia / WebGPU", "Custom Timeline Pipeline"],
    metrics: [
      { label: "Tessellation Speed", value: "0.4ms / 10k Nodes" },
      { label: "Export Formats", value: "Lottie, WebGL, CSS, Native" },
      { label: "Scrub Framerate", value: "Solid 120 FPS" },
    ],
  },
  {
    slug: "nova-core",
    title: "Nova Core",
    tagline: "Interactive 100,000-particle gravitational simulation sandbox.",
    category: "experiments",
    categoryLabel: "Experimental Sandbox",
    year: "2025",
    platforms: ["Web", "macOS"],
    status: "Released",
    featured: false,
    theme: {
      accent: "#F05A18",
      ambient: "rgba(240, 90, 24, 0.12)",
      gradient: "from-amber-600/20 via-orange-500/10 to-transparent",
    },
    summary:
      "A computational study of stellar body collapse and accretion disc formation, controlled via multi-touch fluid dynamics in real time.",
    overview:
      "Created as an internal R&D prototype at NextAura Studios, Nova Core tests GPU compute shader performance across mobile and desktop web browsers.",
    challenge:
      "Executing Barnes-Hut gravitational approximations for 100,000 interacting particles within strict browser power consumption constraints.",
    experience:
      "Dragging across the canvas introduces supermassive gravity wells. Swarms of glowing particles swirl into glowing accretion spirals that collapse and pulse with energy.",
    technologies: ["Compute Shaders", "WebGPU", "Barnes-Hut Algorithm", "Bespoke Particle Emitter"],
    metrics: [
      { label: "Active Particles", value: "100,000" },
      { label: "Compute Passes", value: "Double-buffered PingPong" },
      { label: "Memory Footprint", value: "14 MB" },
    ],
  },
  {
    slug: "lumina-deck",
    title: "Lumina Deck",
    tagline: "Tactile haptic companion instrument for digital audio & stream orchestration.",
    category: "products",
    categoryLabel: "Consumer Product",
    year: "2026",
    platforms: ["macOS", "Cross-Platform"],
    status: "Coming Soon",
    featured: false,
    theme: {
      accent: "#A90F24",
      ambient: "rgba(169, 15, 36, 0.12)",
      gradient: "from-rose-600/20 via-orange-500/10 to-transparent",
    },
    summary:
      "A software companion console featuring magnetic grid snapping, dynamic fader elasticity, and instant hardware bridge integration.",
    overview:
      "Designed for electronic musicians and digital broadcasters who crave tangible feel without sacrificing digital flexibility. Lumina Deck turns touch surfaces into weighted control boards.",
    challenge:
      "Creating seamless bi-directional MIDI/OSC synchronizations with sub-millisecond jitter over both wired and ultra-low-latency wireless links.",
    experience:
      "Controls visually deflect and illuminate under fingertip pressure. Faders offer simulated detent clicks through synchronized audio-haptic feedback.",
    technologies: ["Swift", "CoreAudio Low-Jitter Driver", "Bespoke OSC Bridge", "Metal Shaders"],
    metrics: [
      { label: "Jitter Window", value: "< 0.5ms" },
      { label: "Custom Layouts", value: "Infinite Modular" },
      { label: "Supported Protocols", value: "MIDI 2.0 / OSC / ArtNet" },
    ],
  },
];

export const CATEGORIES: { id: 'all' | 'apps' | 'games' | 'products' | 'experiments'; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "apps", label: "Mobile Apps" },
  { id: "games", label: "Games" },
  { id: "products", label: "Digital Products" },
  { id: "experiments", label: "Experiments" },
];
