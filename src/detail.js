import {inject} from 'aurelia-framework';
import {BackendService} from './services/backend-service';

@inject(BackendService)
export class Detail {
    title = '';
    description = '';

    constructor (backendService) {
        this.backendService = backendService;
    }

	activate () {
		this.backendService.getCard("57f98352f441de00d81e04aa")
			.then((card) => {
				this.title = card.title;
				this.description = card.description;
			});
	}

    // activate () {
    //     this.backendService.getData()
    //         .then((lists) => {
    //             this.lists = lists;
    //         });
    // }
}