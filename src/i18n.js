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
                    now_playing: 'Läuft gerade',
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
                        next: 'Nächste',
                        prev: 'Vorherige'
                    }
                },
                h2: {
                    clips: 'Vorschau',
                    cast: 'Mit',
                    reviews: 'Bewertungen',
                    similar: 'Ähnlich',
                    seasons: 'Jahreszeiten',
                    episodes: 'Episoden',
                    guests: 'Gastschauspieler',
                    bio: 'Biografie'
                },
                customSearch: {
                    genres: 'Alle genres',
                    time: 'Während aller Zeit',
                    search: 'SUCHE'
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
                    top_rated: 'Les mieux notés',
                    upcoming: 'A venir',
                    now_playing: 'Lecture en cours',
                    search: 'Rechercher des films et des séries'
                },
                movie: {
                    release: 'Date de sortie: ',
                    country: 'Pays: ',
                    language: 'Langue: ',
                    director: 'Directeur: ',
                    companies: 'Entreprises: ',
                    time: 'Durée: ',
                    collection: 'Le recueil: ',
                    overview: 'De quoi parle le film?'
                },
                tv_show: {
                    status: 'Statut: ',
                    air_date: 'Date de diffusion: ',
                    seasons: 'Saisons: ',
                    episodes: 'Épisodes: ',
                    network: 'Réseau: ',
                    created: 'Created by: ',
                    overview: 'De quoi parle l\'émission de télévision?',
                    overview_season: 'De quoi parle la saison?',
                    producer: 'Producteur: ',
                    episode: {
                        air: 'Date de diffusion: ',
                        time: 'Durée: ',
                        overview: 'De quoi parle cette série?'
                    }
                },
                person: {
                    birthday: 'Date d\'anniversaire: ',
                    death_day: 'Jour de la mort: ',
                    birth_place: 'Lieu de naissance: ',
                    compositions: {
                        movies: 'Films avec',
                        tv_show: 'Séries TV avec',
                        next: 'Prochain',
                        prev: 'Précédent'
                    }
                },
                h2: {
                    clips: 'Clips',
                    cast: 'Mettant en vedette',
                    reviews: 'Commentaires',
                    similar: 'Similaire',
                    seasons: 'Saisons',
                    episodes: 'Épisodes',
                    guests: 'Acteur invité',
                    bio: 'Biographie'
                },
                customSearch: {
                    genres: 'Tous les genres',
                    time: 'Tout le temps',
                    search: 'CHERCHER'
                }
            }
        },
        es: {
            translation: {
                switch_mode: {
                    movies: 'Películas',
                    tv_shows: 'Serie'
                },
                switch_category: {
                    popular: 'Popular',
                    top_rated: 'Más popular',
                    upcoming: 'Extrovertido',
                    now_playing: 'Jugando ahora',
                    search: 'Busca películas y series'
                },
                movie: {
                    release: 'La fecha: ',
                    country: 'País: ',
                    language: 'Idioma: ',
                    director: 'Director: ',
                    companies: 'Compañías: ',
                    time: 'Duración: ',
                    collection: 'Recopilación: ',
                    overview: '¿De que se trata la pelicula?'
                },
                tv_show: {
                    status: 'Estado: ',
                    air_date: 'Estreno: ',
                    seasons: 'Estaciones: ',
                    episodes: 'Episodios: ',
                    network: 'La red: ',
                    created: 'Creado por: ',
                    overview: '¿De qué trata el programa de televisión?',
                    overview_season: '¿De qué se trata la temporada?',
                    producer: 'Productor: ',
                    episode: {
                        air: 'Fecha del aire: ',
                        time: 'Duración: ',
                        overview: '¿De qué trata esta serie?'
                    }
                },
                person: {
                    birthday: 'Cumpleaños: ',
                    death_day: 'Dia muerto: ',
                    birth_place: 'Lugar de nacimiento: ',
                    compositions: {
                        movies: 'Películas con',
                        tv_show: 'Programas de televisión con',
                        next: 'Próximo',
                        prev: 'Previo'
                    }
                },
                h2: {
                    clips: 'Clips',
                    cast: 'Protagonista',
                    reviews: 'Reseñas',
                    similar: 'Similar',
                    seasons: 'Estaciones',
                    episodes: 'Episodios',
                    guests: 'Actores invitados',
                    bio: 'Biografía'
                },
                customSearch: {
                    genres: 'Todos los generos',
                    time: 'Todo el tiempo',
                    search: 'BÚSQUEDA'
                }
            }
        },
        uk: {
            translation: {
                switch_mode: {
                    movies: 'Фільми',
                    tv_shows: 'Серіали'
                },
                switch_category: {
                    popular: 'Популярнi',
                    top_rated: 'Найкращi',
                    upcoming: 'Майбутнi',
                    now_playing: 'Дивляться зараз',
                    search: 'Пошук фiльмiв та серiалiв'
                },
                movie: {
                    release: 'Дата виходу: ',
                    country: 'Країна: ',
                    language: 'Мова: ',
                    director: 'Директор: ',
                    companies: 'Компанії: ',
                    time: 'Тривалість: ',
                    collection: 'Колекція: ',
                    overview: 'Про що фільм?'
                },
                tv_show: {
                    status: 'Статус: ',
                    air_date: 'Перший ефiр: ',
                    seasons: 'Сезони: ',
                    episodes: 'Епізоди: ',
                    network: 'Мережа: ',
                    created: 'Створений: ',
                    overview: 'Про що телешоу?',
                    overview_season: 'Про що сезон?',
                    producer: 'Продюсер: ',
                    episode: {
                        air: 'Дата ефiру: ',
                        time: 'Тривалість: ',
                        overview: 'Про що серiя?'
                    }
                },
                person: {
                    birthday: 'День народження: ',
                    death_day: 'День смерті: ',
                    birth_place: 'Місце народження: ',
                    compositions: {
                        movies: 'Фiльми з',
                        tv_shows: 'Серiали з',
                        next: 'Наступна',
                        prev: 'Попередня'
                    }
                },
                h2: {
                    clips: 'Клiпи',
                    cast: 'У головних ролях',
                    reviews: 'Вiдгуки',
                    similar: 'Схожi',
                    seasons: 'Сезони',
                    episodes: 'Епізоди',
                    guests: 'Запрошені актори',
                    bio: 'Біографія'
                },
                customSearch: {
                    genres: 'Усi жанри',
                    time: 'За весь час',
                    search: 'ПОШУК'
                }
            }
        }
    }
})

export default i18n;
