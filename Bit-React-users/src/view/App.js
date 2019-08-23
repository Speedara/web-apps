import React from 'react'
import Header from './header/Header'
import UserLists from './userList/UserLists'
import Footer from './footer/Footer'
import fetchUsers from '../shared/services/userService'
import GridStructure from './gridStructure/GridStructure'
import Animation from './loadingScreen/Animation'
import About from './aboutPage/About'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isGrid: false,
      searchBar: "",
      aboutPage: false
    }
  }

  componentDidMount() {
    this.fetchAndSaveUsers()
    this.setState({ isGrid: localStorage.isGrid })
  }

  fetchAndSaveUsers = () => (
    fetchUsers()
      .then(users => this.setState({ users }))
  )

  ChangingState = () => {
    localStorage.setItem("isGrid", !this.state.isGrid)
    this.setState((prevState) => {
      return {
        isGrid: !prevState.isGrid
      }
    })
  }

  SearchBar = (e) => {
    let q = e.target.value;
    this.setState({ searchBar: q })
  }

  AboutPage = () => {
    return (
      this.setState(prevState => {
        return {
          aboutPage: !prevState.aboutPage
        }
      })
    )
  }

  ErrorMsg = () => {
    return (
      <div className="error-msg">
        <i className="far fa-meh" ></i>
        <br />
        <p>We couldn't find any <br /> people matching your <br /> search</p>
      </div>
    )
  }

  render() {

    //loading screen 
    let loadingCube = {
      display: (this.state.users.length === 0) ? "block" : "none"
    }
    let hidingSearchBarWhileLoadingScreenIsActive = {
      display: (this.state.users.length === 0) ? "none" : "block"
    }

    return (
      <>
        <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} aboutChangingState={this.AboutPage} aboutState={this.state.aboutPage} />
        <Animation loadingCube={loadingCube} />
        {
          (this.state.aboutPage) ?
            <About /> :
            <div className="wrapper container" style={hidingSearchBarWhileLoadingScreenIsActive}>
              <div className="searchBar">
                <input type="search" placeholder="Search users" name="q" value={this.state.searchBar} onChange={this.SearchBar} />
              </div>
              {
                JSON.parse(localStorage.getItem("isGrid")) ?
                  <GridStructure users={this.state.users} query={this.state.searchBar} error={this.ErrorMsg} /> :
                  <UserLists users={this.state.users} query={this.state.searchBar} error={this.ErrorMsg} />
              }
            </div >
        }
        <Footer />
      </>
    )
  }
}

export default App;
