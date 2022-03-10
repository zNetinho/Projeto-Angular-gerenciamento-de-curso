import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { starComponent } from './star/star.component';
import { courseService } from './course-list/course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    starComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [courseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
