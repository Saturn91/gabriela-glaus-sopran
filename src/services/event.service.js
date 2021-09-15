import { getAllDocsFromCollection } from "./firebase-connection.service";

/*const projects = [
    {
        title: 'Pupsi Gesang',
        ensemble: 'Gabriela Glaus',
        description: 'Eine pupsende Aufführung',
        info: 'https://img1.gbpicsonline.com/gb/104/057.gif',
        events: [
            {
                date: new Date('2021-07-24T19:30:00'),
                location: 'Luzern'
            }           
        ]
    },
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
];*/

export function getProjectsFromDB() {
    return new Promise(
        (resolve, reject) => {
            
            getAllDocsFromCollection("Projects").then((projects) => {
                let projectsCollection = [];
                projects.forEach((project, proj_index) => {
                    let title = project.data.Title;
                    let ensemble = project.data.ensemble;
                    let description = project.data.description;
                    let link = project.data.link;
                    let events = [];
                    projectsCollection.push(
                        {
                            title: title,
                            ensemble: ensemble,
                            description: description,
                            info: link,
                            events: events
                        }
                    )
                    getAllDocsFromCollection("/Projects/"+project.id+"/Events").then((events) => {
                        events.forEach((event, ev_index) => {
                            projectsCollection[proj_index].events.push({
                                date: new Date(event.data.date.toDate()),
                                location: event.data.location
                            })
                            if(proj_index+1 === projects.length && ev_index+1 === events.length) resolve(projectsCollection);
                        })
                    });
                });                
          });        
        }
    )
}

export function getProjects(projects, filter) {
    const datePairs = [];
    const filteredProjects = [];
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
        const smallestDateProject = project.events.filter(filterfunction).sort((a, b) => a.data - b.date)[0];

        if(smallestDateProject ) {
            const smallestDate = smallestDateProject.date;
            datePairs[project.title] = smallestDate;
            filteredProjects.push(project);
        }
        
    })
    return filteredProjects.sort((a, b) => datePairs[a.title] - datePairs[b.title]);
}

export function getEvents(projects) {
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

export function getCurrentEvents(projects) {
    const today = Date.now();
    return getEvents(projects).filter(event => event.date >= today);
}

export function getPastEvents(projects) {
    const today = Date.now();
    return getEvents(projects).filter(event => event.date < today).reverse();
}