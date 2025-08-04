const contacts = [
    {
        id: 1,
        name: 'Pedro',
        description: 'Solo se vive una vez',
        avatar: 'https://forbes.es/wp-content/uploads/2023/04/pantera-rosa.jpg',
        last_connection: '11:35',
        connection_status: 'offline',
        messages: [
            {
                emisor: 'Yo',
                hora: '22:30',
                id: 1,
                texto: 'hola',
                status: 'visto'
            },
            {
                emisor: 'Otro',
                hora: '22:31',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'Yo',
                hora: '22:32',
                id: 3,
                texto: 'Todo esta bien.',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Juan',
        description: 'Rompe el suelo con la batidora',
        avatar: 'https://media.c5n.com/p/28695fdfa6d10b39f9b6236c96b26583/adjuntos/326/imagenes/000/305/0000305153/790x0/smart/-el-grinch-netflix.jpg',
        last_connection: '11:48',
        connection_status: 'offline',
        messages: [
            {
                emisor: 'Yo',
                hora: '22:30',
                id: 1,
                texto: 'hola',
                status: 'visto'
            },
            {
                emisor: 'Otro',
                hora: '22:31',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'Yo',
                hora: '22:32',
                id: 3,
                texto: 'Todo esta bien.',
                status: 'visto'
            }
        ]
    },
    {
        id: 3,
        name: 'Pepe',
        description: 'La familia',
        avatar: 'https://scontent-eze1-2.xx.fbcdn.net/v/t39.30808-6/300390812_415738067326849_360849105729440073_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEOBl5deCaRVgvUWMvCElukUsatXrrljExSxq1euuWMTGterfEPH39P5lEvttKtCfNKtbUU6C_GDxXF0hD0aDCV&_nc_ohc=f-dnzEVEKyIQ7kNvwE15g0S&_nc_oc=AdlKGLGhGMMMNOjk3-_B7S2vb-f0Q-EbzeBQaGRGcahXJC_bN-FBpFtmRL7Jmhkc3jU&_nc_zt=23&_nc_ht=scontent-eze1-2.xx&_nc_gid=cmE1CUasMraY9jQhcx-9KQ&oh=00_AfRvZ7_43HxhJ0E4Q-xno99xjxtlKQ1-BQrTcIXH2EVNww&oe=6889AFA7',
        last_connection: 'ahora',
        connection_status: 'online',
        messages: [
            {
                emisor: 'Yo',
                hora: '22:30',
                id: 1,
                texto: 'hola',
                status: 'visto'
            },
            {
                emisor: 'Otro',
                hora: '22:31',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'Yo',
                hora: '22:32',
                id: 3,
                texto: 'Todo esta bien.',
                status: 'visto'
            }
        ]
    },
]

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}