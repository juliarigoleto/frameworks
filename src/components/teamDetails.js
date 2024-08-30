import React from 'react';

const teamsData = {
    palmeiras: { 
        logo: 'https://s2-ge.glbimg.com/NIG6sRPzkx-0gknOeqH3XOhAqi4=/0x0:334x335/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/s/H/Qt7yzURwSs4ApwzNbDOQ/1959.png',
        info: 'O Palmeiras surgiu no dia 26 de agosto de 1914. Fundado por imigrantes italianos, seu primeiro nome foi Società Sportiva Palestra Italia. Em 1942, quando estava estabelecida como uma força do futebol paulista, a equipe foi obrigada a trocar de nome, passando a se chamar Sociedade Esportiva Palmeiras em decorrência da Segunda Guerra Mundial. Suas cores características são o branco e o verde, por isso carrega como alcunhas: "verdão" e "alviverde". Seu maior rival é o Corinthians, com quem disputa o tradicional Derby Paulista. Seus torcedores são denominados “palestrinos” ou “palmeirenses” e somam aproximadamente 16 milhões.',
        titles: {
            'Campeonato Brasileiro - série A': 12,
            'Copa do Brasil': 4,
            'Copa Libertadores': 3,
            'Copa Sul-Americana': 0,
            'Estadual (Paulistão)': 26,
            'Mundial de Clubes': 1
        },
    management: [
        { position: 'Presidente', name: 'Leila Pereira' },
        { position: 'Vice-Presidente', name: 'Paulo Buosi' },
        { position: 'Diretor de Futebol', name: 'Anderson Barros' }
        ],
    formacao: [
        { position: 'Goleiro', name: 'Weverton, Marcelo Lomba e Mateus'},
        { position: 'Zagueiro', name: 'Gustavo Gómez, Murilo, Michel, Naves e Vitor Reis'},
        { position: 'Lateral Direito', name: 'Agustín Giay, Marcos Rocha e Mayke'},
        { position: 'Lateral Esquerdo', name: 'Caio Paulista, J. Piquerez e Vanderlan'},
        { position: 'Meio Campista', name: 'Aníbal Moreno, Fabinho, Felipe Anderson, Gabriel Menino, Maurício, Raphael Veiga, Richard Ríos, Rômulo e Zé Rafael'},
        { position: 'Atacante', name: 'Bruno Rodrigues, Dudu, Estêvão, Lázaro, López e Rony'}

    ]
    },

    corinthians: {
        logo: 'https://i.pinimg.com/originals/10/90/e8/1090e8dcf10bb42a4a3e8b609da0cf83.png',
        info: 'Em 1º de setembro de 1910 um grupo de operários do bairro do Bom Retiro, localizado em São Paulo, inspirados na passagem de um time Inglês pelo Brasil, denominado Corinthian Football Club, criaram o Sport Club Corinthians Paulista. Suas cores tradicionais são o branco e o preto. Seus rivais históricos são o Palmeiras, com quem disputa o Derby Paulista; o São Paulo, com quem disputa o Majestoso; e o Santos, com quem disputa o Clássico Alvinegro. Sua torcida é conhecida como "Fiel" e seus torcedores são estimados em aproximadamente 30 milhões espalhados por todo o Brasil e pelo mundo.',
        titles: {
            'Campeonato Brasileiro - série A': 7,
            'Copa do Brasil': 3,
            'Copa Libertadores': 1,
            'Copa Sul-Americana': 0,
            'Estadual (Paulistão)': 30,
            'Mundial de Clubes': 2
        },
        management: [
        { position: 'Presidente', name: 'Augusto Melo' },
        { position: 'Vice-Presidente', name: 'Osmar Stabile' },
        { position: 'Diretor de Futebol', name: 'Fernando Alba' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Felipe Longo, Hugo Souza e Matheus Donelli'},
        { position: 'Zagueiro', name: 'André Ramalho, Cacá, Caetano, Félix Torres e Gustavo'},
        { position: 'Volante', name: 'Alex Santana, Breno Bidon, Charles, Maycon, Raniele e Ryan' },
        { position: 'Lateral Direito', name: 'Fagner e Matheuzinho'},
        { position: 'Lateral Esquerdo', name: 'Diego Palácios, Hugo Farias e Matheus Bidu'},
        { position: 'Meio Campista', name: ' Biro, I. Coronado, M. Araújo e Rodrigo Garro'},
        { position: 'Atacante', name: 'Arthur Sousa, Giovane, Pedro Henrique, Pedro Raul, Romero, Ruan Oliveira, Talles Magno, Wesley e Yuri Alberto'},

        ],
    },
    sao_paulo: {
        logo: 'https://i.pinimg.com/originals/05/10/66/051066bd9fd34185cdcb1ceb5b6ac6ea.png',
        info: 'No dia 25 de janeiro de 1930 foi assinada a ata de fundação do São Paulo Futebol Clube (homenagem à cidade de São Paulo), nascido da união entre a Associação Atlética das Palmeiras e uma grande parte dos jogadores e alguns membros da diretoria do Club Athletico Paulistano. Conservando as tradições do passado, o uniforme da nova equipe estamparia as faixas vermelhas, pretas e brancas em homenagem aos dois times fundadores, o que fez o time ser reconhecido como “o tricolor paulista”. Majestoso foi o nome dado por Tomás Mazzoni para o clássico envolvendo São Paulo e Corinthians, um de seus maiores rivais, já o clássico entre o tricolor e o alviverde é denominado “Choque-Rei”. Seus torcedores, somam perto de 20 milhões. ',
        titles: {
            'Campeonato Brasileiro - série A': 6,
            'Copa do Brasil': 1,
            'Copa Libertadores': 3,
            'Copa Sul-Americana': 1,
            'Estadual (Paulistão)': 22,
            'Mundial de Clubes': 1
        },
        management: [
        { position: 'Presidente', name: 'Julio Casares' },
        { position: 'Vice-Presidente', name: 'Harry Massis Jr' },
        { position: 'Diretor de Futebol', name: 'Carlos Belmonte' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Leandro, Rafael, Felipe Preis, Young e Jandrei'},
        { position: 'Zagueiro', name: 'Arboleda, Ruan Tressoldi, Alan Franco, Ferraresi, Igão, Sabino e Matheus Belém'},
        { position: 'Volante', name: 'Rodrigo Nestor, Luiz Gustavo, Marcos Antônio, Damián Bobadilla, Alisson, Liziero, Pablo Maia e Negrucci'},
        { position: 'Lateral Direito', name: 'Igor Vinícius, Rafinha, João Moreira e Igor Felisberto'},
        { position: 'Lateral Esquerdo', name: 'Welington e Patryck Lanza'},
        { position: 'Meio Campista', name: 'Galoppo, Michel Araújo, Rodriguinho e Welington Rato'},
        { position: 'Atacante', name: 'Lucas Moura, Calleri, Luciano, André Silva, Erick, Henrique Carmo, William Gomes e Ferrerinha'}

        ]
    },
    santos: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png',
        info: 'O Santos Futebol Clube foi fundado no dia 14 de abril de 1912 na cidade de Santos, São Paulo. Conhecido como "Peixe" ou "Alvinegro Praiano", o clube tem como suas cores tradicionais o preto e o branco. Sua fama mundial foi consolidada nas décadas de 1960 e 1970, com a lendária geração liderada por Pelé, considerada por muitos como o melhor jogador de todos os tempos. O Santos é reconhecido por revelar grandes craques, e seus torcedores são conhecidos como santistas. Seu maior rival é o Corinthians, com quem disputa o Clássico Alvinegro, e sua torcida conta com cerca de 7 milhões de pessoas.',
        titles: {
            'Campeonato Brasileiro - série A': 8,
            'Copa do Brasil': 1,
            'Copa Libertadores': 3,
            'Copa Sul-Americana': 0,
            'Estadual (Paulistão)': 22,
            'Mundial de Clubes': 2
        },
        management: [
        { position: 'Presidente', name: 'Marcelo Teixeira' },
        { position: 'Vice-Presidente', name: 'Fernando Bonavides' },
        { position: 'Diretor de Futebol', name: 'Paulo Bracks' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'João Paulo, Diógenes, Gabriel Brazão'},
        { position: 'Zagueiro', name: 'Alex Nascimento, Jair, Gil'},
        { position: 'Volante', name: 'Alison, Diego Pituca, João Schmidt, Sandry, Tomás Ricón'},
        { position: 'Lateral Direito', name: 'Aderlan, Hayner, JP Chermont, Rodrigo Ferreira'},
        { position: 'Lateral Esquerdo', name: 'Kevyson, Souza, Dodô, Gonzalo Escobar'},
        { position: 'Meio Campista', name: 'Giuliano, Patrick, Serginho'},
        { position: 'Atacante', name: 'Enzo Monteiro, Otero, Pedrinho, Weslley Patati, Guilherme Augusto, Júlio César Furch, Willian Bigode'}

        ]
    },
    redbull: {
        logo: 'https://upload.wikimedia.org/wikipedia/pt/9/9e/RedBullBragantino.png',
        info: 'Originalmente fundado em 8 de janeiro de 1928 na cidade de Bragança Paulista, São Paulo. Entretanto, em 2019, surge o Red Bull Bragantino, resultado de uma parceria entre o Red Bull GmbH e o Clube Atlético Bragantino, o clube adotou o nome e as cores da Red Bull, que são o branco e o vermelho, refletindo a identidade global da marca. Apesar de sua recente história sob o comando da empresa austríaca, o Bragantino já começa a se destacar no cenário nacional, buscando construir rivalidades e conquistar novos torcedores. Seu clássico regional é contra o Guarani, no chamado "Derby Caipira". A torcida do clube, embora em crescimento, ainda é pequena em comparação aos grandes do país.',
        titles: {
            'Campeonato Brasileiro - série A - série A': 0,
            'Copa do Brasil': 0,
            'Copa Libertadores': 0,
            'Copa Sul-Americana': 0,
            'Estadual (Paulistão)': 1,
            'Mundial de Clubes': 0
        },
        management: [
        { position: 'Proprietário', name: 'Andrés Sanchez' },
        { position: 'CEO', name: 'André Rocha' },
        { position: 'Diretor de Futebol', name: 'Diego Cerri' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Cleiton, Fabrício, Lucão'},
        { position: 'Zagueiro', name: 'Léo Realpe, Eduardo Santos, Lucas Cunha, Pedro Henrique, DG'},
        { position: 'Lateral Direito', name: 'Andrés Hurtado, Nathan Mendes'},
        { position: 'Lateral Esquerdo', name: 'Juninho Capixaba, Guilherme, Luan Candido'},
        { position: 'Meio Campista', name: 'Jadsom, Jhon Jhon, Ramires, Lincoln, Evangelista, Gustavo Neves, Raul, Matheus Fernandes'},
        { position: 'Atacante', name: 'Helinho, Thiago Borbas, Sasha, Talisson, Vitinho, Mosquera, Nacho, Vinicinho'}

        ]
    },
    vasco: {
        logo: 'https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png',
        info: 'O Club de Regatas Vasco da Gama foi fundado em 21 de agosto de 1898 por remadores portugueses no Rio de Janeiro. Inicialmente voltado para os esportes náuticos, o clube expandiu suas atividades para o futebol em 1915. O Vasco, ou "Gigante da Colina", como também é conhecido, carrega as cores preta, branca e vermelho, tem como símbolo a Cruz de Malta. Seu maior rival é o Flamengo, com quem disputa o Clássico dos Milhões, mas também mantém rivalidades com Fluminense e Botafogo. A torcida vascaína é uma das mais notadas no Brasil, com cerca de 9 milhões de torcedores, conhecidos como "vascaínos" ou "cruzmaltinos".',
        titles: {
            'Campeonato Brasileiro - série A': 4,
            'Copa do Brasil': 1,
            'Copa Libertadores': 1,
            'Copa Sul-Americana': 0,
            'Estadual (Cariocão)': 24,
            'Mundial de Clubes': 0
        },
        management: [
        { position: 'Presidente', name: 'Pedro Paulo de Oliveira' },
        { position: 'Vice-Presidente', name: 'Paulo César Salomão' },
        { position: 'Diretor de Futebol', name: 'Felipe Maestro' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Léo Jardim, Keiller, Pablo, Phillipe Gabriel'},
        { position: 'Zagueiro', name: 'Léo, Maicon, João Victor, Lyncon Correa, Luiz Gustavo'},
        { position: 'Volante', name: 'Juan Sforza, Souza, Hugo Moura, Lucas Eduardo, Mateus Carvalho'},
        { position: 'Lateral Direito', name: 'Ruma Rodriguez, Rojas, Paulo Henrique'},
        { position: 'Lateral Esquerdo', name: 'Lucas Piton, Victor Luís, Leandrinho, Julião'},
        { position: 'Meio Campista', name: 'Coutinho, Estrella, Jair, Payet, Paulinho, Praxedes, Pablo Galdames, JP'},
        { position: 'Atacante', name: 'Alex Teixeira, Emerson Rodriguez, David, Clayton Silva, Erick Marcus, Adson, Rossi, Serginho, Rayan, Vegetti, GB'}

        ]
    },
    botafogo: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Escudo_Botafogo.png/800px-Escudo_Botafogo.png',
        info: 'O Botafogo de Futebol e Regatas, tradicional clube do Rio de Janeiro, foi oficialmente fundado no dia 12 de agosto de 1904. Suas cores são o preto e o branco, e o seu símbolo é a estrela solitária, em referência à estrela de cinco pontas que brilha no seu escudo. O Botafogo é conhecido por sua importância no futebol brasileiro, especialmente por ter revelado grandes jogadores, como Garrincha. Seu maior rival é o Flamengo, com quem disputa o Clássico da Rivalidade. A torcida botafoguense, apesar de numericamente menor em comparação a outras grandes torcidas cariocas, é extremamente leal e conta com cerca de 3 milhões de torcedores, os "alvinegros".',
        titles: {
            'Campeonato Brasileiro - série A': 2,
            'Copa do Brasil': 0,
            'Copa Libertadores': 0,
            'Copa Sul-Americana': 1,
            'Estadual (Cariocão)': 21,
            'Mundial de Clubes': 0
        },
        management: [
        { position: 'Proprietário', name: 'John Textor' },
        { position: 'CEO', name: 'Thairo Arrudo' },
        { position: 'Diretor de Futebol', name: 'Pedro Martins' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Gatito Fernández, John, Lucas Barreto e Raul'},
        { position: 'Zagueiro', name: 'Alexander, Bartolomeu, Lucas Halter, Luís Geovanny e Pablo Castro'},
        { position: 'Lateral Direito', name: 'Damián, Mateo Ponte e Rafael  '},
        { position: 'Lateral Esquerdo', name: 'Hugo Gonçalves, Luis Eduardo e Fernando '},
        { position: 'Meio Campista', name: 'Danilo Barbosa, Carlos Eduardo, Gregore, Kauê, Óscar David, Marlon, Patrick, Allan, Danilo Pinheiro e Thiago'},
        { position: 'Atacante', name: 'Luiz Henrique, José Antônio, Jeefferson, Matheus de Paula, Jefferson, Francisco, Yarlen, Fabiano, Igor e Carlos Alberto'}

        ]
    },
    fluminense: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png',
        info: 'Fundado em 21 de julho de 1902 no Rio de Janeiro, o Fluminense Football Club é um dos clubes mais tradicionais do futebol brasileiro. Suas cores são o verde, o branco e o grená, o que lhe confere o apelido de "Tricolor das Laranjeiras". O Fluminense é conhecido por sua história rica e por ser um dos fundadores da Confederação Brasileira de Desportos. Seu maior rival é o Flamengo, com quem disputa o clássico "Fla-Flu", um dos mais emblemáticos do futebol mundial. Os torcedores do Fluminense, conhecidos como "tricolores", somam cerca de 3 milhões.',
        titles: {
            'Campeonato Brasileiro - série A': 4,
            'Copa do Brasil': 1,
            'Copa Libertadores': 1,
            'Copa Sul-Americana': 0,
            'Estadual (Cariocão)': 33,
            'Mundial de Clubes': 1
        },
        management: [
        { position: 'Presidente', name: 'Mario Bittencourt' },
        { position: 'Vice-Presidente', name: 'Mattheus  Montenegro' },
        { position: 'Diretor de Futebol', name: 'Paulo Angioni' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Vitor Eudes, Felipe Alves, Fábio, Gustavo Ramalho'},
        { position: 'Zagueiro', name: 'Antônio Carlos, Ignácio, Thiago Silva, Felipe Andrade, Manoel e Felipe Melo'},
        { position: 'Volante', name: 'André, Martinelli, Gabriel Pires, Facundo Bernal e Thiago Santos'},
        { position: 'Lateral Direito', name: 'Guga e Samuel Xavier'},
        { position: 'Lateral Esquerdo', name: 'Esquerdinha, Marcelo e Diogo'},
        { position: 'Meio Campista', name: 'Nonato, Renato Augusto, David Terans, Lima e Ganso'},
        { position: 'Atacante', name: 'Keno, Jhon Arias, Marquinhos, Kevin Serna, Jan Lucumi, John Kennedy, Kauã Elias, Lelê e Fermán Cano'}

        ]
    },
    flamengo: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png',
        info: 'O Clube de Regatas do Flamengo foi fundado em 17 de novembro de 1895 como um clube de remo no Rio de Janeiro, e só mais tarde, em 1911, passou a se dedicar ao futebol. Suas cores tradicionais são o vermelho e o preto, e o clube é popularmente chamado de "Mengão". Com uma das maiores torcidas do mundo, o Flamengo conta com cerca de 42 milhões de torcedores, os "rubro-negros". Seus maiores rivais são o Vasco da Gama, no Clássico dos Milhões, o Fluminense, no Fla-Flu, e o Botafogo, no Clássico da Rivalidade.',
        titles: {
            'Campeonato Brasileiro - série A': 7,
            'Copa do Brasil': 4,
            'Copa Libertadores': 3,
            'Copa Sul-Americana': 0,
            'Estadual (Cariocão)': 38,
            'Mundial de Clubes': 1
        },
        management: [
        { position: 'Presidente', name: 'Rodolfo Landim' },
        { position: 'Vice-Presidente', name: 'Rodrigo Vilaça' },
        { position: 'Diretor de Futebol', name: 'Bruno Spindel' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Matheus Cunha e Rossi'},
        { position: 'Zagueiro', name: 'Léo Pereira, David Luiz, Cleiton, Fabrício Bruno e Léo Ortiz'},
        { position: 'Volante', name: 'Igor Jesus, Erick, Gerson e Allan'},
        { position: 'Lateral Direito', name: 'Varela e Wesley'},
        { position: 'Lateral Esquerdo', name: 'Matías Viña e Ayrton Lucas'},
        { position: 'Meio Campista', name: 'Matheus Gonçalves, De Arrascaeta, Victor Hugo, De La Cruz e Lorran'},
        { position: 'Atacante', name: 'Gabi, Bruno Henrique, Pedro, Everton, Luiz Araujo e Carlinhos'}

        ]
    },
    atletico: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atletico_mineiro_galo.png/672px-Atletico_mineiro_galo.png',
        info: 'O Clube Atlético Mineiro, fundado em 25 de março de 1908 em Belo Horizonte, Minas Gerais, é conhecido como "Galo" devido ao mascote que representa a raça e a persistência do clube. Suas cores são o preto e o branco, e a torcida atleticana, chamada de "Massa", é uma das mais fervorosas do Brasil, com cerca de 10 milhões de torcedores. O Atlético é um dos clubes mais tradicionais do futebol brasileiro e tem como maior rival o Cruzeiro, com quem disputa o famoso "Clássico Mineiro".',
        titles: {
            'Campeonato Brasileiro - série A': 3,
            'Copa do Brasil': 2,
            'Copa Libertadores': 1,
            'Copa Sul-Americana': 2,
            'Estadual (Campeonato Mineiro)': 49,
            'Mundial de Clubes': 0
        },
        management: [
        { position: 'Presidente', name: 'Sérgio Coelho' },
        { position: 'Vice-Presidente', name: 'Márcio André de Brito' },
        { position: 'Diretor de Futebol', name: 'Victor Bagy' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Gabriel Delfin, Everson, Matheus Mendes e Gabriel Átila'},
        { position: 'Zagueiro', name: 'Lyanco, Bruno Fuchs, Lemos, Alonso, Igor Rabello e Rômulo'},
        { position: 'Lateral Direito', name: 'Mariano e Saraiva'},
        { position: 'Lateral Esquerdo', name: 'Guilherme Arana e Rubens'},
        { position: 'Meio Campista', name: 'Otávio, Gustavo Scarpa, Zaracho, Igor Gomes, Fausto Vera, Bernard, Battaglia, Alan Franco, Paulo Vitor, e Robert'},
        { position: 'Atacante', name: 'Hulk, Deyverson, Paulinho, Vargas, Alan Kardec, B. Palacios, Isaac, Cadu e Alisson'}

        ]
    },
    cruzeiro: {
        logo: 'https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png',
        info: 'Fundado no dia 2 de janeiro de 1921 com o nome de Società Sportiva Palestra Italia, o Cruzeiro Esporte Clube, de Belo Horizonte, Minas Gerais, adotou o nome atual em 1942. Suas cores são o azul e o branco, e o clube é conhecido como "Raposa". O Cruzeiro é um dos maiores vencedores do futebol brasileiro, com uma torcida apaixonada de cerca de 9 milhões de cruzeirenses. Seu maior rival é o Atlético Mineiro, com quem disputa o Clássico Mineiro, um dos mais intensos do Brasil.',
        titles: {
            'Campeonato Brasileiro - série A': 4,
            'Copa do Brasil': 6,
            'Copa Libertadores': 2,
            'Copa Sul-Americana': 0,
            'Estadual (Campeonato Mineiro)': 38,
            'Mundial de Clubes': 0
        },
        management: [
        { position: 'Presidente', name: 'Lidson Faria' },
        { position: 'Vice-Presidente', name: 'Clemenceau Chiabi' },
        { position: 'Diretor de Futebol', name: 'Paulo Pelaipe' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Gabriel Grando, Cássio, Anderson e Léo Aragão'},
        { position: 'Zagueiro', name: 'Zé Ivaldo, Lucas Villalba, João Marcelo, Weverton, Jonathan Jesus e Pedrão'},
        { position: 'Volante', name: 'Walace, Lucas Romero, Fabrizio Peralta, Fernando Henrique e Lucas Silva'},
        { position: 'Lateral Direito', name: 'William e Wesley Gasolina'},
        { position: 'Lateral Esquerdo', name: 'Marlon e Kaiki'},
        { position: 'Meio Campista', name: 'Matheus Henrique, Ramiro, Japa, Vitinho, Álvaro Barreal, Matheus Pereira e Mateus Vital'},
        { position: 'Atacante', name: 'Arthur Gomes, Gabriel Veron, Kaio Jorge, Juan Dinenno, Lautaro Díaz e Rafa Silva'}

        ]
    },
    gremio: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Gremio_logo.svg',
        info: 'O Grêmio Foot-Ball Porto Alegrense foi fundado no dia 15 de setembro de 1903 em Porto Alegre, Rio Grande do Sul. Suas cores são o azul, preto e branco, e o clube é conhecido como "Imortal Tricolor". Com uma rica história de conquistas nacionais e internacionais, o Grêmio é um dos clubes mais importantes do Brasil. Seu maior rival é o Internacional, com quem disputa o famoso "Grenal", um dos clássicos mais acirrados do país. A torcida gremista, os tricolores, é estimada em cerca de 8 milhões de torcedores.',
        titles: {
            'Campeonato Brasileiro - série A': 2,
            'Copa do Brasil': 5,
            'Copa Libertadores': 3,
            'Copa Sul-Americana': 0,
            'Estadual (Campeonato Gaúcho)': 43,
            'Mundial de Clubes': 1
        },
        management: [
        { position: 'Presidente', name: 'Alberto Guerra' },
        { position: 'Vice-Presidente', name: 'Eduardo Magrisso' },
        { position: 'Diretor de Futebol', name: 'Luis Vagner Vivian' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Caíque Santos, Felipe Scheibig, Marchesín, Rafael Cabral'},
        { position: 'Zagueiro', name: 'Jemerson, Kannemann, Natã, Rodrigo Caio, Rodrigo Ely, Geromel e Gustavo Martins'},
        { position: 'Volante', name: 'Mathías Villasanti, Ronald, Dodi, Lucas Milla'},
        { position: 'Lateral Direito', name: 'João Pedro e Fábio'},
        { position: 'Lateral Esquerdo', name: 'Reinaldo e Mayk'},
        { position: 'Meio Campista', name: 'Pepê, Du Queiroz, Edenilson, Franco Cristaldo, Nathan e Miguel Monsalve'},
        { position: 'Atacante', name: 'Gustavo Nunes, Yeferson, Alexander Aravena, Nathan Fernandes, Cristian Pavón, Jhonata Robert, Matias Arezo, Martin, Diego Costa e André Henrique'}

        ]
    },
    internacional: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1024px-Escudo_do_Sport_Club_Internacional.svg.png',
        info: 'O Sport Club Internacional, fundado em 4 de abril de 1909 em Porto Alegre, Rio Grande do Sul, é um dos clubes mais tradicionais do Brasil. Suas cores são o vermelho e o branco, o que lhe rendeu o apelido de "Colorado". O Internacional tem uma das maiores torcidas do país, com cerca de 6 milhões de torcedores, os "colorados". Seu maior rival é o Grêmio, com quem disputa o clássico Grenal, um dos confrontos mais históricos e emocionantes do futebol brasileiro.',
        titles: {
            'Campeonato Brasileiro - série A': 3,
            'Copa do Brasil': 1,
            'Copa Libertadores': 2,
            'Copa Sul-Americana': 1,
            'Estadual (Campeonato Gaúcho)': 45,
            'Mundial de Clubes': 1
        },
        management: [
        { position: 'Presidente', name: 'Alessandro Barcellos' },
        { position: 'Vice-Presidente', name: 'Victor Grunberg' },
        { position: 'Diretor de Futebol', name: 'Márcio Rodrigues' }
        ],
        formacao: [
        { position: 'Goleiro', name: 'Anthoni, Fabrício, Ivan Quaresma e Sergio Rochet'},
        { position: 'Zagueiro', name: 'Agustín Rogel, Gabriel Mercado, Igor Gomes, Robert Renan e Vitão'},
        { position: 'Lateral Direito', name: 'Alexandro Barnabéi'},
        { position: 'Lateral Esquerdo', name: 'Renê'},
        { position: 'Meio Campista', name: 'Alan Patrick, Bruno Gomes, Bruno Henrique, Bruno Tabata, Fernando, Gabriel Carvalho, Gustavo Prado, Hyoran, Rômulo e Thiago Maia'},
        { position: 'Atacante', name: 'Enner Valencia, Lucas Alario, Lucca, Rafael Borré, Wanderson e Wesley'}

        ]
    },
}

const TeamDetails = ({ team }) => {
  const teamData = teamsData[team];

  return (
    <div>
      <header>
        <h1>{team.charAt(0).toUpperCase() + team.slice(1)}</h1>
        <img src={teamData.logo} alt={`${team} logo`} />
      </header>
      <section>
        <h2>Informações Gerais</h2>
        <p>{teamData.info}</p>
      </section>
      <section>
        <h2>Títulos</h2>
        <table>
          <thead>
            <tr>
              <th>Competição</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(teamData.titles).map(([competition, quantity]) => (
              <tr key={competition}>
                <td>{competition}</td>
                <td>{quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Gerência</h2>
        <table>
          <thead>
            <tr>
              <th>Cargo</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {teamData.management.map((manager) => (
              <tr key={manager.position}>
                <td>{manager.position}</td>
                <td>{manager.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h2>Formação em Campo e Jogadores</h2>
        <table>
          <thead>
            <tr>
              <th>Posição</th>
              <th>Jogadores</th>
            </tr>
          </thead>
          <tbody>
            {teamData.formacao.map((position) => (
              <tr key={position.position}>
                <td>{position.position}</td>
                <td>{position.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default TeamDetails;

//mudando
