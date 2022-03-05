module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      width:{
        '100':'100px',
        '200':'200px',
        '250':'250px',
        '300':'300px',
        '350':'350px',
        '400':'400px',
        '500':'500px',
        '550':'550px',
        '600':'600px',
        '650':'650px',
        '700':'700px',
        '750':'750px',
        '800':'800px',
        '820':'820px',
        '900':'900px',
        '1000':'1000px',
        '1100':'1100px',
        '1200':'1200px',
        '1300':'1300px'
      },
      height:{
        '250':'250px',
        '300':'300px',
        '370':'370px',
        '400':'400px',
        '420':'420px',
        '470':'470px',
        '500':'500px',
        '600':'600px',
        '700':'700px',
        '800':'800px',
        '900':'900px',
        '950':'950px',
        '1000':'1000px',
        '1100':'1100px',
      },
      margin:{
        '550':'550px',
      },
      backgroundImage: {
        'check-pattern': "url('./components/assets/pic/check.svg')",
      },
    
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
