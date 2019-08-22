import React from 'react'
import Header from './header/Header'
import UserLists from './userList/UserLists'
import Footer from './footer/Footer'
import fetchUsers from '../shared/services/userService'
import GridStructure from './gridStructure/GridStructure'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isGrid: false,
      searchBar: ""
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
        <Header GridOrList={this.state.isGrid} onClickEvent={this.ChangingState} onReload={this.fetchAndSaveUsers} />

        <div className="sk-cube-grid" style={loadingCube}>
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>

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
        <Footer />
      </>
    )
  }
}

export default App;
