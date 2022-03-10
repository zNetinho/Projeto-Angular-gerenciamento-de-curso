import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./starComponent.css']
})
export class starComponent implements OnChanges{
    @Input()
    rating: number =0;

    starwidth!: number;
    
    ngOnChanges(): void {
        this.starwidth = this.rating * 94 / 5;
        
    }
}