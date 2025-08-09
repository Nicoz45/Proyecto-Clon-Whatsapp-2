const contacts = [
    {
        id: 1,
        name: 'Pedro Picapiedra',
        description: '¡Yabba Dabba Doo!',
        avatar: '/images/Pedro-Picapiedra.jpeg',
        last_connection: '11:35',
        connection_status: 'offline',
        messages: [
            {
                sender: 'Otro',
                hour: '22:30',
                id: 1,
                text: 'Hola',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:31',
                id: 2,
                text: 'Hola Pedro',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:32',
                id: 3,
                text: 'Como estas cara de ostion?',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:33',
                id: 4,
                text: 'Bien y vos?',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:34',
                id: 5,
                text: 'Yabba Dabba Doo',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:35',
                id: 6,
                text: '¿Listo para ir a la cantera?',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Pablo Marmol',
        description: 'Enano cara de ostion',
        avatar: '/images/Pablo-Marmol.jpeg',
        last_connection: '11:48',
        connection_status: 'offline',
        messages: [
            {
                sender: 'Yo',
                hour: '22:30',
                id: 1,
                text: 'Hola Pablo',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:31',
                id: 2,
                text: 'Hola que tal?',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:32',
                id: 3,
                text: 'Todo bien. y tu?',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:33',
                id: 4,
                text: 'Que te parece si vamos a la cantera con Pedro?',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:34',
                id: 5,
                text: 'Si, pero hoy podríamos ir en bici?',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:35',
                id: 6,
                text: 'Mi espalda todavía no se recupera del último golpe con el brontosaurio.',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:36',
                id: 7,
                text: '¿En bici?',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:37',
                id: 8,
                text: '¡Pablo, eso no es de hombres de las cavernas modernos!',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:38',
                id: 9,
                text: 'Ah no?',
                status: 'visto'
            }
        ]
    },
    {
        id: 3,
        name: 'Vilma Picapiedra',
        description: '¡A crédito!',
        avatar: '/images/Vilma-Picapiedra.jpeg',
        last_connection: 'ahora',
        connection_status: 'online',
        messages: [
            {
                sender: 'Otro',
                hour: '22:30',
                id: 1,
                text: 'Hola vecino!',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:31',
                id: 2,
                text: 'Hola Vilma!!',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:32',
                id: 3,
                text: 'Esta todo bien?',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:33',
                id: 4,
                text: 'Todo bien y vos?',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:34',
                id: 5,
                text: 'Podrias decirle a Pedro que no deje el troncomovil tirado en la entrada?',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:35',
                id: 6,
                text: 'Pero vilma, lo dejo ahi para ir a la cantera.',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:36',
                id: 7,
                text: '¿Y mientras tanto, yo cómo saco a Dino a pasear?',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:37',
                id: 8,
                text: '¿En un pterodáctilo-taxi?',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:38',
                id: 9,
                text: 'Tranquila, ya le aviso a Pedro...',
                status: 'visto'
            }
        ]
    },
    {
        id: 4,
        name: 'Betty Marmol',
        description: 'Cuchi Cuchi',
        avatar: '/images/Betty-Marmol.jpeg',
        last_connection: 'ahora',
        connection_status: 'online',
        messages: [
            {
                sender: 'Otro',
                hour: '22:30',
                id: 1,
                text: 'Hola vecino!, que tal?',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:31',
                id: 2,
                text: 'Me pasas con Pablo Por favor?',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:32',
                id: 3,
                text: 'Si, ya te paso con Pablo.',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:33',
                id: 4,
                text: 'Hola Betty, soy Pablo',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:34',
                id: 5,
                text: 'Pablo, ¿me puedes explicar por qué hay un dinosaurio durmiendo en el jardín?',
                status: 'visto'
            },
            {
                sender: 'Yo',
                hour: '22:35',
                id: 6,
                text: 'Ah… eso… bueno, estaba de camino a casa y me siguió… pensé que se veía simpático.',
                status: 'visto'
            },
            {
                sender: 'Otro',
                hour: '22:36',
                id: 7,
                text: 'Pablo, es un triceratops! No es un gatito.',
                status: 'visto'
            },
        ]
    },
    {
        id: 5,
        name: 'Mr Slate',
        description: 'Ahi se va el mejor ejecutivo que he tenido',
        avatar: '/images/mr-slate.jpeg',
        last_connection: 'ahora',
        connection_status: 'online',
        messages: []
    },
]

export const getContactList = () => {
    return contacts
}

export const getContactById = (contactId) => {
    console.log('contact_id', contactId)
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contactId)) {
            return contact
        }
    }
    return null
}