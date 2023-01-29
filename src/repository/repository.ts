import { lancamentos } from "@prisma/client";
import { QueryResult } from "pg";
import prisma from "../database/server.js";
import { Gastos } from "../protocols/gastos.js";


export async function queryLancaGastos(valor: number, nome: string, usuario: number):Promise<lancamentos>{
    return (
        await prisma.lancamentos.create({
            data: {
              valor: valor,
              nome: nome,
              usuarioId: usuario
            }
          })
    )
    

}

export async function queryGetGastos() {
    return(
       await prisma.lancamentos.findMany()
    )
}


export async function queryAlteraGastos(valor:number, id:number){
    return(
        await prisma.lancamentos.update({
            where: { id: id },
            data: { valor:valor }
          })
    )
}

export async function queryDeletaGastos(id:number){
    return(
        await prisma.lancamentos.delete({
            where: { id: id }
          })
    )
}

export async function queryFiltraGastos(valor:number){
    return(
        await prisma.lancamentos.findMany({
            where: {
              valor: { gte: valor }
            }
          })
          )  
    
}


const gastosRepository = {queryLancaGastos,queryGetGastos, queryAlteraGastos,queryDeletaGastos,queryFiltraGastos} 

export default gastosRepository