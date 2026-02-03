# 📈 Investment Mastery Index

**A comprehensive, interactive, and aesthetically premium web-based guide to mastering the Indian Stock Market and Mutual Funds.**

This project is a self-contained educational platform designed to take a beginner from "Zero Knowledge" to "Confident Investor". It covers everything from fundamental analysis metrics (P/E, ROE) to technical indicators (RSI, MACD), portfolio construction, and the crucial psychological aspects of trading.

## ✨ Key Features

*   **📚 Complete Curriculum**: 20+ lessons covering Fundamental Analysis, Technical Analysis, Risk Management, and Mutual Funds.
*   **🎨 Premium "Fintech" UI**: Designed with a professional "Slate & Royal Blue" color palette inspired by top financial apps (Stripe, Robinhood).
*   **🌗 Dark Mode**: Fully responsive dark mode with system preference detection and a manual toggle.
*   **📱 Mobile First**: Collapsible sidebars and touch-friendly navigation for learning on the go.
*   **🧠 "Real Life" Analogies**: Complex financial concepts explained using simple metaphors (e.g., "The Pizza Party" for Stock Splits, "The Chauffeur" for Active Funds).
*   **⚡ Smart Navigation**: An intelligent `script.js` engine that automatically generates "Next Lesson" buttons to guide users through the linear learning path.

## 📂 Project Structure

The project is organized into modular directories for easy scaling:

```
/stock-market
├── index.html                  # Main Dashboard / Table of Contents
├── getting_started.html        # Logistics (Brokers, Tools, Setup)
├── styles.css                  # Global Design System (Variables, Dark Mode)
├── script.js                   # Logic for Navigation & Theme Toggle
├── stocks/                     # Module 1: Stock Market Topics
│   ├── market_capitalization.html
│   ├── price_to_earnings_ratio.html
│   ├── trading_psychology.html
│   └── ... (20+ topics)
└── mutual-funds/               # Module 2: Mutual Fund Topics
    ├── mf_basics.html
    ├── mf_direct_vs_regular.html
    └── ... (6+ topics)
```

## 🚀 How to Use

Since this is a static web project, no installation or server is required.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/investment-mastery.git
    ```
2.  **Open the Platform**:
    *   Navigate to the folder and double-click `index.html`.
    *   The site will launch in your default browser.

## 🛠️ Technology Stack

*   **HTML5**: Semantic and accessible markup.
*   **CSS3**: Modern variables (`var(--primary)`), Flexbox, Grid, and Media Queries for responsiveness.
*   **JavaScript (Vanilla)**: For dynamic navigation injection and local-storage based theme management.
*   **No Frameworks**: Pure, lightweight, and fast.

## 🤝 Contribution

Feel free to fork this project and add new modules (e.g., Futures & Options, Crypto, or Tax Planning). PRs are welcome!

---
*Disclaimer: This project is for educational purposes only. Always consult a SEBI registered investment advisor before making financial decisions.*
