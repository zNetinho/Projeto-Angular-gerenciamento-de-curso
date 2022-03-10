import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
        selector: 'app-course-list',
        templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit { 
    
        courses: Course[] = [];

    
        ngOnInit(): void {
            this.courses = [
                {
                    id: 1,
                    name: 'Angular forms',
                    imageUrl: '/assets/images/forms.png',
                    price: 99.99,
                    duration: 2,
                    code: 8796,
                    rating: 3,
                    releaseDate: 'november, 2 of 1987'

                },
                {              
                    id: 2,
                    name: 'angular HTTP',
                    imageUrl: '/assets/images/http.png',
                    price: 91.99,
                    duration: 140,
                    code: 8769,
                    rating: 2,
                    releaseDate: 'november, 11 of 1997'
 
                }
            ]
            
        }
}
