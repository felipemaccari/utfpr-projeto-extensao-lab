import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";

const InstitutionsTableActions = () => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<BiDotsVerticalRounded size={20} />}
      variant="ghost"
    />

    <MenuList>
      <MenuItem>Editar</MenuItem>
      <MenuItem color="red">Remover</MenuItem>
    </MenuList>
  </Menu>
);

export default InstitutionsTableActions;
