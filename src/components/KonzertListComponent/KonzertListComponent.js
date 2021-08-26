import React from 'react';
import AgendaEventCardDetailed from '../AgendaEventCardDetailed/AgendaEventCardDetailed';
import { getCurrentEvents, getPastEvents } from '../../services/event.service';
import { displayStates } from '../KonzertView/KonzertView';

function KonzertListComponent(props) {
  let actualView;

  let events = getCurrentEvents();

  switch(props.displayState) {
    case displayStates.NEXT:
      actualView = <AgendaEventCardDetailed event={events[0]}></AgendaEventCardDetailed>
      break;
    case displayStates.ACTUAL:
      actualView = <div> {events.map(event => <AgendaEventCardDetailed event={event}></AgendaEventCardDetailed>)} </div>
      break;
    case displayStates.PAST:
      events = getPastEvents();
      actualView = <div> {events.map(event => <AgendaEventCardDetailed event={event}></AgendaEventCardDetailed>)} </div>
      break;
    default:
      console.error('unexpected error, unknown display state: ' + props.displayState);
      actualView = <AgendaEventCardDetailed event={events[0]}></AgendaEventCardDetailed>
      break;
  
  }

  return actualView;
}

export default KonzertListComponent;
