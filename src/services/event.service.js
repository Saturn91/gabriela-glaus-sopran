const projects = [
    {
        title: 'Das menschliche Antlitz',
        ensemble: 'Collegium Vocale',
        description: 'Das menschliche Anlitz - Das Collegium Vocale singt Musik von Poulenc, Schütz und Schein zum Kriegsende 1648 und 1945.',
        info: 'https://www.gabrielaglaus-sopran.ch/agenda/das-menschliche-antlitz-collegium-vocale/',
        events: [
            {
                date: new Date('2021-08-24T19:30:00'),
                location: 'Luzern'
            },
            {
                date: new Date('2021-10-16T19:30:00'),
                location: 'Luzern'
            },
            {
                date: new Date('2021-10-17T17:00:00'),
                location: 'Bern'
            },
            {
                date: new Date('2021-10-31T19:30:00'),
                location: 'Zürich'
            }            
        ]
    }, 
    {
        title: 'Project 2',
        ensemble: 'Operadischen',
        description: 'Das zweite Projekt',
        info: 'https://www.gabrielaglaus-sopran.ch/agenda/das-menschliche-antlitz-collegium-vocale/',
        events: [
            {
                date: new Date('2021-08-24T19:31:00'),
                location: 'Luzern'
            },
            {
                date: new Date('2021-10-15T19:30:00'),
                location: 'Luzern'
            },
            {
                date: new Date('2021-11-17T17:00:00'),
                location: 'Bern'
            },
            {
                date: new Date('2021-11-30T19:30:00'),
                location: 'Zürich'
            }            
        ]
    }    
];


export function getProjects(filter) {
    const datePairs = [];

    projects.forEach(project => {
        let filterfunction = (event) => {
            return true;
        };

        let today = Date.now();
        if(filter === 'current') {
            filterfunction = (event) => {
                return event.date >= today;
            }
        } 

        if(filter === 'past') {
            filterfunction = (event) => {
                return event.date < today;
            }
        } 

        const smallestDate = project.events.filter(filterfunction).sort((a, b) => a.data - b.date)[0].date;
        datePairs[project.title] = smallestDate;
    })

    return projects.sort((a, b) => datePairs[a.title] - datePairs[b.title]);
}

export function getCurrentProjects() {
    return getProjects('current');
}

export function getPastProjects() {
    return getProjects('past');
}

export function getEvents() {
    const eventList = [];

    projects.forEach(project => {
        project.events.forEach(event => {
            eventList.push(
                {
                    date: event.date,
                    location: event.location,
                    title: project.title,
                    ensemble: project.ensemble,
                    description: project.description,
                    info: project.info
                }
            )
        })
    })

    eventList.sort((a, b) => a.date - b.date);

    return eventList;
}

export function getCurrentEvents() {
    const today = Date.now();
    return getEvents().filter(event => event.date >= today);
}

export function getPastEvents() {
    const today = Date.now();
    return getEvents().filter(event => event.date < today);
}