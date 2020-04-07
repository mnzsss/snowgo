import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import Bucket from '../Bucket';
import Button from '~/styles/components/Button';

import Home from './Icons/Home';
import Schedule from './Icons/Schedule';
import Express from './Icons/Express';
import Contact from './Icons/Contact';

import { MenuContainer, Item, Modal } from './styles';

export default function Menu() {
  const [modal, setModal] = useState(false);
  const { width, height } = useWindowDimensions();

  function handleToggleModal() {
    setModal(!modal);
  }

  return (
    <>
      {modal && (
        <Modal height={height} width={width}>
          <div className="close">
            <MdClose onClick={handleToggleModal} color="#fff" size="1.5em" />
          </div>

          <section>
            <h1>Qual tipo de entrega?</h1>
            <Button color="orange" href="tel:2508-3530">
              <FiPhoneCall color="#fff" size="1.7em" />
              Ligue para nós
            </Button>
            <Button
              color="orange"
              href="https://api.whatsapp.com/send?phone=5511945592940"
            >
              <FaWhatsapp color="#fff" size="1.7em" />
              Whatsapp
            </Button>

            <div className="label">
              <h1>FALTA POUCO</h1>
            </div>
          </section>
        </Modal>
      )}

      <MenuContainer width={width}>
        <Item activeClassName="active" exact to="/">
          <Home />
          Inicio
        </Item>
        <Item activeClassName="active" to="/entrega-programada">
          <Schedule />
          Programada
        </Item>

        <Bucket
          onClick={handleToggleModal}
          timed
          style={{ margin: '-0.6em 0 0 0' }}
          size="small"
          align="top"
        >
          Peça Agora
        </Bucket>

        <Item activeClassName="active" to="/entrega-express">
          <Express />
          Express
        </Item>
        <Item activeClassName="active" to="/contato">
          <Contact />
          Contato
        </Item>
      </MenuContainer>
    </>
  );
}
