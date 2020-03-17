module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  //publicPath:process.env.NODE_ENV==='production'?'http://localhost:8080/':'http://localhost:8081/',
  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:8080/',
        changeOrigin:true,
        pathRewrite:{
					'^/api':''//重写接口，去掉/api
				} 
      }
    }
  }
}