const title = "Oscar Carreño";
const email = "Pinillamenoscar@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3123506414";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Oscar Carreño se especializa en bolsos para dama que combinan estilo y elegancia. Con nuestra variedad de diseños, cada bolso refleja el gusto que te define.",
        description2: "Nuestros bolsos están creados con materiales de alta calidad y atención a los detalles, brindando una experiencia única para quienes valoran la moda y la funcionalidad. En *Oscar Carreño*, creemos que cada bolso es una expresión de personalidad y buen gusto.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Oscar Carreño",
            p2: "El gusto que te define.",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565365298341&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
