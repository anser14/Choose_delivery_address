
const addr = {
  USA: {
    California: {
      LosAngeles: ["Downtown", "Hollywood"],
      SanFrancisco: ["Financial District", "Chinatown"],
    },
    NewYork: {
      Manhattan: ["Midtown", "Upper East Side"],
      Brooklyn: ["Williamsburg", "DUMBO"],
    },
  },
  Canada: {
    Ontario: {
      Toronto: ["Downtown", "Scarborough"],
      Ottawa: ["Centretown", "Kanata"],
    },
    Quebec: {
      Montreal: ["Downtown", "Plateau Mont-Royal"],
      QuebecCity: ["Old Town", "Saint-Roch"],
    },
  },
  UK: {
    England: {
      London: ["Westminster", "Kensington"],
      Manchester: ["City Centre", "Salford"],
    },
    Scotland: {
      Edinburgh: ["Old Town", "New Town"],
      Glasgow: ["City Centre", "West End"],
    },
  },
  Australia: {
    NewSouthWales: {
      Sydney: ["CBD", "Bondi"],
      Newcastle: ["City Center", "Hamilton"],
    },
    Victoria: {
      Melbourne: ["CBD", "Fitzroy"],
      Geelong: ["Waterfront", "Belmont"],
    },
  },
  Germany: {
    Bavaria: {
      Munich: ["Altstadt", "Schwabing"],
      Nuremberg: ["Mitte", "Gostenhof"],
    },
    NorthRhineWestphalia: {
      Cologne: ["Innenstadt", "Ehrenfeld"],
      Dusseldorf: ["Altstadt", "Pempelfort"],
    },
  },
  Japan: {
    Tokyo: {
      Shibuya: ["Harajuku", "Ebisu"],
      Chiyoda: ["Marunouchi", "Akihabara"],
    },
    Osaka: {
      Kita: ["Umeda", "Grand Front"],
      Chuo: ["Namba", "Shinsaibashi"],
    },
  },
  Brazil: {
    SaoPaulo: {
      Paulista: ["Bela Vista", "Jardins"],
      Pinheiros: ["Vila Madalena", "Alto de Pinheiros"],
    },
    RioDeJaneiro: {
      Copacabana: ["Leme", "Ipanema"],
      Centro: ["Lapa", "Santa Teresa"],
    },
  },
  India: {
    Maharashtra: {
      Mumbai: ["Colaba", "Andheri"],
      Pune: ["Deccan", "Koregaon Park"],
    },
    Karnataka: {
      Bangalore: ["Indiranagar", "Koramangala"],
      Mysore: ["Chamundi Hills", "Saraswathipuram"],
    },
  },
  SouthAfrica: {
    Gauteng: {
      Johannesburg: ["Sandton", "Soweto"],
      Pretoria: ["Arcadia", "Brooklyn"],
    },
    WesternCape: {
      CapeTown: ["City Bowl", "Hout Bay"],
      Stellenbosch: ["Jonkershoek", "Dalsig"],
    },
  },
  China: {
    Beijing: {
      Dongcheng: ["Tiananmen Square", "Wangfujing"],
      Chaoyang: ["CBD", "Sanlitun"],
    },
    Shanghai: {
      Pudong: ["Lujiazui", "Jinqiao"],
      Puxi: ["Nanjing Road", "French Concession"],
    },
  },
};

const countries = Object.keys(addr);
let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let select3 = document.getElementById("select3");
let select4 = document.getElementById("select4");
for (let i = 0; i < countries.length; i++) {
  let option1 = document.createElement("option");
  option1.innerText = countries[i];
  select1.appendChild(option1);
}
function checkit1() {
  select2.innerHTML = "";
  select3.innerHTML = "";
  select4.innerHTML = "";

  let x = select1.value;
  let x1 = addr[x];
  let y = Object.keys(x1);

  for (let i = 0; i < y.length; i++) {
    let option1 = document.createElement("option");
    option1.innerText = y[i];
    select2.appendChild(option1);
  }
}
function checkit2() {
  select3.innerHTML = "";
  select4.innerHTML = "";

  let first = select1.value;
  let x = select2.value;
  let x1 = addr[first][x];
  let y = Object.keys(x1);

  for (let i = 0; i < y.length; i++) {
    let option1 = document.createElement("option");
    option1.innerText = y[i];
    select3.appendChild(option1);
  }
}
function checkit3() {
  select4.innerHTML = "";

  let first = select1.value;
  let second = select2.value;
  let x = select3.value;
  let x1 = addr[first][second][x];
  console.log(x1);
  let y = Object.values(x1);

  for (let i = 0; i < y.length; i++) {
    let option1 = document.createElement("option");
    option1.innerText = y[i];
    select4.appendChild(option1);
  }
}
