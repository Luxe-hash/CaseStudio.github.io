
/* =====================================
   CONFIGURACIÓN GENERAL
===================================== */

const DELIVERY_ESTIMATE = "3 a 7 días hábiles";
const PRODUCTS_PER_BRAND = 20;


/* =====================================
   IMÁGENES DE LOS PRODUCTOS
===================================== */

const IMAGE_URLS = {

    Apple: [
        "https://i.pinimg.com/1200x/84/36/30/84363047903c879cd129f41fe13aa5c4.jpg",
        "https://i.pinimg.com/736x/57/18/52/57185274459859d5ec648f31dce7653b.jpg",
        "https://i.pinimg.com/1200x/3a/2d/07/3a2d072c2d421273dc4afc862bf6a64e.jpg",
        "https://i.pinimg.com/1200x/32/ca/d4/32cad4694249cd4db5b9720732873946.jpg",
        "https://i.pinimg.com/1200x/b2/7a/cc/b27acc28dd8d62220a6426929295fbdd.jpg",
        "https://i.pinimg.com/736x/d2/50/ec/d250ec1daa8465c25ab55a407e4609dd.jpg",
        "https://i.pinimg.com/736x/3c/7a/65/3c7a650fc76b272268f5d1d889e7dea2.jpg",
        "https://i.pinimg.com/1200x/44/72/f1/4472f1397520e89b916748affee6da8c.jpg",
        "https://i.pinimg.com/1200x/34/46/33/3446339385c4551c351b712bf8fb4e38.jpg",
        "https://i.pinimg.com/1200x/1e/10/59/1e1059412a880292a42d639af63af2ee.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0aTlKmaZkHCJT2PggDEWk6eVdYbKHwdgl0F3nNA1LVXsi8gPiezuUZg2&s=10",
        "https://tiendatransfer.com/4331-large_default/iphone-14-pro-max-glass.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/810YUdfMe-L._AC_UL495_SR435,495_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBanOlgg6tIR3zewHzdcO48EJ6ib66viuK99SkPTr8ww&s=10",
        "https://i.pinimg.com/736x/fe/ee/02/feee0226c9b738de4cc3aed8f5a62e73.jpg",
        "https://i.pinimg.com/736x/57/5a/82/575a82edc68c2ab278e49d397ed04e11.jpg",
        "https://i.pinimg.com/736x/e0/3c/d3/e03cd39c826c9551c5355d3fd4a27a74.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWqKWLwV09E3kmMvv0PWyBMCamA-mauly4pto6eBZjER3U_KBBo-6SLk&s=10",
        "https://i.pinimg.com/736x/98/67/18/986718da7fbb3611c55db999b930f79f.jpg",
        "https://phonetify.com.co/wp-content/uploads/productos/fundas/ultra/imagenes/iphone-11/8527-ilustracion_sin_titulo-e1621918103776_iphone-11.webp"
    ],

    Samsung: [
        "https://i.pinimg.com/1200x/55/23/72/5523725767ab7b39f6791b620ef4bd89.jpg",
        "https://i.pinimg.com/1200x/61/9d/93/619d935e82f5ff345825f279a8a55144.jpg",
        "https://i.pinimg.com/1200x/87/2e/25/872e25da358a442afd81df5036adb72a.jpg",
        "https://i.pinimg.com/1200x/ac/bc/56/acbc566d07e4d7bae20a8032c9ce84ed.jpg",
        "https://i.pinimg.com/1200x/53/1b/93/531b937c37fa6dbe92e7ad422a08ad3b.jpg",
        "https://i.pinimg.com/1200x/db/ee/17/dbee1717da618a5e420349c7bae4a9e9.jpg",
        "https://i.pinimg.com/1200x/08/6c/9c/086c9c228020d542dcbd103b12866f30.jpg",
        "https://i.pinimg.com/1200x/f5/54/d3/f554d3b2dea96f87e3935c5f41664fb7.jpg",
        "https://i.pinimg.com/1200x/1f/06/db/1f06dbfc1b6fa139a6cc42a32a322fca.jpg",
        "https://i.pinimg.com/1200x/24/61/e3/2461e3c51767016e1853899dfc1705ca.jpg",
        "https://i.pinimg.com/1200x/7f/be/06/7fbe0670e976bebf46e841ddae8bb28e.jpg",
        "https://i.pinimg.com/736x/ee/14/48/ee144819176696da0c6f60a3ee9a8954.jpg",
        "https://media.falabella.com/falabellaCO/143334936_01/w=1500,h=1500,fit=cover",
        "https://i.pinimg.com/1200x/c9/01/17/c901171f791b4d868b309cdf98bac4fd.jpg",
        "https://i.pinimg.com/1200x/ce/fc/72/cefc72650460e9f3c9222b015a2a1d27.jpg",
        "https://i.pinimg.com/1200x/71/b8/dd/71b8dd049eb50f886a0c012beef46889.jpg",
        "https://i.pinimg.com/736x/78/df/35/78df354b65c72bef53714571b2e7e7ef.jpg",
        "https://i.pinimg.com/1200x/6f/a7/f6/6fa7f63035169feb63e6b7211e3fec71.jpg",
        "https://i.pinimg.com/736x/bb/d1/04/bbd104811efd6bf7122458f6b922fc14.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpVAlB98FDWFwR37KMKUBwouCinib3vrU2NoZhVr_ejvczG201jnvu3A&s=10"
    ],

    Xiaomi: [
        "https://i.pinimg.com/1200x/e7/08/fb/e708fb8b50699daa24479683adae0798.jpg",
        "https://i.pinimg.com/1200x/fc/0f/4a/fc0f4a1d7634d19b3022aad9a41bb842.jpg",
        "https://i.pinimg.com/736x/68/68/1a/68681a17be0a405d1de877c516663729.jpg",
        "https://i.pinimg.com/1200x/be/42/b5/be42b58d0109ab76b5d7f38c1bb5b99c.jpg",
        "https://i.pinimg.com/1200x/89/a6/f4/89a6f49c14372dbccb469edfd4475d35.jpg",
        "https://i.pinimg.com/1200x/3f/a0/e5/3fa0e59e2c7a62f08fb1064002d21d60.jpg",
        "https://i.pinimg.com/1200x/a8/69/80/a86980eadfbc33dfb4fcb99f6d7961aa.jpg",
        "https://i.pinimg.com/1200x/f0/12/db/f012db2d813179fd4143240860ff10ff.jpg",
        "https://i.pinimg.com/736x/11/6a/cf/116acf046bdb2fd9f4135dec0504afb5.jpg",
        "https://i.pinimg.com/1200x/12/f9/72/12f972ad3922e8981adb864c0705ccf7.jpg",
        "https://i.pinimg.com/1200x/53/1a/0c/531a0c5893d9883095a20be0c93e97b2.jpg",
        "https://i.pinimg.com/1200x/f7/54/95/f75495f7da09dd31c5edf8a28872dc0b.jpg",
        "https://i.pinimg.com/1200x/4d/92/12/4d921236951266d8be84ee74fb06a43f.jpg",
        "https://i.pinimg.com/1200x/1d/64/ee/1d64eefb7581fe4886793641953ac7f9.jpg",
        "https://i.pinimg.com/1200x/33/b2/56/33b256e65be67ce11bc0dd735ca8fb30.jpg",
        "https://i.pinimg.com/1200x/63/68/5c/63685cff930f032e900f89ae5cde54db.jpg",
        "https://i.pinimg.com/1200x/eb/df/91/ebdf917e010bd91e51aa9ceb00a87558.jpg",
        "https://i.pinimg.com/736x/c7/19/f4/c719f4a1dd8738f254761488d4a648fc.jpg",
        "https://i.pinimg.com/1200x/fe/99/a3/fe99a3dc22422ae4648003890b26ce44.jpg",
        "https://i.pinimg.com/1200x/d1/a6/8c/d1a68c5ccf47152abceca64960703b46.jpg"
    ],

    Motorola: [
        "https://i.pinimg.com/1200x/43/7f/7a/437f7ac9f783f03f5cc73530fb5d3d4b.jpg",
        "https://i.pinimg.com/1200x/7b/0f/95/7b0f95c036fd8bad67a7246705f40e62.jpg",
        "https://phonetify.com.co/wp-content/uploads/productos/fundas/shockproof/imagenes/moto-g84/tigre-de-agua_moto-g84.webp",
        "https://i.pinimg.com/1200x/5e/07/e6/5e07e6fd0bd511f74d689c755d731816.jpg",
        "https://i.pinimg.com/1200x/fa/69/81/fa6981f2318666d333a8dcdc8e679688.jpg",
        "https://i.pinimg.com/1200x/30/da/df/30dadf719b22e5c8751e5f4d8b5b56d8.jpg",
        "https://i.pinimg.com/1200x/d0/4b/c6/d04bc630b7148b9bd1713afe4a54486f.jpg",
        "https://i.pinimg.com/1200x/db/bf/86/dbbf861db45b18af85014fcfc1c13b68.jpg",
        "https://i.pinimg.com/1200x/c4/50/1c/c4501c1bab0de508132ec0b57b511788.jpg",
        "https://i.pinimg.com/1200x/8b/f4/28/8bf4285bc7e84b70e9646a8332e8d4a3.jpg",
        "https://i.pinimg.com/1200x/30/96/57/309657987de989922f7faaeff4a209fb.jpg",
        "https://i.pinimg.com/1200x/1b/15/36/1b15364a1e113ff5b559b51e435216ca.jpg",
        "https://i.pinimg.com/1200x/70/67/66/7067664d9c2d44162e287168e58890e0.jpg",
        "https://i.pinimg.com/1200x/3e/c9/e3/3ec9e34c9e16577ccd61435acae0c2ee.jpg",
        "https://i.pinimg.com/1200x/35/63/a2/3563a243656e342608e2cb219559fd02.jpg",
        "https://http2.mlstatic.com/D_NQ_NP_674201-MCO97462639849_112025-O.webp",
        "https://i.pinimg.com/1200x/cf/36/e2/cf36e23c80bab4b7d0978c8567531a40.jpg",
        "https://i.pinimg.com/1200x/2d/b3/94/2db3949281ee06de4c754a6b10842589.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFkNiNPtX9-uDWm0Zy7wkDbXMtPnhjtXJI4EtSGNTUA&s=10",
        "https://i.pinimg.com/1200x/a9/94/0d/a9940d42f550e8e7dc523c6056d01ace.jpg"
    ],

    Honor: [
        "https://i.pinimg.com/1200x/75/e4/1a/75e41adb093ff72d198846d0ecb6eac5.jpg",
        "https://i.pinimg.com/1200x/87/28/38/872838190d015734fdc619591db52cc0.jpg",
        "https://i.pinimg.com/736x/a3/ca/c0/a3cac073b3bf0ea9d97d123cbbd6c977.jpg",
        "https://tiendatransfer.com/4651-large_default/honor-magic-5-lite.jpg",
        "https://i.pinimg.com/1200x/4b/f9/72/4bf972f1938f6232359ddc28e3e8dd1a.jpg",
        "https://media.extra.com/s/aurora/100351814_800/Honor-X9b-5G-PU-Case%2C-Brown?locale=en-GB,en-*,*",
        "https://i.pinimg.com/1200x/52/a0/fc/52a0fc1fa2a3389fbce0d1626016d67e.jpg",
        "https://i.pinimg.com/1200x/80/05/3d/80053d21c116bfc83ed615ef360b6b16.jpg",
        "https://i.pinimg.com/1200x/79/8d/19/798d19b147bf02dfae4115b85adbb81a.jpg",
        "https://i.pinimg.com/1200x/42/e0/81/42e081072937b98768a9770dc1300fc9.jpg",
        "https://i.pinimg.com/1200x/e7/f8/94/e7f89417e143ee071454fc59732bd47f.jpg",
        "https://i.pinimg.com/1200x/94/ca/6f/94ca6f2554e98e738793211442ce5a41.jpg",
        "https://i.pinimg.com/1200x/ce/a6/dd/cea6ddd8b83af9179c6234b13bb5041d.jpg",
        "https://i.pinimg.com/1200x/ec/83/84/ec8384446415aa6bde4546364e0a7765.jpg",
        "https://i.pinimg.com/1200x/8a/ee/05/8aee056291f50752b4fbbc8f305bcd30.jpg",
        "https://i.pinimg.com/1200x/65/f1/f4/65f1f444ae6493c650b091277fc7be97.jpg",
        "https://i.pinimg.com/1200x/6d/bd/80/6dbd8061e57114a802a022e7cbb82b13.jpg",
        "https://i.pinimg.com/1200x/b5/1b/ef/b51bef1a18da812f6965a6038244a75b.jpg",
        "https://i.pinimg.com/1200x/ef/99/02/ef9902f61f278703237b2b834d189912.jpg",
        "https://i.pinimg.com/1200x/bc/9f/74/bc9f746bc6dd60459bdcc133da66779c.jpg"
    ]

};


