import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";
import InstitutionsTableActionsDelete from "./InstitutionsTableActionsDelete";

import InstitutionsTableActionsEdit from "./InstitutionsTableActionsEdit";

const InstitutionsTableActions = ({ institution }) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<BiDotsVerticalRounded size={20} />}
      variant="ghost"
    />

    <MenuList>
      <InstitutionsTableActionsEdit institution={institution} />
      <InstitutionsTableActionsDelete institution={institution} />
    </MenuList>
  </Menu>
);

export default InstitutionsTableActions;
