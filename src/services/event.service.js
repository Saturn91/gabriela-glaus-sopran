const projects = [
    {
        title: 'Das menschliche Antlitz',
        ensemble: 'Collegium Vocale',
        description: 'Das menschliche Anlitz - Das Collegium Vocale singt Musik von Poulenc, Schütz und Schein zum Kriegsende 1648 und 1945.',
        info: 'https://www.gabrielaglaus-sopran.ch/agenda/das-menschliche-antlitz-collegium-vocale/',
        events: [
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


export function getProjects() {
    return projects;
}

export function getEvents() {
    //get all projects
    //for each projects and for each date within project create event
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