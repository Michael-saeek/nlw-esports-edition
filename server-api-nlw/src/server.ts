import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'
import { convertHourToMinutes } from './utils/convert-hour-strings-to-minutes';
import { convertMinutesToHours } from './utils/convert-minutes-strings-to-hours';
const app = express();

const port = 3000
const host = "192.168.1.5"


/* esto es para que el server entienda que recibiremos json*/
app.use(express.json());
app.use(cors());


const prisma = new PrismaClient({
    log: ['query']
})

/* Listagem de games */
app.get('/games', async (req: any, res: any) => {

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    return res.status(200).json(games);
})

/* Criação de novo anuncio  */
/* agregar formatacion de horas aqui y en lista de anuncions */
app.post('/games/:id/ads', async (req: any, res: any) => {

    /* 9c97a833-7d5e-47c6-93ab-7fc9ba52317d */
    const GameId = req.params.id
    const body:any = req.body

    /* Crear todos los datos para crear nuestro registro */ 
    const ad = await prisma.ad.create({
        data: {
            gameId: GameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,       
            weekDays: body.weekDays.join(','),      
            hourStart: convertHourToMinutes(body.hourStart),  
            hourEnd: convertHourToMinutes(body.hourEnd),    
            useVoiceChannel: body.useVoiceChannel, 
        }
    })

    console.log(body)

   return res.status(201).json(ad);
})


/* Listar juegos por id y traer todos sus anuncios */
app.get('/games/:id/ads', async (request: any, response:any) => {
    const gameId = request.params.id
    
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
            createdAt: true,
        },

        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return response.json(ads.map( ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHours(ad.hourStart),
            hourEnd: convertMinutesToHours(ad.hourEnd)
        }
    }))
})

/* Buscar discord por id de anuncio */
app.get('/ads/:id/discord', async (request: any, response:any) => {

    const discordId = await request.params.id

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: discordId
        }
    })

    try {
        return response.status(200).json({
            discord: ad?.discord
        });
    } catch (error) {
        console.log(error)
    }


    
})

app.listen(port, host, () => {
    console.log(`Server ${host} is running on port ` + port)
} )