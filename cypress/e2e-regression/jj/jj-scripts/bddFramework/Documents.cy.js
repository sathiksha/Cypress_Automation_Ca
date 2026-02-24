import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { GQTest } from '../../jj-pages/GQTest'
const GQ = new GQTest();

Given("Login into the application",()=>{
    GQ.login();
})

When("I click the Documents Planet select the Documents subtab",()=>{
    GQ.Planets.Records.openLandingPage()
})

When("I filter the records the filter functionality should be working",()=>{
    GQ.Planets.Documents.Documents.openLandingPage()
    cy.autoTestAll(
        GQ.Planets.Documents.Documents.gridID()
        , {})
})

Then("Logout of the Application",()=>{
    GQ.logout();
})

