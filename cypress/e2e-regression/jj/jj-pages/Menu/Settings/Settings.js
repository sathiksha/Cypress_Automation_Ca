import { Classes } from "./Classes";
import { Colors } from "./Colors";
import { Components } from "./Components";
import { Datasources } from "./Datasources";
import { Icons } from "./Icons";
import { Screens } from "./Screens";
import { Scripts } from "./Scripts";
import { Types } from "./Types";

export class Settings{
    constructor(){
        this.Classes = new Classes()
        this.Colors = new Colors()
        this.Components = new Components()
        this.Datasources = new Datasources()
        this.Icons = new Icons()
        this.Scripts = new Scripts()
        this.Screens = new Screens()
        this.Types = new Types()
    }
}