import React, { useRef } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export const HomePage = () => {
  // const [open, setOpen] = useState<boolean>(false)

  const menu = useRef(null);

  const toast = useRef(null);

  const items = [
    {
      label: 'Options',
      items: [
        {
          label: 'Profile',
        },
        {
          label: 'Log out',
        },
      ],
    },
  ];

  const leftContents = (
    <React.Fragment>
      <h3>Logo</h3>
    </React.Fragment>
  );

  const rightContents = (
    <React.Fragment>
      <Menu model={items} popup ref={menu} id="popup_menu" />
      <Button
        label="Show"
        icon="pi pi-bars"
        // onClick={() => setOpen(true)}
        aria-controls="popup_menu"
        aria-haspopup
      />
    </React.Fragment>
  );

  return (
    <>
      <Toast ref={toast}></Toast>
      <div>
        <Toolbar left={leftContents} right={rightContents} />
      </div>
      <h1> Hello, this is HomePage! </h1>
    </>
  );
};
