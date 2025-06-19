export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1e40af',      // blue
          secondary: '#facc15',    // yellow
          background: '#f9fafb',   // light gray
          darkText: '#111827'      // dark text
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/line-clamp'),
    ]
  };