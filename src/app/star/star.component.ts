import { Component, Input, OnChanges, } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class starComponent implements OnChanges{
    @Input()
    rating!: number;

    starwidth!: number;
    
    ngOnChanges(): void {
        
        this.starwidth = this.rating *74 / 5;
        console.log(this.starwidth)
    }
}