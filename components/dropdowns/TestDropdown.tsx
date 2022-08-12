import React from 'react';
import { Dropdown } from "@nextui-org/react";
export default function TestDropdown() {
    return (
        <div>
             <Dropdown>
      <Dropdown.Button flat>Trigger</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="primer">Primer Elemento</Dropdown.Item>
        <Dropdown.Item key="segundo">Segundo Elemento</Dropdown.Item>
        <Dropdown.Item key="tercer">Tercer elementoe</Dropdown.Item>
        <Dropdown.Item key="delete" color="error" withDivider>Delete file</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
        </div> 
        );
}
