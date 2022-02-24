import { DarkMode, Home, LightMode } from "@mui/icons-material"
import {
  Avatar, Box, Divider,
  Drawer, List,
  ListItemButton, ListItemIcon, ListItemText,
  useMediaQuery,
  useTheme
} from "@mui/material"
import { ReactElement } from "react"
import router from 'next/router'

import { useDrawerContext } from "../../contexts/drawer-context"
import { useAppThemeContext } from "../../contexts/theme-context"

type ListItemLinkProps = {
  to: string
  label: string
  icon: ReactElement<any, any>
  onClick?(): void
}

const ListItemLink: React.FC<ListItemLinkProps> = ({ to, icon, label, onClick }) => {

  const handleCLick = () => {
    router.push(to)
    onClick?.()
  }

  return (
    <ListItemButton onClick={handleCLick}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

export const Sidebar: React.FC = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()
  const { toggleTheme, themeName } = useAppThemeContext()

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems="center" justifyContent="center">
            <Avatar
              src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12)
              }}
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemLink
                icon={<Home />}
                label="Página inicial"
                to="/home"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
              <ListItemLink
                icon={<Home />}
                label="Página secundaria"
                to="/page-test"
                onClick={smDown ? toggleDrawerOpen : undefined}
              />
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  {
                    themeName === 'light'
                      ? <DarkMode />
                      : <LightMode />
                  }
                </ListItemIcon>
                {<ListItemText primary='Alternar tema' />}
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