/* =====================================
   NOMBRES DE LOS PRODUCTOS POR MARCA
===================================== */

const productNames = {

    Apple: [
        "Berserk funda transparente",
        "Nick y Judy funda transparente",
        "Funda gatos negros",
        "Ojo de demonio",
        "Vortex gothic",
        "Jujutsu Kaisen personalizado",
        "Funda Iphone 16 personalziado",
        "CyberPunk ink",
        "Funda negra personalizada",
        "Funda flores negras",
        "Funda casette de madera",
        "Star Wars",
        "Funda negra espartano",
        "Funda transparente dorado",
        "Funda transparente flores azules",
        "Funda transparente animales",
        "Funda transparente corazón",
        "Funda transparente mariposas azules",
        "Funda transparente de pochacco",
        "Funda transparente margaritas"
    ],

    Samsung: [
        "Funda corazón negro",
        "Funda gato negro",
        "Funda gato negro elegante",
        "Fundas de dragones negro y blanco",
        "Funda de dragon rojo",
        "Funda Kaiju No. 8",
        "Funda Black cover",
        "Funda transparente Jujutsu Kaisen",
        "Funda de Jujutsu Kaisen Yuta Okkotsu",
        "Fundas Ilustración de gatos",
        "Jujutsu Kaisen Yuta Okkotsu/Satoru Gojo",
        "Funda rosa negra",
        "Funda anticaidas negra",
        "Funda Re:Zero Rem/Ram",
        "Funda de mariposas ilustradas",
        "Fundas Tokyo Gohul negro/blanco",
        "Funda gato negro ilustrado",
        "Funda transparente flores de cerezo blanco",
        "Funda ilusrada de Nana",
        "Funda transparente de sol/luna"
    ],

    Xiaomi: [
        "Funda gatos",
        "Funda hello kitty ",
        "Funda tulipanes ilustrados",
        "Fundas mariposa negro/blanco",
        "Funda rosa negra",
        "Funda zodiacal capricornio",
        "Fundas ilustración",
        "Funda poetico",
        "Funda moderna gamusa",
        "Funda Artic monkeys",
        "Funda moderna vintage ",
        "Funda JoJo´s",
        "Funda mariposas ilustradas",
        "Funda ilustrado",
        "Funda cupido",
        "Funda Genshin Impact Yula",
        "Fundas Urbano moderno",
        "Fundas urbano/antichoque",
        "Funda converse",
        "Funda imagination"
    ],

    Motorola: [
        "Fundas pokemón",
        "Fundas ilustradas",
        "Funda trigre",
        "Funda Arte gotico",
        "Funda de polilla gotico",
        "Funda de pokemón",
        "Fundas modernas ilustradas",
        "Fundas de Jujutsu Kaisen",
        "Funda gatos entrelazados",
        "Funda gato negro",
        "Fundas espaciales/animada/gato negro/flores",
        "Fundas Geshin impact",
        "Fundas ilustración de gatos",
        "Funda gato gris lila",
        "Funda de gatos ilustrados rojo/blanco/gris oscuro",
        "Funda de poker",
        "fundas de corazones rojo/blacno/negro",
        "Funda negra esqueleto",
        "Funda de gato negro/flores amarillas",
        "Funda transparente mariposas"
    ],

    Honor: [
        "Funda Hellsing",
        "Funda de dragon transparete",
        "Funda transparente de lazos",
        "Funda de Spiderman into to the Spiderverse",
        "Funda floral",
        "Funda transparente relojero",
        "Funda transparente morado con imán",
        "Funda de corazones blanco/negro",
        "Funda blanca maripoas/verde oceanico",
        "Funda rosa corazones/azul floral",
        "Funda mariposa moderna/flores lineal",
        "Funda lovely bear/flower",
        "Funda gato negro ",
        "Funda flores vintage",
        "Funda floral",
        "Fundas decorativas",
        "Funda estrellada",
        "Funda sol/luna",
        "Funda de gatos",
        "Funda de One Pice"
    ]

};


