var Transaction = 'Commande B2B';
var Catalog = 'B2B'
var blocks_config = {
    'free_shipping': {
        text: "Frais de port offert \u00e0 partir de 350\u20ac HT d'achat",
        field: "",
        svg: "https://storage.pepperi.com/General/Icons/truck.svg"
    },
    /*'account_balance': {
        text: "Points Fidélité",
        field: "TSAPointFidCompte",
       // measure_unit: "Points",
        svg:"https://storage.pepperi.com/General/Icons/balance.svg"
    },*/
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
        link: 'transactions/scope_items/0266dd41308f4d26bad9cc7e36fe075f?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&StartIndex=0&SearchString=&SearchAll=false',
        image: 'https://bainsetnature.github.io/SitePepperi/COFFRET MOANA.png'
    }
    ]
var Promotions2 = [
    {
        title: "Parfums Maison",
        buttonText: "Cliquez ici",
        link: 'transactions/scope_items/0266dd41308f4d26bad9cc7e36fe075f?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%2218d7976d-11b2-44ea-9a4f-c3c649e98ad1%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2229b100e3-4dfa-4ec8-98fd-e93e8e762939%5C%5C%5C%22%7D%5C%22%7D%22&StartIndex=0&SearchString=&SearchAll=false',
        image: 'https://bainsetnature.github.io/SitePepperi/delirium floral home.png'
    }
    ]
var Promotions3 = [    
    {
        title: "Les Nomades",
        buttonText: "Cliquez ici",
        link: 'transactions/scope_items/0266dd41308f4d26bad9cc7e36fe075f?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2209fd1d0b-e9f8-414f-9c10-e3e4b72049ee%5C%5C%5C%22%7D%5C%22%7D%22&StartIndex=0&SearchString=&SearchAll=false',
        image: 'https://bainsetnature.github.io/SitePepperi/Présentoir eau parfums.png'
    }
    ]
var Promotions4 = [
    {
        title: "Offres Cadeaux",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/01d112a871b24497bf47210acc18eca2?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22d332767e-acf9-42db-bbf8-fcd15ec1b0b3%5C%22%7D%22&StartIndex=0&SearchString=&SearchAll=false',
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
