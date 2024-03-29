import { Avatar, Box, Drawer, useTheme } from "@mui/material"

interface IMenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}