/* =====================================
   COLORES DE REFERENCIA
===================================== */

const productColors = [
    "#e7c7c1",
    "#d8c9b7",
    "#e9b8c6",
    "#b8cdb9",
    "#484743",
    "#c9b8d9",
    "#e4aa83",
    "#e8c0c8",
    "#a9c6d7",
    "#b9b6b0",
    "#c68e73",
    "#e7e3dc",
    "#c8b1d8",
    "#d6c4a7",
    "#d69a9b",
    "#e7d49a",
    "#d5c2b0",
    "#d9b7a9",
    "#c7c6dc",
    "#c9d7c4"
];


/* =====================================
   MODELOS POR MARCA
===================================== */

const brandModels = {

    Apple: [
        "iPhone 17 Pro Max",
        "iPhone 17 Pro",
        "iPhone 17",
        "iPhone 16 Pro Max",
        "iPhone 16 Pro",
        "iPhone 16 Plus",
        "iPhone 16",
        "iPhone 15 Pro Max",
        "iPhone 15 Pro",
        "iPhone 15 Plus",
        "iPhone 15",
        "iPhone 14 Pro Max",
        "iPhone 14 Pro",
        "iPhone 14 Plus",
        "iPhone 14",
        "iPhone 13 Pro Max",
        "iPhone 13 Pro",
        "iPhone 13",
        "iPhone 12",
        "iPhone 11"
    ],

    Samsung: [
        "Galaxy S25 Ultra",
        "Galaxy S25+",
        "Galaxy S25",
        "Galaxy S24 Ultra",
        "Galaxy S24+",
        "Galaxy S24",
        "Galaxy S23 Ultra",
        "Galaxy S23+",
        "Galaxy S23",
        "Galaxy A56",
        "Galaxy A55",
        "Galaxy A54",
        "Galaxy A36",
        "Galaxy A35",
        "Galaxy A34",
        "Galaxy A26",
        "Galaxy A25",
        "Galaxy A16",
        "Galaxy A15",
        "Galaxy A06"
    ],

    Xiaomi: [
        "Redmi Note 14 Pro+",
        "Redmi Note 14 Pro",
        "Redmi Note 14",
        "Redmi Note 13 Pro+",
        "Redmi Note 13 Pro",
        "Redmi Note 13",
        "Redmi Note 12 Pro+",
        "Redmi Note 12 Pro",
        "Redmi Note 12",
        "Redmi Note 11",
        "Redmi 14C",
        "Redmi 13C",
        "Redmi 13",
        "Redmi 12",
        "Redmi 12C",
        "Poco X7 Pro",
        "Poco X7",
        "Poco X6 Pro",
        "Poco X6",
        "Poco M6 Pro"
    ],

    Motorola: [
        "Moto G75",
        "Moto G85",
        "Moto G84",
        "Moto G75 5G",
        "Moto G54",
        "Moto G53",
        "Moto G35",
        "Moto G34",
        "Moto G24",
        "Moto G23",
        "Moto G14",
        "Moto G13",
        "Moto Edge 50 Pro",
        "Moto Edge 50 Fusion",
        "Moto Edge 50 Neo",
        "Moto Edge 40",
        "Moto Edge 40 Neo",
        "Moto G Power",
        "Moto G Stylus",
        "Moto G Play"
    ],

    Honor: [
        "Honor Magic7 Pro",
        "Honor Magic6 Pro",
        "Honor Magic6 Lite",
        "Honor Magic5 Lite",
        "Honor X9c",
        "Honor X9b",
        "Honor X9a",
        "Honor X8b",
        "Honor X8a",
        "Honor X7b",
        "Honor X7a",
        "Honor X6b",
        "Honor X6a",
        "Honor 200 Pro",
        "Honor 200",
        "Honor 200 Lite",
        "Honor 90",
        "Honor 90 Lite",
        "Honor X5 Plus",
        "Honor X5b"
    ]

};


