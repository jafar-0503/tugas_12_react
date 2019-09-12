import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Checkbox, Button, Grid, Header,
        Image, Input, Message, Segment } from "semantic-ui-react";

class App extends Component {
  render() {
    return(

      <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header textAlign='center' as='h2' color='teal'>
            <Image bordered src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png'
               />Member Login
          </Header>

          <Segment stacked>
          <Form size='large'>
             <Form.Field>
               <Input icon='user' type='text' iconPosition='left' placeholder='Email Address' />
             </Form.Field>

             <Form.Field>
               <Input icon='lock' type='password' iconPosition='left' placeholder='Password' />
             </Form.Field>

             <Form.Field style={{textAlign:'center'}}>
               <Checkbox label='I agree to the Terms and Conditions' />
             </Form.Field>

             <Button fluid color='teal' type='submit'>Login</Button>
             </Form>
             </Segment>

             <Message>
              Tidak Punya Akun ? Silahkan <a href='#'>Register</a>
             </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default App;
