import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompetitionsEvents from './components/CompetitionsEvents'
import UserJourney from './components/UserJourney'
import WhatIsBotLeague from './components/WhatIsBotLeague'
import Categories from './components/Categories'
import CompetitionDisciplines from './components/CompetitionDisciplines'
import LeagueAdvantage from './components/LeagueAdvantage'
import JoinEcosystem from './components/JoinEcosystem'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-arena-dark">
      <Navbar />
      <Hero />
      <CompetitionsEvents />
      <UserJourney />
      <WhatIsBotLeague />
      <Categories />
      <CompetitionDisciplines />
      <LeagueAdvantage />
      <JoinEcosystem />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App