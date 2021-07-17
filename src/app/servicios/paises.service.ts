import { Paises } from './../modelos/paises';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paises: any[] = [
    {
      nombre: "Afganistán",
      code: "AF"
    },
    {
      nombre: "Albania",
      code: "AL"
    },
    {
      nombre: "Argelia",
      code: "DZ"
    },
    {
      nombre: "Samoa Americana",
      code: "AS"
    },
    {
      nombre: "Andorra",
      code: "AD"
    },
    {
      nombre: "Angola",
      code: "AO"
    },
    {
      nombre: "Anguilla",
      code: "AI"
    },
    {
      nombre: "Antártida",
      code: "AQ"
    },
    {

      nombre: "Antigua y Barbuda",
      code: "AG"
    },
    {

      nombre: "Argentina",
      code: "AR"
    },
    {
      nombre: "Armenia",
      code: "AM"
    },
    {
      nombre: "Aruba",
      code: "AW"
    },
    {
      nombre: "Australia",
      code: "AU"
    },
    {
      nombre: "Austria",
      code: "AT"
    },
    {
      nombre: "Azerbaiyán",
      code: "AZ"
    },
    {
      nombre: "Bahamas",
      code: "BS"
    },
    {
      nombre: "Baréin",
      code: "BH"
    },
    {
      nombre: "Banglades",
      code: "BD"
    },
    {
      nombre: "Barbados",
      code: "BB"
    },
    {
      nombre: "Bielorrusia",
      code: "BY"
    },
    {
      nombre: "Bélgica",
      code: "BE"
    },
    {
      nombre: "Belice",
      code: "BZ"
    },
    {
      nombre: "Benin",
      code: "BJ"
    },
    {
      nombre: "Bermudas",
      code: "BM"
    },
    {
      nombre: "Butan",
      code: "BT"
    },
    {
      nombre: "Bolivia",
      code: "BO"
    },
    {
      nombre: "Bosnia-Herzegovina",
      code: "BA"
    },
    {
      nombre: "Botsuana",
      code: "BW"
    },
    {
      nombre: "Brasil",
      code: "BR"
    },
    {
      nombre: "Territorio Británico del Océano Índico",
      code: "IO"
    },
    {
      nombre: "Brunei",
      code: "BN"
    },
    {
      nombre: "Bulgaria",
      code: "BG"
    },
    {
      nombre: "Burkina Faso",
      code: "BF"
    },
    {
      nombre: "Burundi",
      code: "BI"
    },
    {
      nombre: "Camboya",
      code: "KH"
    },
    {
      nombre: "Camerún",
      code: "CM"
    },
    {
      nombre: "Canadá",
      code: "CA"
    },
    {
      nombre: "Cabo Verde",
      code: "CV"
    },
    {
      nombre: "Islas Caimán",
      code: "KY"
    },
    {
      nombre: "República Centroafricana",
      code: "CF"
    },
    {
      nombre: "Chad",
      code: "TD"
    },
    {
      nombre: "Chile",
      code: "CL"
    },
    {
      nombre: "China",
      code: "CN"
    },
    {
      nombre: "Isla de Navidad",
      code: "CX"
    },
    {
      nombre: "Islas Cocos",
      code: "CC"
    },
    {
      nombre: "Colombia",
      code: "CO"
    },
    {
      nombre: "Comoras",
      code: "KM"
    },
    {
      nombre: "Congo",
      code: "CG"
    },
    {
      nombre: "República Democrática del Congo",
      code: "CD"
    },
    {
      nombre: "Islas Cook",
      code: "CK"
    },
    {
      nombre: "Costa Rica",
      code: "CR"
    },
    {
      nombre: "Costa de Marfil",
      code: "CI"
    },
    {
      nombre: "Croacia",
      code: "HR"
    },
    {
      nombre: "Cuba",
      code: "CU"
    },
    {
      nombre: "Chipre",
      code: "CY"
    },
    {
      nombre: "Chequia",
      code: "CZ"
    },
    {
      nombre: "Dinamarca",
      code: "DK"
    },
    {
      nombre: "Yibuti",
      code: "DJ"
    },
    {
      nombre: "Dominica",
      code: "DM"
    },
    {

      nombre: "República Dominicana",
      code: "DO"
    },
    {
      nombre: "Ecuador",
      code: "EC"
    },
    {
      nombre: "Egipto",
      code: "EG"
    },
    {
      nombre: "El Salvador",
      code: "SV"
    },
    {
      nombre: "Guinea Ecuatorial",
      code: "GQ"
    },
    {
      nombre: "Eritrea",
      code: "ER"
    },
    {
      nombre: "Estonia",
      code: "EE"
    },
    {
      nombre: "Etiopía",
      code: "ET"
    },
    {
      nombre: "Islas Malvinas",
      code: "FK"
    },
    {
      nombre: "Islas Feroe",
      code: "FO"
    },
    {
      nombre: "Fiyi",
      code: "FJ"
    },
    {
      nombre: "Finlandia",
      code: "FI"
    },
    {
      nombre: "Francia",
      code: "FR"
    },
    {
      nombre: "Guayana Francesa",
      code: "GF"
    },
    {
      nombre: "Polinesia Francesa",
      code: "PF"
    },
    {
      nombre: "Gabón",
      code: "GA"
    },
    {
      nombre: "Gambia",
      code: "GM"
    },
    {
      nombre: "Georgia",
      code: "GE"
    },
    {
      nombre: "Alemania",
      code: "DE"
    },
    {
      nombre: "Ghana",
      code: "GH"
    },
    {
      nombre: "Gibraltar",
      code: "GI"
    },
    {
      nombre: "Grecia",
      ode: "GR"
    },
    {
      nombre: "Groenlandia",
      code: "GL"
    },
    {
      nombre: "Granada",
      code: "GD"
    },
    {
      nombre: "Guadalupe",
      code: "GP"
    },
    {
      nombre: "Guam",
      code: "GU"
    },
    {
      nombre: "Guatemala",
      code: "GT"
    },
    {
      nombre: "Guernsey",
      code: "GG"
    },
    {
      nombre: "Guinea",
      code: "GN"
    },
    {
      nombre: "Guinea-Bisau",
      code: "GW"
    },
    {
      nombre: "Guyana",
      code: "GY"
    },
    {
      nombre: "Haití",
      code: "HT"
    },
    {
      nombre: "Ciudad del Vaticano",
      code: "VA"
    },
    {
      nombre: "Honduras",
      code: "HN"
    },
    {
      nombre: "Hong Kong",
      code: "HK"
    },
    {
      nombre: "Hungría",
      code: "HU"
    },
    {
      nombre: "Islandia",
      code: "IS"
    },
    {
      nombre: "India",
      code: "IN"
    },
    {

      nombre: "Indonesia",
      code: "ID"
    },
    {
      nombre: "Irán",
      code: "IR"
    },
    {
      nombre: "Iraq",
      code: "IQ"
    },
    {
      nombre: "Irlanda",
      code: "IE"
    },
    {
      nombre: "Isla de Man",
      code: "IM"
    },
    {
      nombre: "Israel",
      code: "IL"
    },
    {
      nombre: "Italia",
      code: "IT"
    },
    {
      nombre: "Jamaica",
      code: "JM"
    },
    {
      nombre: "Japón",
      code: "JP"
    },
    {
      nombre: "Jersey",
      code: "JE"
    },
    {
      nombre: "Jordania",
      code: "JO"
    },
    {
      nombre: "Kazajistán",
      code: "KZ"
    },
    {
      nombre: "Kenia",
      code: "KE"
    },
    {
      nombre: "Kiribati",
      code: "KI"
    },
    {
      nombre: "Corea del Norte",
      code: "KP"
    },
    {

      nombre: "Corea del Sur",
      code: "KR"
    },
    {
      nombre: "Kosovo",
      code: "XK"
    },
    {
      nombre: "Kuwait",
      code: "KW"
    },
    {
      nombre: "Kirguistán",
      code: "KG"
    },
    {
      nombre: "Laos",
      code: "LA"
    },
    {
      nombre: "Letonia",
      code: "LV"
    },
    {
      nombre: "Líbano",
      code: "LB"
    },
    {
      nombre: "Lesoto",
      code: "LS"
    },
    {
      nombre: "Liberia",
      code: "LR"
    },
    {
      nombre: "Libia",
      code: "LY"
    },
    {
      nombre: "Liechtenstein",
      code: "LI"
    },
    {
      nombre: "Lituania",
      code: "LT"
    },
    {
      nombre: "Luxemburgo",
      code: "LU"
    },
    {
      nombre: "Macao",
      code: "MO"
    },
    {
      nombre: "República de Macedonia",
      code: "MK"
    },
    {
      nombre: "Madagascar",
      code: "MG"
    },
    {
      nombre: "Malaui",
      code: "MW"
    },
    {
      nombre: "Malasia",
      code: "MY"
    },
    {
      nombre: "Maldivas",
      code: "MV"
    },
    {
      nombre: "Malí",
      code: "ML"
    },
    {
      nombre: "Malta",
      code: "MT"
    },
    {
      nombre: "Islas Marshall",
      code: "MH"
    },
    {
      nombre: "Martinica",
      code: "MQ"
    },
    {
      nombre: "Mauritania",
      code: "MR"
    },
    {
      nombre: "Mauricio",
      code: "MU"
    },
    {
      nombre: "Mayotte",
      code: "YT"
    },
    {
      nombre: "México",
      code: "MX"
    },
    {
      nombre: "Estados Federados de Micronesia",
      code: "FM"
    },
    {
      nombre: "Moldavia",
      code: "MD"
    },
    {
      nombre: "Monaco",
      code: "MC"
    },
    {
      nombre: "Mongolia",
      code: "MN"
    },
    {
      nombre: "Montenegro",
      code: "ME"
    },
    {
      nombre: "Montserrat",
      code: "MS"
    },
    {
      nombre: "Marruecos",
      code: "MA"
    },
    {
      nombre: "Mozambique",
      code: "MZ"
    },
    {
      nombre: "Birmania",
      code: "MM"
    },
    {
      nombre: "Namibia",
      code: "NA"
    },
    {
      nombre: "Nauru",
      code: "NR"
    },
    {
      nombre: "Nepal",
      code: "NP"
    },
    {

      nombre: "Holanda",
      code: "NL"
    },
    {
      nombre: "Antillas Holandesas",
      code: "AN"
    },
    {
      nombre: "Nueva Caledonia",
      code: "NC"
    },
    {
      nombre: "Nueva Zelanda",
      code: "NZ"
    },
    {
      nombre: "Nicaragua",
      code: "NI"
    },
    {
      nombre: "Niger",
      code: "NE"
    },
    {
      nombre: "Nigeria",
      code: "NG"
    },
    {
      nombre: "Niue",
      code: "NU"
    },
    {
      nombre: "IslaNorfolk",
      code: "NF"
    },
    {
      nombre: "IslasMarianasdelNorte",
      code: "MP"
    },
    {
      nombre: "Noruega",
      code: "NO"
    },
    {
      nombre: "Omán",
      code: "OM"
    },
    {
      nombre: "Pakistán",
      code: "PK"
    },
    {
      nombre: "Palaos",
      code: "PW"
    },
    {
      nombre: "Panamá",
      code: "PA"
    },
    {
      nombre: "Papúa Nueva Guinea",
      code: "PG"
    },
    {
      nombre: "Paraguay",
      code: "PY"
    },
    {
      nombre: "Perú",
      code: "PE"
    },
    {
      nombre: "Filipinas",
      code: "PH"
    },
    {
      nombre: "Islas Pitcairn",
      code: "PN"
    },
    {
      nombre: "Polonia",
      code: "PL"
    },
    {
      nombre: "Portugal",
      code: "PT"
    },
    {
      nombre: "Puerto Rico",
      code: "PR"
    },
    {
      nombre: "Qatar",
      code: "QA"
    },
    {
      nombre: "Rumania",
      code: "RO"
    },
    {
      nombre: "Rusia",
      code: "RU"
    },
    {
      nombre: "Ruanda",
      code: "RW"
    },
    {
      nombre: "Reunion",
      code: "RE"
    },
    {
      nombre: "San Bartolome",
      code: "BL"
    },
    {
      nombre: "Santa Elena, Ascensión y Tristán de Acuña",
      code: "SH"
    },
    {
      nombre: "San Cristóbal y Nieves",
      code: "KN"
    },
    {
      nombre: "Santa Lucía",
      code: "LC"
    },
    {
      nombre: "Isla de San Martín",
      code: "MF"
    },
    {
      nombre: "San Pedro y Miquelon",
      code: "PM"
    },
    {
      nombre: "San Vicente y las Granadinas",
      code: "VC"
    },
    {
      nombre: "Samoa",
      code: "WS"
    },
    {
      nombre: "San Marino",
      code: "SM"
    },
    {
      nombre: " Santo Tomé y Príncipe",
      code: "ST"
    },
    {
      nombre: "Arabia Saudita",
      code: "SA"
    },
    {
      nombre: "Senegal",
      code: "SN"
    },
    {
      nombre: "Serbia",
      code: "RS"
    },
    {
      nombre: "Seychelles",
      code: "SC"
    },
    {
      nombre: "Sierra Leona",
      code: "SL"
    },
    {
      nombre: "Singapur",
      code: "SG"
    },
    {
      nombre: "Eslovaquia",
      code: "SK"
    },
    {
      nombre: "Eslovenia",
      code: "SI"
    },
    {
      nombre: "Islas Salomón",
      code: "SB"
    },
    {
      nombre: "Somalia",
      code: "SO"
    },
    {
      nombre: "Sudáfrica",
      code: "ZA"
    },
    {
      nombre: "Sudán del Sur",
      code: "SS"
    },
    {
      nombre: "España",
      code: "ES"
    },
    {
      nombre: "Sri Lanka",
      code: "LK"
    },
    {
      nombre: "Estado de Palestina",
      code: "PS"
    },
    {
      nombre: "Sudán",
      code: "SD"
    },
    {
      nombre: "Surinam",
      code: "SR"
    },
    {
      nombre: "Svalbard y Jan Mayen",
      code: "SJ"
    },
    {
      nombre: "Suazilandia",
      code: "SZ"
    },
    {
      nombre: "Suecia",
      code: "SE"
    },
    {
      nombre: "Suiza",
      code: "CH"
    },
    {
      nombre: "Siria",
      code: "SY"
    },
    {
      nombre: "Taiwán",
      code: "TW"
    },
    {
      nombre: "Tayikistán",
      code: "TJ"
    },
    {
      nombre: "Tanzania",
      code: "TZ"
    },
    {
      nombre: "Tailandia",
      code: "TH"
    },
    {
      nombre: "Timor Oriental",
      code: "TL"
    },
    {
      nombre: "Togo",
      code: "TG"
    },
    {
      nombre: "Tokelau",
      code: "TK"
    },
    {
      nombre: "Tonga",
      code: "TO"
    },
    {
      nombre: "Trinidad y Tobago",
      code: "TT"
    },
    {
      nombre: "Túnez",
      code: "TN"
    },
    {
      nombre: "Turquía",
      code: "TR"
    },
    {
      nombre: "Turkmenistán",
      code: "TM"
    },
    {
      nombre: "Islas Turcas y Caicos",
      code: "TC"
    },
    {
      nombre: "Tuvalu",
      code: "TV"
    },
    {
      nombre: "Uganda",
      code: "UG"
    },
    {
      nombre: "Ucrania",
      code: "UA"
    },
    {
      nombre: "Emiratos Árabes Unidos",
      code: "AE"
    },
    {
      nombre: "Reino Unido",
      code: "GB"
    },
    {
      nombre: "Estados Unidos",
      code: "US"
    },
    {
      nombre: "Uruguay",
      code: "UY"
    },
    {
      nombre: "Uzbekistán",
      code: "UZ"
    },
    {
      nombre: "Vanuatu",
      code: "VU"
    },
    {

      nombre: "Venezuela",
      code: "VE"
    },
    {
      nombre: "Vietnam",
      code: "VN"
    },
    {
      nombre: "Islas Vírgenes Británicas",
      code: "VG"
    },
    {
      nombre: "Islas Vírgenes de los Estados Unidos",
      code: "VI"
    },
    {
      nombre: "Wallis y Futuna",
      code: "WF"
    },
    {
      nombre: "Yemen",
      code: "YE"
    },
    {
      nombre: "Zambia",
      code: "ZM"
    },
    {
      nombre: "Zimbabue",
      code: "ZW"
    },
    {
      nombre: "Åland",
      code: "AX"
    }
  ]

  constructor() { }

  getAllPaises(){
    return this.paises
  }
 
}

