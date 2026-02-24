import { ClinicalAffairs } from "./Clinical Affairs/ClinicalAffairs";
import { Core } from "./Core/Core";
import { Dashboards } from "./Dashboards/Dashboards";
import { PackagingAndLabelling } from "./Packaging and Labelling/PackagingAndLabelling";
import { PostMarket } from "./Post Market/PostMarket";
import { ProductDevelopment } from "./Product Development/ProductDevelopment";
import { Production } from "./Production/Production";

export class Planets{
    constructor(){
        this.Core = new Core()
        this.PackagingAndLabelling = new PackagingAndLabelling()
        this.ProductDevelopment =  new ProductDevelopment()
        this.Dashboards = new Dashboards()
        this.ClinicalAffairs = new ClinicalAffairs()
        this.Production = new Production()
        this.PostMarket = new PostMarket()
    }

}