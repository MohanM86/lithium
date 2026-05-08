export type GlossaryTerm = {
  term: string;
  shortDef: string;
  longDef?: string;
};

export const glossary: GlossaryTerm[] = [
  { term: "Litium-ion", shortDef: "Samlebegrep for batterier hvor litium-ioner beveger seg mellom anode og katode under lading og utlading." },
  { term: "LFP", shortDef: "Lithium Iron Phosphate – sikker, lang levetid, lavere energitetthet enn NMC." },
  { term: "NMC", shortDef: "Nickel Manganese Cobalt – høy energitetthet, kortere levetid, dyrere på grunn av kobolt." },
  { term: "LTO", shortDef: "Lithium Titanate – ekstremt rask lading og lang levetid, men lav energitetthet og høy pris." },
  { term: "NCA", shortDef: "Nickel Cobalt Aluminum – høy energitetthet, brukt blant annet i Tesla. Likner NMC." },
  { term: "Solid-state", shortDef: "Litium-batteri med fast elektrolytt. Høyere energitetthet og bedre sikkerhet, men ennå lite kommersielt tilgjengelig." },
  { term: "BMS", shortDef: "Battery Management System – elektronikk som overvåker og beskytter cellene mot overlading, dyputladning og temperaturavvik." },
  { term: "Sykluser", shortDef: "Antall fulle lade-utlade-runder før kapasiteten faller under et terskelnivå (vanligvis 80 %)." },
  { term: "DoD", shortDef: "Depth of Discharge – hvor mye av kapasiteten som er utladet. 80 % DoD betyr 20 % igjen." },
  { term: "SoC", shortDef: "State of Charge – hvor mye av kapasiteten som er igjen." },
  { term: "C-rate", shortDef: "Lade- eller utladningshastighet relativt til kapasitet. 1C = full kapasitet på én time, 2C = halv time." },
  { term: "Energitetthet", shortDef: "Hvor mye energi som lagres per vekt eller volum. Måles i Wh/kg eller Wh/L." },
  { term: "Effekttetthet", shortDef: "Hvor mye effekt batteriet kan levere per vekt. Måles i W/kg." },
  { term: "Termisk runaway", shortDef: "Selvforsterkende kjedereaksjon hvor temperaturen i en celle stiger ukontrollert og kan forårsake brann." },
  { term: "Anode", shortDef: "Den negative elektroden – ofte grafitt i litium-ion. Lithium-ioner lagres her under lading." },
  { term: "Katode", shortDef: "Den positive elektroden – kjemien (LFP, NMC, NCA) bestemmes av katode-materialet." },
  { term: "Elektrolytt", shortDef: "Det ledende mediet som flytter litium-ioner mellom elektrodene. Vanligvis flytende, men kan være fast (solid-state) eller polymer." },
  { term: "Pouch-celle", shortDef: "Mykvegget battericelle pakket i aluminiumsfolie. Lett og fleksibel form." },
  { term: "Prismatisk celle", shortDef: "Rektangulær cellebox med fast skall. Mye brukt i moderne elbiler og hjemmebatterier." },
  { term: "Sylindrisk celle", shortDef: "Rund celle. Kjente formater er 18650 (18×65 mm) og 21700 (21×70 mm)." },
  { term: "Cell balancing", shortDef: "BMS-funksjon som sørger for at alle cellene i et batteri har lik spenning og kapasitet." },
  { term: "Litiumkarbonat", shortDef: "Li₂CO₃ – hvit pulverform brukt i mange katode-kjemier. Hovedhandelsformen for litium globalt." },
  { term: "Litiumhydroksid", shortDef: "LiOH – brukt spesielt i NMC- og NCA-katoder. Fortrekkes ved høyt nikkel-innhold." },
  { term: "Gigafactory", shortDef: "Storskala fabrikk for battericelle-produksjon. Kapasitet måles i GWh per år." },
];
