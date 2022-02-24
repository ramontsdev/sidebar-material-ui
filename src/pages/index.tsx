import { Typography } from '@mui/material'

import { BaseLayout } from '../components/base-layout/base-layout'
import { Sidebar } from '../components/sidebar'

export default function Home() {
  return (
    <Sidebar>
      <BaseLayout title='Layout base não é obrigatório.'>
        <Typography>
          Mas você precisa de um botão para abrir e fechar o drawer do menu lateral quando necessário.
        </Typography>
        <Typography marginTop={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum laborum unde amet cum omnis libero tenetur distinctio magni voluptas, id et hic neque. Omnis cupiditate excepturi non porro inventore.
        </Typography>
      </BaseLayout>
    </Sidebar>
  )
}
