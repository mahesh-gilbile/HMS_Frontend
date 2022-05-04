import { NgModule } from "@angular/core";
import { searchStringPipe } from "./Pipe/search.pipe";

@NgModule({
    declarations: [ searchStringPipe ],
    exports: [ searchStringPipe ]
  })
  export class MyPipesModule {}