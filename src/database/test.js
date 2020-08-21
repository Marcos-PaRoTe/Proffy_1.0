const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name:"Adriana Araujo Escada Gonçalves",
        avatar:"https://avatars1.githubusercontent.com/u/69128882?s=460&u=8338ff9d05ef3b884e082c2b0c559afa91494696&v=4", 
        whatsapp: "11912345678", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."      
    }

    classValue = {
        subject: 1, 
        cost: "69"
        // Proffy ID, virá pelo Banco de Dados
    }

    classScheduleValues = [
        // class_id, virá pelo Banco de Dados, após cadastrar a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 720
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar todos os dados inseridos 

    // Todos os Proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // Todas as classes de um determinado Proffy e trazer junto os dados do Proffy

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;        
    `)
    //console.log(selectClassesAndProffys)

    // Horário em que a pessoa trabalha: ex - 08h às 18h
    // O time_from (8h) precisa ser menor ou igual ao horário solicitado
    // O time_to precisa ser maior 
    
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "720"
    `)
      
    // console.log(selectClassesSchedules)
}) 