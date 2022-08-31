import React from "react";
import { Dropdown, Grid } from "@nextui-org/react";

type CategoryProps = {
  categories: Array<{ key: string; name: string }>; 
  category: { key: string; name: string };
  setCategory: (val:any) => void;
};

const CategorySelector: React.FC<CategoryProps> = ({
  categories,
  category,
  setCategory,
}) => {
  return (
    <div className="selector-container">
      {categories.length > 1 && (
        <Dropdown triggerType="listbox">
          <Dropdown.Button className="selector">
            {category.name}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Dynamic Actions"
            items={categories}
            selectedKeys={category.key}
            onAction={(val) => {setCategory(categories.find((option) => option.key === val))}}
          >
            {categories.map((item) => (
              <Dropdown.Item
                key={item.key}
                color={item.key === "delete" ? "error" : "default"}
              >
                {item.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
};
export default CategorySelector;
