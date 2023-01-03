import { gql } from '@apollo/client'
import { useCreateUserMutation } from './types-and-hooks'

gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        id
        name
      }
    }
  }
`

function CreateUser() {
  const [command] = useCreateUserMutation()

  const createUser = () =>
    command({
      variables: {
        input: {
          name: 'asdf'
        }
      },
    })

  return (
    <div className="CreateUser">
      <button style={{ float: 'right' }} onClick={createUser}>
        Create User
      </button>
    </div>
  )
}

export default CreateUser