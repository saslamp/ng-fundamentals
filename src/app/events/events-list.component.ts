import { Component, Inject } from "@angular/core";
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent {
  events: any[]
  
  constructor(@Inject(EventService) private eventService: EventService) {
    this.events = this.eventService.getEvents()
  }

}
