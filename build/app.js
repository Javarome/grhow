"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestListener = void 0;
const allMessages = {
    en: { hello: "Hello" },
    fr: { hello: "Bonjour" },
    es: { hello: "Hola" },
    it: { hello: "Ciao" },
    pt: { hello: "Olá" },
    mi: { hello: "Kia Ora" },
    ["en-au"]: { hello: "G’day" },
    el: { hello: "γεια" },
    sr: { hello: "Здраво" },
    hr: { hello: "Zdravo" },
    ru: { hello: "привет" },
    hi: { hello: "नमस्ते" },
    jp: { hello: "こんにちは" },
    tr: { hello: "Merhaba" },
    ko: { hello: "안녕하세요" },
    sk: { hello: "Ahoj" },
    de: { hello: "Guten tag" },
    nl: { hello: "Hallo" },
    po: { hello: "Cześć" },
};
const requestListener = (req, res) => {
    let langHeader = req.headers['accept-language'] || "";
    const langs = langHeader.split(",");
    const lg = langs.map(lang => lang.split(";")[0]);
    const locale = (lg[0] || "en").toLowerCase();
    const messages = allMessages[locale] || allMessages[locale.split("-")[0]];
    let front = "*"; // https://grhow.com"
    res.setHeader('Access-Control-Allow-Origin', front);
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ message: messages.hello }));
};
exports.requestListener = requestListener;
