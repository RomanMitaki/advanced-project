import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useState } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'

const App = () => {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  return (
        <div className={classNames('app', {}, [theme])}>
              <Suspense fallback={''}>
                 <Navbar/>
                  <button onClick={() => { setIsOpen(true) }}>TOGGLE</button>
                  <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis cupiditate ducimus eaque ipsa ipsum maxime necessitatibus, nisi non nulla, numquam porro quis recusandae sint sit suscipit voluptatem. Ab cupiditate enim eveniet hic nihil nulla. Deleniti dicta dolor fugit illum iusto nobis ratione reiciendis saepe voluptas voluptates. Omnis, repellendus, saepe?
                  </Modal>
                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                     </div>
            </Suspense>
           </div>
  )
}

export default App
