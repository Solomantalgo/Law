import { useState } from 'react';
import Header from './Header';
import Attorneys from './Attorneys';
import ConsultationCTA from './ConsultationCTA';
import Footer from './Footer';

export default function AttorneyDirectoryPage({ onSelectAttorney }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="attorney-directory-page">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Attorneys onSelectAttorney={onSelectAttorney} />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}
