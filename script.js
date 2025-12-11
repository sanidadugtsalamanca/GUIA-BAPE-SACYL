// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Logic ---
    const desktopTabs = document.querySelectorAll('.tab-btn');
    const mobileTabs = document.querySelectorAll('.mobile-tab-btn');
    const contentSections = document.querySelectorAll('.tab-content');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileCurrentTabText = document.getElementById('mobile-current-tab');

    // Function to switch tab
    function switchTab(targetId) {
        // Hide all sections
        contentSections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show target section
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
            targetSection.classList.remove('hidden');
        }

        // Update Desktop Buttons
        desktopTabs.forEach(btn => {
            if(btn.dataset.target === targetId) {
                btn.classList.add('border-red-600', 'text-red-600', 'bg-red-50');
                btn.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-50');
            } else {
                btn.classList.remove('border-red-600', 'text-red-600', 'bg-red-50');
                btn.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:bg-gray-50');
            }
        });

        // Update Mobile Buttons
        mobileTabs.forEach(btn => {
            if(btn.dataset.target === targetId) {
                btn.classList.add('bg-red-50', 'text-red-700', 'font-bold');
                btn.classList.remove('text-gray-600');
                
                // Update header text
                const iconName = btn.querySelector('i').getAttribute('data-lucide');
                const text = btn.textContent.trim();
                mobileCurrentTabText.innerHTML = `<i data-lucide="${iconName}" class="w-4 h-4"></i> ${text}`;
                lucide.createIcons();
            } else {
                btn.classList.remove('bg-red-50', 'text-red-700', 'font-bold');
                btn.classList.add('text-gray-600');
            }
        });
        
        // Close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }

    // Add click listeners
    desktopTabs.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.target));
    });

    mobileTabs.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.target));
    });

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
        mobileMenuBtn.innerHTML = `<i data-lucide="${icon}" class="w-5 h-5"></i>`;
        lucide.createIcons();
    });

    // --- Calculator Logic ---
    const calcInputs = [
        { id: 'input-exp-sns', weight: 0.30, max: 60, type: 'exp' },
        { id: 'input-exp-priv', weight: 0.10, max: 60, type: 'exp' },
        { id: 'input-cred-ord', weight: 0.20, max: 40, type: 'form' },
        { id: 'input-cred-ects', weight: 0.50, max: 40, type: 'form' }
    ];

    function calculateScore() {
        let rawExp = 0;
        let rawForm = 0;

        const sns = parseFloat(document.getElementById('input-exp-sns').value) || 0;
        const priv = parseFloat(document.getElementById('input-exp-priv').value) || 0;
        const ord = parseFloat(document.getElementById('input-cred-ord').value) || 0;
        const ects = parseFloat(document.getElementById('input-cred-ects').value) || 0;

        // Logic based on types
        rawExp = (sns * 0.30) + (priv * 0.10);
        rawForm = (ord * 0.20) + (ects * 0.50);

        // Apply caps
        const finalExp = Math.min(rawExp, 60);
        const finalForm = Math.min(rawForm, 40);
        const total = finalExp + finalForm;

        // Update DOM
        document.getElementById('res-exp').textContent = finalExp.toFixed(2);
        document.getElementById('res-form').textContent = finalForm.toFixed(2);
        document.getElementById('res-total').textContent = total.toFixed(2);
    }

    // Add listeners to all inputs
    calcInputs.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
            el.addEventListener('input', calculateScore);
        }
    });
});