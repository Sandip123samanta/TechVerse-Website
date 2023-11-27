import { useRouter } from 'next/router'
import { motion,AnimatePresence } from 'framer-motion'


const App = ({ Components, pageProps }) => {
    const router = useRouter()

  return (
    <AnimatePresence mode='wait'>
        <motion.div key={router.pathname}>
            <Components {...pageProps}/>
        </motion.div>
    </AnimatePresence>
  )
}

export default App;