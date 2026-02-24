import { GQTest } from '../../jj-pages/GQTest'
describe('20447 Allows Clinical Studies as a Related Object of Change Controls', () => {
     const GQ = new GQTest();
it('20447 Allows Clinical Studies as a Related Object of Change Controls',()=>
    
    {
        // Login
        GQ.login();
 
        // Open Quality Management
        GQ.Planets.QualityManagement.openLandingPage()
 
        // ChangeControls
        GQ.Planets.QualityManagement.ChangeControls.openLandingPage()
 
        // Comet
        GQ.Planets.QualityManagement.ChangeControls.viewComet()
 
        GQ.Planets.QualityManagement.ChangeControls.Comet.openRecordByIndex(0)
 
        GQ.Planets.QualityManagement.ChangeControls.Comet.relatedObjects()

        const nouns = [
            'Change Controls',
            'Impacted Documents',
            'Impacted Products',
            'Impacted Equipments',
            'Impacted Organizations',
            'Assessment Executions',
            'Implementations',
            'Escalations',
            'CAPAs',
            'Nonconformances',
            'Accounts',
            'Batches',
            'Clinical Studies'
        ]

        GQ.Planets.QualityManagement.ChangeControls.Comet.checkNouns(nouns)
 
    })
 
    

})