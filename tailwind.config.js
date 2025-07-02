/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'before:bg-primary-100',
    'before:bg-secondary-100',
    'before:bg-secondary-80',
    'before:bg-secondary-40',
    'before:bg-[#B7DBCD]',
    'before:bg-tertiary-100',
    'before:bg-[#FB7D5B]',
    'before:bg-[#FDBEAD]'
  ],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn .8s ease-in-out'
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      colors: {
        'primary-100': '#0E1D3A',
        'primary-80': '#3E4A61',
        'primary-60': '#6E7789',
        'primary-40': '#9FA5B0',
        'primary-20': '#CFD2D8',
        'secondary-100': '#4B6DFB',
        'secondary-80': '#6F8AFC',
        'secondary-60': '#93A7FD',
        'secondary-40': '#B7C5FD',
        'secondary-20': '#DBE2FE',
        'tertiary-100': '#FAC016',
        'tertiary-80': '#FCD973',
        'tertiary-60': '#FEF2D0',
        'primary-variant-2': '#6E7789',
        'quaternary-100': '#EEF2F3',
        'quaternary-80': '#F5F7F8',
        success: '#198754',
        'success-20': '#D1E7DD',
        warning: '#FFC27B',
        danger: '#ff3246',
        'danger-60': '#FFADB5',
        'danger-20': '#FFE0E3',
        'brandeis-blue': '#0d6efd',
        'prusian-blue': '#00375b',
        'prusian-blue-80': '#00385a',
        'lavender-blue': '#c1d5f8',
        'tea-green': '#d0e8cc',
        salem: '#146c43',
        'lavander-floral': '#b585f0',
        turquoise: '#0dcaf0',
        'orange-yellow': '#fad068',
        'dark-tangerine': '#fa9b16',
        'middle-red': '#e6857a',
        'gris-letras-100': '#818388',
        'yellow-tag': '#FDDF8A',
        'yellow-tag-500': '#7D600B',
        'triangular-alert': '#FF3246',
        'sealed-100': '#036479',
        'sealed-20': '#82E3F9',
        'rejected-20': '#FDBEAD',
        'rejected-100': '#7E3F2E'
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      },
      fontSize: {
        '3.5xl': '2rem',
        xxs: '0.625rem'
      },
      lineHeight: {
        3.5: '0.875rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        8.5: '2.125rem',
        14: '3.5rem'
      },
      borderRadius: {
        'md+': '0.3125rem',
        'md+': '0.3125rem',
        'lg+': '0.625rem'
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        12.5: '3.125rem',
        19: '4.75rem',
        25: '6.25rem',
        31: '7.75rem',
        32.5: '8.125rem',
        42: '10.5rem',
        45: '11.25rem',
        46: '11.5rem',
        46.5: '11.625rem',
        50: '12.5rem',
        51.25: '12.8125rem',
        56: '14rem',
        57: '14.25rem',
        73.5: '18.375rem',
        74.25: '18.5625rem',
        98: '24.5rem',
        111.5: '27.875rem',
        120.5: '30.125rem',
        132: '33rem',
        154.5: '38.625rem',
        165: '41.25rem',
        182: '45.5rem',
        188.5: '47.125rem',
        333: '83.25rem',
        382: '95.5rem',
        '45p': '45%',
        '75p': '75%'
      },
      backgroundImage: {
        'dropper-gradient':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #4B6DFB',
        'white-check': "url('/assets/images/white-check.svg')",
        'product-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #9FA5B0 100%)'
      },
      screens: {
        'mobile-company': '415px',
        tablet: '768px',
        'tablet-887': '887px',
        'mobile-375': '375px',
        'mobile-420': '420px',
        'mobile-440': '440px',
        'mobile-480': '480px',
        'mobile-522': '522px',
        'mobile-550': '550px',
        'mobile-600': '600px',
        'mobile-800': '800px',
        'md+': '900px',
        desktop: '1024px',
        'desktop-100': '1100px',
        'desktop-200': '1200px',
        'desktop-201': '1201px',
        'desktop-220': '1220px',
        '1200-1400': { min: '1200px', max: '1400px' },
        'desktop-100-md': '1327px',
        'desktop-details-client': '1530px',
        'desktop-100-md': '1327px',
        'desktop-company': '1400px',
        'desktop-plans': '1617px',
        'desktop-plans-700': '1800px',
        'desktop-details-client': '1530px',
        '320-367': { min: '320px', max: '367px' },
        'mobile-company': '415px',
        'min-mobile': '350px',
        'md+': '900px',
        '1023-1051': { min: '1023px', max: '1051px' }
      },
      gridTemplateColumns: {
        'credit-debit-notes-reasons':
          'minmax(auto, calc(100% - 320px)) repeat(2, minmax(auto, 144px))'
      }
    }
  },
  plugins: []
}
