import { deleteOneDocFromFireStore, getAllDocsFromCollection, setFireBaseDoc } from "./firebase-connection.service";


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
                            events: events,
                            url: "Projects/"+project.id
                        }
                    )
                    const eventUrl = "Projects/"+project.id+"/Events";
                    getAllDocsFromCollection(eventUrl).then((events) => {
                        events.forEach((event, ev_index) => {
                            projectsCollection[proj_index].events.push({
                                date: new Date(event.data.date.toDate()),
                                location: event.data.location,
                                url: eventUrl,
                                id: event.id
                            })
                            if(proj_index+1 === projects.length && ev_index+1 === events.length) resolve(projectsCollection);
                        })
                    });
                });                
          });        
        }
    )
}

export function getProjectsFiltered(projects, filter) {
    const filteredProjects = [];

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
    
    projects.forEach(project => {
        
        const smallestDateProject = project.events.filter(filterfunction).sort((a, b) => a.data - b.date)[0];

        if(smallestDateProject ) {
            filteredProjects.push(project);
        }        
    })

    let output = sortProjectsByDates(filteredProjects);

    if(filter === 'past') output = output.reverse();

    return output;
}

export function sortProjectsByDates(projects) {
    const datePairs = [];
    const sortedProjects = [];
    projects.forEach(project => {
        const smallestDateProject = project.events.sort((a, b) => a.data - b.date)[0];

        if(smallestDateProject) {
            const smallestDate = smallestDateProject.date;
            datePairs[project.title] = smallestDate;
            sortedProjects.push(project);
        }
    });  
    
    return sortedProjects.sort((a, b) => datePairs[a.title] - datePairs[b.title]);
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

export function updateEvent(event, location, date) {
    setFireBaseDoc(event.url, event.id, {
        location,
        date
    });
}

export function deleteEvent(event) {
    deleteOneDocFromFireStore(event.url, event.id);
}

export function addEventToProject(eventUrl, location, date) {
    setFireBaseDoc(eventUrl, new Date().getTime().toString() + Math.random()*10000, {
        location,
        date
    });
}

export function addProject(project) {

}

export function updateProject(project) {

}

export function deleteProject(project) {

}