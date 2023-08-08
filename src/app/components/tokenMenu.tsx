import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from "@chakra-ui/react"

export default function tokenMenu(){
    return(
        <Menu>
            <MenuButton as={Button} maxH={"20px"} maxW={"110px"} fontSize={"11"} textAlign={"center"}>
                Token
            </MenuButton>
            <MenuList>
                <MenuItem>
                    <span>USD</span>
                </MenuItem>
                <MenuItem>
                    <span>XRPL</span>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}  tokenMenu.displayName = 'tokenMenu'