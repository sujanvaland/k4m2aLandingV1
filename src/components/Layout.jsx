import Header from './Header'
import Footer from './Footer'



export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main cc-home">
        {children}
      </main>
      <Footer />
    </div>
  )
}

