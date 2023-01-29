import prisma from "../src/database/server.js";


async function PopulaUsuarios(){
    await prisma.usuarios.createMany({
        data:[
            {
                "usuario":"Joao"
            },
            {
                "usuario":"Carlos"
            },
            {
                "usuario":"Maria"
            },
        ]
    })
}

PopulaUsuarios()
.then(()=> {console.log("Registro feito com sucesso")})
.catch(e=> {console.error(e)
process.exit(1)
}
)
.finally(async()=>{
    await prisma.$disconnect
})