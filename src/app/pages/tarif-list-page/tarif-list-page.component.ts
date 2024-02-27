import { Component } from '@angular/core';
import { TarifListComponent } from "../../features/tarifs/components/tarif-list/tarif-list.component";

@Component({
    selector: 'vrx-tarif-list-page',
    standalone: true,
    templateUrl: './tarif-list-page.component.html',
    styleUrl: './tarif-list-page.component.sass',
    imports: [TarifListComponent]
})
export class TarifListPageComponent {

}
