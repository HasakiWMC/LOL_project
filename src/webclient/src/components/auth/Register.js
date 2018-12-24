/**
 * 米修在线
 * 微信公众号: 米修在线
 * vw: 27732357
 * qq: 27732357
 * 群: 27732356
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

/** react-redux 的两个最主要功能
 *  connect: 用于从 UI 组件生成容器组件, 将两种组件连起来
 *  Provider: 可以让组件及子组件拿到state
 */
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import { PropTypes } from 'prop-types';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    // 调用action
    this.props.registerUser(newUser, this.props.history);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }


  render() {
    const { errors } = this.state;
    // const { user } = this.props.auth;

    return (
      <div className="register">
        {/* {user ? user.name : null} */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">注册</h1>
              <p className="lead text-center">创建新的账户</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    })}
                    // className="form-control form-control-lg"
                    placeholder="用户名"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {
                    errors.name && (<div className="invalid-feedback">
                      {errors.name}
                    </div>)
                  }
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    // className="form-control form-control-lg"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                    placeholder="邮箱地址"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {
                    errors.email && (<div className="invalid-feedback">
                      {errors.email}
                    </div>)
                  }
                  <small className="form-text text-muted">我们使用了gravatar全球公认头像, 如果需要有头像显示, 请使用在gravatar注册的邮箱</small>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    // className="form-control form-control-lg"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                    placeholder="密码"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {
                    errors.password && (<div className="invalid-feedback">
                      {errors.password}
                    </div>)
                  }
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    // className="form-control form-control-lg"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password2
                    })}
                    placeholder="确认密码"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {
                    errors.password2 && (<div className="invalid-feedback">
                      {errors.password2}
                    </div>)
                  }
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// 将状态映射为属性
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

// export default Register;
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
