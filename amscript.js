tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        asphalt: '#0b0f19',
                        carbon: '#121826',
                        'carbon-card': '#1a2234',
                        crimson: '#ff2a5f',
                        'crimson-glow': '#ff003c',
                        gold: '#f59e0b',
                        cyan: '#00f0ff',
                    },
                    fontFamily: {
                        orbitron: ['Orbitron', 'sans-serif'],
                        rajdhani: ['Rajdhani', 'sans-serif'],
                        jp: ['"Noto Sans JP"', 'sans-serif'],
                    },
                    boxShadow: {
                        'neon-crimson': '0 0 20px rgba(255, 42, 95, 0.4)',
                        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.4)',
                        'gauge-glow': '0 0 35px rgba(255, 42, 95, 0.25)',
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #0b0f19;
            color: #f3f4f6;
            font-family: 'Rajdhani', 'Noto Sans JP', sans-serif;
            overflow-x: hidden;
        }

        /* Carbon fiber texture overlay */
        .carbon-texture {
            background-image: 
                radial-gradient(rgba(0, 0, 0, 0.75) 15%, transparent 16%),
                radial-gradient(rgba(0, 0, 0, 0.75) 15%, transparent 16%);
            background-size: 6px 6px;
            background-position: 0 0, 3px 3px;
        }

        /* Speed line grid animation */
        .touge-grid {
            background-size: 40px 40px;
            background-image: 
                linear-gradient(to right, rgba(255, 42, 95, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px);
        }

        /* Shift Light animation */
        @keyframes flashRed {
            0%, 100% { background-color: #1a2234; box-shadow: none; }
            50% { background-color: #ff003c; box-shadow: 0 0 25px #ff003c, 0 0 40px #ff003c; }
        }
        .shift-light-active {
            animation: flashRed 0.15s infinite;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0b0f19;
        }
        ::-webkit-scrollbar-thumb {
            background: #232d42;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #ff2a5f;
        }

        /* 3D Pop Out Effect Container */
        .card-3d-wrapper {
            perspective: 1000px;
        }
        .card-3d-inner {
            transition: transform 0.2s ease-out;
            transform-style: preserve-3d;
        }
    </style>
</head>
<body class="carbon-texture text-gray-200 antialiased selection:bg-crimson selection:text-white">

    <!-- Navigation Bar -->
    <header class="fixed top-0 left-0 w-full z-50 bg-asphalt/90 backdrop-blur-md border-b border-gray-800/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- Logo with Japanese Name -->
                <a href="#home" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-crimson to-rose-700 flex items-center justify-center font-orbitron font-black text-xl text-white shadow-neon-crimson group-hover:scale-105 transition-transform">
                        エ
                    </div>
                    <div class="flex flex-col">
                        <span class="font-jp font-bold text-lg tracking-wider text-white group-hover:text-crimson transition-colors">
                            エイドリアン・ミンター
                        </span>
                        <span class="font-orbitron text-[10px] text-cyan tracking-widest uppercase">
                            MINTAR • ADRIAN
                        </span>
                    </div>
                </a>

                <!-- Desktop Navigation Links -->
                <nav class="hidden md:flex items-center gap-8 font-orbitron text-sm font-semibold tracking-wider">
                    <a href="#home" class="text-gray-300 hover:text-crimson transition-colors">HOME</a>
                    <a href="#about" class="text-gray-300 hover:text-crimson transition-colors">ABOUT</a>
                    <a href="#skills" class="text-gray-300 hover:text-crimson transition-colors">TUNING & SKILLS</a>
                    <a href="#garage" class="text-gray-300 hover:text-crimson transition-colors">GARAGE BUILD</a>
                    <a href="#contact" class="text-gray-300 hover:text-crimson transition-colors">CONTACT</a>
                </nav>

                <!-- Action Button & Audio Toggle -->
                <div class="hidden md:flex items-center gap-4">
                    <!-- Audio Mute Switch -->
                    <button id="audio-toggle-btn" title="Toggle Engine Audio Sound" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-carbon border border-gray-700 text-xs font-orbitron text-gray-300 hover:border-cyan hover:text-cyan transition-all">
                        <i id="audio-icon" class="fas fa-volume-xmark text-crimson"></i>
                        <span id="audio-status-text">AUDIO: OFF</span>
                    </button>

                    <!-- Let's Talk CTA -->
                    <a href="#contact" class="px-5 py-2.5 rounded-lg bg-gradient-to-r from-crimson to-rose-600 text-white font-orbitron font-bold text-xs tracking-wider shadow-neon-crimson hover:brightness-125 transition-all">
                        LET'S TALK <i class="fas fa-chevron-right ml-1"></i>
                    </a>
                </div>

                <!-- Mobile Hamburger Button -->
                <div class="flex md:hidden items-center gap-2">
                    <button id="mobile-audio-btn" class="p-2.5 rounded-lg bg-carbon border border-gray-700 text-gray-300">
                        <i id="mobile-audio-icon" class="fas fa-volume-xmark text-crimson"></i>
                    </button>
                    <button id="mobile-menu-btn" class="p-2.5 rounded-lg bg-carbon border border-gray-700 text-gray-300 hover:text-white focus:outline-none">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer Navigation -->
        <div id="mobile-drawer" class="hidden md:hidden bg-carbon/95 border-b border-gray-800 px-4 pt-2 pb-6 space-y-3 font-orbitron">
            <a href="#home" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-200 hover:bg-crimson/20 hover:text-crimson">HOME</a>
            <a href="#about" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-200 hover:bg-crimson/20 hover:text-crimson">ABOUT</a>
            <a href="#skills" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-200 hover:bg-crimson/20 hover:text-crimson">TUNING & SKILLS</a>
            <a href="#garage" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-200 hover:bg-crimson/20 hover:text-crimson">GARAGE BUILD</a>
            <a href="#contact" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-semibold text-gray-200 hover:bg-crimson/20 hover:text-crimson">CONTACT</a>
            <a href="#contact" class="block text-center mt-4 w-full py-3 rounded-lg bg-crimson font-bold text-white shadow-neon-crimson">GET IN TOUCH</a>
        </div>
    </header>

    <main class="pt-20">
        <!-- Hero Section -->
        <section id="home" class="relative min-h-[92vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 touge-grid overflow-hidden">
            <!-- Decorative Light Rays -->
            <div class="absolute top-1/4 -left-20 w-96 h-96 bg-crimson/10 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute bottom-10 -right-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

            <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Left Title Column -->
                <div class="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-crimson/10 border border-crimson/30 text-crimson font-orbitron text-xs font-bold uppercase tracking-widest">
                        <span class="w-2 h-2 rounded-full bg-crimson animate-ping"></span>
                        INITIAL D EDITION / 公道最速
                    </div>

                    <!-- JAPANESE NAME DISPLAY ONLY -->
                    <div class="space-y-1">
                        <h1 class="text-4xl sm:text-6xl md:text-7xl font-jp font-black text-white tracking-wider drop-shadow-lg">
                            エイドリアン・ミンター
                        </h1>
                        <p class="font-orbitron text-xl sm:text-2xl text-cyan font-bold tracking-widest pt-2">
                            MINTAR • POGI
                        </p>
                    </div>

                    <p class="text-gray-300 text-lg sm:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Full-Stack Web Developer & Designer paired with the discipline of a <span class="text-crimson font-bold">Professional Boxing Trainee</span>. Engineering high-performance code on and off the mountain pass.
                    </p>

                    <!-- Interactive Pedal Control Bar -->
                    <div class="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <button id="gas-pedal-btn" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-crimson via-rose-600 to-crimson hover:from-rose-500 hover:to-crimson text-white font-orbitron font-black text-base tracking-widest shadow-neon-crimson transform active:scale-95 transition-all select-none touch-none flex items-center justify-center gap-3 border border-crimson-glow">
                            <i class="fas fa-gauge-high text-xl"></i>
                            <span>FLOOR THE GAS PEDAL</span>
                        </button>
                        <p class="text-xs font-orbitron text-gray-400 uppercase tracking-wider text-center sm:text-left">
                            <i class="fas fa-hand-pointer text-cyan mr-1"></i> PRESS & HOLD TO REV ENGINE
                        </p>
                    </div>
                </div>

                <!-- Right Interactive Instrument Cluster (Tachometer & Turbo Boost Gauge) -->
                <div class="lg:col-span-6 flex flex-col items-center justify-center z-10">
                    <div class="w-full max-w-lg bg-carbon/90 p-6 sm:p-8 rounded-3xl border border-gray-800 shadow-gauge-glow relative backdrop-blur-md">
                        
                        <!-- Header Bar for Gauge Cluster -->
                        <div class="flex items-center justify-between border-b border-gray-800 pb-4 mb-6 font-orbitron">
                            <div class="flex items-center gap-2">
                                <span id="shift-light" class="w-4 h-4 rounded-full bg-gray-800 border border-gray-700 transition-colors"></span>
                                <span class="text-xs text-gray-400 tracking-wider">SHIFT LIGHT</span>
                            </div>
                            <div class="text-xs text-crimson font-bold tracking-widest flex items-center gap-2">
                                <i class="fas fa-bolt"></i> RB26DETT TWIN TURBO
                            </div>
                        </div>

                        <!-- Gauge Display Canvas & Overlay -->
                        <div class="relative flex justify-center items-center">
                            <canvas id="tachometer-canvas" width="340" height="340" class="max-w-full h-auto"></canvas>
                            
                            <!-- Central Digital Telemetry Screen -->
                            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-8">
                                <span id="digital-rpm" class="font-orbitron font-black text-4xl text-white tracking-widest">
                                    0900
                                </span>
                                <span class="font-orbitron text-[10px] text-gray-400 tracking-widest">RPM x 1000</span>

                                <div class="mt-2 flex items-center gap-4">
                                    <div class="bg-asphalt/80 px-3 py-1 rounded border border-gray-700 text-center">
                                        <div class="text-[9px] font-orbitron text-gray-400">GEAR</div>
                                        <div id="gear-indicator" class="font-orbitron font-bold text-xl text-cyan">N</div>
                                    </div>
                                    <div class="bg-asphalt/80 px-3 py-1 rounded border border-gray-700 text-center">
                                        <div class="text-[9px] font-orbitron text-gray-400">BOOST</div>
                                        <div id="boost-indicator" class="font-orbitron font-bold text-xl text-gold">0.0 BAR</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Bottom Status Notification -->
                        <div class="mt-4 text-center font-orbitron text-xs text-gray-400 flex items-center justify-center gap-2">
                            <i class="fas fa-circle text-[8px] text-emerald-400 animate-pulse"></i>
                            <span id="engine-status">ENGINE READY - IDLE AT 900 RPM</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- About Me Section -->
        <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <h2 class="font-jp text-3xl sm:text-4xl font-bold text-white tracking-wider">
                    <span class="text-crimson">自己紹介</span> / ABOUT THE DRIVER
                </h2>
                <div class="h-1 w-20 bg-gradient-to-r from-crimson to-cyan mx-auto rounded-full"></div>
                <p class="font-orbitron text-gray-400 text-sm tracking-widest">HIGH SPEED EXECUTION • DISCIPLINED PRECISION</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <!-- 3D Pop Out Profile Card Container -->
                <div class="lg:col-span-5 flex justify-center">
                    <div class="card-3d-wrapper w-full max-w-md">
                        <div id="profile-card" class="card-3d-inner relative rounded-2xl bg-gradient-to-b from-carbon-card to-asphalt p-6 border border-gray-800 shadow-2xl overflow-hidden group">
                            
                            <!-- Card Decorative Corner Borders -->
                            <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-crimson rounded-tl-xl"></div>
                            <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan rounded-br-xl"></div>

                            <!-- Driver Graphic Canvas / SVG Profile Avatar -->
                            <div class="relative w-full h-80 rounded-xl overflow-hidden bg-carbon flex items-center justify-center border border-gray-800">
                                <svg class="w-full h-full text-crimson/20" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="200" cy="200" r="160" stroke="currentColor" stroke-width="2" stroke-dasharray="8 8"/>
                                    <path d="M200 80L230 150H170L200 80Z" fill="currentColor"/>
                                    <path d="M120 280C120 220 160 200 200 200C240 200 280 220 280 280" stroke="currentColor" stroke-width="8"/>
                                    <circle cx="200" cy="150" r="45" stroke="currentColor" stroke-width="6"/>
                                </svg>

                                <div class="absolute inset-0 bg-gradient-to-t from-asphalt via-transparent to-transparent"></div>
                                
                                <div class="absolute bottom-4 left-4 right-4 text-center">
                                    <div class="font-jp font-black text-2xl text-white">エイドリアン・ミンター</div>
                                    <div class="font-orbitron text-xs text-crimson tracking-widest font-bold">BOXER & FULL-STACK ENGINEER</div>
                                </div>
                            </div>

                            <!-- Telemetry Specs List -->
                            <div class="mt-6 space-y-3 font-orbitron text-xs">
                                <div class="flex justify-between border-b border-gray-800 pb-2">
                                    <span class="text-gray-400">SPECIALIZATION</span>
                                    <span class="text-cyan font-bold">FULL-STACK REACT / NODE</span>
                                </div>
                                <div class="flex justify-between border-b border-gray-800 pb-2">
                                    <span class="text-gray-400">BOXING DIVISION</span>
                                    <span class="text-gold font-bold">TRAINEE / LIGHTWEIGHT</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-400">PHILOSOPHY</span>
                                    <span class="text-crimson font-bold">APEX CORNERING & CLEAN CODE</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Bio & Boxing Grid Cards -->
                <div class="lg:col-span-7 space-y-6">
                    <h3 class="text-2xl sm:text-3xl font-orbitron font-bold text-white">
                        TRAINING FOR THE <span class="text-crimson">APEX</span> ON CODE & CANVAS
                    </h3>
                    
                    <p class="text-gray-300 text-lg leading-relaxed">
                        I am <span class="font-jp text-white font-bold">エイドリアン・ミンター</span>. Like taking a hairpin turn on a touge mountain pass or stepping into the boxing ring, web engineering requires split-second reactions, calculated footwork, and unyielding stamina.
                    </p>

                    <p class="text-gray-400 leading-relaxed">
                        My daily regimen blends rigorous boxing workouts with cutting-edge full-stack software development. Whether optimizing critical rendering paths or refining jab-cross combinations, my aim is flawless efficiency.
                    </p>

                    <!-- Athletic & Code Stat Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-orbitron">
                        <div class="p-4 rounded-xl bg-carbon-card border border-gray-800 hover:border-crimson transition-all">
                            <div class="text-crimson text-2xl font-black mb-1">0.18s</div>
                            <div class="text-xs text-gray-400 font-bold">REACTION TIME</div>
                            <div class="text-[10px] text-gray-500">Reflexes tuned in ring & editor</div>
                        </div>

                        <div class="p-4 rounded-xl bg-carbon-card border border-gray-800 hover:border-gold transition-all">
                            <div class="text-gold text-2xl font-black mb-1">100%</div>
                            <div class="text-xs text-gray-400 font-bold">FOCUS & GRIT</div>
                            <div class="text-[10px] text-gray-500">Boxing trainee stamina</div>
                        </div>

                        <div class="p-4 rounded-xl bg-carbon-card border border-gray-800 hover:border-cyan transition-all">
                            <div class="text-cyan text-2xl font-black mb-1">99.9%</div>
                            <div class="text-xs text-gray-400 font-bold">CODE VELOCITY</div>
                            <div class="text-[10px] text-gray-500">Clean architecture & speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills / Tuning Bay Section -->
        <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800/80">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <h2 class="font-jp text-3xl sm:text-4xl font-bold text-white tracking-wider">
                    <span class="text-cyan">チューニング</span> / SKILL TUNING SPECIFICATIONS
                </h2>
                <div class="h-1 w-20 bg-gradient-to-r from-cyan to-crimson mx-auto rounded-full"></div>
                <p class="font-orbitron text-gray-400 text-sm tracking-widest">HIGH REV TECH STACK ENGINE PERFORMANCE</p>
            </div>

            <!-- Skills Gauges Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <!-- Skill Bar Item 1: HTML5 & Modern CSS -->
                <div class="p-6 rounded-2xl bg-carbon-card border border-gray-800 hover:border-crimson/50 transition-all">
                    <div class="flex justify-between items-center mb-2 font-orbitron">
                        <span class="text-white font-bold flex items-center gap-2">
                            <i class="fab fa-html5 text-crimson text-xl"></i> HTML5 / CSS3 / TAILWIND
                        </span>
                        <span class="text-crimson font-black text-sm">98% BOOST</span>
                    </div>
                    <div class="w-full h-3 rounded-full bg-asphalt overflow-hidden p-0.5 border border-gray-800">
                        <div class="h-full bg-gradient-to-r from-rose-700 to-crimson rounded-full w-[98%] shadow-neon-crimson"></div>
                    </div>
                    <p class="mt-2 text-xs font-orbitron text-gray-400">Chassis & Bodywork: Semantic layout, responsive fluid design, and clean styling aesthetics.</p>
                </div>

                <!-- Skill Bar Item 2: JavaScript ES6+ -->
                <div class="p-6 rounded-2xl bg-carbon-card border border-gray-800 hover:border-cyan/50 transition-all">
                    <div class="flex justify-between items-center mb-2 font-orbitron">
                        <span class="text-white font-bold flex items-center gap-2">
                            <i class="fab fa-js-square text-cyan text-xl"></i> JAVASCRIPT (ES6+) / TS
                        </span>
                        <span class="text-cyan font-black text-sm">95% BOOST</span>
                    </div>
                    <div class="w-full h-3 rounded-full bg-asphalt overflow-hidden p-0.5 border border-gray-800">
                        <div class="h-full bg-gradient-to-r from-blue-600 to-cyan rounded-full w-[95%] shadow-neon-cyan"></div>
                    </div>
                    <p class="mt-2 text-xs font-orbitron text-gray-400">Engine ECU: Asynchronous architecture, Web Audio API, dynamic client-side logic.</p>
                </div>

                <!-- Skill Bar Item 3: React & Modern Frontend Frameworks -->
                <div class="p-6 rounded-2xl bg-carbon-card border border-gray-800 hover:border-gold/50 transition-all">
                    <div class="flex justify-between items-center mb-2 font-orbitron">
                        <span class="text-white font-bold flex items-center gap-2">
                            <i class="fab fa-react text-gold text-xl"></i> REACT & COMPONENT ECOSYSTEM
                        </span>
                        <span class="text-gold font-black text-sm">90% BOOST</span>
                    </div>
                    <div class="w-full h-3 rounded-full bg-asphalt overflow-hidden p-0.5 border border-gray-800">
                        <div class="h-full bg-gradient-to-r from-amber-600 to-gold rounded-full w-[90%]"></div>
                    </div>
                    <p class="mt-2 text-xs font-orbitron text-gray-400">Twin Turbo Setup: Modular state management, custom hooks, and high-speed UI responsiveness.</p>
                </div>

                <!-- Skill Bar Item 4: Node.js & Backend Systems -->
                <div class="p-6 rounded-2xl bg-carbon-card border border-gray-800 hover:border-emerald-500/50 transition-all">
                    <div class="flex justify-between items-center mb-2 font-orbitron">
                        <span class="text-white font-bold flex items-center gap-2">
                            <i class="fab fa-node-js text-emerald-400 text-xl"></i> NODE.JS & REST APIs
                        </span>
                        <span class="text-emerald-400 font-black text-sm">88% BOOST</span>
                    </div>
                    <div class="w-full h-3 rounded-full bg-asphalt overflow-hidden p-0.5 border border-gray-800">
                        <div class="h-full bg-gradient-to-r from-emerald-700 to-emerald-400 rounded-full w-[88%]"></div>
                    </div>
                    <p class="mt-2 text-xs font-orbitron text-gray-400">Drivetrain: High-throughput server endpoints, database query optimization, and back-end logic.</p>
                </div>

            </div>
        </section>

        <!-- Garage Projects Section -->
        <section id="garage" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800/80">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
                <h2 class="font-jp text-3xl sm:text-4xl font-bold text-white tracking-wider">
                    <span class="text-gold">ガレージ</span> / TUNED GARAGE BUILDS
                </h2>
                <div class="h-1 w-20 bg-gradient-to-r from-gold to-crimson mx-auto rounded-full"></div>
                <p class="font-orbitron text-gray-400 text-sm tracking-widest">CUSTOM BUILT HIGH-PERFORMANCE WEB APPLICATIONS</p>
            </div>

            <!-- Garage Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- Project 1 -->
                <div class="bg-carbon-card rounded-2xl border border-gray-800 overflow-hidden hover:border-crimson transition-all duration-300 flex flex-col group">
                    <div class="h-48 bg-asphalt relative flex items-center justify-center p-6 border-b border-gray-800 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-crimson/10 to-transparent"></div>
                        <i class="fas fa-car-burst text-6xl text-crimson group-hover:scale-110 transition-transform duration-300"></i>
                        <span class="absolute top-4 right-4 bg-crimson/20 border border-crimson text-crimson font-orbitron text-[10px] font-bold px-2 py-1 rounded">BUILD #01</span>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                            <h3 class="font-orbitron font-bold text-xl text-white">AUTOFORGE COMPONENT TUNER</h3>
                            <p class="text-gray-400 text-sm mt-2">A high-performance interactive design library built for rapid UI layout construction.</p>
                        </div>
                        <button onclick="openProjectModal('AutoForge', 'A high-performance interactive design library built for rapid UI layout construction.', 'React, Tailwind CSS, WebGL', 'https://github.com')" class="w-full py-2.5 rounded-lg bg-carbon border border-gray-700 hover:border-crimson font-orbitron text-xs font-bold text-gray-200 hover:text-crimson transition-all">
                            INSPECT BUILD DETAILS
                        </button>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="bg-carbon-card rounded-2xl border border-gray-800 overflow-hidden hover:border-cyan transition-all duration-300 flex flex-col group">
                    <div class="h-48 bg-asphalt relative flex items-center justify-center p-6 border-b border-gray-800 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent"></div>
                        <i class="fas fa-stopwatch-20 text-6xl text-cyan group-hover:scale-110 transition-transform duration-300"></i>
                        <span class="absolute top-4 right-4 bg-cyan/20 border border-cyan text-cyan font-orbitron text-[10px] font-bold px-2 py-1 rounded">BUILD #02</span>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                            <h3 class="font-orbitron font-bold text-xl text-white">TASKFLOW TOUGE DASHBOARD</h3>
                            <p class="text-gray-400 text-sm mt-2">Real-time telemetry and task orchestration platform designed for speed and clarity.</p>
                        </div>
                        <button onclick="openProjectModal('TaskFlow Touge', 'Real-time telemetry and task orchestration platform designed for speed and clarity.', 'Node.js, Express, Socket.io', 'https://github.com')" class="w-full py-2.5 rounded-lg bg-carbon border border-gray-700 hover:border-cyan font-orbitron text-xs font-bold text-gray-200 hover:text-cyan transition-all">
                            INSPECT BUILD DETAILS
                        </button>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="bg-carbon-card rounded-2xl border border-gray-800 overflow-hidden hover:border-gold transition-all duration-300 flex flex-col group">
                    <div class="h-48 bg-asphalt relative flex items-center justify-center p-6 border-b border-gray-800 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent"></div>
                        <i class="fas fa-dumbbell text-6xl text-gold group-hover:scale-110 transition-transform duration-300"></i>
                        <span class="absolute top-4 right-4 bg-gold/20 border border-gold text-gold font-orbitron text-[10px] font-bold px-2 py-1 rounded">BUILD #03</span>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                            <h3 class="font-orbitron font-bold text-xl text-white">PUNCH METRICS BOXING ANALYTICS</h3>
                            <p class="text-gray-400 text-sm mt-2">A biometric motion and punching telemetry tracking web app for combat trainees.</p>
                        </div>
                        <button onclick="openProjectModal('PunchMetrics', 'A biometric motion and punching telemetry tracking web app for combat trainees.', 'JavaScript, Canvas API, Web Audio', 'https://github.com')" class="w-full py-2.5 rounded-lg bg-carbon border border-gray-700 hover:border-gold font-orbitron text-xs font-bold text-gray-200 hover:text-gold transition-all">
                            INSPECT BUILD DETAILS
                        </button>
                    </div>
                </div>

            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800/80">
            <div class="max-w-4xl mx-auto bg-carbon-card rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-crimson/10 rounded-full blur-3xl pointer-events-none"></div>

                <div class="text-center space-y-3 mb-10">
                    <h2 class="font-jp text-3xl sm:text-4xl font-bold text-white">
                        <span class="text-crimson">お問い合わせ</span> / PIT STOP CONTACT
                    </h2>
                    <p class="font-orbitron text-gray-400 text-sm tracking-widest">READY TO COLLABORATE ON HIGH SPEED PROJECTS?</p>
                </div>

                <form id="contact-form" onsubmit="handleFormSubmit(event)" class="space-y-6 font-orbitron">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs font-bold text-gray-300 mb-2">DRIVER NAME</label>
                            <input type="text" required placeholder="Your Name" class="w-full px-4 py-3 rounded-xl bg-asphalt border border-gray-700 text-white focus:outline-none focus:border-crimson transition-colors">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-300 mb-2">EMAIL ADDRESS</label>
                            <input type="email" required placeholder="driver@touge.com" class="w-full px-4 py-3 rounded-xl bg-asphalt border border-gray-700 text-white focus:outline-none focus:border-crimson transition-colors">
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-300 mb-2">TRANSMISSION / MESSAGE</label>
                        <textarea rows="4" required placeholder="Write your project details or inquiries here..." class="w-full px-4 py-3 rounded-xl bg-asphalt border border-gray-700 text-white focus:outline-none focus:border-crimson transition-colors"></textarea>
                    </div>
                    <button type="submit" class="w-full py-4 rounded-xl bg-gradient-to-r from-crimson to-rose-600 text-white font-black tracking-widest text-sm shadow-neon-crimson hover:brightness-125 transition-all">
                        SEND TRANSMISSION <i class="fas fa-paper-plane ml-2"></i>
                    </button>
                </form>
                <div id="contact-feedback" class="hidden mt-4 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-400 font-orbitron text-center text-sm">
                    Transmission received! I will reply as soon as possible.
                </div>
            </div>
        </section>
    </main>

    <!-- Project Build Modal Overlay -->
    <div id="project-modal" class="fixed inset-0 z-50 hidden bg-asphalt/90 backdrop-blur-md flex items-center justify-center p-4">
        <div class="bg-carbon-card border border-gray-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative space-y-4">
            <button onclick="closeProjectModal()" class="absolute top-4 right-4 text-gray-400 hover:text-white font-orbitron text-xl">
                <i class="fas fa-xmark"></i>
            </button>
            <h3 id="modal-title" class="font-orbitron font-bold text-2xl text-white">BUILD NAME</h3>
            <p id="modal-desc" class="text-gray-300 text-sm">Build description goes here.</p>
            <div class="border-t border-gray-800 pt-3">
                <div class="text-xs font-orbitron text-gray-400">TECH STACK ENGINE:</div>
                <div id="modal-tech" class="text-cyan font-orbitron font-bold text-sm">React, Tailwind</div>
            </div>
            <div class="pt-4 flex gap-4">
                <a id="modal-link" href="#" target="_blank" class="flex-1 py-3 text-center rounded-xl bg-crimson font-orbitron font-bold text-xs text-white shadow-neon-crimson">
                    OPEN REPOSITORY
                </a>
                <button onclick="closeProjectModal()" class="flex-1 py-3 text-center rounded-xl bg-asphalt border border-gray-700 font-orbitron font-bold text-xs text-gray-300">
                    CLOSE
                </button>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="py-12 border-t border-gray-800 bg-asphalt text-center font-orbitron">
        <div class="max-w-7xl mx-auto px-4 space-y-4">
            <div class="font-jp text-xl font-bold text-white">エイドリアン・ミンター</div>
            <p class="text-xs text-gray-500">MINTAR POGI • TOUGE AUTOMOTIVE EDITION</p>
            <p class="text-[10px] text-gray-600">© 2026 エイドリアン・ミンター. ALL RIGHTS RESERVED.</p>
        </div>
    </footer>

    <!-- Interactive JavaScript Engine -->
    <script>
        // Web Audio Synthesizer Engine (RB26DETT Inline-6 Sound Simulation)
        let audioCtx = null;
        let isAudioMuted = true;
        let oscMain = null;
        let oscSub = null;
        let oscTurbo = null;
        let gainNode = null;
        let filterNode = null;

        function initAudioEngine() {
            if (audioCtx) return;
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioCtx = new AudioContext();

                // Master Gain
                gainNode = audioCtx.createGain();
                gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

                // Lowpass Filter for Engine Warmth
                filterNode = audioCtx.createBiquadFilter();
                filterNode.type = 'lowpass';
                filterNode.frequency.setValueAtTime(400, audioCtx.currentTime);

                // Main Engine Oscillator (Inline 6 fundamental)
                oscMain = audioCtx.createOscillator();
                oscMain.type = 'sawtooth';
                oscMain.frequency.setValueAtTime(45, audioCtx.currentTime); // ~900 RPM idle

                // Sub Oscillator for exhaust rumble
                oscSub = audioCtx.createOscillator();
                oscSub.type = 'triangle';
                oscSub.frequency.setValueAtTime(22.5, audioCtx.currentTime);

                // Turbo Spool Hiss Oscillator
                oscTurbo = audioCtx.createOscillator();
                oscTurbo.type = 'sine';
                oscTurbo.frequency.setValueAtTime(2000, audioCtx.currentTime);

                // Connect nodes
                oscMain.connect(filterNode);
                oscSub.connect(filterNode);
                filterNode.connect(gainNode);
                gainNode.connect(audioCtx.destination);

                oscMain.start();
                oscSub.start();
            } catch (e) {
                console.warn('Web Audio API initialized on user gesture requirement.', e);
            }
        }

        function toggleAudio() {
            if (!audioCtx) initAudioEngine();
            if (audioCtx && audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            isAudioMuted = !isAudioMuted;
            const statusText = document.getElementById('audio-status-text');
            const icon = document.getElementById('audio-icon');
            const mobileIcon = document.getElementById('mobile-audio-icon');

            if (isAudioMuted) {
                if (statusText) statusText.textContent = 'AUDIO: OFF';
                if (icon) icon.className = 'fas fa-volume-xmark text-crimson';
                if (mobileIcon) mobileIcon.className = 'fas fa-volume-xmark text-crimson';
                if (gainNode && audioCtx) gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
            } else {
                if (statusText) statusText.textContent = 'AUDIO: ON';
                if (icon) icon.className = 'fas fa-volume-high text-cyan';
                if (mobileIcon) mobileIcon.className = 'fas fa-volume-high text-cyan';
                if (gainNode && audioCtx) gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
            }
        }

        document.getElementById('audio-toggle-btn').addEventListener('click', toggleAudio);
        document.getElementById('mobile-audio-btn').addEventListener('click', toggleAudio);

        // Canvas Tachometer Cluster Logic
        const canvas = document.getElementById('tachometer-canvas');
        const ctx = canvas.getContext('2d');
        
        let currentRpm = 900; // Idle RPM
        let targetRpm = 900;
        let isFloorPedal = false;

        const digitalRpm = document.getElementById('digital-rpm');
        const gearIndicator = document.getElementById('gear-indicator');
        const boostIndicator = document.getElementById('boost-indicator');
        const shiftLight = document.getElementById('shift-light');
        const engineStatus = document.getElementById('engine-status');

        // Gas Pedal Controls
        const gasBtn = document.getElementById('gas-pedal-btn');

        function startRev() {
            isFloorPedal = true;
            if (isAudioMuted) {
                toggleAudio(); // Automatically enable sound on gas pedal interaction
            }
            if (audioCtx && audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
        }

        function stopRev() {
            isFloorPedal = false;
        }

        gasBtn.addEventListener('mousedown', startRev);
        gasBtn.addEventListener('mouseup', stopRev);
        gasBtn.addEventListener('mouseleave', stopRev);

        gasBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startRev(); });
        gasBtn.addEventListener('touchend', stopRev);

        function updateGaugeCluster() {
            // RPM Physics calculation
            if (isFloorPedal) {
                targetRpm += 180;
                if (targetRpm > 9000) targetRpm = 9000;
            } else {
                targetRpm -= 140;
                if (targetRpm < 900) targetRpm = 900;
            }

            // Smooth needle movement interpolation
            currentRpm += (targetRpm - currentRpm) * 0.15;

            // Compute Gear & Boost stats
            let gear = '1';
            let boost = 0.0;

            if (currentRpm < 1500) { gear = '1'; boost = 0.1; }
            else if (currentRpm < 3500) { gear = '2'; boost = 0.4; }
            else if (currentRpm < 5500) { gear = '3'; boost = 0.8; }
            else if (currentRpm < 7500) { gear = '4'; boost = 1.2; }
            else { gear = '5'; boost = 1.5; }

            // UI Telemetry Updates
            digitalRpm.textContent = Math.round(currentRpm).toString().padStart(4, '0');
            gearIndicator.textContent = gear;
            boostIndicator.textContent = boost.toFixed(1) + ' BAR';

            // Audio pitch adjustments
            if (audioCtx && !isAudioMuted && oscMain && filterNode) {
                const pitchFreq = 30 + (currentRpm / 9000) * 220; // 30Hz to 250Hz scale
                oscMain.frequency.setTargetAtTime(pitchFreq, audioCtx.currentTime, 0.05);
                if (oscSub) oscSub.frequency.setTargetAtTime(pitchFreq / 2, audioCtx.currentTime, 0.05);
                filterNode.frequency.setTargetAtTime(300 + (currentRpm / 9000) * 1800, audioCtx.currentTime, 0.05);
            }

            // Shift Light Check
            if (currentRpm > 7800) {
                shiftLight.classList.add('shift-light-active');
                engineStatus.textContent = 'SHIFT LIGHT WARNING - REDLINE!';
                engineStatus.className = 'mt-4 text-center font-orbitron text-xs text-crimson flex items-center justify-center gap-2 font-bold animate-pulse';
            } else {
                shiftLight.classList.remove('shift-light-active');
                engineStatus.textContent = isFloorPedal ? 'FULL THROTTLE - ACCELERATING' : 'ENGINE READY - IDLE AT 900 RPM';
                engineStatus.className = 'mt-4 text-center font-orbitron text-xs text-gray-400 flex items-center justify-center gap-2';
            }

            drawGaugeCanvas(currentRpm);
            requestAnimationFrame(updateGaugeCluster);
        }

        function drawGaugeCanvas(rpm) {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = 130;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Outer Metallic Ring
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius + 15, 0.75 * Math.PI, 2.25 * Math.PI);
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 14;
            ctx.stroke();

            // Gauge Arc background
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0.75 * Math.PI, 2.25 * Math.PI);
            ctx.strokeStyle = '#0f172a';
            ctx.lineWidth = 10;
            ctx.stroke();

            // Redline Zone Arc
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 1.95 * Math.PI, 2.25 * Math.PI);
            ctx.strokeStyle = '#ff2a5f';
            ctx.lineWidth = 12;
            ctx.stroke();

            // Ticks and Numbers (0 - 9 RPM x 1000)
            for (let i = 0; i <= 9; i++) {
                const angle = 0.75 * Math.PI + (i / 9) * (1.5 * Math.PI);
                const x1 = centerX + Math.cos(angle) * (radius - 10);
                const y1 = centerY + Math.sin(angle) * (radius - 10);
                const x2 = centerX + Math.cos(angle) * (radius - 22);
                const y2 = centerY + Math.sin(angle) * (radius - 22);

                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = i >= 8 ? '#ff2a5f' : '#64748b';
                ctx.lineWidth = i % 1 === 0 ? 3 : 1;
                ctx.stroke();

                // Numerical Labels
                const tx = centerX + Math.cos(angle) * (radius - 36);
                const ty = centerY + Math.sin(angle) * (radius - 36);
                ctx.font = 'bold 13px Orbitron';
                ctx.fillStyle = i >= 8 ? '#ff2a5f' : '#94a3b8';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(i.toString(), tx, ty);
            }

            // Needle Calculation
            const needleAngle = 0.75 * Math.PI + (rpm / 9000) * (1.5 * Math.PI);
            const nx = centerX + Math.cos(needleAngle) * (radius - 15);
            const ny = centerY + Math.sin(needleAngle) * (radius - 15);

            // Draw Red Crimson Needle
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(nx, ny);
            ctx.strokeStyle = '#ff2a5f';
            ctx.lineWidth = 4;
            ctx.shadowColor = '#ff003c';
            ctx.shadowBlur = 12;
            ctx.stroke();
            ctx.shadowBlur = 0; // Reset Shadow

            // Center Pin
            ctx.beginPath();
            ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI);
            ctx.fillStyle = '#1e293b';
            ctx.fill();
            ctx.strokeStyle = '#ff2a5f';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // Mobile Menu Drawer Handler
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileDrawer = document.getElementById('mobile-drawer');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('hidden');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.add('hidden');
            });
        });

        // Interactive 3D Pop Out Profile Tilt
        const profileCard = document.getElementById('profile-card');
        if (profileCard) {
            profileCard.addEventListener('mousemove', (e) => {
                const rect = profileCard.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                profileCard.style.transform = `rotateY(${x / 12}deg) rotateX(${-y / 12}deg)`;
            });

            profileCard.addEventListener('mouseleave', () => {
                profileCard.style.transform = 'rotateY(0deg) rotateX(0deg)';
            });
        }

        // Modal Box Controls for Projects
        function openProjectModal(title, desc, tech, link) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-desc').textContent = desc;
            document.getElementById('modal-tech').textContent = tech;
            document.getElementById('modal-link').href = link;
            document.getElementById('project-modal').classList.remove('hidden');
        }

        function closeProjectModal() {
            document.getElementById('project-modal').classList.add('hidden');
        }

        // Contact Form Feedback Handler
        function handleFormSubmit(e) {
            e.preventDefault();
            const feedback = document.getElementById('contact-feedback');
            feedback.classList.remove('hidden');
            e.target.reset();
            setTimeout(() => {
                feedback.classList.add('hidden');
            }, 5000);
        }

        // Kick off gauge animation on load
        window.onload = function() {
            requestAnimationFrame(updateGaugeCluster);
        };
