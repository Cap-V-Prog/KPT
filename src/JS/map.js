document.addEventListener("DOMContentLoaded", function() {
    const map = document.getElementById("map");
    const districtInfo = document.getElementById("district-info");

    map.addEventListener("load", function() {
        const svgDoc = map.contentDocument;
        if (svgDoc) {
            svgDoc.querySelectorAll("polygon, path").forEach(district => {
                district.addEventListener("mouseenter", function() {
                    this.style.fill = "lightgray"; // Change fill color when hovering
                    const districtName = this.id;
                    const districtData = getDistrictData(districtName);
                    updateDistrictInfo(districtData);
                    districtInfo.style.display = "block";
                });

                district.addEventListener("mouseleave", function() {
                    this.style.fill = ""; // Restore default fill color when mouse leaves
                    districtInfo.style.display = "none";
                });
            });
        }
    });

    function updateDistrictInfo(districtData) {
        // Clear previous district info
        districtInfo.innerHTML = "";

        // Create and append district name
        const districtNameElement = document.createElement("h1");
        districtNameElement.textContent = districtData.name;
        districtInfo.appendChild(districtNameElement);

        // Create and append list of cities and points of interest
        districtData.cities.forEach(city => {
            const cityElement = document.createElement("div");
            const cityTitleElement = document.createElement("h3");
            cityTitleElement.textContent = city.name;
            cityElement.appendChild(cityTitleElement);

            const pointOfInterestList = document.createElement("ul");
            city.pointsOfInterest.forEach(point => {
                const pointElement = document.createElement("li");
                pointElement.textContent = point;
                pointOfInterestList.appendChild(pointElement);
            });

            cityElement.appendChild(pointOfInterestList);
            districtInfo.appendChild(cityElement);
        });

        // Trigger animation by adding a class with a slight delay
        districtInfo.classList.add("slideIn");
        districtInfo.style.opacity = "1";
        districtInfo.style.transform = "translateY(0)";
    }

    function getDistrictData(districtName)
    {
        console.log(districtName);
        let districtData;
        switch (districtName) {
            case "Aveiro":
                districtData = {
                        name: "Aveiro",
                        cities: [
                            {
                                name: "Aveiro",
                                pointsOfInterest: ["Ria de Aveiro", "Universidade de Aveiro", "Museu de Aveiro"]
                            },
                            {
                                name: "Espinho",
                                pointsOfInterest: ["Casino de Espinho", "Praia de Espinho"]
                            },
                            {
                                name: "Ílhavo",
                                pointsOfInterest: ["Museu Marítimo de Ílhavo", "Fábrica de Porcelana Vista Alegre"]
                            },
                        ]
                    };
                    break;
            case "Beja":
                districtData =
                    {
                        name: "Beja",
                        cities: [
                            {
                                name: "Beja",
                                pointsOfInterest: ["Castelo de Beja", "Museu Regional de Beja"]
                            },
                            {
                                name: "Serpa",
                                pointsOfInterest: ["Castelo de Serpa", "Muralhas de Serpa"]
                            },
                        ]
                    };
                break;
            case "Braga":
                districtData =
                    {
                        name: "Braga",
                        cities: [
                            {
                                name: "Braga",
                                pointsOfInterest: ["Sé de Braga", "Bom Jesus do Monte", "Santuário do Sameiro"]
                            },
                            {
                                name: "Guimarães",
                                pointsOfInterest: ["Castelo de Guimarães", "Paço dos Duques de Bragança", "Centro Histórico de Guimarães"]
                            },
                        ]
                    };
                    break;
                case "Bragança":
                    districtData = {
                    name: "Bragança",
                        cities: [
                            {
                                name: "Bragança",
                                pointsOfInterest: ["Castelo de Bragança", "Museu do Abade de Baçal", "Centro Histórico de Bragança"]
                            },
                            {
                                name: "Miranda do Douro",
                                pointsOfInterest: ["Parque Natural do Douro Internacional", "Miradouro de São João das Arribas"]
                            },
                        ]
                    }
                break;
            case "Vila_Real":
                districtData =
                    {
                        name: "Vila Real",
                        cities: [
                            {
                                name: "Vila Real",
                                pointsOfInterest: ["Palácio de Mateus", "Santuário de Panóias", "Centro Histórico de Vila Real"]
                            },
                            {
                                name: "Chaves",
                                pointsOfInterest: ["Ponte Romana de Chaves", "Castelo de Chaves", "Termas de Chaves"]
                            },
                            {
                                name: "Peso da Régua",
                                pointsOfInterest: ["Miradouro de São Leonardo da Galafura", "Museu do Douro", "Quinta do Vallado"]
                            },
                        ]
                    };
                break;

            case "Lisbon":
                districtData ={
                    name: "Lisboa",
                    cities: [
                        {
                            name: "Lisboa",
                            pointsOfInterest: ["Torre de Belém", "Mosteiro dos Jerónimos", "Castelo de São Jorge", "Elevador de Santa Justa"]
                        },
                        {
                            name: "Sintra",
                            pointsOfInterest: ["Palácio Nacional da Pena", "Castelo dos Mouros", "Quinta da Regaleira", "Palácio Nacional de Sintra"]
                        },
                        {
                            name: "Cascais",
                            pointsOfInterest: ["Boca do Inferno", "Cidadela de Cascais", "Museu Condes de Castro Guimarães"]
                        },
                    ]
                }
                break;

            case "Setúbal":
                districtData = {
                    name: "Setúbal",
                    cities: [
                        {
                            name: "Setúbal",
                            pointsOfInterest: ["Parque Natural da Arrábida", "Forte de São Filipe", "Mercado do Livramento"]
                        },
                        {
                            name: "Almada",
                            pointsOfInterest: ["Cristo Rei", "Costa da Caparica", "Cacilhas"]
                        },
                    ]
                };
                break;

            case "Porto":
                districtData = {
                    name: "Porto",
                    cities: [
                        {
                            name: "Porto",
                            pointsOfInterest: ["Torre dos Clérigos", "Ribeira do Porto", "Caves do Vinho do Porto"]
                        },
                        {
                            name: "Vila Nova de Gaia",
                            pointsOfInterest: ["Cais de Gaia", "Praia da Granja", "Mosteiro da Serra do Pilar"]
                        },
                    ]
                };
                break;

            case "Faro":
                districtData = {
                    name: "Faro",
                    cities: [
                        {
                            name: "Faro",
                            pointsOfInterest: ["Cidade Velha de Faro", "Ilha Deserta", "Museu Municipal de Faro"]
                        },
                        {
                            name: "Albufeira",
                            pointsOfInterest: ["Praia da Falésia", "Centro Histórico de Albufeira", "Zoomarine"]
                        },
                    ]
                };
                break;

            case "Coimbra":
                districtData = {
                    name: "Coimbra",
                    cities: [
                        {
                            name: "Coimbra",
                            pointsOfInterest: ["Universidade de Coimbra", "Mosteiro de Santa Clara-a-Velha", "Parque Verde do Mondego"]
                        },
                        {
                            name: "Figueira da Foz",
                            pointsOfInterest: ["Praia da Claridade", "Serra da Boa Viagem", "Museu Municipal Santos Rocha"]
                        },
                    ]
                };
                break;

            case "Évora":
                districtData = {
                    name: "Évora",
                    cities: [
                        {
                            name: "Évora",
                            pointsOfInterest: ["Templo de Diana", "Capela dos Ossos", "Catedral de Évora"]
                        },
                        {
                            name: "Estremoz",
                            pointsOfInterest: ["Castelo de Estremoz", "Pousada Castelo de Estremoz", "Museu Municipal de Estremoz"]
                        },
                    ]
                };
                break;

            case "Guarda":
                districtData = {
                    name: "Guarda",
                    cities: [
                        {
                            name: "Guarda",
                            pointsOfInterest: ["Catedral da Guarda", "Torre de Menagem", "Museu da Guarda"]
                        },
                        {
                            name: "Seia",
                            pointsOfInterest: ["Serra da Estrela", "Museu do Brinquedo", "Casa das Obras"]
                        },
                    ]
                };
                break;

            case "Leiria":
                districtData = {
                    name: "Leiria",
                    cities: [
                        {
                            name: "Leiria",
                            pointsOfInterest: ["Castelo de Leiria", "Museu de Leiria", "Santuário de Nossa Senhora da Encarnação"]
                        },
                        {
                            name: "Caldas da Rainha",
                            pointsOfInterest: ["Parque D. Carlos I", "Museu José Malhoa", "Fábrica Bordallo Pinheiro"]
                        },
                    ]
                };
                break;

            case "Santarém":
                districtData = {
                    name: "Santarém",
                    cities: [
                        {
                            name: "Santarém",
                            pointsOfInterest: ["Igreja do Convento de São Francisco", "Castelo de Santarém", "Portas do Sol"]
                        },
                        {
                            name: "Tomar",
                            pointsOfInterest: ["Convento de Cristo", "Castelo de Tomar", "Sinagoga de Tomar"]
                        },
                    ]
                };
                break;

            case "Viana_do_Castelo_":
                districtData = {
                    name: "Viana do Castelo",
                    cities: [
                        {
                            name: "Viana do Castelo",
                            pointsOfInterest: ["Santuário de Santa Luzia", "Centro Histórico de Viana do Castelo", "Praia do Cabedelo"]
                        },
                        {
                            name: "Ponte de Lima",
                            pointsOfInterest: ["Ponte Romana de Ponte de Lima", "Largo de Camões", "Parque do Arnado"]
                        },
                    ]
                };
                break;

            case "Viseu":
                districtData = {
                    name: "Viseu",
                    cities: [
                        {
                            name: "Viseu",
                            pointsOfInterest: ["Sé Catedral de Viseu", "Museu Grão Vasco", "Parque Aquilino Ribeiro"]
                        },
                        {
                            name: "Lamego",
                            pointsOfInterest: ["Santuário de Nossa Senhora dos Remédios", "Castelo de Lamego", "Museu de Lamego"]
                        },
                    ]
                };
                break;

            case "Évora":
                districtData = {
                    name: "Évora",
                    cities: [
                        {
                            name: "Évora",
                            pointsOfInterest: ["Templo de Diana", "Catedral de Évora", "Capela dos Ossos"]
                        },
                    ]
                };
                break;

            case "Portalegre":
                districtData = {
                    name: "Portalegre",
                    cities: [
                        {
                            name: "Portalegre",
                            pointsOfInterest: ["Castelo de Portalegre", "Convento de Santa Clara", "Catedral de Portalegre"]
                        },
                    ]
                };
                break;

            case "Castelo_Branco":
                districtData = {
                    name: "Castelo Branco",
                    cities: [
                        {
                            name: "Castelo Branco",
                            pointsOfInterest: ["Jardim do Paço Episcopal", "Catedral de Castelo Branco", "Museu Francisco Tavares Proença Júnior"]
                        },
                        {
                            name: "Fundão",
                            pointsOfInterest: ["Serra da Gardunha", "Museu Arqueológico do Fundão", "Alpedrinha"]
                        },
                    ]
                };
                break;

            default:
                districtData = {
                    name: "Unknown District",
                    cities: []
                };
                break;
        }
        return districtData;
    }
});
