var Transaction = 'Commande B2B';
var Catalog = 'B2B'
var blocks_config = {
    'free_shipping': {
        text: "Frais de port offert \u00e0 partir de 350\u20ac HT d'achat",
        field: "",
        svg: "https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'account_balance': {
        text: "Point",
        field: "TSACreditLimit",
        measure_unit: "Points",
        svg:"https://storage.pepperi.com/General/Icons/balance.svg"
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
        title: "Soins Corps",
        buttonText: "Cliquez ici",
        link: '',
        image: 'https://bainsetnature.github.io/SitePepperi/COFFRET MOANA.png'
    }
    ]
var Promotions2 = [
    {
        title: "Parfums Maison",
        buttonText: "Cliquez ici",
        link: '',
        image: 'https://bainsetnature.github.io/SitePepperi/delirium floral home.png'
    }
    ]
var Promotions3 = [    
    {
        title: "Les Nomades",
        buttonText: "Cliquez ici",
        link: '',
        image: 'https://bainsetnature.github.io/SitePepperi/Présentoir eau parfums.png'
    }
    ]
var Promotions4 = [
    {
        title: "Offres Cadeaux",
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
        imageURL: 'https://bainsetnature.github.io/SitePepperi/2.BANNIERE.png',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: ''
    },
    {

        title: '',
        imageURL: 'https://bainsetnature.github.io/SitePepperi/3.BANNIERE.png',
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
