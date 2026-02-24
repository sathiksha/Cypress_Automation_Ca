import { GQTest } from '../../sn-pages/GQTest';
describe('10. Settings', () => {
    Cypress.config('defaultCommandTimeout', 120000);
    it('Colors', () => {
    const GQ = new GQTest();

    // Login
    GQ.login()

    // Open Settings
    GQ.Menu.openSettings()

    // Settings - Open Colors
    GQ.Menu.Settings.Colors.openLandingPage()
    
    GQ.Menu.Settings.Colors.addColor('Red Tint 01','#c30010')
    GQ.Menu.Settings.Colors.addColor('Red Tint 02','#d1001f')
    GQ.Menu.Settings.Colors.addColor('Red Tint 03','#de0a26')
    GQ.Menu.Settings.Colors.addColor('Red Tint 04','#f01e2c')
    GQ.Menu.Settings.Colors.addColor('Red Tint 05','#ff2c2c')
    GQ.Menu.Settings.Colors.addColor('Red Tint 06','#f94449')
    GQ.Menu.Settings.Colors.addColor('Red Tint 07','#ee6b6e')
    GQ.Menu.Settings.Colors.addColor('Red Tint 08','#f69697')
    GQ.Menu.Settings.Colors.addColor('Red Tint 09','#ffcbd1')

    GQ.Menu.Settings.Colors.filterForText('Red Tint')

    GQ.Menu.Settings.Colors.deleteColor('Red Tint 01')
    GQ.Menu.Settings.Colors.deleteColor('Red Tint 02')
    GQ.Menu.Settings.Colors.deleteColor('Red Tint 03')
    GQ.Menu.Settings.Colors.deleteColor('Red Tint 04')
    GQ.Menu.Settings.Colors.deleteColor('Red Tint 05')
    GQ.Menu.Settings.Colors.deleteColor('Red Tint 06')
    GQ.Menu.Settings.Colors.deleteColor('Red Tint 07')
    GQ.Menu.Settings.Colors.deleteColor('Red Tint 08')
    GQ.Menu.Settings.Colors.deleteColor('Red Tint 09')

    // Logout
    GQ.logout()

    })
})
