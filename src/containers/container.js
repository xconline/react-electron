import { connect } from 'react-redux';
// import {  component } from "../components/**component";
// import actions from '../actions/**Action';
import actions from '../actions/action';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => ({
    // **prop: state.**reducer.**State;
});

// 在组件中显示调用this.props.actions.action()
const mapDisPatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(actions, dispatch)
});

// export default connect(
//     mapStateToProps,
//     mapDisPatchToProps
// )(**Component);
