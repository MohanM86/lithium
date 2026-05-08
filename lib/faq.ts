export type FAQItem = {
  q: string;
  a: string;
  category?: string;
};

export const homeFaqs: FAQItem[] = [
  {
    q: "Hva er forskjellen på LFP og NMC?",
    a: "LFP (litium-jernfosfat) er sikrere og har lengre levetid – typisk 4 000–6 000 sykluser. NMC (nikkel-mangan-kobolt) har høyere energitetthet og leverer mer effekt per kg, men holder kortere – 1 500–3 000 sykluser. LFP dominerer i hjemmebatteri, NMC fortsatt i mange elbiler.",
  },
  {
    q: "Hvor lenge varer et litium-batteri?",
    a: "Et godt LFP-batteri leverer 4 000–6 000 fulle sykluser før kapasiteten faller til 80 %. I praksis er dette 12–15 år for et hjemmebatteri og 8–12 år for en typisk elbil. NMC holder kortere, ofte 8–10 år.",
  },
  {
    q: "Er litium-batterier farlige?",
    a: "De aller fleste er trygge ved normal bruk. Risikoen er termisk runaway – kjedereaksjon ved fysisk skade, overlading eller ekstrem varme. LFP er klart sikrest. Standardene er strenge i Norge, og kvalitetsbatterier har innebygd BMS som beskytter mot de vanligste feilene.",
  },
  {
    q: "Kan litium-batterier resirkuleres?",
    a: "Ja. Norske aktører som Hydrovolt (eid av Hydro og Northvolt) tar imot brukte elbil-batterier og gjenvinner over 95 % av materialene. Mindre batterier leveres som farlig avfall ved gjenvinningsstasjoner.",
  },
  {
    q: "Hva koster litium per kg?",
    a: "Litiumkarbonat har svingt mellom 80 000 og 600 000 kr/tonn (2022–2026). Per februar 2026 ligger spotprisen på rundt 90 000–120 000 kr/tonn. Selve litium-andelen i et batteri er liten – kobolt og nikkel utgjør ofte større del av cellekostnaden.",
  },
  {
    q: "Hva er solid-state batteri?",
    a: "Litium-batteri med fast elektrolytt i stedet for væske. Lover høyere energitetthet, raskere lading og bedre sikkerhet. Mass-produksjon er ventet 2027–2030, men dukker fortsatt sjeldent opp i forbruker-produkter.",
  },
];

export const allFaqs: FAQItem[] = [
  ...homeFaqs,
  {
    category: "Teknologi",
    q: "Hva betyr C-rate?",
    a: "C-rate beskriver lade- og utladningshastighet relativt til kapasitet. 1C = lader/utlader full kapasitet på én time. 0,5C = to timer. Et 100 Ah batteri ladet med 50 A er altså 0,5C.",
  },
  {
    category: "Teknologi",
    q: "Hva er DoD og SoC?",
    a: "DoD (Depth of Discharge) er hvor mye av kapasiteten som er brukt – f.eks. 80 % DoD betyr 20 % igjen. SoC (State of Charge) er det motsatte – hvor mye som er igjen. Lavere DoD i daglig bruk gir lengre levetid.",
  },
  {
    category: "Teknologi",
    q: "Hva er en battericelle?",
    a: "Den minste enheten som lagrer energi via elektrokjemi. Et batteri består av flere celler koblet i serie/parallell. Vanlige formater: pouch (myk), prismatisk (boks), sylindrisk (rund som 18650 eller 21700).",
  },
  {
    category: "Sikkerhet",
    q: "Kan jeg ta litium-batteri på fly?",
    a: "Ja, men under 100 Wh per batteri er greit i håndbagasje. Mellom 100 og 160 Wh kreves flyselskapets samtykke. Over 160 Wh er forbudt for passasjerfly. Eksterne batteripakker må være i håndbagasje, aldri innsjekket.",
  },
  {
    category: "Sikkerhet",
    q: "Hvordan slukker brannvesenet et litium-batteri?",
    a: "Med store mengder vann – ikke for å slukke flammen, men for å kjøle batteriet under termisk runaway-temperaturen. Et brennende elbil-batteri kan kreve 10 000–30 000 liter vann. Ren CO₂- eller pulverslukker stopper ikke kjedereaksjonen.",
  },
  {
    category: "Sikkerhet",
    q: "Bør jeg lade telefon eller elsykkel om natten?",
    a: "Moderne litium-batterier har BMS som stopper lading ved 100 %, så langvarig overlading er ikke et problem. Men ved batterifeil er det best at lading skjer mens noen er våken. Ikke lad på brennbart underlag (sengetøy, tepper) eller blokker rømningsveier.",
  },
  {
    category: "Marked",
    q: "Har Norge egen litium-produksjon?",
    a: "Norge har ikke litium-gruver, men flere aktører innen battericelle-produksjon: Vianode (anodematerialer), Beyonder (LIC-kondensatorer), Morrow Batteries (LFP-celler). Freyr Battery hadde planer om gigafabrikk i Mo i Rana, men prosjektet ble nedskalert.",
  },
  {
    category: "Marked",
    q: "Hvor kommer litiumet fra?",
    a: "Hovedkilder er saltsjøer i Sør-Amerika (Chile, Argentina, Bolivia – «litium-trekanten») og hardrock-gruver i Australia og Kina. Australia leder råstoffproduksjon, Kina dominerer raffinering. Litiumkarbonat (Li₂CO₃) og litiumhydroksid (LiOH) er hovedformene som handles.",
  },
  {
    category: "Bruksområder",
    q: "Kan jeg bytte blybatteri i båten med litium?",
    a: "Ofte ja, men det krever endringer: ny lader (LFP-profil), riktig BMS, og ofte ny inverter. LFP gir 2–3 ganger mer brukbar kapasitet per kg, men kostnaden er 3–5× blybatteri. Lang levetid (10+ år vs 3–5 år) gjør det ofte lønnsomt over tid.",
  },
  {
    category: "Bruksområder",
    q: "Hvilket batteri er best for el-sykkel?",
    a: "De aller fleste el-sykler bruker litium-ion (NMC eller NCA). 36 V eller 48 V med 10–20 Ah er typisk. LFP er sjeldnere fordi vekt og volum er kritisk. Velg batteri fra anerkjent leverandør med god BMS – billige replika-batterier er en kjent brannrisiko.",
  },
];

export const FAQ_CATEGORIES = ["Teknologi", "Sikkerhet", "Marked", "Bruksområder"];