/* =====================================
   PRECIOS POR MARCA
===================================== */

const brandPrices = {
    Apple: 45000,
    Samsung: 42000,
    Xiaomi: 39000,
    Motorola: 40000,
    Honor: 43000
};


/* =====================================
   DESCRIPCIONES POR MARCA
===================================== */

const brandDescriptions = {

    Apple: "Funda diseñada para dispositivos Apple, con un estilo único y protección para tu celular.",

    Samsung: "Funda diseñada para dispositivos Samsung, combinando estilo y protección.",

    Xiaomi: "Funda diseñada para dispositivos Xiaomi, con diseños modernos y originales.",

    Motorola: "Funda diseñada para dispositivos Motorola, ideal para complementar tu estilo.",

    Honor: "Funda diseñada para dispositivos Honor, con personalidad y diseño."

};


/* =====================================
   GENERAR LOS 100 PRODUCTOS
===================================== */

const products = [];

Object.keys(brandModels).forEach(brand => {

    for (let i = 0; i < PRODUCTS_PER_BRAND; i++) {

        const product = {

            id: products.length + 1,

            // CORRECCIÓN: nombre según marca y posición.
            name: productNames[brand][i],

            brand: brand,

            model: brandModels[brand][i],

            price: brandPrices[brand],

            color: productColors[i],

            // Imagen correspondiente a la marca y posición.
            image: (IMAGE_URLS[brand][i] || "").trim(),

            description: brandDescriptions[brand],

            delivery: DELIVERY_ESTIMATE

        };

        products.push(product);

    }

});


