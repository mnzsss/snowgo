import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import useWindowDimensions from '~/hooks/useWindowDimensions';

import Route from './Route';

import Home from '~/pages/Home';
import Introduction from '~/pages/Introduction';
import Schedule from '~/pages/Schedule';
import Express from '~/pages/Express';
import Contact from '~/pages/Contact';
import About from '~/pages/About';

export default function Routes() {
  const [visitor, setVisitor] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const getVisitor = sessionStorage.getItem('@SnowGo:Visitor');

    if (!getVisitor || getVisitor === false) {
      sessionStorage.setItem('@SnowGo:Visitor', true);

      setVisitor(true);
    }
  }, []);

  function checkHome() {
    if (width < 575) {
      if (visitor === true) {
        return <Route path="/" exact component={Introduction} />;
      }
      return <Route path="/" exact component={Home} />;
    }
    return <Route path="/" exact component={Home} />;
  }

  return (
    <BrowserRouter>
      <Switch>
        {checkHome()}
        <Route path="/inicio" exact component={Home} />
        <Route path="/entrega-programada" component={Schedule} />
        <Route path="/entrega-express" component={Express} />
        <Route path="/sobre" component={About} />
        <Route path="/contato" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}
