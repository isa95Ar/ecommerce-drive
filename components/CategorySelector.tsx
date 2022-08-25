import React from "react";
import { Dropdown } from "@nextui-org/react";

type CategoryProps = {
    categories: Array<{key:string,name:string}>
}

const CategorySelector:React.FC<CategoryProps> = ({categories}) => {


    return <div className="selector-container">
    {categories.length > 1 && <Dropdown triggerType="listbox">
      <Dropdown.Button  className="selector">{categories[0].name}</Dropdown.Button>
      <Dropdown.Menu   aria-label="Dynamic Actions" items={categories}>
        {categories.map((item) => (
          <Dropdown.Item
            key={item.key}
            color={item.key === "delete" ? "error" : "default"}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>}
    </div>
}

export default CategorySelector;