/* =====================================
   ELEMENTOS HTML
===================================== */

const productGrid = document.getElementById("productGrid");
const modelFilter = document.getElementById("modelFilter");
const searchInput = document.getElementById("searchInput");
const sortFilter = document.getElementById("sortFilter");

const activeFilters = document.getElementById("activeFilters");
const emptyState = document.getElementById("emptyState");

const openCartButton = document.getElementById("openCart");
const closeCartButton = document.getElementById("closeCart");

const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const closeModalButton = document.getElementById("closeModal");

const checkoutModal = document.getElementById("checkoutModal");
const checkoutButton = document.getElementById("checkoutButton");
const closeCheckoutButton = document.getElementById("closeCheckout");

const checkoutForm = document.getElementById("checkoutForm");
const checkoutContent = document.getElementById("checkoutContent");
const successScreen = document.getElementById("successScreen");

const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutTotal = document.getElementById("checkoutTotal");

const paymentNotice = document.getElementById("paymentNotice");


/* =====================================
   ESTADO DE LA TIENDA
===================================== */

let selectedBrand = "Apple";

let cart = [];

try {

    cart = JSON.parse(
        localStorage.getItem("caseStudioCart")
    ) || [];

} catch (error) {

    cart = [];

}


/*
   Actualizar los productos guardados en la bolsa
   para que utilicen los enlaces nuevos de las imágenes.
*/

cart = cart.map(item => {

    const currentProduct = products.find(
        product => product.id === Number(item.id)
    );

    if (!currentProduct) return item;

    return {
        ...currentProduct,
        quantity: item.quantity || 1
    };

});


/* =====================================
   FORMATO DE PRECIOS
===================================== */

function formatPrice(price) {

    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(price);

}


/* =====================================
   ESCAPAR TEXTO HTML
===================================== */

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];

    });

}


/* =====================================
   GUARDAR BOLSA
===================================== */

function saveCart() {

    localStorage.setItem(
        "caseStudioCart",
        JSON.stringify(cart)
    );

}


/* =====================================
   OBTENER PRODUCTO
===================================== */

