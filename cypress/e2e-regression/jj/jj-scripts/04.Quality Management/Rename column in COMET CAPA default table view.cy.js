
import { GQTest } from '../../jj-pages/GQTest'
// Sprint 4
const GQ = new GQTest(); 
describe('Rename column in COMET CAPA default table view', () => {
    it('Rename column in COMET CAPA default table view', () => {
        // Login
        GQ.login()
        
        //openItemRepository
        GQ.NavBar.openItemRepository() 
        
        // Open the Quality Management landing page
        GQ.Planets.QualityManagement.openLandingPage() 

        // Open the CAPAs landing page within Quality Management
        GQ.Planets.QualityManagement.CAPAs.openLandingPage() 

        // Verify whether the column name is changed from Expected CAPA Implementation Date to Expected Impl Dt
        GQ.Planets.QualityManagement.CAPAs.changedcolumn()

        // Log out of the application
        GQ.logout(); 
    })
})