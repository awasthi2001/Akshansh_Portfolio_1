import React, { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { DotLoader,HashLoader } from 'react-spinners'
import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    let [loading, setLoading] = useState(true);
    useEffect(()=>{
       let id =   setTimeout(()=>{
              console.log("loader called")
                  setLoading(false);
         },3000)
  
         const cleanup =  ()=>{
            console.log("CleanUp Called")
            clearTimeout(id);
         }
         return cleanup;
    },[])
    return (
        <div>
            {
          loading ?  <HashLoader color='#19473e' cssOverride={{
            display: 'block',
            margin : 'auto',
            marginTop : '340px',
          }}
          size='100'
          /> :
          <>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            {/* <Experience /> */}
            <Projects />
            {/* <Achievement /> */}
            {/* <Services />
            <Testimonials /> */}
            <Blog />
            <Contacts />
            <Footer />
            </>
        }
        </div>
    )
}

export default Main
