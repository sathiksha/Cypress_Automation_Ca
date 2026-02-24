import { GQTest } from '../../../jnj-pages/GQTest.js'

describe('Default view of Transcripts', () => {
  const GQ = new GQTest()

  it('Default view of Transcripts  - Planet', () => {
    // Login 
    GQ.Login()

    //Open Documents Planet
    GQ.Planets.openPlanet('Training')

    //Open Planet
    GQ.Planets.Training.Transcripts.open()

    //Refresh
    GQ.Planets.Training.Transcripts.refresh()

    //Check Header Icons
    GQ.Planets.Training.Transcripts.checkHeaderIcons()

    //Check Column availability
    GQ.Planets.Training.Transcripts.checkColumns()
    
    //Logout
    GQ.Logout()
  })

  });