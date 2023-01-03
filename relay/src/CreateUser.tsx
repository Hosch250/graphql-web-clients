import { useMutation } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'

function CreateUser() {
  const [command] = useMutation(graphql`
    mutation CreateUserMutation($user: CreateUserInput!) {
      createUser(input: $user) {
        user {
          id
          name
        }
      }
    }
  `)

  const createUser = () =>
    command({
      variables: {
        username: 'asdf',
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