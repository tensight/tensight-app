// export type CountryList 

export interface Country {
  latitude: number;
  longitude: number;
  name: string;
  flag: string; 
}

export interface CountryList {
  [id: string]: Country
}

export const countries: CountryList = {
  "AD": {
    "latitude": 42.546245,
    "longitude": 1.601554,
    "name": "Andorra",
    "flag": "🇦🇩"
  },
  "AE": {
    "latitude": 23.424076,
    "longitude": 53.847818,
    "name": "United Arab Emirates",
    "flag": "🇦🇪"
  },
  "AF": {
    "latitude": 33.93911,
    "longitude": 67.709953,
    "name": "Afghanistan",
    "flag": "🇦🇫"
  },
  "AG": {
    "latitude": 17.060816,
    "longitude": -61.796428,
    "name": "Antigua and Barbuda",
    "flag": "🇦🇬"
  },
  "AI": {
    "latitude": 18.220554,
    "longitude": -63.068615,
    "name": "Anguilla",
    "flag": "🇦🇮"
  },
  "AL": {
    "latitude": 41.153332,
    "longitude": 20.168331,
    "name": "Albania",
    "flag": "🇦🇱"
  },
  "AM": {
    "latitude": 40.069099,
    "longitude": 45.038189,
    "name": "Armenia",
    "flag": "🇦🇲"
  },
  "AN": {
    "latitude": 12.226079,
    "longitude": -69.060087,
    "name": "Netherlands Antilles",
    "flag": "🇧🇶"
  },
  "AO": {
    "latitude": -11.202692,
    "longitude": 17.873887,
    "name": "Angola",
    "flag": "🇦🇴"
  },
  "AQ": {
    "latitude": -75.250973,
    "longitude": -0.071389,
    "name": "Antarctica",
    "flag": "🇦🇶"
  },
  "AR": {
    "latitude": -38.416097,
    "longitude": -63.616672,
    "name": "Argentina",
    "flag": "🇦🇷"
  },
  "AS": {
    "latitude": -14.270972,
    "longitude": -170.132217,
    "name": "American Samoa",
    "flag": "🇦🇸"
  },
  "AT": {
    "latitude": 47.516231,
    "longitude": 14.550072,
    "name": "Austria",
    "flag": "🇦🇹"
  },
  "AU": {
    "latitude": -25.274398,
    "longitude": 133.775136,
    "name": "Australia",
    "flag": "🇦🇺"
  },
  "AW": {
    "latitude": 12.52111,
    "longitude": -69.968338,
    "name": "Aruba",
    "flag": "🇦🇼"
  },
  "AZ": {
    "latitude": 40.143105,
    "longitude": 47.576927,
    "name": "Azerbaijan",
    "flag": "🇦🇿"
  },
  "BA": {
    "latitude": 43.915886,
    "longitude": 17.679076,
    "name": "Bosnia and Herzegovina",
    "flag": "🇧🇦"
  },
  "BB": {
    "latitude": 13.193887,
    "longitude": -59.543198,
    "name": "Barbados",
    "flag": "🇧🇧"
  },
  "BD": {
    "latitude": 23.684994,
    "longitude": 90.356331,
    "name": "Bangladesh",
    "flag": "🇧🇩"
  },
  "BE": {
    "latitude": 50.503887,
    "longitude": 4.469936,
    "name": "Belgium",
    "flag": "🇧🇪",
  },
  "BF": {
    "latitude": 12.238333,
    "longitude": -1.561593,
    "name": "Burkina Faso",
    "flag": "🇧🇫"
  },
  "BG": {
    "latitude": 42.733883,
    "longitude": 25.48583,
    "name": "Bulgaria",
    "flag": "🇧🇬"
  },
  "BH": {
    "latitude": 25.930414,
    "longitude": 50.637772,
    "name": "Bahrain",
    "flag": "🇧🇭"
  },
  "BI": {
    "latitude": -3.373056,
    "longitude": 29.918886,
    "name": "Burundi",
    "flag": "🇧🇮"
  },
  "BJ": {
    "latitude": 9.30769,
    "longitude": 2.315834,
    "name": "Benin",
    "flag": "🇧🇯"
  },
  "BM": {
    "latitude": 32.321384,
    "longitude": -64.75737,
    "name": "Bermuda",
    "flag": "🇧🇲"
  },
  "BN": {
    "latitude": 4.535277,
    "longitude": 114.727669,
    "name": "Brunei",
    "flag": "🇧🇳"
  },
  "BO": {
    "latitude": -16.290154,
    "longitude": -63.588653,
    "name": "Bolivia",
    "flag": "🇧🇴"
  },
  "BR": {
    "latitude": -14.235004,
    "longitude": -51.92528,
    "name": "Brazil",
    "flag": "🇧🇷"
  },
  "BS": {
    "latitude": 25.03428,
    "longitude": -77.39628,
    "name": "Bahamas",
    "flag": "🇧🇸"
  },
  "BT": {
    "latitude": 27.514162,
    "longitude": 90.433601,
    "name": "Bhutan",
    "flag": "🇧🇹"
  },
  "BV": {
    "latitude": -54.423199,
    "longitude": 3.413194,
    "name": "Bouvet Island",
    "flag": "🇧🇻"
  },
  "BW": {
    "latitude": -22.328474,
    "longitude": 24.684866,
    "name": "Botswana",
    "flag": "🇧🇼"
  },
  "BY": {
    "latitude": 53.709807,
    "longitude": 27.953389,
    "name": "Belarus",
    "flag": "🇧🇾"
  },
  "BZ": {
    "latitude": 17.189877,
    "longitude": -88.49765,
    "name": "Belize",
    "flag": "🇧🇿"
  },
  "CA": {
    "latitude": 56.130366,
    "longitude": -106.346771,
    "name": "Canada",
    "flag": "🇨🇦"
  },
  "CC": {
    "latitude": -12.164165,
    "longitude": 96.870956,
    "name": "Cocos [Keeling] Islands",
    "flag": "🇨🇨"
  },
  "CD": {
    "latitude": -4.038333,
    "longitude": 21.758664,
    "name": "Congo [DRC]",
    "flag": "🇨🇩"
  },
  "CF": {
    "latitude": 6.611111,
    "longitude": 20.939444,
    "name": "Central African Republic",
    "flag": "🇨🇫"
  },
  "CG": {
    "latitude": -0.228021,
    "longitude": 15.827659,
    "name": "Congo [Republic]",
    "flag": "🇨🇬"
  },
  "CH": {
    "latitude": 46.818188,
    "longitude": 8.227512,
    "name": "Switzerland",
    "flag": "🇨🇭"
  },
  "CI": {
    "latitude": 7.539989,
    "longitude": -5.54708,
    "name": "Côte d'Ivoire",
    "flag": "🇨🇮"
  },
  "CK": {
    "latitude": -21.236736,
    "longitude": -159.777671,
    "name": "Cook Islands",
    "flag": "🇨🇰"
  },
  "CL": {
    "latitude": -35.675147,
    "longitude": -71.542969,
    "name": "Chile",
    "flag": "🇨🇱"
  },
  "CM": {
    "latitude": 7.369722,
    "longitude": 12.354722,
    "name": "Cameroon",
    "flag": "🇨🇲"
  },
  "CN": {
    "latitude": 35.86166,
    "longitude": 104.195397,
    "name": "China",
    "flag": "🇨🇳"
  },
  "CO": {
    "latitude": 4.570868,
    "longitude": -74.297333,
    "name": "Colombia",
    "flag": "🇨🇴"
  },
  "CR": {
    "latitude": 9.748917,
    "longitude": -83.753428,
    "name": "Costa Rica",
    "flag": "🇨🇷"
  },
  "CU": {
    "latitude": 21.521757,
    "longitude": -77.781167,
    "name": "Cuba",
    "flag": "🇨🇺"
  },
  "CV": {
    "latitude": 16.002082,
    "longitude": -24.013197,
    "name": "Cape Verde",
    "flag": "🇨🇻"
  },
  "CX": {
    "latitude": -10.447525,
    "longitude": 105.690449,
    "name": "Christmas Island",
    "flag": "🇨🇽"
  },
  "CY": {
    "latitude": 35.126413,
    "longitude": 33.429859,
    "name": "Cyprus",
    "flag": "🇨🇾"
  },
  "CZ": {
    "latitude": 49.817492,
    "longitude": 15.472962,
    "name": "Czech Republic",
    "flag": "🇨🇿"
  },
  "DE": {
    "latitude": 51.165691,
    "longitude": 10.451526,
    "name": "Germany",
    "flag": "🇩🇪"
  },
  "DJ": {
    "latitude": 11.825138,
    "longitude": 42.590275,
    "name": "Djibouti",
    "flag": "🇩🇯"
  },
  "DK": {
    "latitude": 56.26392,
    "longitude": 9.501785,
    "name": "Denmark",
    "flag": "🇩🇰"
  },
  "DM": {
    "latitude": 15.414999,
    "longitude": -61.370976,
    "name": "Dominica",
    "flag": "🇩🇲"
  },
  "DO": {
    "latitude": 18.735693,
    "longitude": -70.162651,
    "name": "Dominican Republic",
    "flag": "🇩🇴"
  },
  "DZ": {
    "latitude": 28.033886,
    "longitude": 1.659626,
    "name": "Algeria",
    "flag": "🇩🇿"
  },
  "EC": {
    "latitude": -1.831239,
    "longitude": -78.183406,
    "name": "Ecuador",
    "flag": "🇪🇨"
  },
  "EE": {
    "latitude": 58.595272,
    "longitude": 25.013607,
    "name": "Estonia",
    "flag": "🇪🇪"
  },
  "EG": {
    "latitude": 26.820553,
    "longitude": 30.802498,
    "name": "Egypt",
    "flag": "🇪🇬"
  },
  "EH": {
    "latitude": 24.215527,
    "longitude": -12.885834,
    "name": "Western Sahara",
    "flag": "🇪🇭"
  },
  "ER": {
    "latitude": 15.179384,
    "longitude": 39.782334,
    "name": "Eritrea",
    "flag": "🇪🇷"
  },
  "ES": {
    "latitude": 40.463667,
    "longitude": -3.74922,
    "name": "Spain",
    "flag": "🇪🇸"
  },
  "ET": {
    "latitude": 9.145,
    "longitude": 40.489673,
    "name": "Ethiopia",
    "flag": "🇪🇹"
  },
  "FI": {
    "latitude": 61.92411,
    "longitude": 25.748151,
    "name": "Finland",
    "flag": "🇫🇮"
  },
  "FJ": {
    "latitude": -16.578193,
    "longitude": 179.414413,
    "name": "Fiji",
    "flag": "🇫🇯"
  },
  "FK": {
    "latitude": -51.796253,
    "longitude": -59.523613,
    "name": "Falkland Islands [Islas Malvinas]",
    "flag": "🇫🇰"
  },
  "FM": {
    "latitude": 7.425554,
    "longitude": 150.550812,
    "name": "Micronesia",
    "flag": "🇫🇲"
  },
  "FO": {
    "latitude": 61.892635,
    "longitude": -6.911806,
    "name": "Faroe Islands",
    "flag": "🇫🇴"
  },
  "FR": {
    "latitude": 46.227638,
    "longitude": 2.213749,
    "name": "France",
    "flag": "🇫🇷"
  },
  "GA": {
    "latitude": -0.803689,
    "longitude": 11.609444,
    "name": "Gabon",
    "flag": "🇬🇦"
  },
  "GB": {
    "latitude": 55.378051,
    "longitude": -3.435973,
    "name": "United Kingdom",
    "flag": "🇬🇧"
  },
  "GD": {
    "latitude": 12.262776,
    "longitude": -61.604171,
    "name": "Grenada",
    "flag": "🇬🇩"
  },
  "GE": {
    "latitude": 42.315407,
    "longitude": 43.356892,
    "name": "Georgia",
    "flag": "🇬🇪"
  },
  "GF": {
    "latitude": 3.933889,
    "longitude": -53.125782,
    "name": "French Guiana",
    "flag": "🇬🇫"
  },
  "GG": {
    "latitude": 49.465691,
    "longitude": -2.585278,
    "name": "Guernsey",
    "flag": "🇬🇬"
  },
  "GH": {
    "latitude": 7.946527,
    "longitude": -1.023194,
    "name": "Ghana",
    "flag": "🇬🇭"
  },
  "GI": {
    "latitude": 36.137741,
    "longitude": -5.345374,
    "name": "Gibraltar",
    "flag": "🇬🇮"
  },
  "GL": {
    "latitude": 71.706936,
    "longitude": -42.604303,
    "name": "Greenland",
    "flag": "🇬🇱"
  },
  "GM": {
    "latitude": 13.443182,
    "longitude": -15.310139,
    "name": "Gambia",
    "flag": "🇬🇲"
  },
  "GN": {
    "latitude": 9.945587,
    "longitude": -9.696645,
    "name": "Guinea",
    "flag": "🇬🇳"
  },
  "GP": {
    "latitude": 16.995971,
    "longitude": -62.067641,
    "name": "Guadeloupe",
    "flag": "🇬🇵"
  },
  "GQ": {
    "latitude": 1.650801,
    "longitude": 10.267895,
    "name": "Equatorial Guinea",
    "flag": "🇬🇶"
  },
  "GR": {
    "latitude": 39.074208,
    "longitude": 21.824312,
    "name": "Greece",
    "flag": "🇬🇷"
  },
  "GS": {
    "latitude": -54.429579,
    "longitude": -36.587909,
    "name": "South Georgia and the South Sandwich Islands",
    "flag": "🇬🇸"
  },
  "GT": {
    "latitude": 15.783471,
    "longitude": -90.230759,
    "name": "Guatemala",
    "flag": "🇬🇹"
  },
  "GU": {
    "latitude": 13.444304,
    "longitude": 144.793731,
    "name": "Guam",
    "flag": "🇬🇺"
  },
  "GW": {
    "latitude": 11.803749,
    "longitude": -15.180413,
    "name": "Guinea-Bissau",
    "flag": "🇬🇼"
  },
  "GY": {
    "latitude": 4.860416,
    "longitude": -58.93018,
    "name": "Guyana",
    "flag": "🇬🇾"
  },
  "GZ": {
    "latitude": 31.354676,
    "longitude": 34.308825,
    "name": "Gaza Strip",
    "flag": ""
  },
  "HK": {
    "latitude": 22.396428,
    "longitude": 114.109497,
    "name": "Hong Kong",
    "flag": "🇭🇰"
  },
  "HM": {
    "latitude": -53.08181,
    "longitude": 73.504158,
    "name": "Heard Island and McDonald Islands",
    "flag": "🇭🇲"
  },
  "HN": {
    "latitude": 15.199999,
    "longitude": -86.241905,
    "name": "Honduras",
    "flag": "🇭🇳"
  },
  "HR": {
    "latitude": 45.1,
    "longitude": 15.2,
    "name": "Croatia",
    "flag": "🇭🇷"
  },
  "HT": {
    "latitude": 18.971187,
    "longitude": -72.285215,
    "name": "Haiti",
    "flag": "🇭🇹"
  },
  "HU": {
    "latitude": 47.162494,
    "longitude": 19.503304,
    "name": "Hungary",
    "flag": "🇭🇺"
  },
  "ID": {
    "latitude": -0.789275,
    "longitude": 113.921327,
    "name": "Indonesia",
    "flag": "🇮🇩"
  },
  "IE": {
    "latitude": 53.41291,
    "longitude": -8.24389,
    "name": "Ireland",
    "flag": "🇮🇪"
  },
  "IL": {
    "latitude": 31.046051,
    "longitude": 34.851612,
    "name": "Israel",
    "flag": "🇮🇱"
  },
  "IM": {
    "latitude": 54.236107,
    "longitude": -4.548056,
    "name": "Isle of Man",
    "flag": "🇮🇲"
  },
  "IN": {
    "latitude": 20.593684,
    "longitude": 78.96288,
    "name": "India",
    "flag": "🇮🇳"
  },
  "IO": {
    "latitude": -6.343194,
    "longitude": 71.876519,
    "name": "British Indian Ocean Territory",
    "flag": "🇮🇴"
  },
  "IQ": {
    "latitude": 33.223191,
    "longitude": 43.679291,
    "name": "Iraq",
    "flag": "🇮🇶"
  },
  "IR": {
    "latitude": 32.427908,
    "longitude": 53.688046,
    "name": "Iran",
    "flag": "🇮🇷"
  },
  "IS": {
    "latitude": 64.963051,
    "longitude": -19.020835,
    "name": "Iceland",
    "flag": "🇮🇸"
  },
  "IT": {
    "latitude": 41.87194,
    "longitude": 12.56738,
    "name": "Italy",
    "flag": "🇮🇹"
  },
  "JE": {
    "latitude": 49.214439,
    "longitude": -2.13125,
    "name": "Jersey",
    "flag": "🇯🇪"
  },
  "JM": {
    "latitude": 18.109581,
    "longitude": -77.297508,
    "name": "Jamaica",
    "flag": "🇯🇲"
  },
  "JO": {
    "latitude": 30.585164,
    "longitude": 36.238414,
    "name": "Jordan",
    "flag": "🇯🇴"
  },
  "JP": {
    "latitude": 36.204824,
    "longitude": 138.252924,
    "name": "Japan",
    "flag": "🇯🇵"
  },
  "KE": {
    "latitude": -0.023559,
    "longitude": 37.906193,
    "name": "Kenya",
    "flag": "🇰🇪"
  },
  "KG": {
    "latitude": 41.20438,
    "longitude": 74.766098,
    "name": "Kyrgyzstan",
    "flag": "🇰🇬"
  },
  "KH": {
    "latitude": 12.565679,
    "longitude": 104.990963,
    "name": "Cambodia",
    "flag": "🇰🇭"
  },
  "KI": {
    "latitude": -3.370417,
    "longitude": -168.734039,
    "name": "Kiribati",
    "flag": "🇰🇮"
  },
  "KM": {
    "latitude": -11.875001,
    "longitude": 43.872219,
    "name": "Comoros",
    "flag": "🇰🇲"
  },
  "KN": {
    "latitude": 17.357822,
    "longitude": -62.782998,
    "name": "Saint Kitts and Nevis",
    "flag": "🇰🇳"
  },
  "KP": {
    "latitude": 40.339852,
    "longitude": 127.510093,
    "name": "North Korea",
    "flag": "🇰🇵"
  },
  "KR": {
    "latitude": 35.907757,
    "longitude": 127.766922,
    "name": "South Korea",
    "flag": "🇰🇷"
  },
  "KW": {
    "latitude": 29.31166,
    "longitude": 47.481766,
    "name": "Kuwait",
    "flag": "🇰🇼"
  },
  "KY": {
    "latitude": 19.513469,
    "longitude": -80.566956,
    "name": "Cayman Islands",
    "flag": "🇰🇾"
  },
  "KZ": {
    "latitude": 48.019573,
    "longitude": 66.923684,
    "name": "Kazakhstan",
    "flag": "🇰🇿"
  },
  "LA": {
    "latitude": 19.85627,
    "longitude": 102.495496,
    "name": "Laos",
    "flag": "🇱🇦"
  },
  "LB": {
    "latitude": 33.854721,
    "longitude": 35.862285,
    "name": "Lebanon",
    "flag": "🇱🇧"
  },
  "LC": {
    "latitude": 13.909444,
    "longitude": -60.978893,
    "name": "Saint Lucia",
    "flag": "🇱🇨"
  },
  "LI": {
    "latitude": 47.166,
    "longitude": 9.555373,
    "name": "Liechtenstein",
    "flag": "🇱🇮"
  },
  "LK": {
    "latitude": 7.873054,
    "longitude": 80.771797,
    "name": "Sri Lanka",
    "flag": "🇱🇰"
  },
  "LR": {
    "latitude": 6.428055,
    "longitude": -9.429499,
    "name": "Liberia",
    "flag": "🇱🇷"
  },
  "LS": {
    "latitude": -29.609988,
    "longitude": 28.233608,
    "name": "Lesotho",
    "flag": "🇱🇸"
  },
  "LT": {
    "latitude": 55.169438,
    "longitude": 23.881275,
    "name": "Lithuania",
    "flag": "🇱🇹"
  },
  "LU": {
    "latitude": 49.815273,
    "longitude": 6.129583,
    "name": "Luxembourg",
    "flag": "🇱🇺"
  },
  "LV": {
    "latitude": 56.879635,
    "longitude": 24.603189,
    "name": "Latvia",
    "flag": "🇱🇻"
  },
  "LY": {
    "latitude": 26.3351,
    "longitude": 17.228331,
    "name": "Libya",
    "flag": "🇱🇾"
  },
  "MA": {
    "latitude": 31.791702,
    "longitude": -7.09262,
    "name": "Morocco",
    "flag": "🇲🇦"
  },
  "MC": {
    "latitude": 43.750298,
    "longitude": 7.412841,
    "name": "Monaco", 
    "flag": "🇲🇨"
  },
  "MD": {
    "latitude": 47.411631,
    "longitude": 28.369885,
    "name": "Moldova",
    "flag": "🇲🇩"
  },
  "ME": {
    "latitude": 42.708678,
    "longitude": 19.37439,
    "name": "Montenegro",
    "flag": "🇲🇪"
  },
  "MG": {
    "latitude": -18.766947,
    "longitude": 46.869107,
    "name": "Madagascar",
    "flag": "🇲🇬"
  },
  "MH": {
    "latitude": 7.131474,
    "longitude": 171.184478,
    "name": "Marshall Islands",
    "flag": "🇲🇭"
  },
  "MK": {
    "latitude": 41.608635,
    "longitude": 21.745275,
    "name": "Macedonia [FYROM]",
    "flag": "🇲🇰"
  },
  "ML": {
    "latitude": 17.570692,
    "longitude": -3.996166,
    "name": "Mali",
    "flag": "🇲🇱"
  },
  "MM": {
    "latitude": 21.913965,
    "longitude": 95.956223,
    "name": "Myanmar [Burma]",
    "flag": "🇲🇲"
  },
  "MN": {
    "latitude": 46.862496,
    "longitude": 103.846656,
    "name": "Mongolia",
    "flag": "🇲🇳"
  },
  "MO": {
    "latitude": 22.198745,
    "longitude": 113.543873,
    "name": "Macau",
    "flag": "🇲🇴"
  },
  "MP": {
    "latitude": 17.33083,
    "longitude": 145.38469,
    "name": "Northern Mariana Islands",
    "flag": "🇲🇵"
  },
  "MQ": {
    "latitude": 14.641528,
    "longitude": -61.024174,
    "name": "Martinique",
    "flag": "🇲🇶"
  },
  "MR": {
    "latitude": 21.00789,
    "longitude": -10.940835,
    "name": "Mauritania",
    "flag": "🇲🇷"
  },
  "MS": {
    "latitude": 16.742498,
    "longitude": -62.187366,
    "name": "Montserrat",
    "flag": "🇲🇸"
  },
  "MT": {
    "latitude": 35.937496,
    "longitude": 14.375416,
    "name": "Malta",
    "flag": "🇲🇹"
  },
  "MU": {
    "latitude": -20.348404,
    "longitude": 57.552152,
    "name": "Mauritius",
    "flag": "🇲🇺"
  },
  "MV": {
    "latitude": 3.202778,
    "longitude": 73.22068,
    "name": "Maldives",
    "flag": "🇲🇻"
  },
  "MW": {
    "latitude": -13.254308,
    "longitude": 34.301525,
    "name": "Malawi",
    "flag": "🇲🇼"
  },
  "MX": {
    "latitude": 23.634501,
    "longitude": -102.552784,
    "name": "Mexico",
    "flag": "🇲🇽"
  },
  "MY": {
    "latitude": 4.210484,
    "longitude": 101.975766,
    "name": "Malaysia",
    "flag": "🇲🇾"
  },
  "MZ": {
    "latitude": -18.665695,
    "longitude": 35.529562,
    "name": "Mozambique",
    "flag": "🇲🇿"
  },
  "NA": {
    "latitude": -22.95764,
    "longitude": 18.49041,
    "name": "Namibia",
    "flag": "🇳🇦"
  },
  "NC": {
    "latitude": -20.904305,
    "longitude": 165.618042,
    "name": "New Caledonia",
    "flag": "🇳🇨"
  },
  "NE": {
    "latitude": 17.607789,
    "longitude": 8.081666,
    "name": "Niger",
    "flag": "🇳🇪"
  },
  "NF": {
    "latitude": -29.040835,
    "longitude": 167.954712,
    "name": "Norfolk Island",
    "flag": "🇳🇫"
  },
  "NG": {
    "latitude": 9.081999,
    "longitude": 8.675277,
    "name": "Nigeria",
    "flag": "🇳🇬"
  },
  "NI": {
    "latitude": 12.865416,
    "longitude": -85.207229,
    "name": "Nicaragua",
    "flag": "🇳🇮"
  },
  "NL": {
    "latitude": 52.132633,
    "longitude": 5.291266,
    "name": "Netherlands",
    "flag": "🇳🇱"
  },
  "NO": {
    "latitude": 60.472024,
    "longitude": 8.468946,
    "name": "Norway",
    "flag": "🇧🇻"
  },
  "NP": {
    "latitude": 28.394857,
    "longitude": 84.124008,
    "name": "Nepal",
    "flag": "🇳🇵"
  },
  "NR": {
    "latitude": -0.522778,
    "longitude": 166.931503,
    "name": "Nauru",
    "flag": "🇳🇷"
  },
  "NU": {
    "latitude": -19.054445,
    "longitude": -169.867233,
    "name": "Niue",
    "flag": "🇳🇺"
  },
  "NZ": {
    "latitude": -40.900557,
    "longitude": 174.885971,
    "name": "New Zealand",
    "flag": "🇳🇿"
  },
  "OM": {
    "latitude": 21.512583,
    "longitude": 55.923255,
    "name": "Oman",
    "flag": "🇴🇲"
  },
  "PA": {
    "latitude": 8.537981,
    "longitude": -80.782127,
    "name": "Panama",
    "flag": "🇵🇦"
  },
  "PE": {
    "latitude": -9.189967,
    "longitude": -75.015152,
    "name": "Peru",
    "flag": "🇵🇪"
  },
  "PF": {
    "latitude": -17.679742,
    "longitude": -149.406843,
    "name": "French Polynesia",
    "flag": "🇵🇫"
  },
  "PG": {
    "latitude": -6.314993,
    "longitude": 143.95555,
    "name": "Papua New Guinea",
    "flag": "🇵🇬"
  },
  "PH": {
    "latitude": 12.879721,
    "longitude": 121.774017,
    "name": "Philippines",
    "flag": "🇵🇭"
  },
  "PK": {
    "latitude": 30.375321,
    "longitude": 69.345116,
    "name": "Pakistan",
    "flag": "🇵🇰"
  },
  "PL": {
    "latitude": 51.919438,
    "longitude": 19.145136,
    "name": "Poland",
    "flag": "🇵🇱"
  },
  "PM": {
    "latitude": 46.941936,
    "longitude": -56.27111,
    "name": "Saint Pierre and Miquelon",
    "flag": "🇵🇲"
  },
  "PN": {
    "latitude": -24.703615,
    "longitude": -127.439308,
    "name": "Pitcairn Islands",
    "flag": "🇵🇳"
  },
  "PR": {
    "latitude": 18.220833,
    "longitude": -66.590149,
    "name": "Puerto Rico",
    "flag": "🇵🇷"
  },
  "PS": {
    "latitude": 31.952162,
    "longitude": 35.233154,
    "name": "Palestinian Territories",
    "flag": "🇵🇸"
  },
  "PT": {
    "latitude": 39.399872,
    "longitude": -8.224454,
    "name": "Portugal",
    "flag": "🇵🇹"
  },
  "PW": {
    "latitude": 7.51498,
    "longitude": 134.58252,
    "name": "Palau",
    "flag": "🇵🇼"
  },
  "PY": {
    "latitude": -23.442503,
    "longitude": -58.443832,
    "name": "Paraguay",
    "flag": "🇵🇾"
  },
  "QA": {
    "latitude": 25.354826,
    "longitude": 51.183884,
    "name": "Qatar",
    "flag": "🇶🇦"
  },
  "RE": {
    "latitude": -21.115141,
    "longitude": 55.536384,
    "name": "Réunion",
    "flag": "🇷🇪"
  },
  "RO": {
    "latitude": 45.943161,
    "longitude": 24.96676,
    "name": "Romania",
    "flag": "🇷🇴"
  },
  "RS": {
    "latitude": 44.016521,
    "longitude": 21.005859,
    "name": "Serbia",
    "flag": "🇷🇸"
  },
  "RU": {
    "latitude": 61.52401,
    "longitude": 105.318756,
    "name": "Russia",
    "flag": "🇷🇺"
  },
  "RW": {
    "latitude": -1.940278,
    "longitude": 29.873888,
    "name": "Rwanda",
    "flag": "🇷🇼"
  },
  "SA": {
    "latitude": 23.885942,
    "longitude": 45.079162,
    "name": "Saudi Arabia",
    "flag": "🇸🇦"
  },
  "SB": {
    "latitude": -9.64571,
    "longitude": 160.156194,
    "name": "Solomon Islands",
    "flag": "🇸🇧"
  },
  "SC": {
    "latitude": -4.679574,
    "longitude": 55.491977,
    "name": "Seychelles",
    "flag": "🇸🇨"
  },
  "SD": {
    "latitude": 12.862807,
    "longitude": 30.217636,
    "name": "Sudan",
    "flag": "🇸🇩"
  },
  "SE": {
    "latitude": 60.128161,
    "longitude": 18.643501,
    "name": "Sweden",
    "flag": "🇸🇪"
  },
  "SG": {
    "latitude": 1.352083,
    "longitude": 103.819836,
    "name": "Singapore",
    "flag": "🇸🇬"
  },
  "SH": {
    "latitude": -24.143474,
    "longitude": -10.030696,
    "name": "Saint Helena",
    "flag": "🇸🇭"
  },
  "SI": {
    "latitude": 46.151241,
    "longitude": 14.995463,
    "name": "Slovenia",
    "flag": "🇸🇮"
  },
  "SJ": {
    "latitude": 77.553604,
    "longitude": 23.670272,
    "name": "Svalbard and Jan Mayen",
    "flag": "🇳🇴"
  },
  "SK": {
    "latitude": 48.669026,
    "longitude": 19.699024,
    "name": "Slovakia",
    "flag": "🇸🇰"
  },
  "SL": {
    "latitude": 8.460555,
    "longitude": -11.779889,
    "name": "Sierra Leone",
    "flag": "🇸🇱"
  },
  "SM": {
    "latitude": 43.94236,
    "longitude": 12.457777,
    "name": "San Marino",
    "flag": "🇸🇲"
  },
  "SN": {
    "latitude": 14.497401,
    "longitude": -14.452362,
    "name": "Senegal",
    "flag": "🇸🇳"
  },
  "SO": {
    "latitude": 5.152149,
    "longitude": 46.199616,
    "name": "Somalia",
    "flag": "🇸🇴"
  },
  "SR": {
    "latitude": 3.919305,
    "longitude": -56.027783,
    "name": "Suriname",
    "flag": "🇸🇷"
  },
  "ST": {
    "latitude": 0.18636,
    "longitude": 6.613081,
    "name": "São Tomé and Príncipe",
    "flag": "🇸🇹"
  },
  "SV": {
    "latitude": 13.794185,
    "longitude": -88.89653,
    "name": "El Salvador",
    "flag": "🇸🇻"
  },
  "SY": {
    "latitude": 34.802075,
    "longitude": 38.996815,
    "name": "Syria",
    "flag": "🇸🇾"
  },
  "SZ": {
    "latitude": -26.522503,
    "longitude": 31.465866,
    "name": "Swaziland",
    "flag": "🇸🇿"
  },
  "TC": {
    "latitude": 21.694025,
    "longitude": -71.797928,
    "name": "Turks and Caicos Islands",
    "flag": "🇹🇨"
  },
  "TD": {
    "latitude": 15.454166,
    "longitude": 18.732207,
    "name": "Chad",
    "flag": "🇹🇩"
  },
  "TF": {
    "latitude": -49.280366,
    "longitude": 69.348557,
    "name": "French Southern Territories",
    "flag": "🇹🇫"
  },
  "TG": {
    "latitude": 8.619543,
    "longitude": 0.824782,
    "name": "Togo",
    "flag": "🇹🇬"
  },
  "TH": {
    "latitude": 15.870032,
    "longitude": 100.992541,
    "name": "Thailand",
    "flag": "🇹🇭"
  },
  "TJ": {
    "latitude": 38.861034,
    "longitude": 71.276093,
    "name": "Tajikistan",
    "flag": "🇹🇯"
  },
  "TK": {
    "latitude": -8.967363,
    "longitude": -171.855881,
    "name": "Tokelau",
    "flag": "🇹🇰"
  },
  "TL": {
    "latitude": -8.874217,
    "longitude": 125.727539,
    "name": "Timor-Leste",
    "flag": "🇹🇱"
  },
  "TM": {
    "latitude": 38.969719,
    "longitude": 59.556278,
    "name": "Turkmenistan",
    "flag": "🇹🇲"
  },
  "TN": {
    "latitude": 33.886917,
    "longitude": 9.537499,
    "name": "Tunisia",
    "flag": "🇹🇳"
  },
  "TO": {
    "latitude": -21.178986,
    "longitude": -175.198242,
    "name": "Tonga",
    "flag": "🇹🇴"
  },
  "TR": {
    "latitude": 38.963745,
    "longitude": 35.243322,
    "name": "Turkey",
    "flag": "🇹🇷"
  },
  "TT": {
    "latitude": 10.691803,
    "longitude": -61.222503,
    "name": "Trinidad and Tobago",
    "flag": "🇹🇹"
  },
  "TV": {
    "latitude": -7.109535,
    "longitude": 177.64933,
    "name": "Tuvalu",
    "flag": "🇹🇻"
  },
  "TW": {
    "latitude": 23.69781,
    "longitude": 120.960515,
    "name": "Taiwan",
    "flag": "🇹🇼"
  },
  "TZ": {
    "latitude": -6.369028,
    "longitude": 34.888822,
    "name": "Tanzania",
    "flag": "🇹🇿"
  },
  "UA": {
    "latitude": 48.379433,
    "longitude": 31.16558,
    "name": "Ukraine",
    "flag": "🇺🇦"
  },
  "UG": {
    "latitude": 1.373333,
    "longitude": 32.290275,
    "name": "Uganda",
    "flag": "🇺🇬"
  },
  "UM": {
    "latitude": null,
    "longitude": null,
    "name": "U.S. Minor Outlying Islands",
    "flag": "🇺🇸"
  },
  "US": {
    "latitude": 37.09024,
    "longitude": -95.712891,
    "name": "United States",
    "flag": "🇺🇸"
  },
  "UY": {
    "latitude": -32.522779,
    "longitude": -55.765835,
    "name": "Uruguay",
    "flag": "🇺🇾"
  },
  "UZ": {
    "latitude": 41.377491,
    "longitude": 64.585262,
    "name": "Uzbekistan",
    "flag": "🇺🇿"
  },
  "VA": {
    "latitude": 41.902916,
    "longitude": 12.453389,
    "name": "Vatican City",
    "flag": "🇻🇦"
  },
  "VC": {
    "latitude": 12.984305,
    "longitude": -61.287228,
    "name": "Saint Vincent and the Grenadines",
    "flag": "🇻🇨"
  },
  "VE": {
    "latitude": 6.42375,
    "longitude": -66.58973,
    "name": "Venezuela",
    "flag": "🇻🇪"
  },
  "VG": {
    "latitude": 18.420695,
    "longitude": -64.639968,
    "name": "British Virgin Islands",
    "flag": "🇻🇬"
  },
  "VI": {
    "latitude": 18.335765,
    "longitude": -64.896335,
    "name": "U.S. Virgin Islands",
    "flag": "🇻🇮"
  },
  "VN": {
    "latitude": 14.058324,
    "longitude": 108.277199,
    "name": "Vietnam",
    "flag": "🇻🇳"
  },
  "VU": {
    "latitude": -15.376706,
    "longitude": 166.959158,
    "name": "Vanuatu",
    "flag": "🇻🇺"
  },
  "WF": {
    "latitude": -13.768752,
    "longitude": -177.156097,
    "name": "Wallis and Futuna",
    "flag": "🇼🇫"
  },
  "WS": {
    "latitude": -13.759029,
    "longitude": -172.104629,
    "name": "Samoa",
    "flag": "🇼🇸"
  },
  "XK": {
    "latitude": 42.602636,
    "longitude": 20.902977,
    "name": "Kosovo",
    "flag": "🇽🇰"
  },
  "YE": {
    "latitude": 15.552727,
    "longitude": 48.516388,
    "name": "Yemen",
    "flag": "🇾🇪"
  },
  "YT": {
    "latitude": -12.8275,
    "longitude": 45.166244,
    "name": "Mayotte",
    "flag": "🇾🇹"
  },
  "ZA": {
    "latitude": -30.559482,
    "longitude": 22.937506,
    "name": "South Africa",
    "flag": "🇿🇦"
  },
  "ZM": {
    "latitude": -13.133897,
    "longitude": 27.849332,
    "name": "Zambia",
    "flag": "🇿🇲"
  },
  "ZW": {
    "latitude": -19.015438,
    "longitude": 29.154857,
    "name": "Zimbabwe",
    "flag": "🇿🇼"
  }
}