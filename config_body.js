var Transaction = 'Commande B2B';
var Catalog = 'B2B'
var blocks_config = {
    'free_shipping': {
        text: "Frais de port offert \u00e0 partir de 200\u20ac HT d'achat",
        field: "",
        svg: "https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'active-order':
    {
        name: "Commande en cours",
        buttonText: "Retour Commande",
        table: [{
            text: "Sous-Total",
            field: "SubTotal",
            measure_unit: "\u20ac"
        }, {
            text: "Total HT",
            field: "GrandTotal",
            measure_unit: "\u20ac"
        }]
    }
    ,
    'submitted_orders': {
        name: "Derni\u00e9re commande",
        statuses: ["2"],
        table: ["ActionDateTime", "InternalID"]
    }
}
var Brands = [
    
    ]

//Promotions block
var Promotions = [
    {
        title: "MOANA",
        buttonText: "Cliquez ici",
        link: '',
        image: 'https://bainsetnature.github.io/SitePepperi/COFFRET MOANA.png'
    }
    ]
var Promotions2 = [
    {
        title: "DELIRIUM FLORAL",
        buttonText: "Cliquez ici",
        link: '',
        image: 'https://bainsetnature.github.io/SitePepperi/delirium floral home.png'
    }
    ]
var Promotions3 = [    
    {
        title: "EAUX DE PARFUM",
        buttonText: "Cliquez ici",
        link: '',
        image: 'https://bainsetnature.github.io/SitePepperi/Présentoir eau parfums.png'
    }
    ]
var Promotions4 = [
    {
        title: "CR\u00c8MES MAINS",
        buttonText: "Cliquez ici",
        link: '',
        image: 'https://bainsetnature.github.io/SitePepperi/P1140485-LIGHT.png'
    }
]

var CaruselData = [
    {

        title: '',
        imageURL: 'https://bainsetnature.github.io/SitePepperi/1.BANNIERE.png',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: ''
    },
    {

        title: '',
        imageURL: 'https://bainsetnature.github.io/SitePepperi/2.BANNIÈRE.png',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: ''
    },
    {

        title: '',
        imageURL: 'https://bainsetnature.github.io/SitePepperi/3.BANNIÈRE.png',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: ''
    },
    {

        title: '',
        imageURL: 'https://bainsetnature.github.io/SitePepperi/4.BANNIERE.png',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: ''
    },
];
customHomepage.test = "test"
