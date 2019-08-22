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
        <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} about={this.AboutPage} />
        <Animation loadingCube={loadingCube} />
        {
          (this.state.aboutPage) ?
            <About /> :
            <div className="wrapper container" style={hidingSearchBarWhileLoadingScreenIsActive}>
              <div className="searchBar">
                <a href="#">
                  <i className="fas fa-search"></i>
                </a>
                <input type="search" placeholder="Search users" name="q" value={this.state.searchBar} onChange={this.SearchBar} />
              </div>
              {
                JSON.parse(localStorage.getItem("isGrid")) ?
                  <GridStructure users={this.state.users} query={this.state.searchBar} /> :
                  <UserLists users={this.state.users} query={this.state.searchBar} />
              }
            </div >
        }
        <Footer />
      </>
    )
  }
}

export default App;
