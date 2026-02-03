// Check for saved user preference, if any, on load of the website
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultTheme = storedTheme || (prefersDark ? 'dark' : 'light');

if (defaultTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Function to create and inject the toggle button
function createToggle() {
    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.innerHTML = defaultTheme === 'dark' ? '☀️' : '🌙';
    btn.title = "Toggle Dark Mode";
    btn.setAttribute('aria-label', 'Toggle Dark Mode');

    btn.onclick = function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';

        if (currentTheme !== 'dark') {
            newTheme = 'dark';
            document.documentElement.setAttribute('data-theme', 'dark');
            btn.innerHTML = '☀️';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            btn.innerHTML = '🌙';
        }

        localStorage.setItem('theme', newTheme);
    };

    document.body.appendChild(btn);
}

// Learning Path Order
const learningPath = [
    'getting_started.html',
    'stocks/market_capitalization.html',
    'stocks/earnings_per_share.html',
    'stocks/price_to_earnings_ratio.html',
    'stocks/industry_pe_ratio.html',
    'stocks/price_to_book_ratio.html',
    'stocks/book_value.html',
    'stocks/moat_and_management.html',
    'stocks/debt_to_equity_ratio.html',
    'stocks/dividend_yield.html',
    'stocks/face_value.html',
    'stocks/moving_averages.html',
    'stocks/ma_crossovers.html',
    'stocks/support_and_resistance.html',
    'stocks/rsi.html',
    'stocks/macd.html',
    'stocks/beta.html',
    'stocks/delivery_volume.html',
    'stocks/fifty_two_week_high_low.html',
    'stocks/portfolio_construction.html',
    'stocks/trading_psychology.html',
    'mutual-funds/mf_basics.html',
    'mutual-funds/mf_direct_vs_regular.html',
    'mutual-funds/mf_active_vs_passive.html',
    'mutual-funds/mf_categories.html',
    'mutual-funds/mf_sip_vs_lumpsum.html',
    'mutual-funds/mf_taxation.html'
];

function injectNavigation() {
    const path = window.location.pathname;
    const page = path.split("/").pop(); // Get 'file.html'

    // Find approximate match in learningPath (ignoring folders for the match check if needed, but better to match partial)
    let currentIndex = -1;

    // Normalize logic: Handle full relative paths if possible, or just match filenames
    // Since we are in different folders, matching filename is safest assuming unique filenames
    currentIndex = learningPath.findIndex(p => p.endsWith(page));

    if (currentIndex !== -1 && currentIndex < learningPath.length - 1) {
        const nextPage = learningPath[currentIndex + 1];

        // Determine correct relative path to next page
        // If current page is in 'stocks/' and next is 'stocks/', path is just filename
        // If current is 'getting_started.html' (root) and next is 'stocks/', path is 'stocks/...'

        let linkToNext = '';
        const currentIsInSubfolder = path.includes('/stocks/') || path.includes('/mutual-funds/');
        const nextIsSubfolder = nextPage.includes('/');

        if (!currentIsInSubfolder) {
            // We are at root
            linkToNext = nextPage;
        } else {
            // We are in a subfolder (e.g., stocks/)
            if (nextIsSubfolder) {
                // Next is also in a subfolder. 
                // Check if it's the SAME subfolder
                const currentFolder = path.split('/').slice(-2, -1)[0]; // 'stocks'
                const nextFolder = nextPage.split('/')[0]; // 'stocks' or 'mutual-funds'

                if (currentFolder === nextFolder) {
                    linkToNext = nextPage.split('/')[1]; // Just filename
                } else {
                    linkToNext = '../' + nextPage; // Go up and down
                }
            } else {
                // Next is in root
                linkToNext = '../' + nextPage;
            }
        }

        const navDiv = document.createElement('div');
        navDiv.style.marginTop = '40px';
        navDiv.style.paddingTop = '20px';
        navDiv.style.borderTop = '1px solid var(--border)';
        navDiv.style.textAlign = 'right';

        navDiv.innerHTML = `
            <a href="${linkToNext}" style="
                display: inline-flex; 
                align-items: center; 
                gap: 10px; 
                background: var(--primary); 
                color: white; 
                padding: 12px 24px; 
                text-decoration: none; 
                border-radius: 50px; 
                font-weight: 600; 
                transition: transform 0.2s;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            " onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform='translateX(0)'">
                Next Lesson <span style="font-size: 1.2em">→</span>
            </a>
        `;

        const mainContent = document.querySelector('.main-content');
        if (mainContent) mainContent.appendChild(navDiv);
    }
}

// Ensure DOM is ready (though usually script is at bottom, this is safe)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        createToggle();
        injectNavigation();
    });
} else {
    createToggle();
    injectNavigation();
}