function getProduct(id) {

    return products.find(
        product => product.id === Number(id)
    );

}


/* =====================================
   IMAGEN DEL PRODUCTO
===================================== */

function createProductImage(product, extraClass = "") {

    if (!product.image || !product.image.trim()) {
        return "";
    }

    return `
        <img
            src="${escapeHTML(product.image.trim())}"
            alt="${escapeHTML(product.name)}"
            class="${extraClass}"
            loading="lazy"
            onerror="
                this.style.display='none';
                this.parentElement.classList.add('image-missing');
            "
        >
    `;

}


/* =====================================
   FILTRO DE MODELOS
===================================== */

function updateModels() {

    const models = products
        .filter(product => product.brand === selectedBrand)
        .map(product => product.model);

    const uniqueModels = [...new Set(models)];

    modelFilter.innerHTML = `
        <option value="all">Todos los modelos</option>
    `;

    uniqueModels.forEach(model => {

        const option = document.createElement("option");

        option.value = model;
        option.textContent = model;

        modelFilter.appendChild(option);

    });

}


/* =====================================
   MOSTRAR PRODUCTOS
===================================== */

function renderProducts() {

    let filteredProducts = [...products];

    // FILTRO POR MARCA

    if (selectedBrand !== "all") {

        filteredProducts = filteredProducts.filter(
            product => product.brand === selectedBrand
        );

    }

    // FILTRO POR MODELO

    const selectedModel = modelFilter.value;

    if (selectedModel !== "all") {

        filteredProducts = filteredProducts.filter(
            product => product.model === selectedModel
        );

    }

    // BUSCADOR

    const search = searchInput.value.toLowerCase().trim();

    if (search) {

        filteredProducts = filteredProducts.filter(product => {

            return (
                product.name.toLowerCase().includes(search) ||
                product.brand.toLowerCase().includes(search) ||
                product.model.toLowerCase().includes(search)
            );

        });

    }

    // ORDENAR PRODUCTOS

    const sort = sortFilter.value;

    if (sort === "low") {

        filteredProducts.sort((a, b) => a.price - b.price);

    }

    if (sort === "high") {

        filteredProducts.sort((a, b) => b.price - a.price);

    }

    if (sort === "name") {

        filteredProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

    }

    // LIMPIAR CUADRÍCULA

    productGrid.innerHTML = "";

    activeFilters.textContent =
        `Mostrando ${filteredProducts.length} productos`;

    emptyState.hidden = filteredProducts.length !== 0;

    // CREAR TARJETAS

    filteredProducts.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `

            <div
                class="product-image ${product.image ? "" : "image-missing"}"
                onclick="openProductModal(${product.id})"
            >

                <span class="product-badge">CASE STUDIO</span>

                ${createProductImage(product, "product-photo")}

            </div>

            <div class="product-info">

                <span class="product-brand">
                    ${escapeHTML(product.brand)}
                </span>

                <h3>${escapeHTML(product.name)}</h3>

                <p class="product-model">
                    Compatible con ${escapeHTML(product.model)}
                </p>

                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>

                <div class="delivery-label">
                    Entrega estimada: ${escapeHTML(product.delivery)}
                </div>

                <div class="product-actions">

                    <button
                        class="details-button"
                        onclick="openProductModal(${product.id})"
                    >
                        Ver detalles
                    </button>

                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})"
                    >
                        Añadir a la bolsa
                    </button>

                </div>

            </div>

        `;

        productGrid.appendChild(card);

    });

}


/* =====================================
   FILTRAR CATEGORÍAS
===================================== */

document.querySelectorAll(".category-card").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".category-card").forEach(card => {
            card.classList.remove("active");
        });

        button.classList.add("active");

        selectedBrand = button.dataset.brand;

        modelFilter.value = "all";

        updateModels();

        renderProducts();

    });

});


modelFilter.addEventListener("change", renderProducts);

searchInput.addEventListener("input", renderProducts);

sortFilter.addEventListener("change", renderProducts);


/* =====================================
   AGREGAR A LA BOLSA
===================================== */

