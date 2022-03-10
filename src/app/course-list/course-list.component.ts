import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { courseService } from "./course.service";

@Component ({
        selector: 'app-course-list',
        templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit { 
    
        courses: Course[] = [];

        constructor(private CourseService: courseService) { }
        ngOnInit(): void {
             this.courses = this.CourseService.retrieveAll();
      }
 }