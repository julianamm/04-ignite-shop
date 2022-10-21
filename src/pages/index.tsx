import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 8,
  border: 0,
  padding: '0.25rem 0.5rem',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'Brightness(0.8)',
  }
})

export default function Home() {
  return (
      <Button>hello world
        <span>test</span>
      </Button>
  )
}
