module.exports = (function () {
    return {
      local: { // localhost
        host: '18.191.116.55',
        port: '3306',
        user: 'root',
        password: '0000',
        database: 'mygallerystudyDB'
      },
      real: { // real server db info
        host: '',
        port: '',
        user: '',
        password: '!',
        database: ''
      },
      dev: { // dev server db info
        host: '',
        port: '',
        user: '',
        password: '',
        database: ''
      }
    }
  })();