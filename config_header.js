var Transaction = 'Commande B2B';
var Catalog = 'B2B'
const logo = 'https://bainsetnature.github.io/SitePepperi/LOGO%20BAIJA%20NOIR%20(1).png'
const LeftMenu = [


];
const RightMenu = [

    {
        catalog: "B2B",
        transaction: "Commande B2B",
        title: "Passer une commande",
        action: "createNewTransaction",
        deepLink: '/Transactions/scope_items/{{UUID}}'
    },
    {
        catalog: "Point Fidelite",
        transaction: "Commande Fidelite",
        title: "Commande Produits fidélité",
        action: "createNewTransaction",
        deepLink: '/Transactions/scope_items/{{UUID}}'
    },
    {
        title: "Historique",
        action: "navigation",
        deepLink: 'list/all_activities'
    },
    {
        activity: "Mes contacts",
        title: "Mes Contacts",
        action: "createNewActivity",
        deepLink: 'activities/details/{{UUID}}'
    },
    {
        activity: "Nous contacter",
        title: "Nous contacter",
        action: "createNewActivity",
        deepLink: 'activities/details/{{UUID}}'
    },


]
/*actions:
setUUIDandNav
createNewTransaction
navigation
createNewActivity
openInNewTab
zendesk
*/
