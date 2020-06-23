import React from 'react'
import './Protfolio/main.css'
import SideBar from './Protfolio/components/sidebar'
import Navbar from './Protfolio/components/navbar'
import { Route, useLocation, Switch } from 'react-router-dom'
import About from './Protfolio/components/about'
import Resume from './Protfolio/components/resume'
import Projects from './Protfolio/components/projects'
import { AnimatePresence } from 'framer-motion'

const App = () => {
    const location = useLocation();
    return (
        <>

            <div className="container custom_container mb-2">
                <div className="row custom_row">
                    {/* <div className="col-1"></div> */}
                    <div className="col-sm-12 col-lg-3 ">
                        <SideBar />
                    </div>
                    <div className="col-sm-12 col-lg-9 mainarea_custom">
                        <Navbar />
                        <AnimatePresence exitBeforeEnter>

                            <Switch location={location} key={location.key}>
                                <Route path='/resume'>
                                    <Resume />
                                </Route>
                                <Route path='/projects'>
                                    <Projects />
                                </Route>
                                <Route path='/' exact component={About} />
                            </Switch>
                        </AnimatePresence>
                    </div>
                </div>
            </div>


        </>
    )

}

export default App