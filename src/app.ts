import {IncomingMessage, RequestListener, ServerResponse} from "http"

interface Messages {
  hello(userDate: Date): string
}

const allMessages: { [locale: string]: Messages } = {
  en: {
    hello: (userDate: Date) => {
      return userDate.getHours() > 18 ? "Good evening" : userDate.getHours() < 11 ? "Good morning" : "Hello"
    }
  },
  fr: {
    hello: (userDate: Date) => {
      return userDate.getHours() > 18 ? "Bonsoir" : "Bonjour"
    }
  },
  es: {hello: (_userDate: Date) => "Hola"},
  it: {hello: (_userDate: Date) => "Ciao"},
  pt: {hello: (_userDate: Date) => "Olá"},
  mi: {hello: (_userDate: Date) => "Kia Ora"},
  ["en-au"]: {hello: (_userDate: Date) => "G’day"},
  el: {hello: (_userDate: Date) => "γεια"},
  sr: {hello: (_userDate: Date) => "Здраво"},
  hr: {hello: (_userDate: Date) => "Zdravo"},
  ru: {hello: (_userDate: Date) => "привет"},
  hi: {hello: (_userDate: Date) => "नमस्ते"},
  jp: {hello: (_userDate: Date) => "こんにちは"},
  tr: {hello: (_userDate: Date) => "Merhaba"},
  ko: {hello: (_userDate: Date) => "안녕하세요"},
  sk: {hello: (_userDate: Date) => "Ahoj"},
  de: {hello: (_userDate: Date) => "Guten tag"},
  nl: {hello: (_userDate: Date) => "Hallo"},
  po: {hello: (_userDate: Date) => "Cześć"}
}
export const requestListener: RequestListener = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  let payload: any
  if (req.method === "POST") {
    let langHeader = req.headers["accept-language"] || ""
    const langs = langHeader.split(",")
    const lg = langs.map(lang => lang.split(";")[0])
    const locale = (lg[0] || "en").toLowerCase()
    const buffers = []
    for await (const chunk of req) {
      buffers.push(chunk)
    }
    const data = Buffer.concat(buffers).toString()
    const json = JSON.parse(data)
    const dateHeader = req.headers["date"] as string
    const userDate = json.date ? new Date(json.date) : dateHeader ? new Date(dateHeader) : new Date()
    const messages = allMessages[locale] || allMessages[locale.split("-")[0]]
    res.setHeader("Content-Type", "application/json")
    res.setHeader("Content-Language", locale)
    payload = JSON.stringify({message: messages.hello(userDate)})
  }
  const allowedOrigins = "https://grhow.com"
  res.setHeader("Access-Control-Allow-Methods", "POST")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Origin", allowedOrigins)
  res.writeHead(200);
  res.end(payload);
}

