import Layout from "./hoc/Layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import Quiz from "./containers/Quiz/Quiz";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import { connect } from "react-redux";
import Logout from "./Components/Logout/Logout";
import { Component } from "react";
import { autoLogin } from "./store/actions/auth";
import LessonList from "./containers/LessonList/LessonList";
import LessonCreator from "./containers/LessonCreator/LessonCreator";
import Lesson from "./containers/Lesson/Lesson";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/lesson/:id" component={Lesson} />
        <Route path="/lessonlist" component={LessonList} />
        <Route path="/" exact component={QuizList} />
        <Redirect to={"/"} />
      </Switch>
    );
    if (this.props.isAuthentificated) {
      routes = (
        <Switch>
          <Route path="/lesson-creator" component={LessonCreator} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/lesson/:id" component={Lesson} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={QuizList} />
          <Redirect to={"/"} />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthentificated: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
