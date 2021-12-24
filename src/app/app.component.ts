import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = [
    {
      header: 'About Sunshine Park',
      imgUrl:
        'https://media.istockphoto.com/photos/multiracial-senior-women-having-fun-together-after-sport-workout-picture-id1312102723?b=1&k=20&m=1312102723&s=170667a&w=0&h=jPV0YWw2qL7NdJKKzyTWy3WpOlldMG3uOXPDthuymLI=',
      content: `Sunshine Park AFH, LLC has been licensed with the state since 2012. Provider/owner Jainaba Drammeh is a Certified Nursing Assistant with specialty training in Alzheimer's, dementia and mental health. Offering seniors professional quality care in a home-like setting on the Eastside.
    Visitors to one of the Sunshine Park homes will be delighted with the beautiful settings, wheelchair-friendly atmosphere, and highly professional staff.
    
    Private rooms with private bathrooms are available, either fully furnished, or the room may be customized with the resident's personal possessions. Providing quality residential care for seniors. 
    
    Beautifully decorated throughout, Sunshine Park Homes offer residents the highest quality care in a loving, residential environment.
    
    We meet the needs of those in our care; however, it is the passion for what we do each day and our compassion for the people we serve that truly makes the difference.`,
    },
    {
      header: 'A Note from Jainaba - Owner, Operator, Provider: ',
      imgUrl: '',
      content: `I have been a CNA for sixteen years, with experience that includes hospital and assisted living experience. At Evergreen Hospital, I worked for three years in the medical surgical unit, as a unit tech I then worked in their hospice center for a year.

    Subsequently, I worked for Sunrise Senior Living of Bellevue for fifteen years, starting as a care manager and medication technician. A few years later I became the Director of Assisted Living up until 2011, when I opened my own adult family home.
    
    My husband is a Registered Nurse with many years of experience and has also managed adult family homes in the past. 
    `,
    },
  ];
}
