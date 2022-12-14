import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: {
                switch_mode: {
                    movies: 'Movies',
                    tv_shows: 'TV Shows'
                },
                switch_category: {
                    popular: 'Popular',
                    top_rated: 'Top rated',
                    upcoming: 'Upcoming',
                    now_playing: 'Now playing',
                    search: 'Search movies and series'
                },
                movie: {
                    release: 'Release date: ',
                    country: 'Country: ',
                    language: 'Language: ',
                    director: 'Director: ',
                    companies: 'Companies: ',
                    time: 'Duration: ',
                    collection: 'Collection: ',
                    overview: 'What is the movie about?'
                },
                tv_show: {
                    status: 'Status: ',
                    air_date: 'First air date: ',
                    seasons: 'Seasons: ',
                    episodes: 'Episodes: ',
                    network: 'Network: ',
                    created: 'Created by: ',
                    overview: 'What is the TV Show about?',
                    overview_season: 'What is the season about?',
                    producer: 'Producer: ',
                    episode: {
                        air: 'Air date: ',
                        time: 'Duration: ',
                        overview: 'What is this series about?'
                    }
                },
                person: {
                    birthday: 'Birthday: ',
                    death_day: 'Deathday: ',
                    birth_place: 'Birth place: ',
                    compositions: {
                        movies: 'Movies with',
                        tv_show: 'TV Shows with',
                        next: 'Next',
                        prev: 'Previous'
                    }
                },
                h2: {
                    clips: 'Clips',
                    cast: 'Starring',
                    reviews: 'Reviews',
                    similar: 'Similar',
                    seasons: 'Seasons',
                    episodes: 'Episodes',
                    guests: 'Guest actors',
                    bio: 'Biography'
                },
                customSearch: {
                    genres: 'All genres',
                    time: 'During all time',
                    search: 'SEARCH'
                },
                byParams: {
                    best: 'best',
                    of: 'of',
                    all_time: 'all time'
                },
                searchString: {
                    no_matches: 'No matches found',
                    error: 'Something goes wrong'
                }
            }
        },
        de: {
            translation: {
                switch_mode: {
                    movies: 'Filme',
                    tv_shows: 'Serie'
                },
                switch_category: {
                    popular: 'Beliebt',
                    top_rated: 'Bestbewertet',
                    upcoming: 'Bevorstehende',
                    now_playing: 'L??uft gerade',
                    search: 'Suche nach Filmen und Serien'
                },
                movie: {
                    release: 'Datum: ',
                    country: 'Land: ',
                    language: 'Sprache: ',
                    director: 'Direktor: ',
                    companies: 'Firmen: ',
                    time: 'Dauer: ',
                    collection: 'Sammlung: ',
                    overview: 'Um was geht es in dem Film?'
                },
                tv_show: {
                    status: 'Status: ',
                    air_date: 'Erstes Sendedatum: ',
                    seasons: 'Jahreszeiten: ',
                    episodes: 'Episoden: ',
                    network: 'Netzwerk: ',
                    created: 'Erstellt von: ',
                    overview: 'Worum geht es in der TV-Show?',
                    overview_season: 'Worum geht es in der Saison?',
                    producer: 'Produzent: ',
                    episode: {
                        air: 'Luftdatum: ',
                        time: 'Dauer: ',
                        overview: 'Worum geht es in dieser Serie?'
                    }
                },
                person: {
                    birthday: 'Geburtstag: ',
                    death_day: 'Todestag: ',
                    birth_place: 'Geburtsort: ',
                    compositions: {
                        movies: 'Filme mit',
                        tv_show: 'Fernsehsendungen mit',
                        next: 'N??chste',
                        prev: 'Vorherige'
                    }
                },
                h2: {
                    clips: 'Vorschau',
                    cast: 'Mit',
                    reviews: 'Bewertungen',
                    similar: '??hnlich',
                    seasons: 'Jahreszeiten',
                    episodes: 'Episoden',
                    guests: 'Gastschauspieler',
                    bio: 'Biografie'
                },
                customSearch: {
                    genres: 'Alle genres',
                    time: 'W??hrend aller Zeit',
                    search: 'SUCHE'
                },
                byParams: {
                    best: 'beste',
                    of: 'von',
                    all_time: 'die ganze Zeit'
                },
                searchString: {
                    no_matches: 'Keine Treffer gefunden',
                    error: 'Etwas l??uft schief'
                }
            }
        },
        fr: {
            translation: {
                switch_mode: {
                    movies: 'Films',
                    tv_shows: 'Serie'
                },
                switch_category: {
                    popular: 'Populaire',
                    top_rated: 'Les mieux not??s',
                    upcoming: 'A venir',
                    now_playing: 'Lecture en cours',
                    search: 'Rechercher des films et des s??ries'
                },
                movie: {
                    release: 'Date de sortie: ',
                    country: 'Pays: ',
                    language: 'Langue: ',
                    director: 'Directeur: ',
                    companies: 'Entreprises: ',
                    time: 'Dur??e: ',
                    collection: 'Le recueil: ',
                    overview: 'De quoi parle le film?'
                },
                tv_show: {
                    status: 'Statut: ',
                    air_date: 'Date de diffusion: ',
                    seasons: 'Saisons: ',
                    episodes: '??pisodes: ',
                    network: 'R??seau: ',
                    created: 'Created by: ',
                    overview: 'De quoi parle l\'??mission de t??l??vision?',
                    overview_season: 'De quoi parle la saison?',
                    producer: 'Producteur: ',
                    episode: {
                        air: 'Date de diffusion: ',
                        time: 'Dur??e: ',
                        overview: 'De quoi parle cette s??rie?'
                    }
                },
                person: {
                    birthday: 'Date d\'anniversaire: ',
                    death_day: 'Jour de la mort: ',
                    birth_place: 'Lieu de naissance: ',
                    compositions: {
                        movies: 'Films avec',
                        tv_show: 'S??ries TV avec',
                        next: 'Prochain',
                        prev: 'Pr??c??dent'
                    }
                },
                h2: {
                    clips: 'Clips',
                    cast: 'Mettant en vedette',
                    reviews: 'Commentaires',
                    similar: 'Similaire',
                    seasons: 'Saisons',
                    episodes: '??pisodes',
                    guests: 'Acteur invit??',
                    bio: 'Biographie'
                },
                customSearch: {
                    genres: 'Tous les genres',
                    time: 'Tout le temps',
                    search: 'CHERCHER'
                },
                byParams: {
                    best: 'meilleur',
                    of: 'pour',
                    all_time: 'tout le temps'
                },
                searchString: {
                    no_matches: 'Pas de r??sultat trouv??',
                    error: 'Quelque chose ne va pas'
                }
            }
        },
        es: {
            translation: {
                switch_mode: {
                    movies: 'Pel??culas',
                    tv_shows: 'Serie'
                },
                switch_category: {
                    popular: 'Popular',
                    top_rated: 'M??s popular',
                    upcoming: 'Extrovertido',
                    now_playing: 'Jugando ahora',
                    search: 'Busca pel??culas y series'
                },
                movie: {
                    release: 'La fecha: ',
                    country: 'Pa??s: ',
                    language: 'Idioma: ',
                    director: 'Director: ',
                    companies: 'Compa????as: ',
                    time: 'Duraci??n: ',
                    collection: 'Recopilaci??n: ',
                    overview: '??De que se trata la pelicula?'
                },
                tv_show: {
                    status: 'Estado: ',
                    air_date: 'Estreno: ',
                    seasons: 'Estaciones: ',
                    episodes: 'Episodios: ',
                    network: 'La red: ',
                    created: 'Creado por: ',
                    overview: '??De qu?? trata el programa de televisi??n?',
                    overview_season: '??De qu?? se trata la temporada?',
                    producer: 'Productor: ',
                    episode: {
                        air: 'Fecha del aire: ',
                        time: 'Duraci??n: ',
                        overview: '??De qu?? trata esta serie?'
                    }
                },
                person: {
                    birthday: 'Cumplea??os: ',
                    death_day: 'Dia muerto: ',
                    birth_place: 'Lugar de nacimiento: ',
                    compositions: {
                        movies: 'Pel??culas con',
                        tv_show: 'Programas de televisi??n con',
                        next: 'Pr??ximo',
                        prev: 'Previo'
                    }
                },
                h2: {
                    clips: 'Clips',
                    cast: 'Protagonista',
                    reviews: 'Rese??as',
                    similar: 'Similar',
                    seasons: 'Estaciones',
                    episodes: 'Episodios',
                    guests: 'Actores invitados',
                    bio: 'Biograf??a'
                },
                customSearch: {
                    genres: 'Todos los generos',
                    time: 'Todo el tiempo',
                    search: 'B??SQUEDA'
                },
                byParams: {
                    best: 'mejor',
                    of: 'de',
                    all_time: 'todo el tiempo'
                },
                searchString: {
                    no_matches: 'No se han encontrado resultados',
                    error: 'Algo va mal'
                }
            }
        },
        uk: {
            translation: {
                switch_mode: {
                    movies: '????????????',
                    tv_shows: '??????????????'
                },
                switch_category: {
                    popular: '????????????????i',
                    top_rated: '??????????????i',
                    upcoming: '??????????????i',
                    now_playing: '?????????????????? ??????????',
                    search: '?????????? ??i??????i?? ???? ??????i????i??'
                },
                movie: {
                    release: '???????? ????????????: ',
                    country: '????????????: ',
                    language: '????????: ',
                    director: '????????????????: ',
                    companies: '????????????????: ',
                    time: '????????????????????: ',
                    collection: '????????????????: ',
                    overview: '?????? ???? ???????????'
                },
                tv_show: {
                    status: '????????????: ',
                    air_date: '???????????? ????i??: ',
                    seasons: '????????????: ',
                    episodes: '??????????????: ',
                    network: '????????????: ',
                    created: '??????????????????: ',
                    overview: '?????? ???? ???????????????',
                    overview_season: '?????? ???? ???????????',
                    producer: '????????????????: ',
                    episode: {
                        air: '???????? ????i????: ',
                        time: '????????????????????: ',
                        overview: '?????? ???? ??????i???'
                    }
                },
                person: {
                    birthday: '???????? ????????????????????: ',
                    death_day: '???????? ????????????: ',
                    birth_place: '?????????? ????????????????????: ',
                    compositions: {
                        movies: '??i???????? ??',
                        tv_shows: '??????i?????? ??',
                        next: '????????????????',
                        prev: '??????????????????'
                    }
                },
                h2: {
                    clips: '????i????',
                    cast: '?? ???????????????? ??????????',
                    reviews: '??i??????????',
                    similar: '????????i',
                    seasons: '????????????',
                    episodes: '??????????????',
                    guests: '?????????????????? ????????????',
                    bio: '??????????????????'
                },
                customSearch: {
                    genres: '????i ??????????',
                    time: '???? ???????? ??????',
                    search: '??????????'
                },
                byParams: {
                    best: '????????????????',
                    of: '????',
                    all_time: '???????? ??????'
                },
                searchString: {
                    no_matches: '???????????? ???? ????????????????',
                    error: '???????? ?????????? ???? ??????'
                }
            }
        }
    }
})

export default i18n;
