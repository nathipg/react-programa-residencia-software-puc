import { ReactNode } from 'react';
import { Container as BContainer } from 'react-bootstrap'

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <BContainer>
        <div className="pt-1">
          {children}
        </div>
      </BContainer>
      <Footer />
    </>
  )
}