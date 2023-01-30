const PROXY_CONFIG = [
  {
      context: [
          "/api"
      ],
      target: "https://backend-pelf.onrender.com",
      secure: false
  }
]
module.exports = PROXY_CONFIG;
