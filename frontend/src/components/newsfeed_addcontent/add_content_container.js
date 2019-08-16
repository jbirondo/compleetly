import {connect} from 'react-redux';
import AddContent from './add_content';


const mstp = state => {
   return {
      currentUser: state.session.user
   }
}

// const mdtp = dispatch => {
   
// }

export default connect(mstp, null)(AddContent);