function addToCart(id) {

    const product = getProduct(id);

    if (!product) return;

    const existingProduct = cart.find(
        item => item.id === product.id
    );

    if (existingProduct) {

        existingProduct.quantity++;

        existingProduct.image = product.image;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();

    renderCart();

    openCart();

}


/* =====================================
   MOSTRAR BOLSA
===================================== */

function renderCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Tu bolsa está vacía.</p>
                <p>Explora nuestra colección y encuentra tu favorita.</p>
            </div>
        `;

    }

    let total = 0;
    let quantityTotal = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        quantityTotal += item.quantity;

        const element = document.createElement("div");

        element.className = "cart-item";

        element.innerHTML = `

            <div
                class="cart-item-image ${item.image ? "" : "image-missing"}"
                style="background:${escapeHTML(item.color)}"
            >
                ${createProductImage(item)}
            </div>

            <div>

                <h4>${escapeHTML(item.name)}</h4>

                <p>${formatPrice(item.price)}</p>

                <div class="quantity-controls">

                    <button onclick="changeQuantity(${item.id}, -1)">
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="changeQuantity(${item.id}, 1)">
                        +
                    </button>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${item.id})"
                >
                    Eliminar
                </button>

            </div>

            <strong>
                ${formatPrice(item.price * item.quantity)}
            </strong>

        `;

        cartItems.appendChild(element);

    });

    cartCount.textContent = quantityTotal;

    cartTotal.textContent = formatPrice(total);

    checkoutSubtotal.textContent = formatPrice(total);

    checkoutTotal.textContent = formatPrice(total);

    checkoutButton.disabled = cart.length === 0;

    checkoutButton.style.opacity =
        cart.length === 0 ? ".5" : "1";

}


/* =====================================
   CAMBIAR CANTIDAD
===================================== */

function changeQuantity(id, amount) {

    const item = cart.find(
        product => product.id === Number(id)
    );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(
            product => product.id !== Number(id)
        );

    }

    saveCart();

    renderCart();

}


/* =====================================
   ELIMINAR PRODUCTO
===================================== */

function removeFromCart(id) {

    cart = cart.filter(
        product => product.id !== Number(id)
    );

    saveCart();

    renderCart();

}


/* =====================================
   ABRIR Y CERRAR BOLSA
===================================== */

function openCart() {

    cartDrawer.classList.add("active");

    overlay.classList.add("active");

}

function closeCart() {

    cartDrawer.classList.remove("active");

    overlay.classList.remove("active");

}

openCartButton.addEventListener("click", openCart);

closeCartButton.addEventListener("click", closeCart);

overlay.addEventListener("click", closeCart);


/* =====================================
   DETALLES DEL PRODUCTO
===================================== */

function openProductModal(id) {

    const product = getProduct(id);

    if (!product) return;

    modalContent.innerHTML = `

        <div class="modal-product-layout">

            <div
                class="modal-product-image ${product.image ? "" : "image-missing"}"
                style="background:${escapeHTML(product.color)}"
            >

                ${createProductImage(product)}

            </div>

            <div class="modal-product-info">

                <span class="eyebrow">
                    ${escapeHTML(product.brand)}
                </span>

                <h2>${escapeHTML(product.name)}</h2>

                <p>
                    Compatible con ${escapeHTML(product.model)}.
                </p>

                <p>
                    ${escapeHTML(product.description)}
                </p>

                <div class="modal-price">
                    ${formatPrice(product.price)}
                </div>

                <div class="modal-delivery">
                    Tiempo estimado de entrega:
                    <strong>${escapeHTML(product.delivery)}</strong>
                </div>

                <button
                    class="checkout-button"
                    onclick="addToCart(${product.id}); closeProductModal();"
                >
                    Añadir a la bolsa
                </button>

            </div>

        </div>

    `;

    productModal.classList.add("active");

}


function closeProductModal() {

    productModal.classList.remove("active");

}

closeModalButton.addEventListener("click", closeProductModal);

productModal.addEventListener("click", event => {

    if (event.target === productModal) {
        closeProductModal();
    }

});


/* =====================================
   ABRIR FORMULARIO DE COMPRA
===================================== */

checkoutButton.addEventListener("click", () => {

    if (cart.length === 0) return;

    closeCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    checkoutSubtotal.textContent = formatPrice(total);

    checkoutTotal.textContent = formatPrice(total);

    checkoutContent.hidden = false;

    successScreen.hidden = true;

    checkoutModal.classList.add("active");

});


/* =====================================
   MÉTODOS DE PAGO
===================================== */

const demoCardFields = document.getElementById("demoCardFields");

const demoCardInputs = demoCardFields
    ? [...demoCardFields.querySelectorAll("input")]
    : [];

function toggleDemoCardFields(show) {

    if (!demoCardFields) return;

    demoCardFields.hidden = !show;

    demoCardInputs.forEach(field => {

        field.disabled = !show;

        field.required = show;

        if (!show) field.value = "";

    });

}

toggleDemoCardFields(false);

document.querySelectorAll(
    'input[name="paymentMethod"]'
).forEach(input => {

    input.addEventListener("change", () => {

        const method = input.value;

        toggleDemoCardFields(method === "Tarjeta débito o crédito");

        if (method === "Efectivo contraentrega") {

            paymentNotice.textContent =
                "El pago se realizará al recibir el pedido. La disponibilidad de contraentrega depende de la cobertura de envío.";

        } else if (method === "Tarjeta débito o crédito") {

            paymentNotice.textContent =
                "Modo demostración: puedes completar los campos con datos ficticios. No se procesa ni se cobra ninguna tarjeta.";

        } else if (method === "Nequi") {

            paymentNotice.textContent =
                "Al registrar el pedido se deberá coordinar el pago por Nequi y verificar la transferencia.";

        } else if (method === "Daviplata") {

            paymentNotice.textContent =
                "Al registrar el pedido se deberá coordinar el pago por Daviplata y verificar la transferencia.";

        } else {

            paymentNotice.textContent =
                "Al registrar el pedido se deberán facilitar los datos bancarios y verificar la transferencia.";

        }

    });

});


/* =====================================
   GENERAR NÚMERO DE PEDIDO
===================================== */

function generateOrderNumber() {

    const date = new Date();

    const year = date.getFullYear();

    const random = Math.floor(
        100000 + Math.random() * 900000
    );

    return `CS-${year}-${random}`;

}


/* =====================================
   FINALIZAR COMPRA
===================================== */

checkoutForm.addEventListener("submit", event => {

    event.preventDefault();

    if (cart.length === 0) {

        alert("Tu bolsa está vacía.");

        return;

    }

    if (!checkoutForm.reportValidity()) return;

    const paymentMethod = document.querySelector(
        'input[name="paymentMethod"]:checked'
    );

    if (!paymentMethod) {

        alert("Selecciona un método de pago.");

        return;

    }

    const customer = {

        name: document.getElementById("customerName").value.trim(),

        email: document.getElementById("customerEmail").value.trim(),

        phone: document.getElementById("customerPhone").value.trim(),

        department: document.getElementById("customerDepartment").value.trim(),

        city: document.getElementById("customerCity").value.trim(),

        address: document.getElementById("customerAddress").value.trim(),

        notes: document.getElementById("customerNotes").value.trim()

    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const order = {

        orderNumber: generateOrderNumber(),

        customer: customer,

        paymentMethod: paymentMethod.value,

        products: [...cart],

        total: total,

        date: new Date().toLocaleString("es-CO"),

        status: "Pedido registrado"

    };

    /*
       DEMOSTRACIÓN:
       El pedido se guarda en el navegador.
       No se procesan pagos reales.
    */

    const orders = JSON.parse(
        localStorage.getItem("caseStudioOrders") || "[]"
    );

    orders.push(order);

    localStorage.setItem(
        "caseStudioOrders",
        JSON.stringify(orders)
    );

    showSuccess(order);

});


/* =====================================
   MOSTRAR COMPRA EXITOSA
===================================== */

function showSuccess(order) {

    checkoutContent.hidden = true;

    successScreen.hidden = false;

    document.getElementById("orderNumber").textContent =
        order.orderNumber;

    const paymentStatus =
        order.paymentMethod === "Efectivo contraentrega"
            ? "Pago pendiente al momento de la entrega."
            : order.paymentMethod === "Tarjeta débito o crédito"
                ? "Simulación completada. No se realizó ningún cobro ni se guardaron datos de tarjeta."
                : "Pago pendiente de coordinación y verificación.";

    document.getElementById("successDetails").innerHTML = `

        <p><strong>Cliente:</strong> ${escapeHTML(order.customer.name)}</p>

        <p><strong>Correo:</strong> ${escapeHTML(order.customer.email)}</p>

        <p><strong>Ciudad:</strong> ${escapeHTML(order.customer.city)}</p>

        <p><strong>Dirección:</strong> ${escapeHTML(order.customer.address)}</p>

        <p><strong>Método de pago:</strong> ${escapeHTML(order.paymentMethod)}</p>

        <p><strong>Total de productos:</strong> ${formatPrice(order.total)}</p>

        <p><strong>Estado del pago:</strong> ${paymentStatus}</p>

        <p><strong>Entrega estimada:</strong> ${DELIVERY_ESTIMATE}</p>

    `;

    cart = [];

    saveCart();

    renderCart();

    checkoutForm.reset();

    toggleDemoCardFields(false);

    paymentNotice.textContent =
        "Selecciona un método de pago para continuar.";

}


/* =====================================
   CERRAR FORMULARIO
===================================== */

function closeCheckout() {

    checkoutModal.classList.remove("active");

}

closeCheckoutButton.addEventListener("click", closeCheckout);

checkoutModal.addEventListener("click", event => {

    if (event.target === checkoutModal) {
        closeCheckout();
    }

});


/* =====================================
   VOLVER A LA TIENDA
===================================== */

document.getElementById("finishPurchase").addEventListener("click", () => {

    closeCheckout();

    checkoutContent.hidden = false;

    successScreen.hidden = true;

});


/* =====================================
   CERRAR CON ESCAPE
===================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeCart();

        closeProductModal();

        closeCheckout();

    }

});


/* =====================================
   INICIAR TIENDA
===================================== */

updateModels();

renderProducts();

renderCart();


/* =====================================
   COMPROBAR CANTIDAD DE PRODUCTOS
===================================== */

console.log("CASE STUDIO iniciado correctamente.");

console.log("Total de productos:", products.length);

console.log("Productos por marca:");

Object.keys(brandModels).forEach(brand => {

    console.log(
        brand,
        products.filter(product => product.brand === brand).length
    );

});
