// Servidor
const express = require('express')
const server = express()


const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Configuração do Template Engine (* NUNJUCKS *)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Ínicio da configuração do servidor
server
// Receber os dados do req.body
.use(express.urlencoded({extended: true}))
// Configuração dos arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação 
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses) 
.post("/save-classes", saveClasses)
// Start do servidor
.listen(5500)
